import { Briefcase, FolderGit2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { experiences, isCurrentExperience } from "../../data/experience";
import { formatExperiencePeriod } from "../../utils/formExperienceDate";

export function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow={t("experience.eyebrow")} title={t("experience.title")} />
      </Reveal>

      <div className="mt-10 flex flex-col gap-10">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          const base = `experience.items.${exp.id}`;
          const current = isCurrentExperience(exp);
          const period = formatExperiencePeriod(
            exp.startDate,
            exp.endDate,
            i18n.language,
            t("experience.present")
          );

          const content = (
            <article className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text)]">{exp.company}</h3>
                    <p className="text-sm font-medium text-primary">{t(`${base}.role`)}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5">
                  {current && (
                    <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
                      {t("experience.current")}
                    </span>
                  )}
                  <span className="text-xs font-medium text-[var(--text-faint)]">{period}</span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                {t(`${base}.description`)}
              </p>

              {exp.hasHighlight && (
                <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                      <FolderGit2 className="h-4 w-4 text-primary" />
                      {t(`${base}.highlightTitle`)}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">
                      {t(`${base}.highlightLabel`)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {t(`${base}.highlightDescription`)}
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          );

          return (
            <div key={exp.id} className="flex gap-5">
              <div className="hidden flex-col items-center pt-2 sm:flex">
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                    current ? "border-primary" : "border-[var(--border-strong)]"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${current ? "bg-primary" : "bg-[var(--border-strong)]"}`} />
                </span>
                {index < experiences.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-[var(--border)]" />
                )}
              </div>

              <Reveal delay={80 * (index + 1)} className="w-full">
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}