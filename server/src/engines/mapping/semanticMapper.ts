import { MappingResult } from "../../types/mapping";

const SEMANTIC_GROUPS: Record<string, string[]> = {
  productName: [
    "product",
    "product name",
    "item",
    "item name",
    "food item",
    "menu item",
    "dish",
    "merchandise",
    "sku description",
    "product title",
  ],

  quantity: [
    "quantity",
    "qty",
    "stock",
    "inventory",
    "remaining",
    "available units",
    "available stock",
    "stock on hand",
    "closing balance",
    "opening balance",
    "units",
  ],

  price: [
    "price",
    "cost",
    "unit price",
    "selling price",
    "buying price",
    "purchase cost",
    "rate",
    "mrp",
  ],

  category: [
    "category",
    "type",
    "group",
    "department",
  ],
};

export function semanticMatch(header: string): MappingResult {
  for (const [field, synonyms] of Object.entries(SEMANTIC_GROUPS)) {
    if (synonyms.includes(header)) {
      return {
        mappedField: field,
        confidence: 0.95,
        matchedBy: "semantic",
      };
    }
  }

  return {
    mappedField: null,
    confidence: 0,
    matchedBy: "semantic",
  };
}