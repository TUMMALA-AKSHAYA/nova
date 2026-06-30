import { InventoryItem } from "../../types/inventory";
import { InventoryHealthResult } from "./inventoryHealth";

export interface DecisionResult {
  productName: string;

  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

  decision:
    | "NO_ACTION"
    | "MONITOR"
    | "REORDER";

  recommendedOrderQuantity: number;

  estimatedRevenueAtRisk: number;

  reason: string;
}

export function generateDecision(
  item: InventoryItem,
  health: InventoryHealthResult
): DecisionResult {

  const TARGET_DAYS = 14;

  const targetStock =
    item.averageDailySales * TARGET_DAYS;

  const recommendedOrderQuantity = Math.max(
    0,
    Math.ceil(targetStock - item.quantity)
  );

  const estimatedRevenueAtRisk =
    Math.max(
      0,
      health.daysUntilStockout < item.leadTimeDays
        ? item.averageDailySales *
            item.price *
            (item.leadTimeDays - health.daysUntilStockout)
        : 0
    );

  if (health.status === "Critical") {

    return {

      productName: item.productName,

      priority: "CRITICAL",

      decision: "REORDER",

      recommendedOrderQuantity,

      estimatedRevenueAtRisk,

      reason:
        "Stock will run out before supplier delivery.",

    };

  }

  if (health.status === "Low Stock") {

    return {

      productName: item.productName,

      priority: "HIGH",

      decision: "MONITOR",

      recommendedOrderQuantity,

      estimatedRevenueAtRisk,

      reason:
        "Inventory has reached reorder level.",

    };

  }

  return {

    productName: item.productName,

    priority: "LOW",

    decision: "NO_ACTION",

    recommendedOrderQuantity: 0,

    estimatedRevenueAtRisk: 0,

    reason:
      "Inventory level is healthy.",

  };

}