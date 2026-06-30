export interface InventoryItem {
  productName: string;

  quantity: number;

  averageDailySales: number;

  sellingPrice: number;

  costPrice: number;

  reorderLevel: number;

  leadTimeDays: number;

  category: string;

  isTopSeller: boolean;
}