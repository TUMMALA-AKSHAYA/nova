import { Outlet } from "react-router-dom";

import Sidebar from "../components/navigation/Sidebar";
import TopNavbar from "../components/navigation/TopNavbar";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <TopNavbar />

        <main className="flex-1 overflow-auto p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}
