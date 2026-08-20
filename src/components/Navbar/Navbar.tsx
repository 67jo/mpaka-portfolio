import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import type { Theme } from "../../hooks/useTheme";

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-[var(--text)]"
        >
          Mpaka<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-primary"
              >
                {t(`nav.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={t("nav.menu")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md px-5 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:bg-[var(--surface)] hover:text-primary"
                >
                  {t(`nav.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-start">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
