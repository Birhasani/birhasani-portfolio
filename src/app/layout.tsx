import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, siteDescription, siteUrl } from "@/data/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Birhasani Raka Abiansyah | Software Engineer",
    template: "%s | Birhasani Raka Abiansyah",
  },
  description: siteDescription,
  applicationName: "Birhasani Raka Abiansyah Portfolio",
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: ["Software Engineer", "Front-End Developer", "Product Designer", "UI/UX Designer", "AI Products", "Design Systems", "Surabaya"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Birhasani Raka Abiansyah Portfolio",
    title: "Birhasani Raka Abiansyah | Software Engineer",
    description: siteDescription,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Birhasani Raka Abiansyah — Software Engineer with product and UI/UX expertise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birhasani Raka Abiansyah | Software Engineer",
    description: siteDescription,
    images: [{ url: "/twitter-image", alt: "Birhasani Raka Abiansyah — Software Engineer with product and UI/UX expertise" }],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: siteConfig.name,
  url: siteUrl,
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Software Engineer",
  address: { "@type": "PostalAddress", addressLocality: "Surabaya", addressCountry: "ID" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Institut Teknologi Sepuluh Nopember" },
  sameAs: [siteConfig.linkedin, siteConfig.github],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSerifDisplay.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <JsonLd data={personJsonLd} />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex flex-1 flex-col" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
