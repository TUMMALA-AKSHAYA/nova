import { AIProvider } from "./aiProvider";
import { AIContext } from "../types/chat";

export class OpenAIProvider implements AIProvider {

  async chat(
    context: AIContext,
    message: string
  ): Promise<string> {

    return "OpenAI integration coming soon.";

  }

}