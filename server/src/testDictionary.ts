import { normalizeHeader } from "./engines/mapping/headerNormalizer";
import { dictionaryMatch } from "./engines/mapping/dictionaryMatcher";

const headers = [
  "Product",
  "Item Name",
  "Food Item",
  "Qty",
  "Inventory",
  "Unit Price",
  "Category",
  "Primary SKU",
];

headers.forEach((header) => {
  const normalized = normalizeHeader(header);
  const mapped = dictionaryMatch(normalized);

  console.log({
    original: header,
    normalized,
    mapped,
  });
});