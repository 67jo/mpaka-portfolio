import { useTranslation } from "react-i18next";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { processSteps } from "../../data/process";

export function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow={t("process.eyebrow")} title={t("process.title")} align="center" />
      </Reveal>

      <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--border)] lg:block"
        />
        {processSteps.map((step, index) => (
          <Reveal key={step.id} delay={index * 90} className="relative flex flex-col items-center text-center">
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] text-sm font-bold text-primary">
              {step.number}
            </span>
            <step.icon className="mt-4 h-5 w-5 text-primary" strokeWidth={1.5} />
            <h3 className="mt-3 text-sm font-semibold text-[var(--text)]">
              {t(`process.steps.${step.translationKey}.title`)}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
              {t(`process.steps.${step.translationKey}.description`)}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
