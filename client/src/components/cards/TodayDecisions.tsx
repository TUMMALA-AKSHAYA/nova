import DecisionCard from "./DecisionCard";
import type { TodayDecision } from "../../types/todayDecision";

interface TodayDecisionsProps {
  decisions: TodayDecision[];
}

export default function TodayDecisions({
  decisions,
}: TodayDecisionsProps) {
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

        {decisions.map((decision) => (
          <DecisionCard
            key={decision.id}
            title={decision.action.replace("_", " ")}
            product={decision.productName}
            reason={decision.reason}
            impact={`Protect ₹${decision.moneyImpact}`}
            priority={decision.priority}
            confidence={decision.confidence}
          />
        ))}

      </div>

    </section>
  );
}