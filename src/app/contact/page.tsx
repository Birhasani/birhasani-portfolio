import { ArrowUpRight, Code2, Mail, UserRound } from "lucide-react";
import type { Metadata } from "next";

import { CopyEmailButton } from "@/components/contact/copy-email-button";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Birhasani Raka Abiansyah about relevant Product Designer and UI/UX Designer opportunities.", alternates: { canonical: "/contact" }, openGraph: { title: "Contact Birhasani Raka Abiansyah", description: "Discuss relevant Product Designer and UI/UX Designer opportunities.", url: "/contact", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact Birhasani Raka Abiansyah" }] }, twitter: { card: "summary_large_image", title: "Contact Birhasani Raka Abiansyah", description: "Discuss relevant Product Designer and UI/UX Designer opportunities.", images: [{ url: "/twitter-image", alt: "Contact Birhasani Raka Abiansyah" }] } };

export default function ContactPage() {
  return <section className="relative flex flex-1 items-center py-20 sm:py-28"><Container><div className="mx-auto max-w-4xl text-center"><p className="eyebrow">Contact</p><h1 className="mt-4 font-display text-5xl leading-[0.98] tracking-[-0.035em] text-primary-text sm:text-7xl">Let’s discuss a product design opportunity.</h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-secondary-text">I’m open to relevant Product Designer and UI/UX Designer opportunities, including international roles where research, interaction design, systems, and development collaboration are valued.</p><div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"><a className={buttonVariants({ size: "lg" })} href={`mailto:${siteConfig.email}`}><Mail className="size-4" aria-hidden="true" />Email me</a><CopyEmailButton email={siteConfig.email} /></div><p className="mt-5 break-all font-semibold text-primary-text">{siteConfig.email}</p></div><div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2"><ContactLink href={siteConfig.linkedin} icon={<UserRound className="size-5" aria-hidden="true" />} label="LinkedIn" detail="Professional profile and experience" /><ContactLink href={siteConfig.github} icon={<Code2 className="size-5" aria-hidden="true" />} label="GitHub" detail="Selected code and research repositories" /></div></Container></section>;
}

function ContactLink({ href, icon, label, detail }: { href: string; icon: React.ReactNode; label: string; detail: string }) {
  return <a className="group flex min-h-28 items-center gap-4 rounded-3xl border border-border bg-white p-6 transition-colors hover:border-blue" href={href} target="_blank" rel="noreferrer"><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-soft-blue text-dark-blue">{icon}</span><span className="text-left"><strong className="block text-primary-text">{label}</strong><span className="mt-1 block text-sm text-secondary-text">{detail}</span></span><ArrowUpRight className="ml-auto size-5 text-orange" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>;
}
