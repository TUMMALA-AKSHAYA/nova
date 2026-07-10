export interface ExecutiveResponse {

  summary: string;

  evidence: string[];

  businessImpact: string;

  recommendation: string;

  confidence: number;

}

export function formatExecutiveResponse(
  response: ExecutiveResponse
): string {

  return `

EXECUTIVE SUMMARY
────────────────────────

${response.summary}

EVIDENCE
────────────────────────

${response.evidence.map(item => `• ${item}`).join("\n")}

BUSINESS IMPACT
────────────────────────

${response.businessImpact}

RECOMMENDATION
────────────────────────

${response.recommendation}

CONFIDENCE
────────────────────────

${response.confidence}%

`;

}