import { normalizeHeader } from "./engines/mapping/headerNormalizer";
import { semanticMatch } from "./engines/mapping/semanticMapper";

const headers = [
  "Dish",
  "Available Units",
  "Closing Balance",
  "Purchase Cost",
  "Department",
];

for (const header of headers) {
  const normalized = normalizeHeader(header);

  console.log({
    original: header,
    normalized,
    result: semanticMatch(normalized),
  });
}