import { useTranslation } from "react-i18next";
import {
  LANGUAGE_STORAGE_KEY,
  type SupportedLanguage,
} from "../../i18n";

const LANGUAGES: { code: SupportedLanguage; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = (i18n.language?.split("-")[0] ?? "pt") as SupportedLanguage;

  const handleSelect = (code: SupportedLanguage) => {
    i18n.changeLanguage(code);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
  };

  return (
    <div
      role="group"
      aria-label={t("language.toggle")}
      className="flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-0.5 text-xs font-semibold"
    >
      {LANGUAGES.map(({ code, label }) => {
        const active = current === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => handleSelect(code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active
                ? "bg-primary text-ink"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
