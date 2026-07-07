import { AIContext } from "../types/chat";

export function buildAIContext(): AIContext {
  return {
    executiveBrief: {
      headline: "Test",
      description: "Test"
    },
    businessHealth: {
      score: 80,
      grade: "B",
      status: "Good"
    },
    metrics: {
      totalRevenueAtRisk: 0,
      totalProfitAtRisk: 0,
      totalBlockedCapital: 0,
      totalWorkingCapitalLocked: 0
    },
    todayDecisions: [],
    productsAtRisk: []
  };
}