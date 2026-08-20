import { ExternalLink, LayoutGrid } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { projects } from "../../data/projects";

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow={t("projects.eyebrow")} title={t("projects.title")} />
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all hover:-translate-y-1 hover:border-[var(--border-strong)]">
              {project.img ? (
                <div className="aspect-[16/10] w-full overflow-hidden border-b border-[var(--border)]">
                  <img
                    src={project.img}
                    alt={t(`projects.${project.translationKey}.name`)}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center border-b border-[var(--border)] bg-[var(--bg)]">
                  <LayoutGrid
                    className="h-9 w-9 text-primary/50 transition-colors group-hover:text-primary"
                    strokeWidth={1.25}
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                {project.featured && (
                  <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                    {t("projects.professionalTag")}
                  </span>
                )}
                <h3 className="text-lg font-bold text-[var(--text)]">
                  {t(`projects.${project.translationKey}.name`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {t(`projects.${project.translationKey}.description`)}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 pt-2 text-sm font-medium">
                  <a
                    href={project.githubUrl ?? "#"}
                    target={project.githubUrl ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-disabled={!project.githubUrl}
                    className={`flex items-center gap-1.5 transition-colors ${
                      project.githubUrl
                        ? "text-[var(--text)] hover:text-primary"
                        : "pointer-events-none text-[var(--text-faint)]"
                    }`}
                  >
                    <GithubIcon className="h-4 w-4" /> {t("projects.github")}
                  </a>
                  <a
                    href={project.liveUrl ?? "#"}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-disabled={!project.liveUrl}
                    className={`flex items-center gap-1.5 transition-colors ${
                      project.liveUrl
                        ? "text-[var(--text)] hover:text-primary"
                        : "pointer-events-none text-[var(--text-faint)]"
                    }`}
                  >
                    <ExternalLink className="h-4 w-4" /> {t("projects.liveDemo")}
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}