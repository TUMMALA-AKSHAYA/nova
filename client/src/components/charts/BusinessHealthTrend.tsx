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
  { day: "Mon", health: 71 },
  { day: "Tue", health: 74 },
  { day: "Wed", health: 73 },
  { day: "Thu", health: 77 },
  { day: "Fri", health: 79 },
];

export default function BusinessHealthTrend() {
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

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="health"
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