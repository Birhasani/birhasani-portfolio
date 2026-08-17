"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key === "Tab") {
        const links = Array.from(
          mobileNavigationRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [],
        );
        const firstLink = links.at(0);
        const lastLink = links.at(-1);

        if (!firstLink || !lastLink) return;

        if (event.shiftKey && document.activeElement === triggerRef.current) {
          event.preventDefault();
          lastLink.focus();
        } else if (!event.shiftKey && document.activeElement === lastLink) {
          event.preventDefault();
          triggerRef.current?.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    const frame = window.requestAnimationFrame(() => {
      mobileNavigationRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/85 bg-background/95">
      <Container className="relative flex min-h-20 items-center justify-between gap-5">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-lg py-2"
          aria-label={`${siteConfig.name}, home`}
          onClick={() => setIsOpen(false)}
        >
          <span
            className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary-text font-display text-xl text-white transition-colors group-hover:bg-dark-orange"
            aria-hidden="true"
          >
            B
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold tracking-[-0.01em] text-primary-text">
              {siteConfig.shortName}
            </span>
            <span className="mt-0.5 block truncate text-xs font-medium text-secondary-text">
              {siteConfig.role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>

        <button
          ref={triggerRef}
          type="button"
          className="grid size-11 place-items-center rounded-2xl border border-border bg-surface text-primary-text transition-colors hover:border-blue hover:bg-soft-blue md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>

        <div
          id="mobile-navigation"
          className={cn(
            "absolute left-5 right-5 top-[calc(100%+0.75rem)] rounded-3xl border border-border bg-surface p-3 shadow-[0_18px_48px_rgba(29,41,57,0.12)] md:hidden",
            isOpen ? "block" : "hidden",
          )}
        >
          <nav ref={mobileNavigationRef} className="flex flex-col" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <NavLink key={item.label} {...item} mobile onNavigate={() => setIsOpen(false)} />
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

function NavLink({
  label,
  href,
  mobile = false,
  onNavigate,
}: {
  label: string;
  href: string;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const externalProtocol = href.startsWith("mailto:");
  const isResume = label === "Resume";
  const className = cn(
    "rounded-xl font-semibold text-secondary-text transition-colors hover:bg-muted-surface hover:text-primary-text",
    mobile ? "min-h-12 px-4 py-3 text-base" : "px-4 py-2.5 text-sm",
    label === "Contact" && "text-dark-orange",
  );

  if (externalProtocol) {
    return (
      <a href={href} className={className} onClick={onNavigate}>
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={onNavigate}
      {...(isResume ? { download: true } : {})}
    >
      {label}
    </Link>
  );
}
