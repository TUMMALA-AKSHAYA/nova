export default function TopNavbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">
      <div>
        <h2 className="text-2xl font-bold">
          ☀ Good Morning
        </h2>

        <p className="text-slate-400">
          Welcome back to NOVA
        </p>
      </div>

      <div className="text-right">
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