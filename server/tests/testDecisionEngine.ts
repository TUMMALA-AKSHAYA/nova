import { calculateInventoryHealth } from "../src/engines/inventory/inventoryHealth";
import { generateDecision } from "../src/engines/inventory/decisionEngine";

const inventory = {

  productName: "Coffee",

  quantity: 12,

  averageDailySales: 6,

  reorderLevel: 20,

  leadTimeDays: 4,

  price: 200,

  category: "Beverages",

};

const health =
  calculateInventoryHealth(inventory);

console.log(health);

console.log(
  generateDecision(
    inventory,
    health
  )
);