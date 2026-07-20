import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize the Google Generative AI client
const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function POST(req: Request) {
  try {
    if (!genAI) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    // Use a lightweight fast model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Construct the prompt context.
    const systemPrompt = `You are "Michael AI", the digital twin and assistant for Michael Olowoselu.
Michael is an AI Automation Engineer, Cybersecurity Engineer, and the Founder of SentraLog.
His skills include Cybersecurity, AI Automation, Python, Cloud, and Threat Detection.
SentraLog is an AI-powered next-generation SIEM platform for real-time threat detection.
VELA is his AI system designed to connect and automate digital life.
You must be professional, extremely knowledgeable about cybersecurity (like ransomware, malware, SOC operations), but keep your answers relatively concise. 
If someone asks something completely unrelated to technology, cybersecurity, or Michael, politely decline to answer, saying your knowledge is restricted to Michael's portfolio and cyber domains.`;

    // Format messages for Gemini
    const formattedHistory = messages.slice(0, -1).map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1].content;

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am Michael AI, ready to assist visitors." }],
        },
        ...formattedHistory,
      ],
    });

    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ message: text });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
