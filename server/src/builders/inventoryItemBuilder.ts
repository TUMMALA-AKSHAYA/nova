import { InventoryItem } from "../types/inventory";

export function buildInventoryItem(
  row: Record<string, any>
): InventoryItem {

  return {

    productName: row.productName,

    quantity: row.quantity,

    averageDailySales: row.averageDailySales,

    sellingPrice: row.sellingPrice,

    costPrice: row.costPrice,

    reorderLevel: row.reorderLevel,

    leadTimeDays: row.leadTimeDays,

    category: row.category,

    isTopSeller: row.isTopSeller

  };

}