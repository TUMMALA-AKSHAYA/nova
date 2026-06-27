import { normalizeHeader } from "./engines/mapping/headerNormalizer";
import { fuzzyMatch } from "./engines/mapping/fuzzyMatcher";

const headers = [
  "Prodct",
  "Quatity",
  "Inventry",
  "Prce",
  "Catgory",
];

headers.forEach((header) => {
  const normalized = normalizeHeader(header);

  console.log({
    original: header,
    normalized,
    result: fuzzyMatch(normalized),
  });
});