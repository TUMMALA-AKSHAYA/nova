interface Props {
  health?: number;
}

export default function BusinessSnapshot({
  health = 93,
}: Props) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <h3 className="mb-4 text-lg font-semibold">
          📊 Business Snapshot
        </h3>

        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span>Health Score</span>
            <span className="font-bold text-emerald-400">
              {health}/100
            </span>
          </div>

          <div className="flex justify-between">
            <span>Critical Alerts</span>
            <span className="font-bold text-red-400">
              2
            </span>
          </div>

          <div className="flex justify-between">
            <span>Products</span>
            <span className="font-bold">
              58
            </span>
          </div>

          <div className="flex justify-between">
            <span>Stockout Risk</span>
            <span className="font-bold text-orange-400">
              5
            </span>
          </div>

          <div className="flex justify-between">
            <span>Dead Stock</span>
            <span className="font-bold text-yellow-400">
              ₹18,400
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}