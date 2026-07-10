import { buildBrainQuery } from "../../brain/intent/brainQueryBuilder";
import { buildDecisionContext } from "../../brain/orchestrator/decisionOrchestrator";
import { selectContext } from "../../brain/context/contextSelector";

import { getAIProvider } from "../providers/providerFactory";
import { buildPrompt } from "../prompts/promptBuilder";

import { buildEvidence } from "../reasoning/evidenceBuilder";
import { selectEvidence } from "../reasoning/reasoningEngine";
    import { formatEvidence } from "../reasoning/evidenceFormatter";
export class AIChatService {

  async chat(
    message: string
  ): Promise<string> {

    console.log("\n========================================");
    console.log("🚀 AI CHAT SERVICE STARTED");
    console.log("========================================");

    console.log("📨 Incoming Message:");
    console.log(message);

    // STEP 1
    const query = buildBrainQuery(message);

    console.log("\n🧠 Brain Query:");
    console.log(query);

    // STEP 2
    const decision = buildDecisionContext(query);

    console.log("\n🎯 Decision Context:");
    console.log(decision);

    // STEP 3
    const selected = selectContext(decision);

    console.log("\n📦 Selected Context:");
    console.log(JSON.stringify(selected.context, null, 2));

    // STEP 4
    const evidence = buildEvidence(
      selected.context as any
    );

    console.log("\n📋 All Evidence:");
    console.log(JSON.stringify(evidence, null, 2));

    const relevantEvidence = selectEvidence(
      message,
      evidence
    );

    console.log("\n🎯 Relevant Evidence:");
    console.log(JSON.stringify(relevantEvidence, null, 2));

    // STEP 5


const formattedEvidence =
  formatEvidence(relevantEvidence);

const prompt =
  buildPrompt(
    formattedEvidence,
    message
  );

    console.log("\n========================================");
    console.log("📝 FINAL PROMPT");
    console.log("========================================");
    console.log(prompt);
    console.log("----------------------------------------");
    console.log("📏 Prompt Length:", prompt.length);
    console.log("========================================\n");

    // STEP 6
    console.log("✅ Creating AI Provider...");

    const provider = getAIProvider();

    console.log("✅ AI Provider Created");

    console.log("🚀 Calling Gemini Provider...");

    const response = await provider.chat(prompt);

    console.log("✅ Gemini Response Received");

    return response;

  }

}