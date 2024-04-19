import type { Account } from "next-auth";
import type { ProviderType } from "next-auth/providers";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

interface CalendlyProfileResource {
  avatar_url?: string;
  created_at?: string | Date;
  current_organization?: string;
  email?: string;
  name?: string;
  resource_type?: string | "User";
  scheduling_url?: string;
  slug?: string;
  timezone?: string;
  updated_at?: string | Date;
  uri?: string;
}

declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    sub: string;
    email?: string | null;
  }
  /**
   * The shape of the account object returned in the OAuth providers' `account` callback,
   * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
   */
  interface Account {
    access_token?: string;
    token_type?: string; // | "bearer";
    expires_in: number;
    refresh_token?: string;
    scope?: string; // "default";
    created_at: number;
    owner?: string; // 'https://api.calendly.com/users/{userID}',
    organization?: string; // 'https://api.calendly.com/organizations/{orgID}',
    expires_at?: number | undefined; // 1713573885,
    provider: string | "calendly";
    type: ProviderType; // | "oauth";
    providerAccountId: string;
  }

  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session extends JWT, Profile {}

  interface Profile {
    calendlyAccount?: CalendlyProfileResource;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT extends Account {
    /** OpenID ID Token */
    idToken?: string;
    sub?: string | null;
  }
}

export const AuthConfig = NextAuth({
  providers: [
    {
      id: "calendly", // signIn("my-provider") and will be part of the callback URL
      name: "Calendly", // optional, used on the default login page as the button text.
      type: "oauth", // or "oauth" for OAuth 2 providers
      issuer: "https://auth.calendly.com/oauth", // to infer the .well-known/openid-configuration URL
      // clientId: process.env.CALENDLY_CLIENT_ID, // from the provider's dashboard
      // clientSecret: process.env.CALENDLY_CLIENT_SECRET, // from the provider's dashboard
      authorization: {
        url: "https://auth.calendly.com/oauth/authorize",
        params: { scope: "" },
      },
      token: "https://auth.calendly.com/oauth/token",
      userinfo: "https://api.calendly.com/users/me",
    },
  ],
  callbacks: {
    async signIn({ account, profile }) {
      return true;
    },
    async jwt({ token, user, account, profile }) {
      let jwt = { ...token };
      if (user) {
        console.log();
        console.log("jwt()");
        console.log("user:", user);
        token.id = user.id;
      }

      if (account) {
        console.log("account:", account);
        jwt = { ...jwt, ...account };
      }

      if (profile) {
        console.log();
        console.log();
        console.log("profile:", profile);
        const renamedResourcePropProfile = {
          calendlyAccount: profile.resource,
        };
        console.log();
        console.log("renamedResourcePropProfile:", renamedResourcePropProfile);
        console.log();
        jwt = { ...jwt, ...renamedResourcePropProfile };
        console.log();
        console.log("returning this as token:");
        console.log("token:", jwt);
        console.log();
      }

      return jwt;
    },
    async session({ session, token }) {
      console.log();
      console.log("session()");
      console.log("token:", token);
      console.log("session:", session);
      console.log();
      console.log();
      console.log();

      return { ...session, ...token };
    },
  },
});

export const { handlers, signIn, signOut, auth } = AuthConfig;

export default AuthConfig;
