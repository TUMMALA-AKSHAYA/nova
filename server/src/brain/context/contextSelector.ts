import { buildAIContext } from "../../ai/context/contextBuilder";

import { DecisionContext } from "../types/decision";

//import { SelectedContext } from "../types/context";
import type { SelectedContext } from "../../types/context";

export function selectContext(
  decision: DecisionContext
): SelectedContext {

  const full =
    buildAIContext();

  const selected: Partial<typeof full> = {};

  if (
    decision.includeExecutiveSummary
  ) {

    selected.executiveBrief =
      full.executiveBrief;

  }

  if (
    decision.includeBusinessHealth
  ) {

    selected.businessHealth =
      full.businessHealth;

  }

  if (
    decision.includeMetrics
  ) {

    selected.metrics =
      full.metrics;

  }

  if (
    decision.includeProductsAtRisk
  ) {

    selected.productsAtRisk =
      full.productsAtRisk;

  }

  if (
    decision.includeInventory
  ) {

    selected.todayDecisions =
      full.todayDecisions;

  }

  return {

    context: selected,

  };

}