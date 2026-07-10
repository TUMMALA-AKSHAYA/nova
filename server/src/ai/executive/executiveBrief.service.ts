import { getDashboard } from "../../services/dashboardService";
import { getAIProvider } from "../providers/providerFactory";
import { buildExecutiveBriefPrompt } from "../executive/executiveBriefing";

export class ExecutiveBriefService {

  async generate() {

    const dashboard = getDashboard();

    const prompt = buildExecutiveBriefPrompt(
      dashboard as any
    );

    const provider = getAIProvider();

    return provider.chat(prompt);

  }

}