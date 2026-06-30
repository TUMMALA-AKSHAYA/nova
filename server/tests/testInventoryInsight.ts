import { buildInventoryInsight } from "../src/builders/inventoryInsightBuilder";

const item = {

  productName: "Coffee Beans",

  quantity: 12,

  averageDailySales: 6,

  sellingPrice: 200,

  costPrice: 120,

  reorderLevel: 20,

  leadTimeDays: 4,

  category: "Beverages",

  isTopSeller: true,

};

console.log(
  JSON.stringify(
    buildInventoryInsight(item),
    null,
    2
  )
);