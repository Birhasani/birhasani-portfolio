import { ArrowRight, Check, Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DecorativeBackground } from "@/components/ui/decorative-background";
import { MetadataPill } from "@/components/ui/metadata-pill";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities, featuredProjects, hero, proofPoints, supportingProjects } from "@/data/home";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-36">
        <DecorativeBackground className="opacity-70" />
        <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-20">
          <Reveal>
            <div className="max-w-4xl">
              <p className="eyebrow mb-5">{hero.eyebrow}</p>
              <h1 className="font-display text-[clamp(3rem,8vw,6.75rem)] leading-[0.94] tracking-[-0.035em] text-primary-text">
                Designing clear digital experiences for <span className="text-dark-orange">complex systems.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary-text sm:text-xl">{hero.body}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className={buttonVariants({ size: "lg" })} href="#featured-work">{hero.primaryCta}<ArrowRight aria-hidden="true" className="size-4" /></Link>
                <Link className={buttonVariants({ variant: "secondary", size: "lg" })} download="Birhasani-Raka-Abiansyah-Resume.pdf" href={siteConfig.resumePath}>{hero.secondaryCta}</Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative mx-auto w-full max-w-lg rounded-3xl border border-border bg-white p-6 shadow-[0_24px_70px_rgba(29,41,57,0.08)] sm:p-8">
              <span className="absolute -right-5 -top-5 size-24 rounded-full bg-soft-orange" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-border pb-5"><p className="text-sm font-bold text-primary-text">Product design practice</p><span className="size-3 rounded-full bg-blue" aria-hidden="true" /></div>
                <ol className="mt-2">
                  {["Research", "Structure", "Interface", "Delivery"].map((step, index) => (
                    <li className="flex items-center gap-4 border-b border-border py-5 last:border-0" key={step}>
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-soft-blue text-sm font-bold text-dark-blue">{String(index + 1).padStart(2, "0")}</span>
                      <span className="font-semibold text-primary-text">{step}</span><span className="ml-auto h-px w-10 bg-orange" aria-hidden="true" />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-label="Selected proof points" className="border-y border-border bg-white">
        <Container><ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point, index) => (
            <li className="flex min-h-36 items-start gap-4 border-b border-border py-7 sm:px-6 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0" key={point}>
              <span className="font-display text-2xl text-orange">{String(index + 1).padStart(2, "0")}</span><p className="max-w-56 font-semibold leading-6 text-primary-text">{point}</p>
            </li>
          ))}
        </ul></Container>
      </section>

      <section className="scroll-mt-24 py-24 sm:py-32" id="featured-work">
        <Container>
          <Reveal><SectionHeading eyebrow="Featured work" title="Selected projects shaped by evidence, systems, and delivery." description="Three case studies across production work, implemented product design, and academic research." /></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div className={index === 0 ? "lg:col-span-2" : undefined} key={project.title}>
                <ProjectCard className={index === 0 ? "lg:grid lg:grid-cols-2" : undefined} href={project.href ?? "#"} media={<AssetPlaceholder filename={project.assetFilename} ratio={project.assetRatio} />} outcome={project.outcome} status={project.status} summary={project.subtitle} tags={project.tags} title={project.title} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-muted-surface py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal><SectionHeading eyebrow="Capabilities" title="From discovery to implementation-ready design." description="A product design practice grounded in research, clear interaction decisions, reusable systems, and close development collaboration." /></Reveal>
          <Reveal><ol className="border-t border-border">
            {capabilities.map((capability, index) => (
              <li className="flex items-center gap-5 border-b border-border py-6" key={capability}><span className="text-sm font-bold text-dark-blue">{String(index + 1).padStart(2, "0")}</span><span className="font-display text-2xl text-primary-text sm:text-3xl">{capability}</span><Check aria-hidden="true" className="ml-auto size-5 shrink-0 text-orange" /></li>
            ))}
          </ol></Reveal>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal><SectionHeading eyebrow="Supporting projects" title="Additional work across AI, university services, and 3D research." /></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {supportingProjects.map((project) => (
              <article className="overflow-hidden rounded-3xl border border-border bg-white transition-[border-color,box-shadow] duration-200 hover:border-blue/50 hover:shadow-[0_16px_40px_rgba(29,41,57,0.07)]" key={project.title}>
                <AssetPlaceholder filename={project.assetFilename} ratio={project.assetRatio} />
                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap gap-2"><MetadataPill tone="orange">{project.status}</MetadataPill>{project.tags.map((tag) => <MetadataPill key={tag} tone="neutral">{tag}</MetadataPill>)}</div>
                  <div><h3 className="font-display text-2xl text-primary-text">{project.href ? <Link className="underline-offset-4 hover:underline" href={project.href}>{project.title}</Link> : project.title}</h3><p className="mt-2 text-sm leading-6 text-secondary-text">{project.subtitle}</p></div>
                  <p className="border-t border-border pt-4 text-sm leading-6 text-secondary-text"><span className="font-semibold text-primary-text">Output:</span> {project.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container><Reveal>
          <div className="rounded-3xl border border-border bg-soft-blue px-6 py-12 sm:px-12 sm:py-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div className="max-w-3xl"><p className="eyebrow mb-4">About</p><h2 className="font-display text-4xl leading-tight text-primary-text sm:text-5xl">Product design with the technical context to make ideas buildable.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-secondary-text">I’m Birhasani Raka Abiansyah, a Surabaya-based Product and UI/UX Designer with 2+ years of experience across nonprofit, AI, retail, university services, and emerging technology.</p>
              <div className="mt-6 flex flex-wrap gap-2"><MetadataPill><MapPin aria-hidden="true" className="size-3.5" />Surabaya, Indonesia</MetadataPill><MetadataPill>Informatics graduate, ITS</MetadataPill><MetadataPill>Cum Laude · GPA 3.67/4.00</MetadataPill></div>
            </div>
            <Link className={`${buttonVariants({ variant: "secondary" })} mt-8 lg:mt-0`} href="/about">More about me<ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </Reveal></Container>
      </section>

      <section className="bg-primary-text py-24 text-white sm:py-32">
        <Container><Reveal><div className="mx-auto max-w-4xl text-center"><p className="eyebrow mb-5 text-blue">Let’s work together</p><h2 className="font-display text-4xl leading-tight sm:text-6xl">Looking for a designer who can bring clarity to complex products?</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">I’m open to international Product Designer and UI/UX Designer opportunities.</p><a className={`${buttonVariants({ size: "lg" })} mt-9`} href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" className="size-4" />Start a conversation</a></div></Reveal></Container>
      </section>
    </>
  );
}
