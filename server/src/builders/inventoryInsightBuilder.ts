import { InventoryItem } from "../types/inventory";
import { InventoryInsight } from "../types/inventoryInsight";

import { calculateInventoryHealth } from "../engines/inventory/inventoryHealth";
import { calculateFinancialImpact } from "../engines/inventory/financialImpact";
import { generateDecision } from "../engines/inventory/decisionEngine";
import { analyzeDeadStock } from "../engines/inventory/deadStockEngine";
import { analyzeOverstock } from "../engines/inventory/overstockEngine";

export function buildInventoryInsight(
  item: InventoryItem
): InventoryInsight {

  const health = calculateInventoryHealth(item);

  const financial = calculateFinancialImpact(
    item,
    health
  );

  const deadStock = analyzeDeadStock({
    ...item,
    lastSoldDaysAgo: 45, // Temporary until sales history is integrated
  });

  const overstock = analyzeOverstock(item);

  const decision = generateDecision(
    item,
    health
  );

  return {

    productName: item.productName,

    category: item.category,

    inventory: {

      quantity: item.quantity,

      averageDailySales: item.averageDailySales,

      reorderLevel: item.reorderLevel,

      leadTimeDays: item.leadTimeDays,

    },

    health: {

      status: health.status,

      healthScore: health.healthScore,

      daysUntilStockout: health.daysUntilStockout,

      recommendation: health.recommendation,

    },

    financial: {

      estimatedRevenueLoss: financial.estimatedRevenueLoss,

      estimatedProfitLoss: financial.estimatedProfitLoss,

      marginPerUnit: financial.marginPerUnit,

      businessImpact: financial.businessImpact,

    },

    deadStock: {

      isDeadStock: deadStock.isDeadStock,

      lastSoldDaysAgo: deadStock.lastSoldDaysAgo,

      blockedCapital: deadStock.blockedCapital,

      severity: deadStock.severity,

      recommendation: deadStock.recommendation,

    },

    overstock: {

      isOverstocked: overstock.isOverstocked,

      inventoryCoverageDays: overstock.inventoryCoverageDays,

      excessUnits: overstock.excessUnits,

      workingCapitalLocked: overstock.workingCapitalLocked,

      severity: overstock.severity,

      recommendation: overstock.recommendation,

    },

    decision: {

      priority: decision.priority,

      action: decision.decision,

      recommendedOrderQuantity: decision.recommendedOrderQuantity,

      reason: decision.reason,

    },

  };

}