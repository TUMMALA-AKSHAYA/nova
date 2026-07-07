// Standard NOVA fields
export type StandardField =
  | "productName"
  | "quantity"
  | "averageDailySales"
  | "sellingPrice"
  | "costPrice"
  | "reorderLevel"
  | "leadTimeDays"
  | "category"
  | "isTopSeller";

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
  "available qty": "quantity",
  "available quantity": "quantity",
  "current stock": "quantity",
  "remaining": "quantity",
  "balance": "quantity",

  // Average Daily Sales
  "average daily sales": "averageDailySales",
  "avg daily sales": "averageDailySales",
  "daily sales": "averageDailySales",
  "sales per day": "averageDailySales",
  "avg sales": "averageDailySales",

  // Selling Price
  "selling price": "sellingPrice",
  "sellingprice": "sellingPrice",
  "sale price": "sellingPrice",
  "retail price": "sellingPrice",
  "price": "sellingPrice",
  "mrp": "sellingPrice",
  "selling rate": "sellingPrice",

  // Cost Price
  "cost price": "costPrice",
  "costprice": "costPrice",
  "cost": "costPrice",
  "buying price": "costPrice",
  "purchase price": "costPrice",

  // Reorder Level
  "reorder level": "reorderLevel",
  "minimum stock": "reorderLevel",
  "minimum quantity": "reorderLevel",
  "reorder point": "reorderLevel",
  "min stock": "reorderLevel",

  // Lead Time
  "lead time": "leadTimeDays",
  "lead time days": "leadTimeDays",
  "delivery days": "leadTimeDays",
  "supplier lead time": "leadTimeDays",

  // Category
  "category": "category",
  "department": "category",
  "type": "category",

  // Top Seller
  "top seller": "isTopSeller",
  "topseller": "isTopSeller",
  "best seller": "isTopSeller",
  "is top seller": "isTopSeller"

};

export function dictionaryMatch(
  normalizedHeader: string
): StandardField | null {

  return COLUMN_DICTIONARY[normalizedHeader] ?? null;

}