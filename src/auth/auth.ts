import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider, {
  type CredentialInput,
} from "next-auth/providers/credentials";

import { SiweMessage } from "siwe";

import type {
  DefaultSession,
  Session,
  User,
  Account,
  Profile,
  NextAuthConfig,
} from "next-auth";
import type { JWT } from "next-auth/jwt";

const DEBUG_CALLBACKS = false;
const printDebugSectTitle = ({
  title,
  debugVars,
}: {
  title: string;
  debugVars: { [key: string]: string | null | unknown };
}) => {
  const titleCaps = title.toUpperCase();
  console.log();
  console.log("***************");
  console.log("===============");
  console.log(`${titleCaps} CALLBACK`);
  console.log("===============");
  console.log();
  if (debugVars)
    for (const [name, value] of Object.entries(debugVars)) {
      if (value) {
        console.log("***************");
        console.log(name);
        console.log(value);
        console.log("***************");
        console.log();
      }
    }
  console.log();
};
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  export interface Session extends DefaultSession {
    accessToken: string | undefined | JWT;
    accessTokenUpdatedAt: number | undefined | string;
    refreshToken: string | undefined | JWT;
    refreshTokenUpdatedAt: number | undefined | string;
    user?: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  interface Profile {
    accessToken: string | undefined | JWT;
    accessTokenUpdatedAt: number | string;
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  interface CredentialsInput {
    message?: {
      label: string;
      type: string;
      placeholder: string;
    };
    signature?: {
      label: string;
      type: string;
      placeholder: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string | undefined | JWT;
    refreshToken: string | undefined | JWT;
    accessTokenUpdatedAt: number | string;
    refreshTokenUpdatedAt: number | string;
    displayName: string;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig: NextAuthConfig = {
  providers: [
    // GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "siwe",
      credentials: {
        message: {
          label: "Message",
          type: "text",
          placeholder: "0x0",
        },
        signature: {
          label: "Signature",
          type: "text",
          placeholder: "0x0",
        },
      },
      async authorize(credentials) {
        try {
          const siwe = new SiweMessage(credentials?.message || "");
          const authUrl = new URL(process.env.VERCEL_URL!);
          const result = await siwe.verify({
            signature: (credentials?.signature as string) || "",
            domain: authUrl.host,
          });

          if (result.success) {
            return {
              id: siwe.address,
            };
          }
          return null;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  session: {
    maxAge: 3000,
    updateAge: 3000,
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    signIn: async ({
      user,
      account,
      profile,
      email,
      credentials,
    }: {
      user: User;
      account: Account | null;
      profile?: Profile | undefined;
      email?: { verificationRequest?: boolean | undefined } | undefined;
      credentials?: Record<string, CredentialInput> | undefined;
    }) => {
      if (DEBUG_CALLBACKS) {
        printDebugSectTitle({
          title: "signin callback",
          debugVars: { account, credentials, user, profile, email },
        });
      }

      return true;
    },
    // jwt: async (props) => {
    //   const account = props.account;
    //   const token = props.token;
    jwt: async ({
      token,
      account,
      user,
      profile,
    }: {
      token: JWT;
      account: Account | null;
      user: User | null;
      profile?: Profile | undefined;
    }) => {
      if (DEBUG_CALLBACKS) {
        printDebugSectTitle({
          title: "jwt callback",
          debugVars: { account, token, user, profile },
        });
      }

      /**
       * User, Profile, and Account appear only when signing in, not when
       * 'refreshing the session'
       */
      if (user) {
        // right now user has id, name, email (*can't trust*), image
      }

      if (profile?.display_name) {
        token.displayName = profile.display_name as string;
      }

      if (account) {
        token.accessToken = account.access_token;
        token.accessTokenUpdatedAt = Date();

        token.refreshToken = account.refresh_token;
        token.refreshTokenUpdatedAt = Date();
      }

      return token;
    },
    // session: async (props) => {
    //   const session = props.session;
    //   const token = props.token;
    session: async ({
      session,
      user, // only returned if using database strategy (not JWT)
      token, // only returned if using JWT strategy (not database)
    }: {
      session: Session;
      user: User; // only returned if using database strategy (not JWT)
      token: JWT; // only returned if using JWT strategy (not database)
    }): Promise<Session> => {
      const sesh = {
        ...session,
        accessToken: token?.accessToken,
        accessTokenUpdatedAt: token?.accessToken ?? Date(),
        refreshToken: token?.refreshToken,
        refreshTokenUpdatedAt: token?.refreshToken ?? Date(),
      } as Session;
      //

      if (DEBUG_CALLBACKS) {
        printDebugSectTitle({
          title: "session callback",
          debugVars: { session, token, user },
        });
      }

      return sesh;
    },
  },
};

// next-auth (authjs) v5
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(authConfig);
