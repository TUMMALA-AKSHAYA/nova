import MetricCard from "./MetricCard";

export default function BusinessSnapshot() {
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
          value="79 /100"
          subtitle="Good"
          trend="up"
          change="+5 this week"
        />

        <MetricCard
          title="Revenue At Risk"
          value="₹2,400"
          subtitle="Critical"
          trend="down"
          change="-₹800 vs yesterday"
        />

        <MetricCard
          title="Blocked Capital"
          value="₹44,440"
          subtitle="Recoverable"
          trend="up"
          change="Promotion Available"
        />

        <MetricCard
          title="Working Capital"
          value="₹31,000"
          subtitle="Healthy"
          trend="neutral"
          change="Stable"
        />

      </div>

    </section>
  );
}