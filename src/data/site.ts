const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (configuredSiteUrl || "http://localhost:3000").replace(/\/$/, "");

export const siteConfig = {
  name: "Birhasani Raka Abiansyah",
  shortName: "Birhasani Raka",
  role: "Product & UI/UX Designer",
  location: "Surabaya, Indonesia",
  email: "birhasani8ra@gmail.com",
  linkedin: "https://linkedin.com/in/birhasani-raka-abiansyah",
  github: "https://github.com/Birhasani",
  resumePath: "/resume/Birhasani-Raka-Abiansyah-Resume.pdf",
} as const;

export const siteDescription =
  "Product and UI/UX Designer in Surabaya combining UX research, interaction design, design systems, and front-end understanding.";

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: siteConfig.resumePath },
  { label: "Contact", href: "/contact" },
] as const;
