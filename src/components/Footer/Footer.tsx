import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { useTranslation } from "react-i18next";
import { SITE } from "../../config/site";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-xs text-[var(--text-faint)]">{t("footer.rights")}</p>
        <div className="flex items-center gap-4">
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] transition-colors hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-muted)] transition-colors hover:text-primary"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="text-[var(--text-muted)] transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
