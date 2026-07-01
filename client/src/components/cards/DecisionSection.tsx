import DecisionCard from "./DecisionCard";

export default function DecisionSection() {
  return (
    <section className="space-y-5">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Today's Decisions
          </h2>

          <p className="mt-1 text-slate-500 dark:text-slate-400">
            AI recommendations based on your inventory.
          </p>
        </div>

      </div>

      <div className="space-y-4">

        <DecisionCard
          title="REORDER"
          product="Coffee Beans"
          reason="Stock will run out before supplier delivery."
          impact="Protect ₹2,400"
          priority="CRITICAL"
          confidence={95}
        />

        <DecisionCard
          title="NO ACTION"
          product="Rice"
          reason="Inventory level is healthy."
          impact="₹0 impact"
          priority="LOW"
          confidence={96}
        />

        <DecisionCard
          title="NO ACTION"
          product="Vanilla Syrup"
          reason="Inventory level is healthy."
          impact="₹0 impact"
          priority="LOW"
          confidence={95}
        />

      </div>

    </section>
  );
}