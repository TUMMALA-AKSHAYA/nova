import { AIContext } from "../types/chat";

export interface Evidence {

  category: string;

  title: string;

  data: Record<string, any>;

}

export function buildEvidence(
  context: AIContext
): Evidence[] {

  const evidence: Evidence[] = [];

  // ==========================
  // Executive Summary
  // ==========================

  if (context.executiveBrief) {

    evidence.push({

      category: "EXECUTIVE",

      title: "Executive Summary",

      data: {

        headline: context.executiveBrief.headline,

        description: context.executiveBrief.description

      }

    });

  }

  // ==========================
  // Business Health
  // ==========================

  if (context.businessHealth) {

    evidence.push({

      category: "BUSINESS_HEALTH",

      title: "Business Health",

      data: {

        score: context.businessHealth.score,

        grade: context.businessHealth.grade,

        status: context.businessHealth.status

      }

    });

  }

  // ==========================
  // Financial Metrics
  // ==========================

  if (context.metrics) {

    evidence.push({

      category: "FINANCIAL",

      title: "Financial Metrics",

      data: {

        revenueRisk: context.metrics.totalRevenueAtRisk,

        profitRisk: context.metrics.totalProfitAtRisk,

        blockedCapital: context.metrics.totalBlockedCapital,

        workingCapital: context.metrics.totalWorkingCapitalLocked

      }

    });

  }

  // ==========================
  // Products At Risk
  // ==========================

  for (const product of context.productsAtRisk ?? []) {

    evidence.push({

      category: "PRODUCT_RISK",

      title: product.name,

      data: {

        status: product.status,

        daysLeft: product.daysLeft,

        revenueRisk: product.revenueRisk

      }

    });

  }

  // ==========================
  // Today's Decisions
  // ==========================

  for (const decision of context.todayDecisions ?? []) {

    evidence.push({

      category: "DECISION",

      title: decision.productName,

      data: {

        priority: decision.priority,

        action: decision.action,

        reason: decision.reason,

        confidence: decision.confidence,

        moneyImpact: decision.moneyImpact

      }

    });

  }

  return evidence;

}