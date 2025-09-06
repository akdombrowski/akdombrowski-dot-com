// app/api/chat/route.ts  (Next.js route handler)
import { NextResponse } from "next/server";
import ollama from "ollama"; // npm i ollama

export async function POST(req: Request) {
  const { messages } = await req.json(); // [{role:'user', content:'...'}]

  // forward to Ollama (assumes Ollama reachable at default host)
  // you can use `ollama.chat()` or `ollama.generate()` per model
  const resp = await ollama.chat({
    model: "llama3.2-vision", // or your chosen model
    messages,
  });

  // Return response content (simplified). For streaming, use ReadableStream and stream tokens.
  return NextResponse.json({ reply: resp.message.content });
}
