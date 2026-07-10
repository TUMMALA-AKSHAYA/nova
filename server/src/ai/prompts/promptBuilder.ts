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

Quote exact evidence.

Explain WHY.

Recommend ONE action.

==================================================
OUTPUT
==================================================

Return ONLY valid JSON.

{
  "summary": "",
  "evidence": [],
  "businessImpact": "",
  "recommendation": "",
  "confidence": 95
}

`;

}