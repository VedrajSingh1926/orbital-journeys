import { NextResponse } from "next/server";

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
For each destination, provide a completely new, beautifully written 'personalizedReason' (1-2 sentences explaining why this fits their current mood and companions) and a 'whyVisit' (1-2 sentences of emotional storytelling about the destination).
Return ONLY valid JSON matching this schema exactly:
[
  {
    "id": "destination_id",
    "personalizedReason": "string",
    "whyVisit": "string"
  }
]

Destinations data:
${JSON.stringify(destinations.map((d: any) => ({ id: d.id, name: d.name, currentReason: d.story.personalizedReason, currentWhyVisit: d.story.whyVisit })))}
`;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { response_mime_type: "application/json" }
      })
    });

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
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
