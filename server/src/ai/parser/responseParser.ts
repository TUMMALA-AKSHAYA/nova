import { AIResponse } from "../types/response";
import { validateAIResponse } from "./responseValidator";

export function parseAIResponse(
  text: string
): AIResponse {

  try {

    const parsed =
      JSON.parse(text);

    return validateAIResponse(
      parsed
    );

  } catch {

    return {

      summary: text,

      evidence: [],

      businessImpact: "",

      recommendation: "",

      confidence: 95,

    };

  }

}