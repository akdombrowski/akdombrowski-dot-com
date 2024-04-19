import NextAuth from "next-auth";

export const AuthConfig = NextAuth({
  providers: [
    {
      id: "calendly", // signIn("my-provider") and will be part of the callback URL
      name: "Calendly", // optional, used on the default login page as the button text.
      type: "oidc", // or "oauth" for OAuth 2 providers
      issuer: "https://auth.calendly.com/oauth", // to infer the .well-known/openid-configuration URL
      // clientId: process.env.CALENDLY_CLIENT_ID, // from the provider's dashboard
      // clientSecret: process.env.CALENDLY_CLIENT_SECRET, // from the provider's dashboard
      authorization: "https://auth.calendly.com/oauth/authorize",
      token: "https://auth.calendly.com/oauth/token"
    },
  ],
  // secret: process.env.AUTH_SECRET,
});

export const { handlers, signIn, signOut, auth } = AuthConfig;

export default AuthConfig;
