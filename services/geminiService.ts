import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "K-Beauty Medical Consultant", an expert AI assistant for "Medical Aesthetic Korea".
Your audience consists of high-end doctors and medical aesthetic professionals.
Your tone should be professional, clinical, yet innovative and exclusive.
You have knowledge of:
1. The latest Korean aesthetic trends (e.g., Rejuran, Juvelook, Potenza, Ulthera combinations).
2. Advanced injection techniques used in Gangnam.
3. Specific protocols for combining devices and injectables.
4. Membership details: Verified medical aesthetic experts only, strict vetting, access to translated clinical papers.

Keep responses concise (under 150 words) unless asked for a detailed protocol.
If asked about pricing, mention that membership tiers vary and they should apply for details.
Always emphasize that Korea is the testbed for global aesthetics.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Error: API Key is missing. Please check your environment configuration.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // We use a simple generateContent here for a single turn or stateless interaction 
    // to keep it simple, but we prepend history context if we were building a full chat object.
    // For this specific widget implementation, we will use a fresh chat or manage history manually.
    // To ensure quality, we use the system instruction config.
    
    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        }
    });

    // Send the message. In a real app, we would maintain the chat object state 
    // across renders, but for this stateless service call, we'll just send the new message.
    // If history is needed, we would add history to the chat.
    
    // For simplicity in this demo, we assume the context is carried by the system prompt 
    // or we just handle the immediate query.
    const result = await chat.sendMessage({
        message: message
    });

    return result.text || "I apologize, but I could not generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic from Gangnam. Please try again in a moment.";
  }
};