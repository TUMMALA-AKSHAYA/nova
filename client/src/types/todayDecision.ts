export interface TodayDecision {
  id: string;
  title: string;
  productName: string;

  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

  action: string;
  reason: string;

  moneyImpact: number;

  confidence: number;

  estimatedBusinessHealthIncrease: number;

  estimatedExecutionTime: string;

  status: "PENDING" | "APPROVED" | "COMPLETED";
}