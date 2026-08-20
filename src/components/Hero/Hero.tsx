import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { useTranslation } from "react-i18next";
import { ProfileImage } from "../ProfileImage/ProfileImage";
import { SITE } from "../../config/site";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-5 sm:px-8 md:flex-row md:items-center md:gap-10">
        <div className="w-full text-center md:w-[58%] md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-primary animate-fade-up">
            {t("hero.eyebrow")}
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl animate-fade-up [animation-delay:80ms]">
            {t("hero.greeting")}
            <br />
            <span className="text-primary">{t("hero.name")}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg md:mx-0 animate-fade-up [animation-delay:150ms]">
            {t("hero.description")}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start animate-fade-up [animation-delay:220ms]">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              {t("hero.ctaProjects")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--border-strong)] hover:text-primary sm:w-auto"
            >
              {t("hero.ctaContact")}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 md:justify-start animate-fade-up [animation-delay:280ms]">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-primary"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-primary"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="w-full md:w-[42%]">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}
