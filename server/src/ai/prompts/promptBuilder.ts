import { SYSTEM_PROMPT } from "./systemPrompt";

export function buildPrompt(
  evidence: string,
  question: string
): string {

  return `

${SYSTEM_PROMPT}

==================================================
BUSINESS EVIDENCE
==================================================

${evidence}

==================================================
USER QUESTION
==================================================

${question}

==================================================
INSTRUCTIONS
==================================================

Answer ONLY using the BUSINESS EVIDENCE.

Never invent numbers.

Never estimate.

Only use the evidence provided.

If information is unavailable, explicitly say so.

Explain your reasoning clearly.

Provide practical recommendations.

Return ONLY valid JSON.

==================================================
OUTPUT FORMAT
==================================================

{
  "summary": "Short executive summary.",

  "analysis": "Detailed analysis of the situation using only the available evidence.",

  "reasoning": "Explain step by step why you reached this conclusion.",

  "evidence": [
    "Evidence 1",
    "Evidence 2"
  ],

  "actions": [
    "Recommended action 1",
    "Recommended action 2"
  ],

  "risks": [
    "Potential risk 1",
    "Potential risk 2"
  ],

  "insights": [
    "Useful business insight 1",
    "Useful business insight 2"
  ],

  "confidence": 95
}

`;

}