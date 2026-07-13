import { getAllInventoryItems } from "../repositories/inventoryRepository";
import { buildInventoryInsight } from "../builders/inventoryInsightBuilder";

export function getProducts() {
  const items = getAllInventoryItems();

  return items.map((item) => buildInventoryInsight(item));
}