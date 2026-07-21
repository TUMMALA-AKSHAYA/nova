import type { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
}

export default function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "rounded-full px-3 py-1 text-xs font-semibold",

        {
          "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200":
            variant === "default",

          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400":
            variant === "success",

          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400":
            variant === "warning",

          "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400":
            variant === "danger",
        }
      )}
    >
      {children}
    </span>
  );
}
