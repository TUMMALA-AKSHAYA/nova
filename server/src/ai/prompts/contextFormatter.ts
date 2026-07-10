import { AIContext } from "../types/chat";

export function formatContext(
  context: Partial<AIContext>
): string {

  let prompt = "";

  if (context.businessHealth) {

    prompt += `
==========================
BUSINESS HEALTH
==========================

Score : ${context.businessHealth.score}/100
Grade : ${context.businessHealth.grade}
Status : ${context.businessHealth.status}

`;

  }

  if (context.executiveBrief) {

    prompt += `
==========================
EXECUTIVE SUMMARY
==========================

${context.executiveBrief.headline}

${context.executiveBrief.description}

`;

  }

  if (context.metrics) {

    prompt += `
==========================
BUSINESS METRICS
==========================

Revenue At Risk : ₹${context.metrics.totalRevenueAtRisk}

Profit At Risk : ₹${context.metrics.totalProfitAtRisk}

Blocked Capital : ₹${context.metrics.totalBlockedCapital}

Working Capital Locked : ₹${context.metrics.totalWorkingCapitalLocked}

`;

  }

  if (context.todayDecisions?.length) {

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

    prompt += `
==========================
TODAY'S DECISIONS
==========================

${decisions}

`;

  }

  if (context.productsAtRisk?.length) {

    const products =
      context.productsAtRisk
        .map((product: any) => {

          return `• ${product.name}
Status: ${product.status}
Days Left: ${product.daysLeft}
Revenue Risk: ₹${product.revenueRisk}`;

        })
        .join("\n\n");

    prompt += `
==========================
PRODUCTS AT RISK
==========================

${products}

`;

  }

  return prompt;

}