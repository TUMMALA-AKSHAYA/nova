import MetricCard from "./MetricCard";
import type {
  DashboardBusinessHealth,
  DashboardMetrics,
} from "../../types/dashboard";

interface BusinessSnapshotProps {
  businessHealth: DashboardBusinessHealth;
  metrics: DashboardMetrics;
}

export default function BusinessSnapshot({
  businessHealth,
  metrics,
}: BusinessSnapshotProps) {
  return (
    <section className="space-y-5">

      <div>
        <h2 className="text-2xl font-bold">
          Business Snapshot
        </h2>

        <p className="mt-1 text-slate-500 dark:text-slate-400">
          A quick overview of today's business performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <MetricCard
          title="Business Health"
          value={`${businessHealth.score}/100`}
          subtitle={businessHealth.status}
          trend="up"
          change={businessHealth.grade}
        />

        <MetricCard
          title="Revenue At Risk"
          value={`₹${metrics.totalRevenueAtRisk}`}
          subtitle="Critical"
          trend="down"
          change="Needs Attention"
        />

        <MetricCard
          title="Blocked Capital"
          value={`₹${metrics.totalBlockedCapital}`}
          subtitle="Recoverable"
          trend="up"
          change="Recoverable"
        />

        <MetricCard
          title="Working Capital"
          value={`₹${metrics.totalWorkingCapitalLocked}`}
          subtitle="Healthy"
          trend="neutral"
          change="Stable"
        />

      </div>

    </section>
  );
}