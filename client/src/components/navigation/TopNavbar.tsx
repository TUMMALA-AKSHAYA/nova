export default function TopNavbar() {
  return (
    <header className="flex min-h-20 items-center justify-between gap-4 border-b border-slate-800 bg-slate-900 px-4 py-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-xl font-bold sm:text-2xl">
          ☀ Good Morning
        </h2>

        <p className="text-slate-400">
          Welcome back to NOVA
        </p>
      </div>

      <div className="shrink-0 text-right">
        <p className="font-semibold">
          Demo Workspace
        </p>

        <p className="text-sm text-slate-400">
          Last updated just now
        </p>
      </div>
    </header>
  );
}
