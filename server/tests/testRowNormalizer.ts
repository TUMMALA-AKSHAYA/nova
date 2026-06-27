import { mapColumns } from "./agents/columnMappingAgent";
import { normalizeRows } from "./services/rowNormalizer.service";

const headers = [
  "Item Name",
  "Inventory",
  "Unit Price",
  "Category",
];

const rows = [
  {
    "Item Name": "Coffee",
    Inventory: "20",
    "Unit Price": "200",
    Category: "Beverages",
  },
  {
    "Item Name": "Milk",
    Inventory: "10",
    "Unit Price": "50",
    Category: "Dairy",
  },
];

const mappings = mapColumns(headers);

console.log(normalizeRows(rows, mappings));