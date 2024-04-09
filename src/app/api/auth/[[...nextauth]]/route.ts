// v5
// export { GET, POST } from "@/auth";

import type { NextApiRequest, NextApiResponse } from "next";
// import NextAuth from "next-auth";
import { authConfig } from "@/auth";
import UseAccount from "@/wagmi/UseAccount";
import CredentialsProvider from "next-auth/providers/credentials";
import { SiweMessage } from "siwe";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  /**
   * GET /api/auth/signin
   * POST /api/auth/signin/:provider
   * GET/POST /api/auth/callback/:provider
   * GET /api/auth/signout
   * POST /api/auth/signout
   * GET /api/auth/session
   * GET /api/auth/csrf
   * GET /api/auth/providers
   */
  const authQuery = req?.query?.nextauth;

  if (authQuery) {
    const isConnected = UseAccount();
    if (authQuery.includes("callback/siwe") && req.method === "POST") {
      console.log(
        "Handling callback request from my Identity Provider",
        req.body,
      );
    } else if (authQuery.includes("signin/siwe") && req.method === "POST") {
      // TODO: Handle signin
      if (isConnected) {
      }
    } else if (authQuery.includes("signout/siwe") && req.method === "POST") {
      // TODO: Handle signout
    } else if (authQuery.includes("session") && req.method === "POST") {
      // TODO: Handle session request
    }
  }

  return await authConfig(
    // GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
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
  );
}
