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