export const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const FEATURED = [
  "Personal Site V4",
  "Calico",
  "Morning brief",
  "Jlgallery",
  "Invy",
  "BU Food Tracker",
  "PhotoPort",
  "CrossoverTrader",
  "HEYO",
  "EportfolioV3",
  "EportfolioV2",
  "Eportfolio",
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/joeulam" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joey-lam-89057021b/",
  },
  { label: "Instagram", href: "https://www.instagram.com/joeulamb/" },
];

/** The four assemblies of the boxcar — one per role. */
export const ROLES = [
  {
    key: "roof",
    company: "The Andrew Mellon Foundation",
    role: "Consultant",
    date: "10/2024 — Present",
    blurbLines: ["Next.js tools to explore an archive", "of 1,000+ grants and artworks."],
    side: "L" as const,
    part: "head" as const,
  },
  {
    key: "door",
    company: "The Andrew Mellon Foundation",
    role: "IT Intern",
    date: "06/2024 — 08/2024",
    blurbLines: ["APIs and migration tooling for", "foundation grant data."],
    side: "R" as const,
    part: "cyl3" as const,
  },
  {
    key: "chassis",
    company: "Boston University",
    role: "IT Support Specialist",
    date: "08/2023 — Present",
    blurbLines: ["500+ tickets resolved across", "three schools."],
    side: "L" as const,
    part: "crank" as const,
  },
  {
    key: "wheels",
    company: "Robo Mind Tech",
    role: "Intern",
    date: "04/2023 — 07/2023",
    blurbLines: ["Drone curriculum built on", "Python and OpenCV."],
    side: "R" as const,
    part: "fw" as const,
  },
  {
    key: "crates",
    company: "Ford Foundation",
    role: "IT Intern",
    date: "06/2026 — 08/2026",
    blurbLines: ["LLM and OCR document checks,", "plus a Jama to Monday migration."],
    side: "L" as const,
    part: "pan" as const,
  },
];

export const TOOLBOX = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "SQL / Postgres",
  "Supabase",
  "Tailwind CSS",
];
