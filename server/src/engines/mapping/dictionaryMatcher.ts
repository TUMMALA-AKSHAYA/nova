// Standard NOVA fields
export type StandardField =
  | "productName"
  | "quantity"
  | "price"
  | "category";

// Dictionary of known synonyms
const COLUMN_DICTIONARY: Record<string, StandardField> = {
  // Product
  "product": "productName",
  "product name": "productName",
  "item": "productName",
  "item name": "productName",
  "food item": "productName",
  "menu item": "productName",
  "material": "productName",
  "sku": "productName",
  "sku description": "productName",

  // Quantity
  "qty": "quantity",
  "quantity": "quantity",
  "stock": "quantity",
  "inventory": "quantity",
  "available": "quantity",
  "remaining": "quantity",
  "balance": "quantity",

  // Price
  "price": "price",
  "unit price": "price",
  "selling price": "price",
  "buying price": "price",
  "cost": "price",
  "rate": "price",
  "mrp": "price",

  // Category
  "category": "category",
  "type": "category",
  "department": "category",
};

export function dictionaryMatch(
  normalizedHeader: string
): StandardField | null {
  return COLUMN_DICTIONARY[normalizedHeader] ?? null;
}