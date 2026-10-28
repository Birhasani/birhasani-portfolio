import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { HeroMediaStack } from "@/components/home/hero-media-stack";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MetadataPill } from "@/components/ui/metadata-pill";
import { ProjectMedia } from "@/components/ui/project-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities, featuredProjects, hero, stackGroups, supportingProjects } from "@/data/home";
import { getProject, type Project } from "@/data/projects";
import { siteConfig } from "@/data/site";

const proofPoints = [
  { value: "1 month", label: "Production launch delivered early" },
  { value: "108", label: "Product screens implemented" },
  { value: "79", label: "BECATUR research participants" },
  { value: "5 people", label: "UI/UX division led" },
] as const;

export default function Home() {
  const featured = featuredProjects.map((item) => ({ item, project: getProject(item.href?.split("/").pop() ?? "")! }));
  const supporting = supportingProjects.map((item) => ({ item, project: getProject(item.href?.split("/").pop() ?? "")! }));

  return (
    <>
      <section className="relative isolate overflow-hidden bg-background-warm pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true"><span className="absolute -right-24 top-10 size-96 rounded-full bg-[var(--orange-glow)] blur-3xl" /><span className="dot-grid absolute left-[4%] top-24 hidden h-24 w-24 opacity-20 sm:block" /></div>
        <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.96fr)_minmax(28rem,1.04fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-3xl">
            <p className="eyebrow hero-enter">{hero.eyebrow}</p>
            <h1 className="mt-6 text-[clamp(2.5rem,4.3vw,3.7rem)] font-extrabold leading-[1.01] tracking-[-0.04em] text-primary-text">
              <span className="sr-only">{hero.headline}</span>
              <span aria-hidden="true" className="hero-enter hero-enter-delay-1 block">Designing clear</span>
              <span aria-hidden="true" className="hero-enter hero-enter-delay-2 block">Digital Experiences</span>
              <span aria-hidden="true" className="hero-enter hero-enter-delay-2 block text-dark-orange">for Complex Systems.</span>
            </h1>
            <p className="hero-enter hero-enter-delay-3 mt-7 max-w-2xl text-lg leading-8 text-secondary-text sm:text-xl">{hero.body}</p>
            <div className="hero-enter hero-enter-delay-4 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className={buttonVariants({ size: "lg" })} href="#featured-work">{hero.primaryCta}<ArrowRight aria-hidden="true" className="size-4" /></Link>
              <Link className={buttonVariants({ variant: "secondary", size: "lg" })} download="Birhasani-Raka-Abiansyah-Resume.pdf" href={siteConfig.resumePath}>{hero.secondaryCta}</Link>
            </div>
            <p className="hero-enter hero-enter-delay-4 mt-7 border-l-2 border-blue pl-4 text-sm font-semibold leading-6 text-dark-blue">Research · Interaction design · Design systems · Front-end awareness</p>
          </div>
          <HeroMediaStack />
        </Container>
      </section>

      <section aria-labelledby="proof-heading" className="border-y border-border bg-surface py-20 sm:py-24">
        <Container>
          <Reveal><div className="mx-auto max-w-4xl text-center"><p className="eyebrow">Selected evidence</p><h2 id="proof-heading" className="mt-4 text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-primary-text">Measured through delivery, implementation, research, and leadership.</h2></div></Reveal>
          <ul className="mt-12 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((point, index) => <Reveal delay={index * 0.06} key={point.label}><li className="min-h-36 border-b border-border px-4 py-7 text-center last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0"><strong className="block text-[clamp(1.8rem,3vw,2.75rem)] font-extrabold tracking-[-0.04em] text-primary-text">{point.value}</strong><span className="mx-auto mt-2 block max-w-44 text-sm font-semibold leading-6 text-secondary-text">{point.label}</span></li></Reveal>)}
          </ul>
        </Container>
      </section>

      <section className="scroll-mt-20 py-24 sm:py-32" id="featured-work">
        <Container>
          <Reveal><SectionHeading eyebrow="Featured work" title="Complex product work, made tangible." description="Three case studies across production delivery, implemented AI products, and academic mobility research." /></Reveal>
          <div className="mt-16 space-y-24 sm:space-y-32">
            {featured.map(({ item, project }, index) => <FeaturedProject key={project.slug} item={item} project={project} index={index} />)}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-muted-surface py-24 sm:py-28">
        <Container>
          <Reveal><SectionHeading eyebrow="How I work" title="A connected practice from evidence to delivery." description="I move between engineering, research, interface decisions, reusable systems, and implementation without losing sight of the product problem." /></Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((capability, index) => <Reveal delay={index * 0.055} key={capability}><article className={`h-full min-h-44 rounded-2xl border border-border p-5 ${index === 0 || index === 3 ? "bg-soft-blue" : index === 1 || index === 4 ? "bg-soft-orange" : "bg-white"}`}><span className="block h-1 w-8 rounded-full bg-orange" aria-hidden="true" /><p className="mt-8 text-base font-extrabold leading-6 text-primary-text">{capability}</p><span className="mt-4 block text-xs font-bold text-dark-blue">0{index + 1}</span></article></Reveal>)}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-background-warm py-20 sm:py-24" aria-labelledby="stack-heading">
        <Container>
          <Reveal><SectionHeading eyebrow="Working stack" title="The tools behind the work." description="A practical stack for turning product questions into understandable, shippable experiences." /></Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stackGroups.map((group) => <article className="bg-white p-6" key={group.label}><p className="text-xs font-bold uppercase tracking-[0.12em] text-dark-blue">{group.label}</p><p className="mt-4 text-sm font-semibold leading-6 text-primary-text">{group.items}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal><SectionHeading eyebrow="Supporting projects" title="Additional work across retail, university services, and 3D research." /></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {supporting.map(({ item, project }, index) => <Reveal className="h-full" delay={index * 0.07} key={project.slug}><article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_18px_44px_rgba(32,40,46,0.08)] ${project.cardAsset ? "bg-white" : "bg-dark-section text-text-on-dark"}`}>{project.cardAsset ? <div className="overflow-hidden"><div className="transition-transform duration-300 group-hover:scale-[1.02]"><ProjectMedia asset={project.cardAsset} /></div></div> : <div className="relative min-h-44 overflow-hidden border-b border-white/10 p-6"><span className="absolute -right-10 -top-10 size-36 rounded-full bg-orange/15 blur-2xl" aria-hidden="true" /><p className="eyebrow text-blue">Research prototype</p><p className="mt-5 font-editorial text-3xl">27 masks.<br />972 image samples.</p></div>}<div className="flex flex-1 flex-col p-6"><div className="flex flex-wrap gap-2"><MetadataPill tone="orange">{item.status}</MetadataPill></div><h3 className={`mt-5 text-2xl font-extrabold tracking-[-0.03em] ${project.cardAsset ? "text-primary-text" : "text-text-on-dark"}`}><Link className="after:absolute after:inset-0" href={item.href!}>{item.title}</Link></h3><p className={`mt-3 text-sm leading-6 ${project.cardAsset ? "text-secondary-text" : "text-white/65"}`}>{item.subtitle}</p><p className={`mt-auto border-t pt-5 text-sm leading-6 ${project.cardAsset ? "border-border text-secondary-text" : "border-white/10 text-white/65"}`}><span className={project.cardAsset ? "font-bold text-primary-text" : "font-bold text-text-on-dark"}>Output:</span> {item.outcome}</p></div></article></Reveal>)}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container><Reveal><div className="grid overflow-hidden rounded-[1.25rem] border border-border bg-soft-blue lg:grid-cols-[0.55fr_1fr]"><div className="relative min-h-72 bg-background-warm"><Image src="/images/profile/birhasani-raka-abiansyah.webp" alt="Portrait of Birhasani Raka Abiansyah wearing a dark collared shirt." fill sizes="(max-width: 1024px) 100vw, 36vw" className="object-contain object-bottom" /></div><div className="p-7 sm:p-12 lg:p-14"><p className="eyebrow">About</p><h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-primary-text">Product design backed by technical context and delivery experience.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-text">I’m Birhasani Raka Abiansyah, a Surabaya-based Product and UI/UX Designer with 2+ years of experience across nonprofit, AI, retail, university services, and emerging technology.</p><div className="mt-6 flex flex-wrap gap-2"><MetadataPill icon={<MapPin aria-hidden="true" className="size-3.5" />}>Surabaya, Indonesia</MetadataPill><MetadataPill>Cum Laude · GPA 3.67/4.00</MetadataPill></div><Link className={`${buttonVariants({ variant: "secondary" })} mt-8`} href="/about">More about me<ArrowRight aria-hidden="true" className="size-4" /></Link></div></div></Reveal></Container>
      </section>

      <section className="relative overflow-hidden bg-dark-section py-24 text-text-on-dark sm:py-32">
        <span className="pointer-events-none absolute -right-20 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-orange/15 blur-3xl" aria-hidden="true" />
        <Container><Reveal><div className="relative max-w-4xl"><p className="eyebrow text-blue">Let’s work together</p><h2 className="mt-5 text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em]">Bring clarity to the next complex product.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">I’m open to international Product Designer and UI/UX Designer opportunities.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a className={buttonVariants({ size: "lg" })} href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" className="size-4" />Start a conversation</a><Link className={buttonVariants({ variant: "ghost", size: "lg", className: "border-white/20 text-white hover:bg-white/10 hover:text-white" })} href="/work">Explore all work<ArrowRight aria-hidden="true" className="size-4" /></Link></div></div></Reveal></Container>
      </section>
    </>
  );
}

function FeaturedProject({ item, project, index }: { item: (typeof featuredProjects)[number]; project: Project; index: number }) {
  const reverse = index % 2 === 1;
  return <Reveal><article className={`group grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}><div className="relative overflow-hidden rounded-[1.25rem] border border-border bg-muted-surface p-2 shadow-[0_24px_64px_rgba(32,40,46,0.07)] transition-[border-color,box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:border-orange/35 group-hover:shadow-[0_28px_72px_rgba(245,130,42,0.12)]"><div className="overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.02]">{project.cardAsset ? <ProjectMedia asset={project.cardAsset} /> : null}</div></div><div><div className="flex flex-wrap gap-2"><MetadataPill tone={index === 2 ? "blue" : "orange"}>{item.status}</MetadataPill><MetadataPill tone="neutral">{project.category}</MetadataPill></div><p className="mt-7 text-sm font-bold text-dark-blue">0{index + 1} · {project.timeline}</p><p className="mt-2 text-sm leading-6 text-secondary-text"><span className="font-bold text-primary-text">Role:</span> {project.role}</p><h3 className="mt-3 text-[clamp(2rem,4vw,3.8rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-primary-text">{project.title}</h3><p className="mt-5 text-lg font-semibold leading-8 text-primary-text">{item.subtitle}</p><p className="mt-5 border-l-2 border-orange pl-5 leading-7 text-secondary-text"><span className="font-bold text-primary-text">Verified outcome:</span> {item.outcome}</p><Link href={item.href!} className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-md font-bold text-dark-orange underline decoration-orange/30 decoration-2 underline-offset-4 transition-colors hover:decoration-orange">Read case study<ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" /></Link></div></article></Reveal>;
}
