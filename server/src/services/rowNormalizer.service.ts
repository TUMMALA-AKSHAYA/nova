import { ColumnMappingResult } from "../agents/columnMappingAgent";

export function normalizeRows(
  rows: Record<string, string>[],
  mappings: ColumnMappingResult[]
) {
  return rows.map((row) => {
    const normalized: Record<string, any> = {};

    mappings.forEach((mapping) => {
      if (!mapping.mappedField) return;

      let value = row[mapping.original];

      // Convert numeric fields
      if (
        mapping.mappedField === "quantity" ||
        mapping.mappedField === "price"
      ) {
        value = Number(value);
      }

      normalized[mapping.mappedField] = value;
    });

    return normalized;
  });
}