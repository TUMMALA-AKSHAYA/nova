import { InventoryInsight } from "../../types/inventoryInsight";

export interface BusinessHealthResult {
  score: number;
  grade: string;
  status: string;
  summary: string;
}

export function calculateBusinessHealth(
  insight: InventoryInsight
): BusinessHealthResult {

  let score = 100;

  // Inventory Health
  score -= (100 - insight.health.healthScore) * 0.30;

  // Financial Risk
  if (insight.financial.businessImpact === "CRITICAL") {
    score -= 25;
  } else if (insight.financial.businessImpact === "HIGH") {
    score -= 15;
  } else if (insight.financial.businessImpact === "MEDIUM") {
    score -= 8;
  }

  // Dead Stock
  if (insight.deadStock.isDeadStock) {

    if (insight.deadStock.severity === "HIGH")
      score -= 15;

    else if (insight.deadStock.severity === "MEDIUM")
      score -= 8;

  }

  // Overstock
  if (insight.overstock.isOverstocked) {

    if (insight.overstock.severity === "HIGH")
      score -= 10;

    else if (insight.overstock.severity === "MEDIUM")
      score -= 5;

  }

  score = Math.max(0, Math.round(score));

  let grade = "A";
  let status = "Excellent";

  if (score < 90) {
    grade = "B";
    status = "Good";
  }

  if (score < 75) {
    grade = "C";
    status = "Needs Attention";
  }

  if (score < 60) {
    grade = "D";
    status = "Poor";
  }

  if (score < 40) {
    grade = "F";
    status = "Critical";
  }

  return {

    score,

    grade,

    status,

    summary:
      `Business Health is ${score}/100 (${grade}). Overall status: ${status}.`

  };

}
export function getBusinessHealthGrade(score: number) {

  let grade = "A";
  let status = "Excellent";

  if (score < 90) {
    grade = "B";
    status = "Good";
  }

  if (score < 75) {
    grade = "C";
    status = "Needs Attention";
  }

  if (score < 60) {
    grade = "D";
    status = "Poor";
  }

  if (score < 40) {
    grade = "F";
    status = "Critical";
  }

  return {
    grade,
    status,
    summary: `Business Health is ${score}/100 (${grade}). Overall status: ${status}.`
  };

}