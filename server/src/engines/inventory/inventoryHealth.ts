import { InventoryItem } from "../../types/inventory";

export interface InventoryHealthResult {
  productName: string;

  quantity: number;

  daysUntilStockout: number;

  healthScore: number;

  status: string;

  recommendation: string;
}

export function calculateInventoryHealth(
  item: InventoryItem
): InventoryHealthResult {

  const daysUntilStockout =
    item.averageDailySales === 0
      ? Infinity
      : item.quantity / item.averageDailySales;

  let status = "";
  let score = 100;
  let recommendation = "";

  if (daysUntilStockout <= item.leadTimeDays) {
    status = "Critical";

    score = 20;

    recommendation =
      "Reorder immediately. Stock may run out before new inventory arrives.";
  }

  else if (item.quantity <= item.reorderLevel) {

    status = "Low Stock";

    score = 55;

    recommendation =
      "Reorder soon. Inventory has reached the reorder level.";
  }

  else {

    status = "Healthy";

    score = 100;

    recommendation =
      "Inventory level is healthy.";
  }

  return {

    productName: item.productName,

    quantity: item.quantity,

    daysUntilStockout,

    healthScore: score,

    status,

    recommendation,

  };
}