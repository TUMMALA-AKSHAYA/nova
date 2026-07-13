import type { BusinessHealthTrendPoint } from "../../types/dashboard";

export function buildBusinessHealthTrend(): BusinessHealthTrendPoint[] {
  return [
    {
      label: "Mon",
      score: 71,
    },
    {
      label: "Tue",
      score: 73,
    },
    {
      label: "Wed",
      score: 75,
    },
    {
      label: "Thu",
      score: 77,
    },
    {
      label: "Fri",
      score: 79,
    },
  ];
}