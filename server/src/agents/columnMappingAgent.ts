import { normalizeHeader } from "../engines/mapping/headerNormalizer";
import { dictionaryMatch } from "../engines/mapping/dictionaryMatcher";

export interface ColumnMappingResult {
  original: string;
  normalized: string;
  mappedField: string | null;
}

export function mapColumns(headers: string[]): ColumnMappingResult[] {
  return headers.map((header) => {
    const normalized = normalizeHeader(header);
    const mappedField = dictionaryMatch(normalized);

    return {
      original: header,
      normalized,
      mappedField,
    };
  });
}