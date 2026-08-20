import { Briefcase, FolderGit2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow={t("experience.eyebrow")} title={t("experience.title")} />
      </Reveal>

      <div className="mt-10 flex gap-5">
        <div className="hidden flex-col items-center pt-2 sm:flex">
          <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span className="mt-2 w-px flex-1 bg-[var(--border)]" />
        </div>

        <Reveal delay={80} className="w-full">
          <article className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] text-primary">
                  <Briefcase className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text)]">
                    {t("experience.sosoft.company")}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {t("experience.sosoft.role")}
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
                {t("experience.current")}
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              {t("experience.sosoft.description")}
            </p>

            <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                  <FolderGit2 className="h-4 w-4 text-primary" />
                  {t("experience.sosoft.highlightTitle")}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {t("experience.sosoft.highlightLabel")}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {t("experience.sosoft.highlightDescription")}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Fastify", "REST APIs", "Prisma", "MySQL", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
