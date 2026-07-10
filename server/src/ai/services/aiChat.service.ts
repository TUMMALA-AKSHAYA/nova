import { buildBrainQuery } from "../../brain/intent/brainQueryBuilder";
import { buildDecisionContext } from "../../brain/orchestrator/decisionOrchestrator";
import { selectContext } from "../../brain/context/contextSelector";

import { getAIProvider } from "../providers/providerFactory";
import { buildPrompt } from "../prompts/promptBuilder";

export class AIChatService {

  async chat(
    message: string
  ): Promise<string> {

    console.log("Incoming Message:", message);

    const query =
      buildBrainQuery(message);

    console.log("🧠 Brain Query:", query);

    const decision =
      buildDecisionContext(query);

    console.log("🎯 Decision Context:", decision);

    const selected =
      selectContext(decision);

    console.log("📦 Selected Context:", selected);

    const prompt =
  buildPrompt(
    selected.context as any,
    message
  );
    console.log("==================================");
console.log(prompt);
console.log("==================================");
    const provider =
      getAIProvider();

    return provider.chat(prompt);

  }

}