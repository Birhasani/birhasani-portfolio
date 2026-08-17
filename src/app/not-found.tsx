import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DecorativeBackground } from "@/components/ui/decorative-background";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <section className="relative isolate flex flex-1 items-center py-20 sm:py-28">
      <DecorativeBackground />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 font-display text-[clamp(3.5rem,12vw,7rem)] leading-none tracking-[-0.04em] text-primary-text">
            Page not found.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary-text">
            The page may have moved, or the link may not be ready yet. Return home or get in touch directly.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className={buttonVariants({ size: "lg" })}>
              <ArrowLeft className="size-4" aria-hidden="true" />
              Return home
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
