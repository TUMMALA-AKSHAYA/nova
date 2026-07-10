import { GoogleGenAI } from "@google/genai";

import { AIProvider } from "./aiProvider";
import { env } from "../../config/env";

export class GeminiProvider implements AIProvider {

  private client = new GoogleGenAI({
    apiKey: env.geminiApiKey,
  });

  async chat(
    prompt: string
  ): Promise<string> {

    try {

      const response =
        await this.client.models.generateContent({

          model: "gemini-3.5-flash",

          contents: prompt,

        });

      return (
        response.text ??
        "Sorry, I couldn't generate a response."
      );

    } catch (error: any) {

  console.error("=================================");
  console.error("GEMINI ERROR");
  console.error(error);
  console.error("=================================");

  if (error?.message) {
    return `Gemini Error: ${error.message}`;
  }

  return "NOVA AI is temporarily unavailable.";

}
    }

  }

