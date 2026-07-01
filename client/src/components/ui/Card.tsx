//import { ReactNode } from "react";
import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;

  variant?: "default" | "outlined" | "elevated";

  padding?: "sm" | "md" | "lg";

  hover?: boolean;

  className?: string;
}

export default function Card({
  children,
  variant = "default",
  padding = "md",
  hover = false,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl transition-all duration-200",

        // Background
        "bg-white dark:bg-slate-900",

        // Border
        variant === "default" &&
          "border border-slate-200 dark:border-slate-800",

        variant === "outlined" &&
          "border-2 border-slate-300 dark:border-slate-700",

        // Shadow
        variant === "elevated" &&
          "shadow-lg border border-slate-200 dark:border-slate-800",

        // Padding
        padding === "sm" && "p-4",

        padding === "md" && "p-6",

        padding === "lg" && "p-8",

        // Hover
        hover &&
          "hover:-translate-y-1 hover:shadow-xl",

        className
      )}
    >
      {children}
    </div>
  );
}