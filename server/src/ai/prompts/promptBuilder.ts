import { AIContext } from "../types/chat";

import { SYSTEM_PROMPT } from "./systemPrompt";
import { formatContext } from "./contextFormatter";

export function buildPrompt(
  context: AIContext,
  userMessage: string
): string {

  return `

${SYSTEM_PROMPT}

${formatContext(context)}

==========================
USER QUESTION
==========================

${userMessage}

`;

}