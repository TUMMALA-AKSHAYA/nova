import { Outlet } from "react-router-dom";

import Sidebar from "../components/navigation/Sidebar";
import TopNavbar from "../components/navigation/TopNavbar";

export default function MainLayout() {
  return (
    <div className="flex h-screen min-w-0 flex-col bg-slate-950 text-white md:flex-row">

      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <TopNavbar />

        <main className="min-w-0 flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}
