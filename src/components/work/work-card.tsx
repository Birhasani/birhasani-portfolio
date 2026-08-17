import Link from "next/link";

import { ProjectLink } from "@/components/case-study/blocks";
import { MetadataPill } from "@/components/ui/metadata-pill";
import { ProjectMedia } from "@/components/ui/project-media";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

export function WorkCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const href = project.sections ? `/work/${project.slug}` : project.externalHref;
  return <article className={cn("overflow-hidden rounded-3xl border border-border bg-white", featured && "lg:grid lg:grid-cols-[0.9fr_1.1fr]")}>
    {project.cardAsset ? <div className="border-b border-border lg:border-b-0 lg:border-r"><ProjectMedia asset={project.cardAsset} /></div> : null}
    <div className="flex flex-col p-6 sm:p-8">
      <div className="flex flex-wrap gap-2"><MetadataPill tone="orange">{project.statusLabel}</MetadataPill><MetadataPill tone="neutral">{project.category}</MetadataPill></div>
      <h3 className="mt-6 font-display text-3xl leading-tight text-primary-text sm:text-4xl">{href ? <Link href={href} className="rounded-md underline-offset-4 hover:underline">{project.title}</Link> : project.title}</h3>
      <p className="mt-2 text-sm font-semibold text-dark-blue">{project.organization}</p>
      <p className="mt-5 leading-7 text-secondary-text">{project.summary}</p>
      <dl className="mt-7 grid gap-4 border-t border-border pt-6 text-sm sm:grid-cols-2">
        <div><dt className="font-bold text-primary-text">Role</dt><dd className="mt-1 leading-6 text-secondary-text">{project.role}</dd></div>
        <div><dt className="font-bold text-primary-text">Timeline</dt><dd className="mt-1 leading-6 text-secondary-text">{project.timeline}</dd></div>
        <div><dt className="font-bold text-primary-text">Contribution</dt><dd className="mt-1 leading-6 text-secondary-text">{project.contribution}</dd></div>
        <div><dt className="font-bold text-primary-text">Verified outcome</dt><dd className="mt-1 leading-6 text-secondary-text">{project.outcome}</dd></div>
      </dl>
      <div className="mt-auto pt-7"><ProjectLink project={project} /></div>
    </div>
  </article>;
}
