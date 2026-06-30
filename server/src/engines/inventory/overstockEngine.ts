import { InventoryItem } from "../../types/inventory";

export interface OverstockResult {
  isOverstocked: boolean;

  inventoryCoverageDays: number;

  excessUnits: number;

  workingCapitalLocked: number;

  severity: "LOW" | "MEDIUM" | "HIGH";

  recommendation: string;
}

export function analyzeOverstock(
  item: InventoryItem
): OverstockResult {

  const inventoryCoverageDays =
    item.quantity / item.averageDailySales;

  const targetCoverageDays = 30;

  const targetStock =
    targetCoverageDays * item.averageDailySales;

  const excessUnits =
    Math.max(0, item.quantity - targetStock);

  const workingCapitalLocked =
    excessUnits * item.costPrice;

  let severity: OverstockResult["severity"] = "LOW";

  let recommendation =
    "Inventory level is healthy.";

  const isOverstocked =
    inventoryCoverageDays > targetCoverageDays;

  if (inventoryCoverageDays >= 90) {

    severity = "HIGH";

    recommendation =
      "Delay purchasing immediately and consider promotional sales.";

  } else if (inventoryCoverageDays >= 60) {

    severity = "MEDIUM";

    recommendation =
      "Reduce future purchase quantities until inventory normalizes.";

  }

  return {

    isOverstocked,

    inventoryCoverageDays,

    excessUnits,

    workingCapitalLocked,

    severity,

    recommendation,

  };

}