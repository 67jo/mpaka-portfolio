import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./locales/pt.json";
import en from "./locales/en.json";

export const LANGUAGE_STORAGE_KEY = "mj-portfolio-language";
export const DEFAULT_LANGUAGE = "pt";
export const SUPPORTED_LANGUAGES = ["pt", "en"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

function getInitialLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored && (SUPPORTED_LANGUAGES as readonly string[]).includes(stored)) {
    return stored as SupportedLanguage;
  }
  return DEFAULT_LANGUAGE;
}

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  returnEmptyString: false,
});

export default i18n;
