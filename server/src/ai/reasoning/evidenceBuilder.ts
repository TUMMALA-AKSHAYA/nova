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

  // Products at Risk
  for (const product of context.productsAtRisk) {

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

  // Today's Decisions
  for (const decision of context.todayDecisions as any[]) {

    evidence.push({

      category: "DECISION",

      title: decision.productName,

      data: {

        priority: decision.priority,

        action: decision.action,

        reason: decision.reason

      }

    });

  }

  return evidence;

}