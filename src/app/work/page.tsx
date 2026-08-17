import type { Metadata } from "next";

import { WorkCard } from "@/components/work/work-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredCaseStudies, supportingWork } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product design and UI/UX case studies across nonprofit operations, AI products, mobility research, retail, university services, and 3D reconstruction.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Selected Product Design Work", description: "Product design and UI/UX case studies across production, implemented, event-deployed, academic, and research work.", url: "/work", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Selected product design work by Birhasani Raka Abiansyah" }] },
  twitter: { card: "summary_large_image", title: "Selected Product Design Work", description: "Product design and UI/UX case studies by Birhasani Raka Abiansyah.", images: [{ url: "/twitter-image", alt: "Selected product design work by Birhasani Raka Abiansyah" }] },
};

export default function WorkPage() {
  return <>
    <header className="border-b border-border py-20 sm:py-28"><Container><p className="eyebrow">Selected work</p><h1 className="mt-4 max-w-5xl font-display text-5xl leading-[0.98] tracking-[-0.035em] text-primary-text sm:text-7xl">Product design grounded in evidence and carried through delivery.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-secondary-text">Six projects across production, implemented, event-deployed, academic, and research work—with contribution and status stated clearly.</p></Container></header>
    <section className="py-20 sm:py-28"><Container><SectionHeading eyebrow="Featured case studies" title="Detailed work across systems, AI products, and mobility research." description="These projects have dedicated case-study foundations and verified project summaries." /><div className="mt-12 space-y-7">{featuredCaseStudies.map((project) => <WorkCard featured key={project.slug} project={project} />)}</div></Container></section>
    <section className="border-t border-border bg-muted-surface py-20 sm:py-28"><Container><SectionHeading eyebrow="Additional work" title="Supporting projects with distinct delivery contexts." description="No filters are needed for this focused set of six projects." /><div className="mt-12 grid gap-6 lg:grid-cols-3">{supportingWork.map((project) => <WorkCard key={project.slug} project={project} />)}</div></Container></section>
  </>;
}
