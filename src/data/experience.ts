import { Briefcase, type LucideIcon } from "lucide-react";

export interface ExperienceEntry {
  id: string;
  company: string;
  url?: string;
  icon: LucideIcon;
  /** Formato "YYYY-MM". Usa startDate/endDate em vez de um boolean "current". */
  startDate: string;
  /** Omite (ou usa `null`) se a experiência ainda estiver a decorrer. */
  endDate?: string | null;
  hasHighlight?: boolean;
  techStack: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: "sosoft",
    company: "SOSOFT",
    url: "https://sosoft.ao/",
    icon: Briefcase,
    startDate: "2026-08",
    endDate: null, // ainda a decorrer
    hasHighlight: true,
    techStack: ["React", "TypeScript", "Node.js", "Fastify", "REST APIs", "Prisma", "MySQL", "PostgreSQL"],
  },
  {
    id: "multitel",
    company: "MULTITEL",
    url: "https://www.multitel.co.ao/",
    icon: Briefcase,
    startDate: "2026-01",
    endDate:"2026-03",    
    hasHighlight: true,
    techStack: ["React", "TypeScript", "Node.js", "Fastify", "REST APIs", "Prisma", "MySQL", "PostgreSQL"],
  },
  // Exemplo de experiência antiga/terminada:
  // {
  //   id: "acme",
  //   company: "Acme Corp",
  //   url: "https://acme.com",
  //   icon: Briefcase,
  //   startDate: "2022-06",
  //   endDate: "2023-12",
  //   hasHighlight: false,
  //   techStack: ["Vue", "Laravel", "MySQL"],
  // },
];

export const isCurrentExperience = (exp: ExperienceEntry) => !exp.endDate;