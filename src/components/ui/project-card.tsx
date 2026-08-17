import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { MotionCard } from "@/components/ui/motion-card";
import { cn } from "@/lib/cn";

import { MetadataPill } from "./metadata-pill";

type ProjectCardProps = {
  title: string;
  summary: string;
  href: string;
  status: string;
  tags: readonly string[];
  outcome: string;
  media?: ReactNode;
  className?: string;
};

export function ProjectCard({ title, summary, href, status, tags, outcome, media, className }: ProjectCardProps) {
  return (
    <MotionCard>
      <article className={cn("group relative h-full overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_18px_48px_rgba(29,41,57,0.055)] transition-[border-color,box-shadow] duration-300 hover:border-orange/40 hover:shadow-[0_22px_56px_rgba(29,41,57,0.08)]", className)}>
        <div className="aspect-video overflow-hidden border-b border-border bg-muted-surface">{media}</div>
        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap gap-2"><MetadataPill tone="orange">{status}</MetadataPill>{tags.map((tag) => <MetadataPill key={tag} tone="neutral">{tag}</MetadataPill>)}</div>
          <h3 className="mt-6 font-display text-3xl leading-tight tracking-[-0.02em] text-primary-text">
            <Link href={href} className="inline-flex items-start gap-2 rounded-md after:absolute after:inset-0">
              {title}<ArrowUpRight className="mt-1 size-5 shrink-0 text-orange transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </h3>
          <p className="mt-4 max-w-2xl leading-7 text-secondary-text">{summary}</p>
          <p className="mt-6 border-t border-border pt-5 text-sm leading-6 text-secondary-text"><span className="font-semibold text-primary-text">Outcome:</span> {outcome}</p>
        </div>
      </article>
    </MotionCard>
  );
}
