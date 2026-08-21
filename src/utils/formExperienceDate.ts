// src/utils/formatExperienceDate.ts
export function formatExperiencePeriod(
  startDate: string,
  endDate: string | null | undefined,
  locale: string,
  presentLabel: string
) {
  const format = (value: string) => {
    const [year, month] = value.split("-").map(Number);
    const date = new Date(year, month - 1);
    return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(date);
  };

  const start = format(startDate);
  const end = endDate ? format(endDate) : presentLabel;

  return `${start} — ${end}`;
}