import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Experience } from "../components/Experience/Experience";
import { Skills } from "../components/Skills/Skills";
import { Projects } from "../components/Projects/Projects";
import { Process } from "../components/Process/Process";
import { Contact } from "../components/Contact/Contact";

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Process />
      <Contact />
    </main>
  );
}
