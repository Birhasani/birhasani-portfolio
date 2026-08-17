import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { ControlledGif } from "@/components/ui/controlled-gif";
import { MetadataPill } from "@/components/ui/metadata-pill";
import { ProjectMedia } from "@/components/ui/project-media";
import type { Project, ProjectAsset, ProjectMotionAsset } from "@/data/projects";
import { cn } from "@/lib/cn";

export function CaseStudyHero({ project }: { project: Project }) {
  return <header className="relative overflow-hidden border-b border-border py-16 sm:py-24"><Container><Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-dark-blue hover:underline">Work <span aria-hidden="true">/</span> {project.prominence === "featured" ? "Featured case study" : "Additional work"}</Link><div className="mt-9 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end"><div><MetadataPill tone="orange">{project.statusLabel}</MetadataPill><p className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-dark-blue">{project.title}</p><h1 className="mt-3 font-display text-5xl leading-[0.98] tracking-[-0.035em] text-primary-text sm:text-7xl">{project.caseStudyTitle ?? project.title}</h1><p className="mt-6 max-w-3xl text-xl leading-8 text-secondary-text">{project.caseStudySubtitle ?? project.summary}</p>{project.externalHref ? <a className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-dark-blue underline decoration-blue/30 decoration-2 underline-offset-4 hover:decoration-blue" href={project.externalHref} target="_blank" rel="noreferrer">View project repository <ArrowUpRight className="size-4" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a> : null}</div><p className="border-l-2 border-orange pl-5 text-lg leading-8 text-primary-text">{project.outcome}</p></div>{project.heroAsset ? <div className="mt-12 overflow-hidden rounded-3xl border border-border"><ProjectMedia asset={project.heroAsset} priority /></div> : null}</Container></header>;
}

export function ProjectMetadata({ project }: { project: Project }) {
  const items = [{ label: "Organization", value: project.organization }, { label: "Role", value: project.role }, { label: "Timeline", value: project.timeline }, { label: "Status", value: project.statusLabel }, { label: "Contribution", value: project.contribution }];
  return <dl className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">{items.map((item) => <div className="bg-white p-5" key={item.label}><dt className="text-xs font-bold uppercase tracking-[0.12em] text-dark-blue">{item.label}</dt><dd className="mt-2 text-sm leading-6 text-primary-text">{item.value}</dd></div>)}</dl>;
}

export function OutcomeStrip({ points }: { points: readonly string[] }) {
  return <ul className="grid overflow-hidden rounded-3xl border border-border bg-soft-orange md:grid-cols-3">{points.map((point, index) => <li className="flex gap-4 border-b border-orange/15 p-6 last:border-0 md:border-b-0 md:border-r md:last:border-r-0" key={point}><span className="font-display text-2xl text-dark-orange">{String(index + 1).padStart(2, "0")}</span><span className="font-semibold leading-6 text-primary-text">{point}</span></li>)}</ul>;
}

export function NarrativeSection({ eyebrow, title, children, className }: { eyebrow?: string; title: string; children: ReactNode; className?: string }) {
  return <section className={cn("grid gap-6 border-t border-border pt-10 md:grid-cols-[0.7fr_1.3fr] md:gap-14", className)}>{<div>{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h2 className="mt-3 font-display text-3xl leading-tight text-primary-text sm:text-4xl">{title}</h2></div>}<div className="space-y-5 text-lg leading-8 text-secondary-text">{children}</div></section>;
}

export function InsightCards({ items }: { items: readonly { title: string; body: string }[] }) {
  return <div className="grid gap-4 sm:grid-cols-2">{items.map((item) => <article className="rounded-3xl border border-border bg-soft-blue p-6" key={item.title}><h3 className="font-display text-2xl text-primary-text">{item.title}</h3><p className="mt-3 leading-7 text-secondary-text">{item.body}</p></article>)}</div>;
}

export function ImageFigure({ asset, caption }: { asset: ProjectAsset; caption?: string }) {
  return <figure><div className="overflow-hidden rounded-3xl border border-border"><ProjectMedia asset={asset} /></div>{caption ? <figcaption className="mt-3 text-sm leading-6 text-secondary-text">{caption}</figcaption> : null}</figure>;
}

export function ImageGallery({ assets }: { assets: readonly ProjectAsset[] }) {
  return <div className="grid gap-5 md:grid-cols-2">{assets.map((item) => <ImageFigure asset={item} key={item.filename} />)}</div>;
}

export function MotionGallery({ assets }: { assets: readonly ProjectMotionAsset[] }) {
  return <div className="grid gap-5 sm:grid-cols-3">{assets.map((asset) => <figure className="rounded-3xl border border-border bg-muted-surface p-6 text-center" key={asset.gifSrc}><ControlledGif alt={asset.alt} gifSrc={asset.gifSrc} posterSrc={asset.posterSrc} /><figcaption className="mt-4 font-semibold text-primary-text">{asset.label}</figcaption></figure>)}</div>;
}

export function BeforeAfter({ before, after, description }: { before: ProjectAsset; after: ProjectAsset; description: string }) {
  return <div><div className="grid gap-5 md:grid-cols-2"><div><p className="mb-3 text-sm font-bold text-secondary-text">Before</p><ImageFigure asset={before} /></div><div><p className="mb-3 text-sm font-bold text-dark-orange">After</p><ImageFigure asset={after} /></div></div><p className="mt-4 text-sm leading-6 text-secondary-text">{description}</p></div>;
}

export function ProcessSteps({ steps }: { steps: readonly { title: string; body: string }[] }) {
  return <ol className="grid gap-4 sm:grid-cols-2">{steps.map((step, index) => <li className="rounded-3xl border border-border bg-white p-6" key={step.title}><span className="text-sm font-bold text-dark-orange">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 font-display text-2xl text-primary-text">{step.title}</h3><p className="mt-2 leading-7 text-secondary-text">{step.body}</p></li>)}</ol>;
}

export function MetricComparison({ comparisons, note }: { comparisons: readonly { label: string; before: string; after: string }[]; note?: string }) {
  return <div><div className="overflow-hidden rounded-3xl border border-border">{comparisons.map((item) => <div className="grid grid-cols-[1fr_auto_auto] items-center gap-5 border-b border-border bg-white p-5 last:border-0" key={item.label}><p className="font-semibold text-primary-text">{item.label}</p><div><span className="block text-xs text-secondary-text">First</span><strong className="text-xl text-primary-text">{item.before}</strong></div><div><span className="block text-xs text-secondary-text">Second</span><strong className="text-xl text-dark-orange">{item.after}</strong></div></div>)}</div>{note ? <p className="mt-3 text-sm text-secondary-text">{note}</p> : null}</div>;
}

export function SUSComparison({ comparisons, note }: { comparisons: readonly { label: string; first: number; second: number }[]; note: string }) {
  return <div role="group" aria-label="System Usability Scale score comparison across two testing iterations"><div className="grid gap-5">{comparisons.map((item) => <section className="rounded-3xl border border-border bg-white p-6" aria-label={`${item.label}: SUS increased from ${item.first} to ${item.second} out of 100`} key={item.label}><div className="flex flex-wrap items-center justify-between gap-3"><h3 className="font-display text-2xl text-primary-text">{item.label}</h3><p className="rounded-full bg-soft-orange px-3 py-1 text-sm font-bold text-dark-orange">Increase of {(item.second - item.first).toFixed(2)} points</p></div><div className="mt-6 space-y-5"><div><div className="mb-2 flex items-baseline justify-between gap-4"><span className="text-sm font-semibold text-secondary-text">Iteration 1</span><strong className="text-xl text-primary-text">{item.first} <span className="text-sm font-medium text-secondary-text">/ 100</span></strong></div><div className="h-3 overflow-hidden rounded-full bg-muted-surface" aria-hidden="true"><span className="block h-full rounded-full bg-blue" style={{ width: `${item.first}%` }} /></div></div><div><div className="mb-2 flex items-baseline justify-between gap-4"><span className="text-sm font-semibold text-secondary-text">Iteration 2</span><strong className="text-xl text-primary-text">{item.second} <span className="text-sm font-medium text-secondary-text">/ 100</span></strong></div><div className="h-3 overflow-hidden rounded-full bg-muted-surface" aria-hidden="true"><span className="block h-full rounded-full bg-orange" style={{ width: `${item.second}%` }} /></div></div></div><p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-dark-blue"><span>Iteration 1: {item.first}</span><ArrowRight className="size-4" aria-hidden="true" /><span>Iteration 2: {item.second}</span></p></section>)}</div><p className="mt-4 text-sm leading-6 text-secondary-text">{note}</p></div>;
}

export function QuoteOrFeedback({ quote, attribution, summary }: { quote?: string; attribution?: string; summary?: string }) {
  return <aside className="rounded-3xl border border-border bg-soft-blue p-7">{quote ? <blockquote className="font-display text-2xl leading-relaxed text-primary-text">“{quote}”</blockquote> : null}{attribution ? <p className="mt-4 text-sm font-semibold text-dark-blue">{attribution}</p> : null}{summary ? <p className="leading-7 text-secondary-text">{summary}</p> : null}</aside>;
}

export function Transformation({ from, to, note }: { from: readonly string[]; to: string; note?: string }) {
  return <div><div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-6"><div className="rounded-3xl border border-border bg-muted-surface p-6"><p className="text-xs font-bold uppercase tracking-[0.12em] text-secondary-text">Before</p><ul className="mt-5 space-y-3">{from.map((item) => <li className="rounded-2xl border border-border bg-white px-4 py-3 font-semibold text-primary-text" key={item}>{item}</li>)}</ul></div><div className="grid place-items-center" aria-hidden="true"><ArrowRight className="size-7 rotate-90 text-orange lg:rotate-0" /></div><div className="flex min-h-52 items-center rounded-3xl border border-orange/25 bg-soft-orange p-7"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-dark-orange">After</p><p className="mt-4 font-display text-3xl leading-tight text-primary-text">{to}</p></div></div></div>{note ? <p className="mt-4 text-sm leading-6 text-secondary-text">{note}</p> : null}</div>;
}

export function Reflection({ learned, next }: { learned: string; next: string }) {
  return <div className="grid gap-5 sm:grid-cols-2"><div className="rounded-3xl bg-soft-orange p-6"><h3 className="font-display text-2xl">What I learned</h3><p className="mt-3 leading-7 text-secondary-text">{learned}</p></div><div className="rounded-3xl bg-soft-blue p-6"><h3 className="font-display text-2xl">What I would do next</h3><p className="mt-3 leading-7 text-secondary-text">{next}</p></div></div>;
}

export function NextProject({ project }: { project: Project }) {
  return <nav aria-label="Case study navigation" className="border-t border-border bg-muted-surface py-16 sm:py-20"><Container><p className="eyebrow">Next project</p><Link className="group mt-4 flex items-end justify-between gap-6 rounded-3xl border border-border bg-white p-6 transition-colors hover:border-orange/40 sm:p-9" href={`/work/${project.slug}`}><span><span className="font-display text-4xl text-primary-text sm:text-5xl">{project.title}</span><span className="mt-2 block text-secondary-text">{project.summary}</span></span><ArrowRight className="size-7 shrink-0 text-orange transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link></Container></nav>;
}

export function ProjectLink({ project }: { project: Project }) {
  const href = project.sections ? `/work/${project.slug}` : project.externalHref;
  if (!href) return null;
  return <Link href={href} className="inline-flex min-h-11 items-center gap-2 font-semibold text-dark-blue hover:underline">View project <ArrowUpRight className="size-4" aria-hidden="true" /></Link>;
}
