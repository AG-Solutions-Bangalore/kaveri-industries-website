/**
 * Single source of truth for company identity, contact, certifications,
 * and presence. Every consumer — schemas, SEO meta, layout, copy —
 * reads from here. Never hardcode these strings again.
 *
 * Override the public URL with VITE_SITE_URL at build time.
 */

const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ??
  "https://kaveri-industries.example.com";

export const company = {
  // ── Identity ──────────────────────────────────────────────────────────
  /** Display name used in titles, OG, schema, footer. */
  name: "Kaveri Industries",
  /** First word only, for casual copy like "Kaveri's focus on…". */
  shortName: "Kaveri",
  /** Full legal name on contracts and certifications. */
  legalName: "Kaveri Industries",
  /** Uppercase wordmark next to the logo square. */
  wordmark: "KAVERI INDUSTRIES",
  /** Single letter inside the logo square (avatar fallback). */
  monogram: "K",

  // ── Web presence ───────────────────────────────────────────────────────
  url: SITE_URL,
  /** Absolute logo URL — used in schema + OG fallback image. */
  logo: `${SITE_URL}/og/logo.png`,
  /** BCP-47 locale for OG + schema. */
  locale: "en_IN",
  /** Twitter handle without leading @ in some renderers — keeps the @. */
  twitter: "@kaveri_industries",

  // ── Positioning ───────────────────────────────────────────────────────
  /** Default <meta description> + Organization schema description. */
  description:
    "Manufacturers of High Tensile MS Fasteners for transmission & telecommunication towers, buildings & bridges, refineries & water treatment plants, wind & power plants, railways & transportation, and road guard rail systems. An ISO 9001 Certified Company.",
  /** Short marketing tagline (from brochure cover). */
  tagline: "Manufacturers of High Tensile MS Fasteners",
  /** Footer copyright tail (year is interpolated at render time). */
  copyright: "Kaveri Industries. All rights reserved. Precision Engineered.",

  // ── Certifications & history ───────────────────────────────────────────
  /** ISO standard shown in badges and the Quality page. */
  isoStandard: "ISO 9001:2008",
  /** Verbatim brochure statement — used on the cover and hero. */
  certificationStatement: "An ISO 9001 : 2008 Certified Company",
  /** Founding year used in About copy and schema. */
  foundingDate: "2008",

  // ── Contact ───────────────────────────────────────────────────────────
  contact: {
    /** Public-facing inbox. */
    primaryEmail: "kaveriindustries4@hotmail.com",
    /** Department mailboxes (forward to the same inbox in practice). */
    salesEmail: "sales@kaveri-industries.example.com",
    legalEmail: "legal@kaveri-industries.example.com",
    /** Phone numbers — `display` is human-readable, `tel` is RFC 3966. */
    phones: [
      { display: "080 - 27825275", tel: "+918027825275" },
      { display: "080 - 27825276", tel: "+918027825276" },
    ],
    fax: { display: "080 - 26782341", tel: "+918026782341" },
  },

  // ── Address ───────────────────────────────────────────────────────────
  address: {
    street: "Survey No. 485, 486 Jigani Industrial Area 2nd Phase",
    city: "Bangalore",
    region: "Karnataka",
    postalCode: "560105",
    country: "IN",
    /** Pre-formatted single-line address (used in brochure-style footers). */
    full: "Survey No. 485, 486, Jigani Industrial Area 2nd Phase, Bangalore - 560105",
    /** Geo coords for LocalBusiness schema and Maps rich results. */
    geo: { lat: 12.7842, lng: 77.6369 },
  },

  /** Business hours for LocalBusiness / OpeningHoursSpecification schema. */
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],

  /** Social profile URLs — Organization `sameAs` array. */
  social: [
    "https://www.linkedin.com/company/kaveri-industries",
    "https://www.facebook.com/kaveriindustries",
    "https://twitter.com/kaveri_industries",
    "https://www.youtube.com/@kaveri-industries",
  ],
} as const;

export type Company = typeof company;