import { env } from "../../config/env";

import { AIProvider } from "./aiProvider";
import { GeminiProvider } from "./gemini.provider";

export function getAIProvider(): AIProvider {

  switch (env.aiProvider) {

    case "gemini":
      return new GeminiProvider();

    default:
      return new GeminiProvider();

  }

}