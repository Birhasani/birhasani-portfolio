import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.03] text-primary-text">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-secondary-text sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
