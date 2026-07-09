import { buildInventoryInsight } from "../../builders/inventoryInsightBuilder";

import { getAllInventoryItems } from "../../repositories/inventoryRepository";

import { ProductContext } from "../types/retrieval";

export function retrieveProductContext(
  entity?: string
): ProductContext {

  if (!entity) {

    return {};

  }

  const items = getAllInventoryItems();

  const item = items.find(
    product =>
      product.productName.toLowerCase() ===
      entity.toLowerCase()
  );

  if (!item) {

    return {};

  }

  return {

    product: buildInventoryInsight(item)

  };

}