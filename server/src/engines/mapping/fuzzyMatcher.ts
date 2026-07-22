import { distance } from "fastest-levenshtein";

const KNOWN_HEADERS = {
  product: "productName",
  "product name": "productName",
  item: "productName",
  "item name": "productName",
  "food item": "productName",
  "menu item": "productName",

  quantity: "quantity",
  qty: "quantity",
  stock: "quantity",
  inventory: "quantity",
  available: "quantity",
  remaining: "quantity",

  price: "price",
  "unit price": "price",
  "selling price": "price",
  "buying price": "price",
  cost: "price",
  rate: "price",
  mrp: "price",

  category: "category",
};

export function fuzzyMatch(header: string) {
  const headers = Object.keys(KNOWN_HEADERS);

  let bestTarget = "";
  let bestDistance = Number.MAX_SAFE_INTEGER;

  for (const h of headers) {
    const d = distance(header.toLowerCase(), h.toLowerCase());

    if (d < bestDistance) {
      bestDistance = d;
      bestTarget = h;
    }
  }

  if (bestDistance > 5) return null;

  return {
    mappedField:
      KNOWN_HEADERS[bestTarget as keyof typeof KNOWN_HEADERS],
    confidence:
      1 - bestDistance / Math.max(header.length, bestTarget.length),
    matchedBy: "fuzzy",
  };
}