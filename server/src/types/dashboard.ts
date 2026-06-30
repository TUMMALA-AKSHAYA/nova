import { TodayDecision } from "../engines/business/executiveBriefEngine";

export interface DashboardMetrics {
  totalRevenueAtRisk: number;
  totalProfitAtRisk: number;
  totalBlockedCapital: number;
  totalWorkingCapitalLocked: number;
}

export interface DashboardBusinessHealth {
  score: number;
  grade: string;
  status: string;
}

export interface Dashboard {
  businessHealth: DashboardBusinessHealth;

  metrics: DashboardMetrics;

  todayDecisions: TodayDecision[];

  summary: string;
}