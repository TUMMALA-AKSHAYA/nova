import stringSimilarity from "string-similarity";

const KNOWN_HEADERS = [
  "product",
  "product name",
  "item",
  "item name",
  "food item",
  "menu item",
  "sku",
  "quantity",
  "qty",
  "stock",
  "inventory",
  "available",
  "remaining",
  "price",
  "unit price",
  "selling price",
  "buying price",
  "cost",
  "rate",
  "mrp",
  "category",
];

export function fuzzyMatch(header: string) {
  const result = stringSimilarity.findBestMatch(header, KNOWN_HEADERS);

  console.log(result.bestMatch);

  return result.bestMatch;
}