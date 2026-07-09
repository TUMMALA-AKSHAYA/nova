import { AIContext } from "../types/chat";

export function formatContext(
  context: AIContext
): string {

  const decisions =
    context.todayDecisions
      .map((decision: any, index: number) => {

        return `${index + 1}.

Product: ${decision.productName}

Priority: ${decision.priority}

Action: ${decision.action}

Reason: ${decision.reason}`;

      })
      .join("\n\n");

  const productsAtRisk =
    context.productsAtRisk
      .map((product: any) => {

        return `• ${product.name}
Status: ${product.status}
Days Left: ${product.daysLeft}
Revenue Risk: ₹${product.revenueRisk}`;

      })
      .join("\n\n");

  return `

==========================
BUSINESS OVERVIEW
==========================

Business Health
---------------
Score : ${context.businessHealth.score}/100
Grade : ${context.businessHealth.grade}
Status : ${context.businessHealth.status}

Executive Summary
-----------------
${context.executiveBrief.headline}

${context.executiveBrief.description}

==========================
BUSINESS METRICS
==========================

Revenue At Risk : ₹${context.metrics.totalRevenueAtRisk}

Profit At Risk : ₹${context.metrics.totalProfitAtRisk}

Blocked Capital : ₹${context.metrics.totalBlockedCapital}

Working Capital Locked : ₹${context.metrics.totalWorkingCapitalLocked}

==========================
TODAY'S DECISIONS
==========================

${decisions}

==========================
PRODUCTS AT RISK
==========================

${productsAtRisk}

`;

}