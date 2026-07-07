import { ColumnMappingResult } from "../agents/columnMappingAgent";

const NUMERIC_FIELDS = [

  "quantity",

  "averageDailySales",

  "sellingPrice",

  "costPrice",

  "reorderLevel",

  "leadTimeDays"

];

const BOOLEAN_FIELDS = [

  "isTopSeller"

];

export function normalizeRows(

  rows: Record<string, string>[],

  mappings: ColumnMappingResult[]

) {

  return rows.map((row) => {

    const normalized: Record<string, any> = {};

    mappings.forEach((mapping) => {

      if (!mapping.mappedField) return;

      let value: any = row[mapping.original];

      if (NUMERIC_FIELDS.includes(mapping.mappedField)) {

        value = Number(value);

      }

      if (BOOLEAN_FIELDS.includes(mapping.mappedField)) {

        const text = String(value).trim().toLowerCase();

        value =

          text === "true" ||

          text === "yes" ||

          text === "1";

      }

      normalized[mapping.mappedField] = value;

    });

    return normalized;

  });

}