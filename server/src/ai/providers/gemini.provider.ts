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

      console.log("🚀 Sending Request to Gemini...");
      console.log("Prompt Length:", prompt.length);

      const response =
        await this.client.models.generateContent({

          model: "gemini-3.5-flash",

          contents: prompt,

        });

      console.log("✅ Gemini Success");

      return response.text ?? "{}";

    } catch (error: any) {

      console.log("==================================");
      console.log("❌ GEMINI ERROR");
      console.error(error);
      console.log("==================================");

      if (error?.message) {
        return `Gemini Error: ${error.message}`;
      }

      return "NOVA AI is temporarily unavailable.";

    }

  }

}