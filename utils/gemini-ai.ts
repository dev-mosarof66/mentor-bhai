import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_KEY!,
});


const geminiAI = async (prompt: string) => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{
            text: prompt,
        }],
        config: {
            thinkingConfig: {
                thinkingBudget: 0
            }
        }
    });
    console.log("Gemini AI Response:", response.text);
    return response;
};

export { geminiAI };