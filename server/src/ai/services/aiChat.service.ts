import { buildAIContext } from "../context/contextBuilder";
import { OpenAIProvider } from "../providers/openai.provider";

export class AIChatService {

  private provider = new OpenAIProvider();

  async chat(message: string): Promise<string> {

    const context = buildAIContext();

    const response = await this.provider.chat(
      context,
      message
    );

    return response;

  }

}