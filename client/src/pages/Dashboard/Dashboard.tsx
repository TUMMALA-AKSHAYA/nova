import ExecutiveBriefCard from "../../components/cards/ExecutiveBriefCard";
import MetricCard from "../../components/cards/MetricCard";
//import DecisionCard from "../../components/cards/DecisionCard";
import DecisionSection from "../../components/cards/DecisionSection";
import BusinessHealthTrend from "../../components/charts/BusinessHealthTrend";
import BusinessSnapshot from "../../components/cards/BusinessSnapshot";
export default function Dashboard() {
  return (
    <div className="space-y-8">

      <ExecutiveBriefCard
        greeting="GOOD AFTERNOON"
        headline="Coffee Beans need your attention."
        description="Your inventory will run out before the supplier delivers. Protect ₹2,400 in revenue by placing a reorder today."
        actionLabel="Reorder Now"
        confidence={95}
        updatedAt="2 mins ago"
      />

      <div className="grid grid-cols-4 gap-6">

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
    <DecisionSection />
    <BusinessHealthTrend />
    <BusinessSnapshot />
      </div>

    </div>
  );
}