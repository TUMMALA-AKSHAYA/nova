import { buildBrainQuery } from "../../brain/intent/brainQueryBuilder";
import { buildDecisionContext } from "../../brain/orchestrator/decisionOrchestrator";
import { selectContext } from "../../brain/context/contextSelector";

import { getAIProvider } from "../providers/providerFactory";
import { buildPrompt } from "../prompts/promptBuilder";

import { buildEvidence } from "../reasoning/evidenceBuilder";
import { selectEvidence } from "../reasoning/reasoningEngine";
import { formatEvidence } from "../reasoning/evidenceFormatter";

import { parseAIResponse } from "../parser/responseParser";
import { AIResponse } from "../types/response";

export class AIChatService {

  async chat(
    message: string
  ): Promise<AIResponse> {

    const query = buildBrainQuery(message);
    console.log("QUESTION:", message);
console.log("BRAIN QUERY:", JSON.stringify(query, null, 2));

    const decision = buildDecisionContext(query);
    console.log("DECISION:", JSON.stringify(decision, null, 2));

    const selected = selectContext(decision);

    const evidence =
      buildEvidence(
        selected.context as any
      );

    const relevantEvidence =
      selectEvidence(
        message,
        evidence
      );
      console.log("=================================");
console.log("QUESTION:", message);
console.log("SELECTED EVIDENCE:");
console.log(JSON.stringify(relevantEvidence, null, 2));
console.log("=================================");

    const formattedEvidence =
      formatEvidence(
        relevantEvidence
      );

    const prompt =
      buildPrompt(
        formattedEvidence,
        message
      );

    const provider =
      getAIProvider();

    const rawResponse =
      await provider.chat(prompt);
      console.log("=================================");
console.log("RAW RESPONSE FROM GEMINI");
console.log(rawResponse);
console.log("=================================");

const parsed = parseAIResponse(rawResponse);

console.log("=================================");
console.log("PARSED RESPONSE");
console.log(parsed);
console.log("=================================");

return parsed;

    return parseAIResponse(
      rawResponse
    );

  }

}