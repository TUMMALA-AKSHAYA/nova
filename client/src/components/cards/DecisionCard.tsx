import Card from "../ui/Card";
import Button from "../ui/Button";

interface DecisionCardProps {
  title: string;
  product: string;
  reason: string;
  impact: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  confidence: number;
}

export default function DecisionCard({
  title,
  product,
  reason,
  impact,
  priority,
  confidence,
}: DecisionCardProps) {


  const colors = {
  CRITICAL: "text-red-500",
  HIGH: "text-orange-500",
  MEDIUM: "text-yellow-500",
  LOW: "text-green-500",
};

  return (
    <Card className="p-6 hover:shadow-xl transition-all">

      <div className="flex justify-between items-start">

        <div>

          <p className={`text-sm font-semibold ${colors[priority]}`}>
            {title}
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {product}
          </h3>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            {reason}
          </p>

          <p className="mt-5 text-lg font-semibold">
            {impact}
          </p>

        </div>

        <Button>
          Approve
        </Button>

      </div>

      <div className="mt-5 text-sm text-slate-400">
        Confidence {confidence}%
      </div>

    </Card>
  );
}