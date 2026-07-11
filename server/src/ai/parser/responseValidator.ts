import { AIResponse } from "../types/response";

export function validateAIResponse(
  response: any
): AIResponse {

  return {

    summary:
      typeof response.summary === "string"
        ? response.summary
        : "No summary available.",

    evidence:
      Array.isArray(response.evidence)
        ? response.evidence
        : [],

    businessImpact:
      typeof response.businessImpact === "string"
        ? response.businessImpact
        : "",

    recommendation:
      typeof response.recommendation === "string"
        ? response.recommendation
        : "",

    confidence:
      typeof response.confidence === "number"
        ? response.confidence
        : 95,

  };

}