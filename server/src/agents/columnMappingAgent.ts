import { normalizeHeader } from "../engines/mapping/headerNormalizer";
import { dictionaryMatch } from "../engines/mapping/dictionaryMatcher";
import { fuzzyMatch } from "../engines/mapping/fuzzyMatcher";
import { semanticMatch } from "../engines/mapping/semanticMapper";

export interface ColumnMappingResult {
  original: string;
  normalized: string;
  mappedField: string | null;
  confidence: number;
  matchedBy: string;
}

export function mapColumns(headers: string[]): ColumnMappingResult[] {
  return headers.map((header) => {
    const normalized = normalizeHeader(header);

    // 1. Dictionary
    const dictionary = dictionaryMatch(normalized);

    if (dictionary) {
      return {
        original: header,
        normalized,
        mappedField: dictionary,
        confidence: 1,
        matchedBy: "dictionary",
      };
    }

    // 2. Fuzzy
    const fuzzy = fuzzyMatch(normalized);

    if (fuzzy) {
      return {
        original: header,
        normalized,
        mappedField: fuzzy.mappedField,
        confidence: fuzzy.confidence,
        matchedBy: fuzzy.matchedBy,
      };
    }

    // 3. Semantic
    const semantic = semanticMatch(normalized);

    return {
      original: header,
      normalized,
      mappedField: semantic.mappedField,
      confidence: semantic.confidence,
      matchedBy: semantic.matchedBy,
    };
  });
}