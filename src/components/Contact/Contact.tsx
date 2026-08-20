import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Send, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { SITE } from "../../config/site";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "sending" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = t("contact.form.errors.nameRequired");
    if (!form.email.trim()) next.email = t("contact.form.errors.emailRequired");
    else if (!EMAIL_REGEX.test(form.email)) next.email = t("contact.form.errors.emailInvalid");
    if (!form.subject.trim()) next.subject = t("contact.form.errors.subjectRequired");
    if (!form.message.trim()) next.message = t("contact.form.errors.messageRequired");
    else if (form.message.trim().length < 10) next.message = t("contact.form.errors.messageMin");
    return next;
  };

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] transition-colors focus:border-primary focus:outline-none";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")} align="center" />
        <p className="mx-auto mt-4 max-w-xl text-center text-[var(--text-muted)]">
          {t("contact.description")}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={80}>
          <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder={t("contact.form.namePlaceholder")}
                  className={inputClass}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-primary">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder={t("contact.form.emailPlaceholder")}
                  className={inputClass}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-primary">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                {t("contact.form.subject")}
              </label>
              <input
                id="subject"
                value={form.subject}
                onChange={handleChange("subject")}
                placeholder={t("contact.form.subjectPlaceholder")}
                className={inputClass}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-xs text-primary">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                placeholder={t("contact.form.messagePlaceholder")}
                className={`${inputClass} resize-none`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-primary">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
            >
              {status === "sending" ? (
                t("contact.form.sending")
              ) : (
                <>
                  {t("contact.form.send")}
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {status === "success" && (
              <p role="status" className="flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4 shrink-0" /> {t("contact.form.success")}
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="flex items-center gap-2 text-sm text-[var(--text)]">
                <AlertCircle className="h-4 w-4 shrink-0 text-primary" /> {t("contact.form.error")}
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={160}>
          <div className="flex h-full flex-col justify-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <p className="text-sm font-medium text-[var(--text-muted)]">{t("contact.connect")}</p>
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--border-strong)] hover:text-primary"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--border-strong)] hover:text-primary"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--border-strong)] hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}