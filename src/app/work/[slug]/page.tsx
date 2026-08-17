import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyHero, NextProject, OutcomeStrip, ProjectMetadata } from "@/components/case-study/blocks";
import { CaseStudyRenderer } from "@/components/case-study/renderer";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { caseStudyProjects, getNextProject, getProject } from "@/data/projects";
import { siteConfig, siteUrl } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = project.caseStudyTitle ?? project.title;
  const description = `${project.caseStudySubtitle ?? project.summary} ${project.outcome}`;
  const canonical = `/work/${project.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { type: "article", title, description, url: canonical, siteName: "Birhasani Raka Abiansyah Portfolio", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${project.title} case study by Birhasani Raka Abiansyah` }] },
    twitter: { card: "summary_large_image", title, description, images: [{ url: "/twitter-image", alt: `${project.title} case study by Birhasani Raka Abiansyah` }] },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.sections) notFound();
  const nextProject = getNextProject(slug);
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/work/${project.slug}#creative-work`,
    name: project.caseStudyTitle ?? project.title,
    alternateName: project.title,
    description: project.caseStudySubtitle ?? project.summary,
    url: `${siteUrl}/work/${project.slug}`,
    creator: { "@type": "Person", "@id": `${siteUrl}/#person`, name: siteConfig.name },
    genre: project.category,
    temporalCoverage: project.timeline,
    creditText: project.contribution,
    abstract: project.outcome,
  };
  return <article>
    <JsonLd data={creativeWorkJsonLd} />
    <CaseStudyHero project={project} />
    <Container className="space-y-10 py-14 sm:py-20"><ProjectMetadata project={project} /><OutcomeStrip points={project.outcomePoints} /></Container>
    <Container className="pb-24 sm:pb-32"><CaseStudyRenderer sections={project.sections} /></Container>
    {nextProject ? <NextProject project={nextProject} /> : null}
  </article>;
}
