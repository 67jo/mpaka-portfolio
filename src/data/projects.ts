export interface Project {
  id: string;
  translationKey: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  img?:boolean;
  imgSrc?:string
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "service-market",
    translationKey: "serviceMarket",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "PostgreSQL/PostGIS",
      "JWT",
    ],
    img:true,
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "portal-ipil",
    translationKey: "portalIpil",
    technologies: ["React", "TypeScript", "Node.js", "Fastify", "Prisma", "PostgreSQL"],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    img:false
  },
  {
    id: "task-flow",
    translationKey: "taskFlow",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    githubUrl: undefined,
    liveUrl: undefined,
    img:false
  },
];
