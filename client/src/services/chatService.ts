export interface AIResponse {
  summary: string;
  analysis: string;
  reasoning: string;
  evidence: string[];
  actions: string[];
  risks: string[];
  insights: string[];
  confidence: number;
}

interface ChatApiResponse {
  success: boolean;
  answer: AIResponse;
  message?: string;
}

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api";

export async function sendMessage(
  message: string
): Promise<AIResponse> {
  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    let errorMessage = "Failed to contact NOVA.";

    try {
      const payload =
        (await response.json()) as Partial<ChatApiResponse>;

      errorMessage =
        payload.message || errorMessage;
    } catch {
      // Keep the default message when the server has no JSON body.
    }

    throw new Error(errorMessage);
  }

  const result: ChatApiResponse = await response.json();

  return result.answer;
}
