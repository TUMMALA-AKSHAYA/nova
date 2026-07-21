import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">

      <div>

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        )}

      </div>

      {action && (
        <div>
          {action}
        </div>
      )}

    </div>
  );
}
