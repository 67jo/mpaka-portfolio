import { useTranslation } from "react-i18next";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { skillCategories } from "../../data/skills";

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow={t("skills.eyebrow")} title={t("skills.title")} />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skillCategories.map(({ id, icon: Icon, items }, index) => (
          <Reveal key={id} delay={index * 70}>
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-strong)]">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-primary">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>
                <h3 className="text-base font-semibold text-[var(--text)]">
                  {t(`skills.categories.${id}`)}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
