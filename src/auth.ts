import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    {
      id: "calendly", // signIn("my-provider") and will be part of the callback URL
      name: "Calendly", // optional, used on the default login page as the button text.
      type: "oidc", // or "oauth" for OAuth 2 providers
      issuer: "https://auth.calendly.com", // to infer the .well-known/openid-configuration URL
      clientId: process.env.CALENDLY_CLIENT_ID, // from the provider's dashboard
      clientSecret: process.env.CALENDLY_CLIENT_SECRET, // from the provider's dashboard
    },
  ],
});
