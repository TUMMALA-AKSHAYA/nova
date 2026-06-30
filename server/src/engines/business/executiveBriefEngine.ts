import { InventoryInsight } from "../../types/inventoryInsight";

export interface TodayDecision {

  id: string;

  title: string;

  productName: string;

  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

  action: string;

  reason: string;

  moneyImpact: number;

  confidence: number;

  estimatedBusinessHealthIncrease: number;

  estimatedExecutionTime: string;

  status: "PENDING" | "APPROVED" | "COMPLETED";

}

export interface ExecutiveBrief {

  totalProducts: number;

  criticalProducts: number;

  businessHealth: number;

  totalRevenueAtRisk: number;

  totalProfitAtRisk: number;

  totalBlockedCapital: number;

  totalWorkingCapitalLocked: number;

  todayDecisions: TodayDecision[];

  summary: string;

}

export function generateExecutiveBrief(
  insights: InventoryInsight[],
  businessHealth: number
): ExecutiveBrief {

  let totalRevenueAtRisk = 0;
  let totalProfitAtRisk = 0;
  let totalBlockedCapital = 0;
  let totalWorkingCapitalLocked = 0;
  let criticalProducts = 0;

  const todayDecisions: TodayDecision[] = [];

  for (const insight of insights) {

    totalRevenueAtRisk +=
      insight.financial.estimatedRevenueLoss;

    totalProfitAtRisk +=
      insight.financial.estimatedProfitLoss;

    totalBlockedCapital +=
      insight.deadStock.blockedCapital;

    totalWorkingCapitalLocked +=
      insight.overstock.workingCapitalLocked;

    if (insight.decision.priority === "CRITICAL") {
      criticalProducts++;
    }

    todayDecisions.push({

      id: insight.productName
        .toLowerCase()
        .replace(/\s+/g, "-"),

      title: `${insight.decision.action} ${insight.productName}`,

      productName: insight.productName,

      priority: insight.decision.priority as
        "LOW" | "MEDIUM" | "HIGH" | "CRITICAL",

      action: insight.decision.action,

      reason: insight.decision.reason,

      moneyImpact: insight.financial.estimatedRevenueLoss,

      confidence: 95,

      estimatedBusinessHealthIncrease:
        insight.health.healthScore < 50 ? 15 : 5,

      estimatedExecutionTime: "2 mins",

      status: "PENDING",

    });

  }

  todayDecisions.sort(
    (a, b) => b.moneyImpact - a.moneyImpact
  );

  return {

    totalProducts: insights.length,

    criticalProducts,

    businessHealth,

    totalRevenueAtRisk,

    totalProfitAtRisk,

    totalBlockedCapital,

    totalWorkingCapitalLocked,

    todayDecisions,

    summary: `Today's top priority is protecting ₹${totalRevenueAtRisk} in revenue across ${criticalProducts} critical products.`

  };

}