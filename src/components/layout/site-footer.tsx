import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-dark-section text-text-on-dark">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow text-blue">Let&apos;s connect</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-text-on-dark sm:text-5xl">
              Thoughtful products start with a clear conversation.
            </h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-md text-base font-semibold text-orange underline decoration-orange/40 decoration-2 underline-offset-4 hover:decoration-orange"
            >
              <Mail className="size-5" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>

          <div className="lg:text-right">
            <p className="text-sm font-medium text-white/65">{siteConfig.location}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
              <ExternalLink href={siteConfig.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={siteConfig.github}>GitHub</ExternalLink>
              <Link
                href={siteConfig.resumePath}
                download
                className="inline-flex items-center gap-1 rounded-md text-sm font-semibold text-text-on-dark underline decoration-white/25 decoration-2 underline-offset-4 hover:decoration-orange"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p>Designed and built with care in Surabaya.</p>
        </div>
      </Container>
    </footer>
  );
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-md text-sm font-semibold text-text-on-dark underline decoration-white/25 decoration-2 underline-offset-4 hover:decoration-blue"
    >
      {children}
      <ArrowUpRight className="size-4" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
