import { AIProvider } from "./aiProvider";
import { GeminiProvider } from "./gemini.provider";
import { OpenAIProvider } from "./openai.provider";

import { env } from "../../config/env";

export function getAIProvider(): AIProvider {

  switch (env.aiProvider.toLowerCase()) {

    case "gemini":
      return new GeminiProvider();

    case "openai":
      return new OpenAIProvider();

    default:
      throw new Error(
        `Unsupported AI Provider: ${env.aiProvider}`
      );

  }

}