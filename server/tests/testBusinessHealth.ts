import { buildInventoryInsight } from "../src/builders/inventoryInsightBuilder";
import { calculateBusinessHealth } from "../src/engines/business/businessHealthEngine";

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

const insight = buildInventoryInsight(item);

console.log(insight);

console.log("------------------------");

console.log(calculateBusinessHealth(insight));