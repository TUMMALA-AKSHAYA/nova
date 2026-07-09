import { Intent } from "../types/intent";

export function classifyIntent(
  message: string
): Intent {

  const query =
    message.toLowerCase();

  if (
    query.includes("summary") ||
    query.includes("overview") ||
    query.includes("today")
  ) {
    return Intent.EXECUTIVE_SUMMARY;
  }

  if (
    query.includes("reorder") ||
    query.includes("purchase")
  ) {
    return Intent.REORDER_DECISION;
  }

  if (
    query.includes("overstock")
  ) {
    return Intent.OVERSTOCK_ANALYSIS;
  }

  if (
    query.includes("dead stock")
  ) {
    return Intent.DEAD_STOCK_ANALYSIS;
  }

  if (
    query.includes("revenue") ||
    query.includes("profit") ||
    query.includes("financial")
  ) {
    return Intent.FINANCIAL_IMPACT;
  }

  if (
    query.includes("health")
  ) {
    return Intent.BUSINESS_HEALTH;
  }

  if (
    query.includes("forecast") ||
    query.includes("predict")
  ) {
    return Intent.DEMAND_FORECAST;
  }

  if (
    query.includes("coffee") ||
    query.includes("product") ||
    query.includes("inventory") ||
    query.includes("stock")
  ) {
    return Intent.PRODUCT_ANALYSIS;
  }

  return Intent.UNKNOWN;

}