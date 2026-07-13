import Card from "../ui/Card";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface BusinessHealthTrendPoint {
  label: string;
  score: number;
}

interface BusinessHealthTrendProps {
  data: BusinessHealthTrendPoint[];
}

export default function BusinessHealthTrend({
  data,
}: BusinessHealthTrendProps) {
  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Business Health Trend
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
              dataKey="score"
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