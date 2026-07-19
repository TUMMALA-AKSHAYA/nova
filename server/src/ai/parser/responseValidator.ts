import { AIResponse } from "../types/response";

export function validateAIResponse(
  response: any
): AIResponse {

  return {

    summary:
      typeof response.summary === "string"
        ? response.summary
        : "No summary available.",

    analysis:
      typeof response.analysis === "string"
        ? response.analysis
        : "",

    reasoning:
      typeof response.reasoning === "string"
        ? response.reasoning
        : "",

    evidence:
      Array.isArray(response.evidence)
        ? response.evidence
        : [],

    actions:
      Array.isArray(response.actions)
        ? response.actions
        : [],

    risks:
      Array.isArray(response.risks)
        ? response.risks
        : [],

    insights:
      Array.isArray(response.insights)
        ? response.insights
        : [],

    confidence:
      typeof response.confidence === "number"
        ? response.confidence
        : 70,

  };

}