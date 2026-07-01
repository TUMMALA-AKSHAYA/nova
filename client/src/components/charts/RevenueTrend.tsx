import Card from "../ui/Card";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", revenue: 18000 },
  { day: "Tue", revenue: 22000 },
  { day: "Wed", revenue: 19500 },
  { day: "Thu", revenue: 24000 },
  { day: "Fri", revenue: 26000 },
];
export default function RevenueTrend() {
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

            <XAxis dataKey="day" />

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