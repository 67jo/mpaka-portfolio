import { useTranslation } from "react-i18next";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ScrollProgress() {
  const { t } = useTranslation();
  const progress = useScrollProgress();

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-screen w-[2px] sm:w-1 flex-col justify-end pointer-events-none"
      role="progressbar"
      aria-label={t("scrollProgress.label")}
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="relative h-full w-full bg-[var(--border)]">
        <div
          className="absolute bottom-0 left-0 w-full bg-primary shadow-[0_0_12px_rgba(1,231,246,0.55)] transition-[height] duration-100 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>
    </div>
  );
}
