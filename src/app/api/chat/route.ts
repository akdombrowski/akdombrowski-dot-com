import { NextResponse } from "next/server";
import ollama from "ollama";

export async function GET() {
  const models = await ollama.list();
  return NextResponse.json({ models });
}

export async function POST(req: Request) {
  const { messages, model } = await req.json(); // [{role:'user', content:'...'}]

  const resp = await ollama.chat({
    model: model || "gemma3", // or your chosen model
    messages,
  });

  // Return response content (simplified). For streaming, use ReadableStream and stream tokens.
  return NextResponse.json({ reply: resp.message.content });
}
