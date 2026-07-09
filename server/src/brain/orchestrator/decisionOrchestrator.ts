import { Intent } from "../types/intent";
import { BrainQuery } from "../types/query";
import { DecisionContext } from "../types/decision";

export function buildDecisionContext(
  query: BrainQuery
): DecisionContext {

  switch (query.intent) {

    case Intent.EXECUTIVE_SUMMARY:

      return {

        query,

        includeExecutiveSummary: true,

        includeBusinessHealth: true,

        includeMetrics: true,

        includeProductsAtRisk: true,

        includeInventory: false,

        includeForecast: false,

      };

    case Intent.PRODUCT_ANALYSIS:

      return {

        query,

        includeExecutiveSummary: false,

        includeBusinessHealth: false,

        includeMetrics: true,

        includeProductsAtRisk: true,

        includeInventory: true,

        includeForecast: false,

      };

    case Intent.REORDER_DECISION:

      return {

        query,

        includeExecutiveSummary: false,

        includeBusinessHealth: false,

        includeMetrics: true,

        includeProductsAtRisk: true,

        includeInventory: true,

        includeForecast: true,

      };

    default:

      return {

        query,

        includeExecutiveSummary: true,

        includeBusinessHealth: true,

        includeMetrics: true,

        includeProductsAtRisk: true,

        includeInventory: true,

        includeForecast: true,

      };

  }

}