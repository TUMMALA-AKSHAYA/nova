import stringSimilarity from "string-similarity";

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

  const result = stringSimilarity.findBestMatch(header, headers);

  // 👇 ADD THIS LINE
  //WHTAconsole.log(result.bestMatch);

  if (result.bestMatch.rating < 0.6) {
    return null;
  }

  return {
    mappedField:
      KNOWN_HEADERS[result.bestMatch.target as keyof typeof KNOWN_HEADERS],
    confidence: result.bestMatch.rating,
    matchedBy: "fuzzy",
  };
}