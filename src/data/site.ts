const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const productionSiteUrl = "https://birhasani-portfolio.vercel.app";

export const siteUrl = (configuredSiteUrl || productionSiteUrl).replace(/\/$/, "");

export const siteConfig = {
  name: "Birhasani Raka Abiansyah",
  shortName: "Birhasani Raka",
  role: "Software Engineer · Product & UI/UX",
  location: "Surabaya, Indonesia",
  email: "birhasani8ra@gmail.com",
  linkedin: "https://linkedin.com/in/birhasani-raka-abiansyah",
  github: "https://github.com/Birhasani",
  resumePath: "/resume/Birhasani-Raka-Abiansyah-Resume.pdf",
} as const;

export const siteDescription =
  "Software Engineer in Surabaya combining product thinking, UX research, interface systems, front-end delivery, and AI product exploration.";

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: siteConfig.resumePath },
  { label: "Contact", href: "/contact" },
] as const;
