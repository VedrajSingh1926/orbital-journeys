import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const DESTINATION_SCHEMA = {
  type: "object",
  properties: {
    destinations: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          country: { type: "string" },
          continent: { type: "string" },
          type: { type: "string", description: "'expected' or 'unexpected'" },
          match: { type: "integer" },
          budget: { type: "string" },
          distance: { type: "string" },
          travelTime: { type: "string" },
          description: { type: "string" },
          personalizedReason: { type: "string" },
          imageQuery: { type: "string" },
          story: {
            type: "object",
            properties: {
              heroTitle: { type: "string" },
              heroSubtitle: { type: "string" },
              whyVisit: { type: "string" },
              whyFamous: { type: "string" },
              culture: { type: "string" },
              weather: { type: "string" },
              bestSeason: { type: "string" },
              currentSeason: { type: "string" },
              personalizedReason: { type: "string" },
              places: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    description: { type: "string" }
                  }
                }
              },
              food: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    description: { type: "string" }
                  }
                }
              },
              travelTips: { type: "array", items: { type: "string" } },
              hiddenGems: { type: "array", items: { type: "string" } },
              instagramSpots: { type: "array", items: { type: "string" } }
            },
            required: ["heroTitle", "heroSubtitle", "whyVisit", "whyFamous", "culture", "weather", "bestSeason", "currentSeason", "personalizedReason", "places", "food", "travelTips", "hiddenGems", "instagramSpots"]
          }
        },
        required: ["id", "name", "country", "continent", "type", "match", "budget", "distance", "travelTime", "description", "personalizedReason", "imageQuery", "story"]
      }
    }
  },
  required: ["destinations"]
};

export async function POST(request: Request) {
  try {
    const { mood, duration, companions, locationPreference, currentLocation, currentMonth, currentSeason } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ success: false, error: "No API key" }, { status: 500 });
    }

    let locationRule = "";
    if (locationPreference === "India") {
      locationRule = "You MUST return ONLY destinations within India. Do not return any international destinations.";
    } else if (locationPreference === "International" || locationPreference === "Outside India") {
      locationRule = "You MUST return ONLY international destinations. Do not return any Indian destinations.";
    } else {
      locationRule = "Mix both Indian and International destinations. E.g., 1 India, 2 International, 1 Wildcard.";
    }

    const prompt = `You are a Luxury AI Travel Curator, writing like National Geographic meets Aman Resorts.
Your tone must be cinematic, premium, emotional, personalized, and inspiring.

User Profile:
- Mood: ${mood || "Adventure"}
- Duration: ${duration || "7"} days
- Companions: ${companions || "Friends"}
- Location Preference: ${locationPreference || "Anywhere"}
- Current Location: ${currentLocation || "Jaipur"}
- Current Month: ${currentMonth || "July"}
- Current Season: ${currentSeason || "Monsoon"}

Location Rule:
${locationRule}

Instructions:
1. Generate EXACTLY 4 destinations matching the provided JSON schema.
2. The first 3 destinations MUST be "expected" fits, and the 4th MUST be "unexpected" (a wildcard, marked as type: "unexpected").
3. DO NOT generate short text. 
   - heroTitle: 5-10 words
   - heroSubtitle: 20 words
   - whyVisit: 150 words
   - whyFamous: 150 words
   - culture: 100 words
   - personalizedReason: 100 words
4. Generate exactly 5 places, 5 foods, 5 travelTips, 3 hiddenGems, 3 instagramSpots for each destination.
5. Provide a highly descriptive "imageQuery" for each (e.g., "cinematic ladakh mountains").
6. NEVER return empty fields, null, or undefined.
`;

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    console.log("INPUT", { mood, duration, companions, locationPreference, currentLocation, currentMonth, currentSeason });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: { 
        responseMimeType: "application/json",
        responseSchema: DESTINATION_SCHEMA,
      }
    });

    const text = response.text;
    
    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    console.log("RAW GEMINI RESPONSE", text.substring(0, 500) + "...");
    
    const parsed = JSON.parse(text);
    console.log("PARSED RESPONSE", parsed.destinations?.length + " destinations");

    return NextResponse.json({ success: true, destinations: parsed.destinations });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ success: false, error: "Enhancement failed" }, { status: 500 });
  }
}
