import { AIContext } from "../types/chat";
import { getDashboard } from "../../services/dashboardService";

export function buildAIContext(): AIContext {

  const dashboard = getDashboard();

  return {

    executiveBrief: {
      headline: dashboard.executiveBrief.headline,
      description: dashboard.executiveBrief.description,
    },

    businessHealth: {
      score: dashboard.businessHealth.score,
      grade: dashboard.businessHealth.grade,
      status: dashboard.businessHealth.status,
    },

    metrics: {
      totalRevenueAtRisk: dashboard.metrics.totalRevenueAtRisk,
      totalProfitAtRisk: dashboard.metrics.totalProfitAtRisk,
      totalBlockedCapital: dashboard.metrics.totalBlockedCapital,
      totalWorkingCapitalLocked:
        dashboard.metrics.totalWorkingCapitalLocked,
    },

    todayDecisions: dashboard.todayDecisions,

    productsAtRisk: dashboard.productsAtRisk,

  };

}