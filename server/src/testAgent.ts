import { mapColumns } from "./agents/columnMappingAgent";

const headers = [
  "Product",
  "Item Name",
  "Inventory",
  "Unit Price",
  "Primary SKU",
];

console.log(mapColumns(headers));