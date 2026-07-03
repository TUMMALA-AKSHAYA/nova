import { Dashboard } from "../types/dashboard";

import { buildInventoryInsight } from "../builders/inventoryInsightBuilder";
import { buildProductsAtRisk } from "../builders/dashboard/productsAtRiskBuilder";
import {
  calculateBusinessHealth,
  getBusinessHealthGrade,
} from "../engines/business/businessHealthEngine";

import { generateExecutiveBrief } from "../engines/business/executiveBriefEngine";

import { getAllInventoryItems } from "../repositories/inventoryRepository";

export function getDashboard(): Dashboard {

  // Fetch inventory from repository
  const items = getAllInventoryItems();

  // Build insights
  const insights = items.map(buildInventoryInsight);

  // Calculate business health for each product
  const businessHealthResults =
    insights.map(calculateBusinessHealth);

  // Overall Business Health
  const averageBusinessHealth = Math.round(
    businessHealthResults.reduce(
      (sum, result) => sum + result.score,
      0
    ) / businessHealthResults.length
  );

  const overallHealth =
    getBusinessHealthGrade(
      averageBusinessHealth
    );

  // Executive Brief
  const executiveBrief =
    generateExecutiveBrief(
      insights,
      averageBusinessHealth
    );
  const productsAtRisk =
  buildProductsAtRisk(insights);
  // Dashboard Response

  return {

  executiveBrief: {

    greeting: "GOOD AFTERNOON",

    headline: executiveBrief.summary,

    description: `Business Health ${averageBusinessHealth}/100`,

    confidence: 95,

    updatedAt: "Just now",

  },

  businessHealth: {

    score: averageBusinessHealth,

    grade: overallHealth.grade,

    status: overallHealth.status,

  },

  metrics: {

    totalRevenueAtRisk:
      executiveBrief.totalRevenueAtRisk,

    totalProfitAtRisk:
      executiveBrief.totalProfitAtRisk,

    totalBlockedCapital:
      executiveBrief.totalBlockedCapital,

    totalWorkingCapitalLocked:
      executiveBrief.totalWorkingCapitalLocked,

  },

  todayDecisions:
    executiveBrief.todayDecisions,

  productsAtRisk: productsAtRisk,

  revenueTrend: [],

  businessHealthTrend: [],

};

}