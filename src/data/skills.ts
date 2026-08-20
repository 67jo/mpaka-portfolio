import { Code2, Server, Database, Wrench, type LucideIcon } from "lucide-react";

export interface SkillCategory {
  id: "frontend" | "backend" | "database" | "tools";
  icon: LucideIcon;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    icon: Code2,
    items: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    id: "backend",
    icon: Server,
    items: [
      "Node.js",
      "Fastify",
      "Express.js",
      "Django",
      "Django REST Framework",
      "Laravel",
      "REST APIs",
    ],
  },
  {
    id: "database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "Prisma", "SQL"],
  },
  {
    id: "tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];
