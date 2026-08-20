import { useTranslation } from "react-i18next";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const BADGE_KEYS = ["role", "stack", "location", "open"] as const;

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} />
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal delay={80}>
          <div className="space-y-4 text-base leading-relaxed text-[var(--text-muted)]">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="flex flex-wrap content-start gap-3 md:justify-end">
            {BADGE_KEYS.map((key) => (
              <span
                key={key}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text)]"
              >
                {t(`about.badges.${key}`)}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
