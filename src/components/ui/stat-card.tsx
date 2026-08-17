import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type StatCardProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
  label: string;
  icon?: ReactNode;
  tone?: "orange" | "blue";
};

export function StatCard({
  value,
  label,
  icon,
  tone = "orange",
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-5 shadow-[0_12px_32px_rgba(29,41,57,0.045)]",
        className,
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={cn(
              "font-display text-4xl leading-none",
              tone === "orange" ? "text-dark-orange" : "text-dark-blue",
            )}
          >
            {value}
          </p>
          <p className="mt-3 text-sm leading-6 text-secondary-text">{label}</p>
        </div>
        {icon ? (
          <span
            className={cn(
              "grid size-10 shrink-0 place-items-center rounded-full",
              tone === "orange"
                ? "bg-soft-orange text-dark-orange"
                : "bg-soft-blue text-dark-blue",
            )}
            aria-hidden="true"
          >
            {icon}
          </span>
        ) : null}
      </div>
    </div>
  );
}
