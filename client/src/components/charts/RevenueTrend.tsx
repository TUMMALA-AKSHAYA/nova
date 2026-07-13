import Card from "../ui/Card";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface RevenueTrendPoint {
  label: string;
  revenue: number;
}

interface RevenueTrendProps {
  data: RevenueTrendPoint[];
}

export default function RevenueTrend({
  data,
}: RevenueTrendProps) {
  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Revenue Trend
        </h2>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last 5 business days
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="label" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}