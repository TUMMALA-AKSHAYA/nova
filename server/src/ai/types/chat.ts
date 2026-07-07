export interface AIContext {
  executiveBrief: {
    headline: string;
    description: string;
  };

  businessHealth: {
    score: number;
    grade: string;
    status: string;
  };

  metrics: {
    totalRevenueAtRisk: number;
    totalProfitAtRisk: number;
    totalBlockedCapital: number;
    totalWorkingCapitalLocked: number;
  };

  todayDecisions: unknown[];

  productsAtRisk: unknown[];
}

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  answer: string;
}