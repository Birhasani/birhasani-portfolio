import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type MetadataPillProps = HTMLAttributes<HTMLSpanElement> & {
  icon?: ReactNode;
  tone?: "blue" | "orange" | "neutral";
};

const tones = {
  blue: "border-blue/30 bg-soft-blue text-dark-blue",
  orange: "border-orange/25 bg-soft-orange text-primary-text",
  neutral: "border-border bg-muted-surface text-secondary-text",
};

export function MetadataPill({
  children,
  className,
  icon,
  tone = "blue",
  ...props
}: MetadataPillProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.01em]",
        tones[tone],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}
