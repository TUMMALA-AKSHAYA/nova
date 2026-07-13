import type { Dashboard } from "../types/dashboard";

import { buildRevenueTrend } from "../builders/dashboard/revenueTrendBuilder";
import { buildBusinessHealthTrend } from "../builders/dashboard/businessHealthTrendBuilder";
import { buildProductsAtRisk } from "../builders/dashboard/productsAtRiskBuilder";
import { buildInventoryInsight } from "../builders/inventoryInsightBuilder";

import {
  calculateBusinessHealth,
  getBusinessHealthGrade,
} from "../engines/business/businessHealthEngine";

import { generateExecutiveBrief } from "../engines/business/executiveBriefEngine";

import { getAllInventoryItems } from "../repositories/inventoryRepository";

export function getDashboard(): Dashboard {
  // Fetch inventory
  const items = getAllInventoryItems();

  // Build insights
  const insights = items.map((item) => {
    console.log("Building insight for:", item.productName);
    return buildInventoryInsight(item);
  });

  console.log("Insights:");
  console.log(insights);

  // Business Health
  const businessHealthResults =
    insights.map(calculateBusinessHealth);

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

  // Products At Risk
  const productsAtRisk =
    buildProductsAtRisk(insights);

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

    productsAtRisk,

    revenueTrend:
      buildRevenueTrend(),

    businessHealthTrend:
      buildBusinessHealthTrend(),
  };
}