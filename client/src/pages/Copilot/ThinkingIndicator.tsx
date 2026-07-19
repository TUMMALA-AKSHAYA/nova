export default function ThinkingIndicator() {
  return (
    <div className="rounded-2xl bg-slate-800 p-5 w-fit">
      <div className="font-semibold mb-3">
        🧠 NOVA is analyzing...
      </div>

      <div className="space-y-2 text-sm text-slate-400">
        <p>✓ Reading inventory</p>
        <p>✓ Checking business health</p>
        <p>✓ Looking for risks</p>
        <p>✓ Building recommendations</p>
      </div>
    </div>
  );
}