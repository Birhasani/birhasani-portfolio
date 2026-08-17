export type PortfolioProject = {
  title: string;
  subtitle: string;
  href?: string;
  tags: readonly string[];
  outcome: string;
  status: string;
};

export const hero = {
  eyebrow: "Product & UI/UX Designer",
  headline: "Designing clear digital experiences for complex systems.",
  body: "I combine UX research, interaction design, design systems, and front-end understanding to create digital products that are clear, usable, and ready for implementation.",
  primaryCta: "View Selected Work",
  secondaryCta: "Download Resume",
} as const;

export const proofPoints = [
  "Production launch delivered one month early",
  "108 product screens implemented",
  "79 BECATUR research participants",
  "Five-person UI/UX division led",
] as const;

export const featuredProjects: readonly PortfolioProject[] = [
  { title: "Telusur Mahija", subtitle: "Unifying fragmented beneficiary data into one production platform.", href: "/work/telusur-mahija", tags: ["Product Design", "UX Research", "Front-End", "Project Lead"], outcome: "12 modules, production launch, delivered one month early", status: "Production work" },
  { title: "Widya Robotics", subtitle: "Turning behavioral data into an implemented AI product redesign.", href: "/work/widya-robotics", tags: ["Product Design", "Behavioral Analytics", "Design System"], outcome: "10+ issues identified, 108 screens implemented", status: "Implemented work" },
  { title: "BECATUR", subtitle: "Designing an inclusive reservation experience for traditional becak.", href: "/work/becatur", tags: ["UX Research", "Mobile Design", "Usability Testing"], outcome: "79 participants and improved SUS scores across both user groups", status: "Academic prototype" },
] as const;

export const capabilities = [
  "UX Research & Product Discovery",
  "Interaction & Interface Design",
  "Design Systems",
  "Usability Testing",
  "Design-to-Development Collaboration",
] as const;

export const supportingProjects: readonly PortfolioProject[] = [
  { title: "Avalon AI x Matahari", subtitle: "AI virtual try-on and personal color analysis used during Matahari’s Ramadan event.", href: "/work/avalon-ai-matahari", tags: ["Product Design", "Event Deployment"], outcome: "28 screens, one exhibition banner, tested with 10 booth visitors", status: "Event-deployed work" },
  { title: "ITS Website Team", subtitle: "Leading UI/UX and WordPress delivery for university service websites.", href: "/work/its-website-team", tags: ["UI/UX Lead", "WordPress", "Team Leadership"], outcome: "Five-person division led; approximately 30% more completed PPID requests", status: "Production work" },
  { title: "BaliMask3D", subtitle: "Optimizing deep learning-based single-view 3D reconstruction for Balinese masks.", href: "/work/balimask3d", tags: ["Research", "3D Reconstruction", "Front-End"], outcome: "27 masks, 36 views each, 972 image samples", status: "Research prototype" },
] as const;
