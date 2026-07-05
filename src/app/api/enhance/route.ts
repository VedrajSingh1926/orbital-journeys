import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
  try {
    const { destinations, mood, companions } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ success: false, error: "No API key" }, { status: 500 });
    }

    if (!destinations || destinations.length === 0) {
      return NextResponse.json({ success: false, error: "No destinations provided" }, { status: 400 });
    }

    const prompt = `You are a luxury travel AI. Enhance the following travel destinations based on the user's mood (${mood}) and companions (${companions}).
For each destination, provide a completely new, beautifully written 'personalizedReason' (1-2 sentences explaining why this fits their current mood and companions), an 'emotionalDescription' (1-2 sentences), and a 'luxuryStoryText' (1-2 sentences of emotional storytelling about the destination).
Return ONLY valid JSON matching this schema exactly:
[
  {
    "id": "destination_id",
    "personalizedReason": "string",
    "emotionalDescription": "string",
    "luxuryStoryText": "string"
  }
]

Destinations data:
${JSON.stringify(destinations.map((d: any) => ({ id: d.id, name: d.name })))}
`;

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: { responseMimeType: "application/json" }
    });

    const text = response.text;
    
    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    const enhanced = JSON.parse(text);
    return NextResponse.json({ success: true, enhanced });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ success: false, error: "Enhancement failed" }, { status: 500 });
  }
}
