import { buildBrainQuery } from "../../brain/intent/brainQueryBuilder";
import { buildDecisionContext } from "../../brain/orchestrator/decisionOrchestrator";
import { selectContext } from "../../brain/context/contextSelector";

import { getAIProvider } from "../providers/providerFactory";
import { buildPrompt } from "../prompts/promptBuilder";

export class AIChatService {

  async chat(message: string): Promise<string> {

    // 1. Understand the question
    const query = buildBrainQuery(message);
    console.log("🧠 Brain Query:", query);

    // 2. Decide what context is needed
    const decision = buildDecisionContext(query);
    console.log("🎯 Decision Context:", decision);

    // 3. Retrieve only the required context
    const selected = selectContext(decision);
    console.log("📦 Selected Context:", selected);

    // 4. Build prompt
    const prompt = buildPrompt(
      selected.context as any,
      message
    );

    // 5. Get AI provider
    const provider = getAIProvider();

    // 6. Ask Gemini
    return provider.chat(
      selected.context as any,
      prompt
    );

  }

}