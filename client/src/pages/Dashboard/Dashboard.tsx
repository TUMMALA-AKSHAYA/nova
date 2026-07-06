import { useEffect, useState } from "react";

import ExecutiveBriefCard from "../../components/cards/ExecutiveBriefCard";
import BusinessSnapshot from "../../components/cards/BusinessSnapshot";
import TodayDecisions from "../../components/cards/TodayDecisions";
import BusinessHealthTrend from "../../components/charts/BusinessHealthTrend";
import RevenueTrend from "../../components/charts/RevenueTrend";
import ProductsAtRisk from "../../components/cards/ProductsAtRisk";

import { getDashboard } from "../../services/dashboardService";
import type { Dashboard as DashboardType } from "../../types/dashboard";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState<DashboardType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboard();
        setDashboard(data);
      } catch {
        setError("Failed to load dashboard.");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-slate-500">
        Loading dashboard...
      </div>
    );
  }

  if (error || !dashboard) {
    return (
      <div className="p-10 text-red-500">
        {error || "Dashboard not found."}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <ExecutiveBriefCard
        greeting={dashboard.executiveBrief.greeting}
        headline={dashboard.executiveBrief.headline}
        description={dashboard.executiveBrief.description}
        actionLabel="View Decisions"
        confidence={dashboard.executiveBrief.confidence}
        updatedAt={dashboard.executiveBrief.updatedAt}
      />

      <BusinessSnapshot
        businessHealth={dashboard.businessHealth}
        metrics={dashboard.metrics}
      />

      <TodayDecisions
        decisions={dashboard.todayDecisions}
      />

      <BusinessHealthTrend />

      <RevenueTrend />

      <ProductsAtRisk
        products={dashboard.productsAtRisk}
      />

    </div>
  );
}