import { Dashboard } from "../../types/dashboard";
import { buildPrompt } from "../prompts/promptBuilder";

export function buildExecutiveBriefPrompt(
  dashboard: Dashboard
): string {

  return buildPrompt(
    dashboard as any,
    "Generate today's executive briefing."
  );

}