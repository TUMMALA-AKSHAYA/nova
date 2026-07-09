import { ProductContext } from "../types/retrieval";
import { Recommendation } from "../types/recommendation";

export function buildRecommendation(
  context: ProductContext
): Recommendation | null {

  if (!context.product) {

    return null;

  }

  return {

    action:
      context.product.decision.action,

    priority:
      context.product.decision.priority,

    confidence: 95,

    explanation:
      context.product.decision.reason,

    evidence: {

      daysUntilStockout:
        context.product.health.daysUntilStockout,

      healthScore:
        context.product.health.healthScore,

      estimatedRevenueLoss:
        context.product.financial.estimatedRevenueLoss,

      estimatedProfitLoss:
        context.product.financial.estimatedProfitLoss,

      inventoryQuantity:
        context.product.inventory.quantity,

      averageDailySales:
        context.product.inventory.averageDailySales,

      reorderLevel:
        context.product.inventory.reorderLevel,

    },

  };

}