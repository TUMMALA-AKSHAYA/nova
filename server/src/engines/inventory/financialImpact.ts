import { InventoryItem } from "../../types/inventory";
import { InventoryHealthResult } from "./inventoryHealth";

export interface FinancialImpactResult {
  estimatedRevenueLoss: number;

  estimatedProfitLoss: number;

  businessImpact: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

  marginPerUnit: number;

  stockoutDays: number;

  summary: string;
}

export function calculateFinancialImpact(
  item: InventoryItem,
  health: InventoryHealthResult
): FinancialImpactResult {

  const stockoutDays = Math.max(
    0,
    item.leadTimeDays - health.daysUntilStockout
  );

  const estimatedRevenueLoss =
    stockoutDays *
    item.averageDailySales *
    item.sellingPrice;

  const marginPerUnit =
    item.sellingPrice - item.costPrice;

  const estimatedProfitLoss =
    stockoutDays *
    item.averageDailySales *
    marginPerUnit;

  let businessImpact: FinancialImpactResult["businessImpact"] = "LOW";

  if (estimatedRevenueLoss >= 50000 || item.isTopSeller) {

    businessImpact = "CRITICAL";

  } else if (estimatedRevenueLoss >= 20000) {

    businessImpact = "HIGH";

  } else if (estimatedRevenueLoss >= 5000) {

    businessImpact = "MEDIUM";

  }

  return {

    estimatedRevenueLoss,

    estimatedProfitLoss,

    businessImpact,

    marginPerUnit,

    stockoutDays,

    summary:
      `Potential revenue loss ₹${estimatedRevenueLoss.toFixed(0)} and profit loss ₹${estimatedProfitLoss.toFixed(0)} if no action is taken.`,

  };

}