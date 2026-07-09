export interface Recommendation {

  action: string;

  priority: string;

  confidence: number;

  explanation: string;

  evidence: Record<string, unknown>;

}