export interface ProductAtRisk {
  id?: string;

  name: string;

  status: "HEALTHY" | "LOW" | "CRITICAL";

  daysLeft: number;

  revenueRisk: number;
}

export interface TodayDecision {
  id?: string;

  title?: string;

  productName: string;

  priority: string;

  action: string;

  reason: string;

  confidence: number;

  moneyImpact: number;

  estimatedBusinessHealthIncrease?: number;

  estimatedExecutionTime?: string;

  status?: string;
}

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

  todayDecisions: TodayDecision[];

  productsAtRisk: ProductAtRisk[];

}

export interface ChatRequest {

  message: string;

}

export interface ChatResponse {

  answer: string;

}