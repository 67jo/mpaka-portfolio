import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSeo() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language?.split("-")[0] ?? "pt";
    document.documentElement.lang = lang;

    const title = t("meta.title");
    const description = t("meta.description");

    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:locale", lang === "pt" ? "pt_PT" : "en_US", "property");
  }, [t, i18n.language]);
}
