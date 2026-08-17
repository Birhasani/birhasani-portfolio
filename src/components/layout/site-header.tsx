"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

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
    <header className={cn("hero-enter sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md transition-[background-color,box-shadow] duration-300", isScrolled && "bg-background/95 shadow-[0_8px_30px_rgba(32,40,46,0.045)]")}>
      <Container className="relative flex min-h-16 items-center justify-between gap-5 sm:min-h-[4.5rem]">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-lg py-2"
          aria-label={`${siteConfig.name}, home`}
          onClick={() => setIsOpen(false)}
        >
          <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-border bg-surface" aria-hidden="true">
            <Image
              src="/images/profile/birhasani-raka-abiansyah.webp"
              alt=""
              fill
              sizes="36px"
              className="scale-[1.65] object-cover object-[50%_24%] transition-transform duration-200 group-hover:scale-[1.72]"
            />
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
            <NavLink key={item.label} {...item} active={pathname.startsWith(item.href)} />
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

        <AnimatePresence>
          {isOpen ? <motion.div id="mobile-navigation" initial={reduceMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -6 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="absolute left-5 right-5 top-[calc(100%+0.65rem)] rounded-2xl border border-border bg-surface p-2 shadow-[0_18px_48px_rgba(32,40,46,0.12)] md:hidden">
            <nav ref={mobileNavigationRef} className="flex flex-col" aria-label="Mobile navigation">
              {navigation.map((item) => <NavLink key={item.label} {...item} active={pathname.startsWith(item.href)} mobile onNavigate={() => setIsOpen(false)} />)}
            </nav>
          </motion.div> : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}

function NavLink({
  label,
  href,
  mobile = false,
  onNavigate,
  active = false,
}: {
  label: string;
  href: string;
  mobile?: boolean;
  onNavigate?: () => void;
  active?: boolean;
}) {
  const externalProtocol = href.startsWith("mailto:");
  const isResume = label === "Resume";
  const className = cn(
    "relative rounded-lg font-semibold text-secondary-text transition-colors hover:bg-muted-surface hover:text-primary-text",
    mobile ? "min-h-12 px-4 py-3 text-base" : "px-4 py-2.5 text-sm",
    active && "bg-muted-surface text-primary-text after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:bg-orange",
    label === "Contact" && "text-dark-orange hover:bg-soft-orange",
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
