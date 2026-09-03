import { motion } from "motion/react";
import { MapPin, ExternalLink } from "lucide-react";
import {
  CONTACT_PAGE_CONTENT,
  MAP_EMBED_URL,
  MAP_EXTERNAL_URL,
} from "@/feature/Contact/api/contactInfo";
import { company } from "@/lib/company";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "Our Location" — section with a heading, an OpenStreetMap iframe
 * (no API key required), and an external link to the full map view.
 *
 * The map embed is framed in a rounded card with a pin callout to
 * match the design reference. Falls back gracefully if the iframe
 * fails to load (e.g. the user is offline) — the address card below
 * the map still tells them where to go.
 */
export function ContactLocation() {
  return (
    <section
      aria-labelledby="contact-location-heading"
      className="bg-slate-50/40 py-16 md:py-20 dark:bg-card/30"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <h2
            id="contact-location-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            {CONTACT_PAGE_CONTENT.location.heading}
          </h2>
          <div className="mt-2 h-px w-24 bg-foreground/15" aria-hidden="true" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="relative mt-6 overflow-hidden rounded-sm border border-border bg-card shadow-sm"
        >
          {/* Map iframe */}
          <iframe
            title={`Map showing ${company.name} headquarters`}
            src={MAP_EMBED_URL}
            className="block h-[320px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={`Map centred on ${company.address.full}`}
          />

          {/* Floating address callout */}
          <div className="pointer-events-none absolute left-4 top-4 z-10 max-w-xs rounded-sm border border-border bg-card/95 p-3 text-xs shadow-md backdrop-blur-xs sm:left-6 sm:top-6 sm:p-4 sm:text-sm">
            <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
              <MapPin
                className="h-3.5 w-3.5 text-brand-600"
                aria-hidden="true"
              />
              {company.name}
            </p>
            <p className="mt-1 font-medium text-foreground">
              {company.address.street}
            </p>
            <p className="text-muted-foreground">
              {company.address.city} - {company.address.postalCode}
            </p>
            <a
              href={MAP_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-700 hover:text-brand-800"
            >
              Open in maps
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
