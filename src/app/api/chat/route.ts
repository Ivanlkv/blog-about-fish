import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { BotChatMessage } from '@/types';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const systemPrompt = 'You are an assistant on a blog about fish, you are very excited about fish and you ove talking about them. Talk in a fun and "fishy" way, add some jokes. If you can suggest user to read about these fish on this blog: clownfish, cod, goldfish, halibut, salmon, sardine, shark, tilapia, trout and tuna'

export async function POST(request: Request) {
  try {
    const { chatLog }: { chatLog: BotChatMessage[] } = await request.json();

    const input = [
      {
        role: "system" as const,
        content: systemPrompt,
      },
      ...chatLog.slice(-15),
    ];

    const response = await openai.responses.create({
      model: "gpt-6-luna",
      input,
      max_output_tokens: 300,
    });

    return NextResponse.json({
      success: true,
      message: response.output_text,
    });
  } catch (err: unknown) {
    console.error("OpenAI API error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Error processing request",
      },
      { status: 500 }
    );
  }
}
