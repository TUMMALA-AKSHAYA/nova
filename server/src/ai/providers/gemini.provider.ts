import { GoogleGenAI } from "@google/genai";

import { AIProvider } from "./aiProvider";
import { AIContext } from "../types/chat";

import { env } from "../../config/env";
import { buildPrompt } from "../prompts/promptBuilder";

export class GeminiProvider implements AIProvider {

  private client = new GoogleGenAI({
    apiKey: env.geminiApiKey,
  });

  async chat(
    context: AIContext,
    message: string
  ): Promise<string> {

    const prompt = buildPrompt(
      context,
      message
    );

    const response =
      await this.client.models.generateContent({

        model: "gemini-2.5-flash",

        contents: prompt,

      });

    return (
      response.text ??
      "Sorry, I couldn't generate a response."
    );

  }

}