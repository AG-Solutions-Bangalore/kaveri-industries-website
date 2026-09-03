import { motion } from "motion/react";
import { CONTACT_CARDS, CONTACT_PAGE_CONTENT } from "@/feature/Contact/api/contactInfo";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "Let's Talk" — left column of the contact section.
 * Renders a stack of info cards: Headquarters, Phone, Email.
 * Each value is a clickable `tel:` / `mailto:` link when applicable.
 * Below the cards, a framed photograph of the engineering office adds
 * visual context to the otherwise text-heavy left column.
 */
export function ContactInfoCards() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {CONTACT_PAGE_CONTENT.letsTalk.heading}
        </h2>
        <div className="mt-2 h-px w-24 bg-foreground/15" aria-hidden="true" />
      </div>

      <ul className="space-y-4">
        {CONTACT_CARDS.map((card, idx) => {
          const Icon = card.icon;
          const valueNode = (
            <>
              <span className="block text-sm font-medium text-foreground sm:text-base">
                {card.value}
              </span>
              {card.valueSecondary && (
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {card.valueSecondary}
                </span>
              )}
            </>
          );

          return (
            <motion.li
              key={card.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, ease: EASE, delay: idx * 0.05 }}
              className="flex items-start gap-4 rounded-sm border border-slate-200/70 bg-white p-4 shadow-xs transition-shadow hover:shadow-sm dark:border-slate-700/60 dark:bg-slate-900/40"
            >
              <span
                aria-hidden="true"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-brand-50 text-brand-700 dark:bg-brand-950/80 dark:text-brand-400"
              >
                <Icon className="h-5 w-5 stroke-[1.75]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {card.label}
                </p>
                {card.href ? (
                  <a
                    href={card.href}
                    className="link-underline mt-1 block break-words text-sm font-medium text-foreground transition-colors hover:text-brand-700 sm:text-base"
                  >
                    {valueNode}
                  </a>
                ) : (
                  <div className="mt-1">{valueNode}</div>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>

      {/* Engineering office feature photo — context for the right-hand form */}
      <motion.figure
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        className="overflow-hidden rounded-sm border border-slate-200/70 shadow-xs dark:border-slate-700/60"
      >
        <img
          src="/images/contact/contact-office.webp"
          alt="Inside the Kaveri Industries engineering office — blueprints, sample boxes, and a wall of fastener stock"
          loading="lazy"
          className="h-48 w-full object-cover sm:h-56"
        />
      </motion.figure>
    </div>
  );
}
