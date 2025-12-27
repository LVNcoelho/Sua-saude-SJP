
import { GoogleGenAI, Type } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHealthTips = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Forneça 3 dicas curtas e práticas de saúde sobre o tema: ${topic}. Seja amigável e use linguagem simples para moradores de São José dos Pinhais.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              tip: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["tip", "description"]
          }
        }
      }
    });
    // The .text property directly returns the string output. Handle potential undefined safely.
    const jsonStr = response.text?.trim();
    return jsonStr ? JSON.parse(jsonStr) : [];
  } catch (error) {
    console.error("Error fetching health tips:", error);
    return [];
  }
};
