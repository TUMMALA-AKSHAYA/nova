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
    throw new Error("Failed to contact NOVA.");
  }

  const result: ChatApiResponse = await response.json();

  return result.answer;
}