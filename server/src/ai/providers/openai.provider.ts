import { AIProvider } from "./aiProvider";

export class OpenAIProvider implements AIProvider {

  async chat(prompt: string): Promise<string> {
    throw new Error("OpenAI provider is not implemented.");
  }

}