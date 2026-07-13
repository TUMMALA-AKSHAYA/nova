import type { TodayDecision } from "./todayDecision";

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

export interface ExecutiveBrief {
  greeting: string;
  headline: string;
  description: string;
  confidence: number;
  updatedAt: string;
}

export interface ProductAtRisk {
  name: string;
  status: string;
  daysLeft: number;
  revenueRisk: number;
}


export interface RevenueTrendPoint {
  label: string;
  revenue: number;
}

export interface BusinessHealthTrendPoint {
  label: string;
  score: number;
}

export interface Dashboard {
  executiveBrief: ExecutiveBrief;

  businessHealth: DashboardBusinessHealth;

  metrics: DashboardMetrics;

  todayDecisions: TodayDecision[];

  productsAtRisk: ProductAtRisk[];

  revenueTrend: RevenueTrendPoint[];

  businessHealthTrend: BusinessHealthTrendPoint[];
}