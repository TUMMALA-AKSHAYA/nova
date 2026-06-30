import { Dashboard } from "../types/dashboard";
import { InventoryItem } from "../types/inventory";

import { buildInventoryInsight } from "../builders/inventoryInsightBuilder";

//import { calculateBusinessHealth } from "../engines/business/businessHealthEngine";
import {
  calculateBusinessHealth,
  getBusinessHealthGrade
} from "../engines/business/businessHealthEngine";
import { generateExecutiveBrief } from "../engines/business/executiveBriefEngine";

export function getDashboard(): Dashboard {

  // Temporary demo data
  // Later this will come from PostgreSQL

  const items: InventoryItem[] = [

    {

      productName: "Coffee Beans",

      quantity: 12,

      averageDailySales: 6,

      sellingPrice: 200,

      costPrice: 120,

      reorderLevel: 20,

      leadTimeDays: 4,

      category: "Beverages",

      isTopSeller: true,

    },

    {

      productName: "Rice",

      quantity: 600,

      averageDailySales: 5,

      sellingPrice: 80,

      costPrice: 55,

      reorderLevel: 30,

      leadTimeDays: 6,

      category: "Grocery",

      isTopSeller: false,

    },

    {

      productName: "Vanilla Syrup",

      quantity: 40,

      averageDailySales: 0.5,

      sellingPrice: 350,

      costPrice: 250,

      reorderLevel: 10,

      leadTimeDays: 7,

      category: "Beverages",

      isTopSeller: false,

    },

  ];

  // Step 1
  const insights = items.map(buildInventoryInsight);

  // Step 2
  const businessHealthResults =
    insights.map(calculateBusinessHealth);

  const averageBusinessHealth =
    Math.round(

      businessHealthResults.reduce(

        (sum, result) => sum + result.score,

        0

      ) / businessHealthResults.length

    );

  // Step 3
  const executiveBrief =
  generateExecutiveBrief(
    insights,
    averageBusinessHealth
  );

const overallHealth =
  getBusinessHealthGrade(
    averageBusinessHealth
  );

// Step 4
return {

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

  summary:
    executiveBrief.summary,

};
}