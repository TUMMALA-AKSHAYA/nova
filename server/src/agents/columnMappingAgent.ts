// NOVA Column Mapping Agent
// Converts different client column names into NOVA standard fields

export const COLUMN_MAPPINGS: Record<string, string> = {
  // Product
  "product": "productName",
  "productname": "productName",
  "item": "productName",
  "itemname": "productName",
  "fooditem": "productName",
  "material": "productName",
  "sku": "productName",
  "menuitem": "productName",

  // Quantity
  "qty": "quantity",
  "quantity": "quantity",
  "stock": "quantity",
  "inventory": "quantity",
  "available": "quantity",
  "balance": "quantity",
  "remaining": "quantity",

  // Price
  "price": "price",
  "sellingprice": "price",
  "unitprice": "price",
  "mrp": "price",
  "rate": "price",
  "unitcost": "price",
  "buyingprice": "price",

  // Category
  "category": "category",
  "type": "category",
  "department": "category",
};