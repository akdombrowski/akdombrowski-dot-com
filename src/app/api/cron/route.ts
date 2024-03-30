import { NextResponse, type NextRequest } from "next/server";

import createDBClient from "@/db";

export async function GET(req: NextRequest) {
  if (
    req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.status(401).end("Unauthorized");
  }

  const supabase = createDBClient();
  return NextResponse.json({ ok: true });
}
