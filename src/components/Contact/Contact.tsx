import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { SITE } from "../../config/site";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-16 text-center sm:px-12">
          {/* glow de fundo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(1,231,246,0.15), transparent 60%)",
            }}
          />

          <div className="relative">
            <SectionHeading
              eyebrow={t("contact.eyebrow")}
              title={t("contact.title")}
              align="center"
            />

            <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
              {t("contact.description")}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>

              {SITE.phone && (
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--border-strong)] hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--text-muted)]">
              <a
                href={SITE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" />
                {SITE.githubHandle ?? "GitHub"}
              </a>

              <span className="hidden text-[var(--border-strong)] sm:inline">·</span>

              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <LinkedinIcon className="h-4 w-4" />
                {SITE.linkedinHandle ?? "LinkedIn"}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}