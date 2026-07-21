export default function ThinkingIndicator() {
  return (
    <div className="flex w-full justify-start">
      <div className="max-w-xl rounded-xl border border-slate-700 bg-slate-800/90 p-5 shadow-lg">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white">
            🧠
          </div>

          <div>
            <div className="font-semibold text-slate-100">
              NOVA is analyzing
            </div>

            <div className="mt-1 flex gap-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 [animation-delay:300ms]" />
            </div>
          </div>
        </div>

        <div className="grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
          <p className="rounded-lg bg-slate-900/60 px-3 py-2">
            Reading inventory
          </p>
          <p className="rounded-lg bg-slate-900/60 px-3 py-2">
            Checking business health
          </p>
          <p className="rounded-lg bg-slate-900/60 px-3 py-2">
            Looking for risks
          </p>
          <p className="rounded-lg bg-slate-900/60 px-3 py-2">
            Building recommendations
          </p>
        </div>
      </div>
    </div>
  );
}
