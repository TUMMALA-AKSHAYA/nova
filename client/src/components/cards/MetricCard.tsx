import Card from "../ui/Card";
import clsx from "clsx";
import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface MetricCardProps {
  title: string;

  value: string | number;

  subtitle?: string;

  trend?: "up" | "down" | "neutral";

  change?: string;
}

export default function MetricCard({
  title,
  value,
  subtitle,
  trend = "neutral",
  change,
}: MetricCardProps) {
  return (
    <Card hover>

      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}

      {change && (
        <div
          className={clsx(
            "mt-5 flex items-center gap-2 text-sm font-medium",

            trend === "up" &&
              "text-green-600",

            trend === "down" &&
              "text-red-600",

            trend === "neutral" &&
              "text-slate-500"
          )}
        >
          {trend === "up" && (
            <ArrowUpRight size={16} />
          )}

          {trend === "down" && (
            <ArrowDownRight size={16} />
          )}

          {change}
        </div>
      )}

    </Card>
  );
}