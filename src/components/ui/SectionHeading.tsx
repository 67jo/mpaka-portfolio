interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)]">
        {title}
      </h2>
      <span
        className={`mt-4 block h-[3px] w-12 rounded-full bg-primary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
