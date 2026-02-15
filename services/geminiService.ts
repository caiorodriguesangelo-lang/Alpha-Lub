
import {GoogleGenAI} from "@google/genai";

// Initialize the GoogleGenAI client with the API key directly from environment variables as per guidelines.
const ai = new GoogleGenAI({apiKey: process.env.API_KEY});

export const getMaintenanceTips = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `Você é o assistente virtual da Alpha Lub Center, uma oficina especializada em troca de óleo em Barueri. 
        Seja profissional, prestativo e foque em dicas de manutenção automotiva (óleo, filtros, fluidos). 
        Se perguntarem sobre preços, diga que o ideal é uma avaliação presencial na R. São Fernando, 570. 
        Sempre incentive o cliente a visitar a loja. Responda de forma curta e direta em Português do Brasil.`,
        temperature: 0.7,
      }
    });
    // Use the .text property directly as it returns the string output.
    return response.text || "Desculpe, tive um problema ao processar sua pergunta. Por favor, entre em contato via WhatsApp.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "No momento estou offline. Por favor, ligue para (11) 92043-2018.";
  }
};
