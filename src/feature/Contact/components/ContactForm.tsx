import { useId, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { company } from "@/lib/company";

const EASE = [0.22, 1, 0.36, 1] as const;

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  email?: string;
  message?: string;
  fullName?: string;
}

type SubmitState = "idle" | "submitting" | "success" | "error";

/**
 * Controlled enquiry form. Client-side validation on email + required
 * fields. On submit, opens the user's mail client as a graceful fallback
 * (no backend in this static site) and shows a success state.
 */
export function ContactForm() {
  const baseId = useId();
  const id = (key: string) => `${baseId}-${key}`;

  const [values, setValues] = useState<FormState>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!values.fullName.trim()) {
      next.fullName = "Please tell us your name.";
    }
    if (!values.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Please add a few words about your requirement.";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setSubmitState("error");
      return;
    }
    setSubmitState("submitting");
    try {
      const subject = values.subject.trim() || "Product Enquiry";
      const body =
        `Name: ${values.fullName}\n` +
        `Company: ${values.companyName || "—"}\n` +
        `Email: ${values.email}\n` +
        `Phone: ${values.phone || "—"}\n\n` +
        `${values.message}`;
      // mailto: fallback so the form is usable without a backend.
      const href =
        `mailto:${company.contact.salesEmail}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  const inputBase =
    "h-10 w-full rounded-sm border border-slate-200 bg-white px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-900/50";
  const inputError = "border-rose-500 focus-visible:border-rose-500 focus-visible:ring-rose-500/30";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="rounded-sm border border-slate-200/70 bg-white p-6 shadow-xs sm:p-8 dark:border-slate-700/60 dark:bg-slate-900/40"
    >
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Send Us a Message
      </h2>
      <div className="mt-2 h-px w-24 bg-foreground/15" aria-hidden="true" />

      {submitState === "success" ? (
        <div
          role="status"
          className="mt-6 flex flex-col items-start gap-3 rounded-sm border border-emerald-200 bg-emerald-50/70 p-5 text-sm text-emerald-900 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200"
        >
          <span className="flex items-center gap-2 text-base font-semibold">
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            Your enquiry is ready to send
          </span>
          <p>
            We've composed your message in your default mail client addressed
            to {company.contact.salesEmail}. Press send there to reach our
            sales desk, or use the phone / email above to contact us directly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitState("idle");
              setValues({
                fullName: "",
                companyName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              });
            }}
            className="mt-2 text-xs font-semibold uppercase tracking-wider text-emerald-900 underline-offset-4 hover:underline dark:text-emerald-200"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label
                htmlFor={id("fullName")}
                className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
              >
                Full Name
              </label>
              <input
                id={id("fullName")}
                name="fullName"
                type="text"
                autoComplete="name"
                value={values.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                placeholder="John Doe"
                aria-invalid={Boolean(errors.fullName)}
                className={`mt-1 ${inputBase} ${errors.fullName ? inputError : ""}`}
              />
              {errors.fullName && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                  <AlertCircle className="h-3 w-3" aria-hidden="true" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor={id("companyName")}
                className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
              >
                Company Name
              </label>
              <input
                id={id("companyName")}
                name="companyName"
                type="text"
                autoComplete="organization"
                value={values.companyName}
                onChange={(e) => update("companyName", e.target.value)}
                placeholder="Acme Corp"
                className={`mt-1 ${inputBase}`}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Email */}
            <div>
              <label
                htmlFor={id("email")}
                className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
              >
                Email Address
              </label>
              <input
                id={id("email")}
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="john@example.com"
                aria-invalid={Boolean(errors.email)}
                className={`mt-1 ${inputBase} ${errors.email ? inputError : ""}`}
              />
              {errors.email && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                  <AlertCircle className="h-3 w-3" aria-hidden="true" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor={id("phone")}
                className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
              >
                Phone Number
              </label>
              <input
                id={id("phone")}
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+1 (555) 000-0000"
                className={`mt-1 ${inputBase}`}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor={id("subject")}
              className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
            >
              Subject
            </label>
            <input
              id={id("subject")}
              name="subject"
              type="text"
              value={values.subject}
              onChange={(e) => update("subject", e.target.value)}
              placeholder="Product Enquiry"
              className={`mt-1 ${inputBase}`}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor={id("message")}
              className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id={id("message")}
              name="message"
              rows={5}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Please provide details about your requirements…"
              aria-invalid={Boolean(errors.message)}
              className={`mt-1 w-full rounded-sm border border-slate-200 bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-900/50 ${
                errors.message ? "border-rose-500" : ""
              }`}
            />
            {errors.message && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                <AlertCircle className="h-3 w-3" aria-hidden="true" />
                {errors.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="inline-flex items-center gap-2 rounded-sm bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitState === "submitting" ? "Opening mail…" : "Send Enquiry"}
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {submitState === "error" && (
              <p className="mt-2 text-xs text-rose-600">
                Please fix the highlighted fields and try again.
              </p>
            )}
          </div>
        </form>
      )}
    </motion.div>
  );
}
