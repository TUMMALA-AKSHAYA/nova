import { mapColumns } from "./agents/columnMappingAgent";

const headers = [
  "Product",
  "Prodct",
  "Dish",
  "Closing Balance",
  "Purchase Cost",
  "Catgory",
];

console.log(JSON.stringify(mapColumns(headers), null, 2));