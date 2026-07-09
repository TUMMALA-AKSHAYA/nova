import { AIContext } from "../types/chat";

export interface AIProvider {

  chat(
    context: AIContext,
    message: string
  ): Promise<string>;

}