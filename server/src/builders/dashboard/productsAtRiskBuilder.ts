import type { InventoryInsight } from "../../types/inventoryInsight";
import type { ProductAtRisk } from "../../types/dashboard";

export function buildProductsAtRisk(
  insights: InventoryInsight[]
): ProductAtRisk[] {

  return insights

    .filter(
      insight =>
        insight.decision.action === "REORDER" ||
        insight.decision.action === "TRANSFER"
    )

    .sort(
      (a, b) =>
        a.health.daysUntilStockout -
        b.health.daysUntilStockout
    )

    .map(insight => ({

      name: insight.productName,

      status: insight.decision.priority,

      daysLeft: insight.health.daysUntilStockout,

      revenueRisk:
        insight.financial.estimatedRevenueLoss,

    }));

}