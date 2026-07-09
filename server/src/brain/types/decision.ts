import { BrainQuery } from "./query";

export interface DecisionContext {

  query: BrainQuery;

  includeExecutiveSummary: boolean;

  includeBusinessHealth: boolean;

  includeMetrics: boolean;

  includeProductsAtRisk: boolean;

  includeInventory: boolean;

  includeForecast: boolean;

}