import { NavLink } from "react-router-dom";

import {
  Home,
  Package,
  HeartPulse,
  BarChart3,
  Upload,
  Settings,
  Bot,
} from "lucide-react";
const menu = [
  {
    name: "Today's Decisions",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "Products",
    path: "/products",
    icon: Package,
  },
  {
    name: "Business Health",
    path: "/health",
    icon: HeartPulse,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Upload",
    path: "/upload",
    icon: Upload,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    name: "Copilot",
    path: "/copilot",
    icon: Bot,
  }
];

export default function Sidebar() {
  return (
    <aside className="shrink-0 border-b border-slate-800 bg-slate-900 md:w-72 md:border-b-0 md:border-r">
      <div className="p-4 md:p-8">
        <h1 className="text-2xl font-bold text-blue-400 md:text-3xl">
          NOVA
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          AI COO
        </p>
      </div>

      <nav className="flex gap-2 overflow-x-auto px-4 pb-4 md:block md:space-y-2 md:pb-0">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-800"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
