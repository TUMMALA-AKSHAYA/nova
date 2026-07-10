export interface AIProvider {

  chat(
    prompt: string
  ): Promise<string>;

}