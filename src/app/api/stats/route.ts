import "server-only";
import { NextResponse, type NextRequest } from "next/server";

import { google } from "googleapis";

import path from "node:path";

const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID;
const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET;
// const REDIRECT_URI = "localhost:3000/api/stats";
// const REDIRECT_URI = process.env.VERCEL_URL + "/api/auth/callback/google";
const REDIRECT_URI = encodeURI("http://127.0.0.1:3000/api/auth/callback/google");
// const REDIRECT_URI = encodeURI(process.env.VERCEL_URL + "/api/stats/");

const auth = new google.auth.OAuth2(AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET, REDIRECT_URI);

export const GET = async (req: NextRequest) => {
  try {
    google.options({ auth: auth });
    const utube = google.youtube("v3");

    const res = await utube.search.list({
      part: ["id", "snippet"],
      q: "pkce",
    });

    const body = await res.json();

    console.log(body);

    // return new NextResponse(JSON.stringify(res.data));
    return new NextResponse(body);
  } catch (error) {
    console.error(error);
    console.error();

    const authUrl = auth.generateAuthUrl({
      access_type: "offline",
      scope: [
        encodeURI("https://www.googleapis.com/auth/youtube"),
        // "https://www.googleapis.com/auth/yt-analytics.readonly/",
        // "https://www.googleapis.com/auth/youtube.force-ssl",
      ],
    });

    console.log();
    console.log(authUrl);
    console.log();
    console.log(encodeURIComponent(authUrl));
    console.log();

    console.log("authUrl:", encodeURI(authUrl));
    console.log();
    const fd = new FormData();
    fd.append("error", JSON.stringify(error));
    fd.append("authURL", authUrl);
    fd.append("redirectURI", REDIRECT_URI);

    return new NextResponse(fd);
    // return new NextResponse(JSON.stringify({ error: error, authURL: authUrl }));
  }
};

export const POST = async (req: NextRequest) => {
  console.log();
  console.log(req.body);
  console.log();

  return new NextResponse("POST");
};
