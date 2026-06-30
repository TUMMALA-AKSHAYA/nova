import { InventoryItem } from "../../types/inventory";

export interface DeadStockResult {
  isDeadStock: boolean;

  lastSoldDaysAgo: number;

  blockedCapital: number;

  severity: "LOW" | "MEDIUM" | "HIGH";

  recommendation: string;
}

export function analyzeDeadStock(
  item: InventoryItem & { lastSoldDaysAgo: number }
): DeadStockResult {

  const blockedCapital =
    item.quantity * item.costPrice;

  let severity: DeadStockResult["severity"] = "LOW";

  let recommendation = "No action required.";

  const isDeadStock =
    item.lastSoldDaysAgo >= 60;

  if (item.lastSoldDaysAgo >= 90) {

    severity = "HIGH";

    recommendation =
      "Discount heavily or return to supplier if possible.";

  }

  else if (item.lastSoldDaysAgo >= 60) {

    severity = "MEDIUM";

    recommendation =
      "Bundle with popular products or offer promotions.";

  }

  return {

    isDeadStock,

    lastSoldDaysAgo:
      item.lastSoldDaysAgo,

    blockedCapital,

    severity,

    recommendation,

  };

}