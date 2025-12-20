import { NextResponse, type NextRequest } from "next/server";

import { google } from "googleapis";

const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID;
const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET;
const REDIRECT_URI = process.env.VERCEL_URL + "/api/youtube-data/callback";

// const auth = new google.auth.OAuth2(AUTH_GOOGLE_ID ?? "", AUTH_GOOGLE_SECRET ?? "", REDIRECT_URI);
const auth = new google.auth.OAuth2();
const utube = google.youtube("v3");
export const GET = async (req: NextRequest) => {
  //  const auth = await authenticate({
  //    keyfilePath: path.join(__dirname, "../oauth2.keys.json"),
  //    scopes: ["https://www.googleapis.com/auth/youtube"],
  //  });
  //  google.options({ auth });
  try {
    const res = await utube.search.list({
      part: ["id", "snippet"],
      q: "Node.js on Google Cloud",
    });
    console.log(res.data);
    return new NextResponse(JSON.stringify(res.data));
  } catch (error) {
    console.log(error);

    const authUrl = auth.generateAuthUrl({
      access_type: "offline",
      scope: [
        "https://www.googleapis.com/auth/youtube.readonly",
        // "https://www.googleapis.com/auth/yt-analytics.readonly/",
        // "https://www.googleapis.com/auth/youtube.force-ssl",
      ],
    });

    console.log("authUrl:", authUrl);

    return new NextResponse(JSON.stringify({ error: error, authURL: authUrl }));
  }
};
