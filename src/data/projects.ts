import Img1 from "../assets/portalImg.png" 
import Img2 from "../assets/servImg.png"
import Img3 from "../assets/piga.png"
export interface Project {
  id: string;
  translationKey: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  img?:string;
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
    img:Img2,
    githubUrl: undefined,
    liveUrl: "https://servlink-plataforma.netlify.app/",
  },
  {
    id: "portal-ipil",
    translationKey: "portalIpil",
    technologies: ["React", "TypeScript", "Node.js", "Fastify", "Prisma", "MySQL"],
    githubUrl: undefined,
    liveUrl: "https://portal.ipil.ao/",
    featured: true,
    img:Img1
  },
  {
    id: "piga",
    translationKey: "piga",
    technologies: ["React", "TypeScript", "Eloquent", "Laravel", "PostgreSQL"],
    githubUrl: undefined,
    liveUrl: "https://piga.sosoft.ao/",
    img:Img3
  },
];
