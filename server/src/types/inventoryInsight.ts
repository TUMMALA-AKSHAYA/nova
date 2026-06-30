export interface InventoryInsight {
  productName: string;
  category: string;

  inventory: {
    quantity: number;
    averageDailySales: number;
    reorderLevel: number;
    leadTimeDays: number;
  };

  health: {
    status: string;
    healthScore: number;
    daysUntilStockout: number;
    recommendation: string;
  };

  financial: {
    estimatedRevenueLoss: number;
    estimatedProfitLoss: number;
    marginPerUnit: number;
    businessImpact: string;
  };

  deadStock: {
    isDeadStock: boolean;
    lastSoldDaysAgo: number;
    blockedCapital: number;
    severity: string;
    recommendation: string;
  };

  overstock: {
    isOverstocked: boolean;
    inventoryCoverageDays: number;
    excessUnits: number;
    workingCapitalLocked: number;
    severity: string;
    recommendation: string;
  };

  decision: {
    priority: string;
    action: string;
    recommendedOrderQuantity: number;
    reason: string;
  };
}