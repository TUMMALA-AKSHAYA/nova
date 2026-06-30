import { calculateInventoryHealth } from "../src/engines/inventory/inventoryHealth";
import { calculateFinancialImpact } from "../src/engines/inventory/financialImpact";

const coffee = {

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

const health =
  calculateInventoryHealth(coffee);

console.log(health);

console.log(
  calculateFinancialImpact(
    coffee,
    health
  )
);