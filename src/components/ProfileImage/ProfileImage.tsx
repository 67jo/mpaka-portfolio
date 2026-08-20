import { useTranslation } from "react-i18next";

export function ProfileImage() {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] sm:max-w-[360px] animate-fade-up [animation-delay:250ms]">
      <div className="absolute inset-0 -z-10 rounded-[28px] bg-primary/10 blur-2xl animate-glow-pulse" />
      <div className="group relative h-full w-full overflow-hidden rounded-[28px] border border-[var(--border-strong)] bg-[var(--surface)] shadow-[0_0_0_1px_rgba(1,231,246,0.08)]">
        <img
          src="/profile.jpg"
          alt={t("hero.name") + " — Software Developer"}
          loading="eager"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-primary/20" />
      </div>
    </div>
  );
}
