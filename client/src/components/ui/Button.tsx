import clsx from "clsx";
//import { ButtonHTMLAttributes } from "react";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: "primary" | "secondary" | "danger";

  size?: "sm" | "md" | "lg";

  loading?: boolean;
}

export default function Button({

  children,

  variant = "primary",

  size = "md",

  loading = false,

  className,

  disabled,

  ...props

}: ButtonProps) {

  return (

    <button

      disabled={disabled || loading}

      className={clsx(

        "rounded-xl font-semibold transition-all duration-200",

        "disabled:cursor-not-allowed",

        "disabled:opacity-50",

        "focus:outline-none",

        "focus:ring-2",

        "focus:ring-blue-500",

        "hover:-translate-y-0.5",

        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-700",

        variant === "secondary" &&
          "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800",

        variant === "danger" &&
          "bg-red-600 text-white hover:bg-red-700",

        size === "sm" &&
          "px-3 py-2 text-sm",

        size === "md" &&
          "px-5 py-3",

        size === "lg" &&
          "px-6 py-4 text-lg",

        className

      )}

      {...props}

    >

      {loading ? "Loading..." : children}

    </button>

  );

}