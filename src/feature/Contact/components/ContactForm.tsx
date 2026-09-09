import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Send,
  AlertCircle,
  ArrowRight,
  Phone,
  Package,
  Sparkles,
  X,
} from "lucide-react";
import { company } from "@/lib/company";
import { useEnquiryMutation } from "@/feature/Contact/hooks/useEnquiryMutation";
import { useUtmParams } from "@/feature/Contact/hooks/useUtmParams";
import {
  validateEnquiry,
  hasEnquiryErrors,
  digitsOnly,
  toInternationalNumber,
  PHONE_PREFIX,
  PHONE_DIGIT_MAX,
  type EnquiryFieldErrors,
} from "@/feature/Contact/api/enquirySchema";

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTO_DISMISS_MS = 8_000;

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export interface ContactFormProps {
  title?: string;
  subtitle?: string;
  isModal?: boolean;
  defaultSubject?: string;
  onClose?: () => void;
}

/**
 * Controlled enquiry form.
 *
 * Submits to the backend enquiry API (`POST /enquiry.php`) via the React
 * Query mutation hook. If the network call fails (CORS, downtime, etc.),
 * we fall back to a `mailto:` so the user is never left stuck.
 *
 * Validation runs twice: client-side first for instant feedback, then the
 * PHP backend re-validates server-side. UTM parameters are read from the
 * URL on first render and forwarded with the payload.
 */
export function ContactForm({
  title,
  subtitle,
  isModal = false,
  defaultSubject,
  onClose,
}: ContactFormProps = {}) {
  const baseId = useId();
  const id = (key: string) => `${baseId}-${key}`;

  const utm = useUtmParams();
  const enquiry = useEnquiryMutation();

  const [values, setValues] = useState<FormState>(() => ({
    ...EMPTY_FORM,
    subject: defaultSubject ?? "",
  }));
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const [countdownMs, setCountdownMs] = useState<number>(AUTO_DISMISS_MS);
  const dismissedRef = useRef(false);

  const [prevDefaultSubject, setPrevDefaultSubject] = useState(defaultSubject);
  if (prevDefaultSubject !== defaultSubject) {
    setPrevDefaultSubject(defaultSubject);
    if (defaultSubject !== undefined) {
      setValues((prev) => ({ ...prev, subject: defaultSubject }));
    }
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    const fieldKey = toApiFieldKey(key);
    if (fieldKey && errors[fieldKey]) {
      setErrors((prev) => ({ ...prev, [fieldKey]: undefined }));
    }
  }

  /**
   * Phone numbers are stored as the 10-digit local part. Letters, spaces,
   * dashes and pasted copy-paste junk are stripped before the value ever
   * reaches state, and the input is hard-capped at PHONE_DIGIT_MAX.
   * The `+91` country code is attached at submit time via
   * {@link toInternationalNumber}.
   */
  function updatePhone(raw: string) {
    const sanitised = digitsOnly(raw).slice(0, PHONE_DIGIT_MAX);
    update("phone", sanitised);
  }

  /** Open the user's mail client as a graceful fallback when the API is down. */
  function openMailFallback() {
    const subject = values.subject.trim() || "Product Enquiry";
    const body =
      `Name: ${values.fullName}\n` +
      `Company: ${values.companyName || "—"}\n` +
      `Email: ${values.email}\n` +
      `Phone: ${toInternationalNumber(values.phone) || values.phone || "—"}\n\n` +
      `${values.message}`;
    const href =
      `mailto:${company.contact.salesEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const phoneForApi = toInternationalNumber(values.phone) ?? "";
    const found = validateEnquiry({
      enquiryFullName: values.fullName,
      enquiryEmail: values.email,
      enquiryMobile: phoneForApi,
      enquiryProduct: values.subject || "Website Enquiry",
      enquiryMessage: values.message,
    });
    if (hasEnquiryErrors(found)) {
      setErrors(found);
      setSubmitState("error");
      setServerMessage("");
      return;
    }
    setErrors({});
    setServerMessage("");
    setSubmitState("submitting");

    enquiry.mutate(
      {
        enquiryFullName: values.fullName.trim(),
        enquiryEmail: values.email.trim(),
        enquiryMobile: phoneForApi,
        enquiryProduct: values.subject.trim() || "Website Enquiry",
        enquiryMessage: values.message.trim(),
        ...utm,
      },
      {
        onSuccess: () => {
          // Reset the form fields immediately so nothing lingers, then flip
          // to the success state so the user sees confirmation.
          setValues(EMPTY_FORM);
          setErrors({});
          setServerMessage("");
          setSubmitState("success");
          dismissedRef.current = false;
          setCountdownMs(AUTO_DISMISS_MS);
        },
        onError: (err) => {
          setSubmitState("error");
          setServerMessage(
            err?.message ||
              "We couldn't reach the server. Use the mail fallback below.",
          );
        },
      },
    );
  }

  /**
   * Restore the form view. State is already empty (we cleared on success),
   * so this is mostly a view-toggle plus a guarantee of a clean slate.
   */
  function returnToForm() {
    dismissedRef.current = true;
    setValues(EMPTY_FORM);
    setErrors({});
    setServerMessage("");
    setSubmitState("idle");
    enquiry.reset();
  }

  /**
   * Auto-dismiss the success card after AUTO_DISMISS_MS and return the
   * user to a fresh form. Paused while the user hovers the card so they
   * have time to read or click a follow-up action.
   */
  useEffect(() => {
    if (submitState !== "success") return;
    if (dismissedRef.current) return;

    const start = performance.now();
    let frame = 0;
    let paused = false;

    const tick = (now: number) => {
      if (dismissedRef.current) return;
      if (!paused) {
        const remaining = Math.max(0, AUTO_DISMISS_MS - (now - start));
        setCountdownMs(remaining);
        if (remaining <= 0) {
          returnToForm();
          return;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const card = document.getElementById(`${baseId}-success-card`);
    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
    };
    card?.addEventListener("mouseenter", onEnter);
    card?.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      card?.removeEventListener("mouseenter", onEnter);
      card?.removeEventListener("mouseleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitState]);

  /**
   * "Dull" / low-opacity look for the contact form fields.
   *
   * - Border at 40% opacity so it recedes into the card
   * - Tinted background (slate-50) instead of pure white for a softer feel
   * - Placeholder is heavily muted (25% opacity) so it reads as a hint
   * - Focus state keeps the brand-gold accent at full strength so the form
   *   remains obviously interactive when the user tabs through it
   */
  const inputBase =
    "h-10 w-full rounded-sm border border-slate-200/40 bg-slate-50/60 px-3 text-sm text-foreground/85 placeholder:text-muted-foreground/25 focus-visible:border-brand-500 focus-visible:bg-white focus-visible:text-foreground focus-visible:placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 dark:border-slate-700/40 dark:bg-slate-900/30 dark:text-foreground/85 dark:placeholder:text-muted-foreground/30 dark:focus-visible:bg-slate-900/60 dark:focus-visible:placeholder:text-muted-foreground/40";
  const inputError =
    "border-rose-400/70 bg-rose-50/40 focus-visible:border-rose-500 focus-visible:ring-rose-500/30 dark:border-rose-500/60 dark:bg-rose-950/20";
  const textareaBase =
    "w-full rounded-sm border border-slate-200/40 bg-slate-50/60 px-3 py-2 text-sm text-foreground/85 placeholder:text-muted-foreground/25 focus-visible:border-brand-500 focus-visible:bg-white focus-visible:text-foreground focus-visible:placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 dark:border-slate-700/40 dark:bg-slate-900/30 dark:text-foreground/85 dark:placeholder:text-muted-foreground/30 dark:focus-visible:bg-slate-900/60 dark:focus-visible:placeholder:text-muted-foreground/40";

  return (
    <motion.div
      initial={{ opacity: 0, y: isModal ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`relative overflow-hidden ${
        isModal
          ? "bg-white p-5 sm:p-7 dark:bg-slate-900"
          : "rounded-sm border border-slate-200/70 bg-white p-6 shadow-xs sm:p-8 dark:border-slate-700/60 dark:bg-slate-900/40"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {title ?? "Send Us a Message"}
          </h2>
          <div className="mt-2 h-px w-24 bg-foreground/15" aria-hidden="true" />
          {subtitle && (
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {subtitle}
            </p>
          )}
        </div>
        {isModal && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-sm p-1.5 text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground dark:hover:bg-slate-800"
            aria-label="Close quote modal"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {submitState === "success" ? (
        <SuccessCard
          baseId={baseId}
          countdownMs={countdownMs}
          onAnother={returnToForm}
          isModal={isModal}
          onClose={onClose}
        />
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
                aria-invalid={Boolean(errors.enquiryFullName)}
                className={`mt-1 ${inputBase} ${errors.enquiryFullName ? inputError : ""}`}
              />
              {errors.enquiryFullName && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                  <AlertCircle className="h-3 w-3" aria-hidden="true" />
                  {errors.enquiryFullName}
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
                aria-invalid={Boolean(errors.enquiryEmail)}
                className={`mt-1 ${inputBase} ${errors.enquiryEmail ? inputError : ""}`}
              />
              {errors.enquiryEmail && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                  <AlertCircle className="h-3 w-3" aria-hidden="true" />
                  {errors.enquiryEmail}
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
              <div
                className={`mt-1 flex h-10 w-full items-center rounded-sm border bg-slate-50/60 text-sm transition-colors focus-within:bg-white dark:bg-slate-900/30 dark:focus-within:bg-slate-900/60 ${
                  errors.enquiryMobile
                    ? "border-rose-400/70 bg-rose-50/40 focus-within:border-rose-500 focus-within:ring-rose-500/30 dark:border-rose-500/60 dark:bg-rose-950/20"
                    : "border-slate-200/40 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/30 dark:border-slate-700/40"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="select-none border-r border-slate-200/40 px-3 font-medium text-muted-foreground/70 dark:border-slate-700/40"
                >
                  {PHONE_PREFIX}
                </span>
                <input
                  id={id("phone")}
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="\d{10}"
                  maxLength={PHONE_DIGIT_MAX}
                  autoComplete="tel-national"
                  value={values.phone}
                  onChange={(e) => updatePhone(e.target.value)}
                  onKeyDown={(e) => {
                    if (
                      e.key.length === 1 &&
                      !/^\d$/.test(e.key) &&
                      ![
                        "Backspace",
                        "Delete",
                        "Tab",
                        "ArrowLeft",
                        "ArrowRight",
                        "Home",
                        "End",
                      ].includes(e.key)
                    ) {
                      e.preventDefault();
                    }
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const pasted = e.clipboardData.getData("text");
                    updatePhone(pasted);
                  }}
                  placeholder="9876543210"
                  aria-invalid={Boolean(errors.enquiryMobile)}
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground/85 placeholder:text-muted-foreground/25 focus:text-foreground focus:placeholder:text-muted-foreground/40 focus:outline-none"
                />
              </div>
              {errors.enquiryMobile && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                  <AlertCircle className="h-3 w-3" aria-hidden="true" />
                  {errors.enquiryMobile}
                </p>
              )}
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
              aria-invalid={Boolean(errors.enquiryMessage)}
              className={`mt-1 ${textareaBase} ${errors.enquiryMessage ? "border-rose-400/70 bg-rose-50/40 focus-visible:border-rose-500 focus-visible:ring-rose-500/30 dark:border-rose-500/60 dark:bg-rose-950/20" : ""}`}
            />
            {errors.enquiryMessage && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                <AlertCircle className="h-3 w-3" aria-hidden="true" />
                {errors.enquiryMessage}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitState === "submitting" ? "Sending…" : "Send Enquiry"}
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {submitState === "error" && (
              <p
                role="alert"
                className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-rose-600"
              >
                <span>
                  {serverMessage ||
                    "Please fix the highlighted fields and try again."}
                </span>
                <button
                  type="button"
                  onClick={openMailFallback}
                  className="font-semibold underline-offset-4 hover:underline"
                >
                  Email us instead
                </button>
              </p>
            )}
          </div>
        </form>
      )}
    </motion.div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Success card
// ──────────────────────────────────────────────────────────────────────────

const SUCCESS_VARIANTS = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
} as const;

const CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
} as const;

function SuccessCard({
  baseId,
  countdownMs,
  onAnother,
  isModal,
  onClose,
}: {
  baseId: string;
  countdownMs: number;
  onAnother: () => void;
  isModal?: boolean;
  onClose?: () => void;
}) {
  const seconds = Math.ceil(countdownMs / 1000);

  return (
    <motion.div
      id={`${baseId}-success-card`}
      role="status"
      aria-live="polite"
      initial="hidden"
      animate="visible"
      variants={SUCCESS_VARIANTS}
      className="relative mt-6 overflow-hidden rounded-sm border border-brand-200/70 bg-linear-to-br from-brand-50 via-white to-emerald-50/60 p-6 text-foreground shadow-sm dark:border-brand-700/40 dark:from-brand-950/40 dark:via-slate-900 dark:to-emerald-950/20"
    >
      {/* Decorative blurred orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-300/40 blur-3xl dark:bg-brand-700/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-700/20"
      />

      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
        }}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-start gap-4"
      >
        {/* Animated checkmark badge */}
        <motion.div
          variants={CHILD_VARIANTS}
          transition={{ duration: 0.5, ease: EASE }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-brand-600 text-white shadow-md ring-4 ring-brand-200/60 dark:ring-brand-800/40"
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <motion.path
              d="M5 12.5l4.5 4.5L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
            />
          </motion.svg>
          {/* Soft pulsing halo */}
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-brand-400/40"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: EASE }}
          />
        </motion.div>

        <motion.div
          variants={CHILD_VARIANTS}
          transition={{ duration: 0.5, ease: EASE }}
          className="space-y-2"
        >
          <h3 className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            <Sparkles
              className="h-5 w-5 text-brand-500 dark:text-brand-300"
              aria-hidden="true"
            />
            Enquiry Received — Thank You!
          </h3>
          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
            Your enquiry has been logged with our sales desk. We typically
            respond within{" "}
            <span className="font-semibold text-foreground">
              one business day
            </span>
            . A copy of the conversation will reach{" "}
            <span className="font-medium text-brand-700 dark:text-brand-300">
              {company.contact.salesEmail}
            </span>
            .
          </p>
        </motion.div>

        {/* Quick-action grid */}
        <motion.div
          variants={CHILD_VARIANTS}
          transition={{ duration: 0.5, ease: EASE }}
          className={`grid w-full gap-3 pt-2 ${isModal && onClose ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
        >
          <button
            type="button"
            onClick={onAnother}
            className="group inline-flex items-center justify-between gap-2 rounded-sm bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" aria-hidden="true" />
              Send another
            </span>
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>

          <a
            href="/products"
            onClick={isModal && onClose ? onClose : undefined}
            className="group inline-flex items-center justify-between gap-2 rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-xs transition-all hover:border-brand-400 hover:bg-brand-50/60 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900/60 dark:hover:bg-slate-900"
          >
            <span className="flex items-center gap-2">
              <Package className="h-4 w-4 text-brand-500" aria-hidden="true" />
              Browse products
            </span>
            <ArrowRight
              className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
              aria-hidden="true"
            />
          </a>

          {isModal && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="group inline-flex items-center justify-center gap-2 rounded-sm border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-semibold text-foreground shadow-xs transition-all hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              Done / Close
            </button>
          )}
        </motion.div>

        <motion.div
          variants={CHILD_VARIANTS}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-brand-200/60 pt-3 text-xs text-muted-foreground dark:border-brand-800/40"
        >
          <span>
            Need to talk now?{" "}
            <a
              href={`tel:${company.contact.phones[0].tel}`}
              className="inline-flex items-center gap-1 font-semibold text-brand-700 underline-offset-4 hover:underline dark:text-brand-300"
            >
              <Phone className="h-3 w-3" aria-hidden="true" />
              {company.contact.phones[0].display}
            </a>
          </span>
          <span aria-hidden="true" className="hidden sm:inline">
            •
          </span>
          <span className="inline-flex items-center gap-1">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500"
            />
            Returning to form in {seconds}s…
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/** Maps form field name → API field name so errors clear reactively. */
function toApiFieldKey(key: keyof FormState): keyof EnquiryFieldErrors | null {
  switch (key) {
    case "fullName":
      return "enquiryFullName";
    case "email":
      return "enquiryEmail";
    case "phone":
      return "enquiryMobile";
    case "subject":
      return "enquiryProduct";
    case "message":
      return "enquiryMessage";
    case "companyName":
      return null;
    default:
      return null;
  }
}