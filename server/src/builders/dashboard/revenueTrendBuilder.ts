import type { RevenueTrendPoint } from "../../types/dashboard";

export function buildRevenueTrend(): RevenueTrendPoint[] {
  return [
    {
      label: "Mon",
      revenue: 18000,
    },
    {
      label: "Tue",
      revenue: 21000,
    },
    {
      label: "Wed",
      revenue: 23500,
    },
    {
      label: "Thu",
      revenue: 25000,
    },
    {
      label: "Fri",
      revenue: 26800,
    },
  ];
}