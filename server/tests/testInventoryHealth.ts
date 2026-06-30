import { calculateInventoryHealth } from "../src/engines/inventory/inventoryHealth";

const inventory = [

  {
    productName: "Coffee",

    quantity: 12,

    averageDailySales: 6,

    reorderLevel: 20,

    leadTimeDays: 4,

    price: 200,

    category: "Beverages",
  },

  {
    productName: "Milk",

    quantity: 40,

    averageDailySales: 3,

    reorderLevel: 15,

    leadTimeDays: 5,

    price: 60,

    category: "Dairy",
  },

  {
    productName: "Rice",

    quantity: 150,

    averageDailySales: 1,

    reorderLevel: 30,

    leadTimeDays: 7,

    price: 80,

    category: "Grocery",
  }

];

inventory.forEach(item => {

    console.log(calculateInventoryHealth(item));

});