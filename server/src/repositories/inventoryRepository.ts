import { InventoryItem } from "../types/inventory";

let inventory: InventoryItem[] = [
  {
    productName: "Coffee Beans",
    quantity: 12,
    averageDailySales: 6,
    sellingPrice: 200,
    costPrice: 120,
    reorderLevel: 20,
    leadTimeDays: 4,
    category: "Beverages",
    isTopSeller: true,
  },
  {
    productName: "Rice",
    quantity: 600,
    averageDailySales: 5,
    sellingPrice: 80,
    costPrice: 55,
    reorderLevel: 30,
    leadTimeDays: 6,
    category: "Grocery",
    isTopSeller: false,
  },
  {
    productName: "Vanilla Syrup",
    quantity: 40,
    averageDailySales: 0.5,
    sellingPrice: 350,
    costPrice: 250,
    reorderLevel: 10,
    leadTimeDays: 7,
    category: "Beverages",
    isTopSeller: false,
  },
];

export function getAllInventoryItems(): InventoryItem[] {
  console.log("GET INVENTORY");
  console.table(inventory);

  return inventory;
}

export function setInventoryItems(items: InventoryItem[]) {
  console.log("SETTING INVENTORY");
  console.table(items);

  inventory = items;
}