/**
 * Centralised schema.org JSON-LD builders for Google rich search.
 *
 * Each helper returns a plain object you can spread into the `schema` prop
 * of `<SEO />`. The site-wide Organization + WebSite schemas are injected
 * automatically by `<SEO />` — page-specific schemas live below.
 *
 * Conventions:
 * - `JsonLd` is a single object or an array of objects.
 * - Helpers accept rich inputs (e.g. `Review[]`) and produce schema.org JSON.
 * - URLs are resolved to absolute form against `siteConfig.url`.
 */

// ---------------------------------------------------------------- //
// Site-wide config
// ---------------------------------------------------------------- //

const SITE_NAME = "Kaveri Industries";
const SITE_LEGAL_NAME = "Kaveri Industries Private Limited";
const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ??
  "https://kaveri-industries.example.com";
const ORG_LOGO = `${SITE_URL}/og/logo.png`;
const ORG_PHONE = "+91-80-4567-8900";
const ORG_EMAIL = "sales@kaveri-industries.example.com";

/** Absolute-URL helper used by every schema builder. */
export function absUrl(path: string): string {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export const siteConfig = {
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  url: SITE_URL,
  description:
    "Kaveri Industries — engineered polymer solutions, precision moulding, and contract manufacturing for industrial OEMs.",
  logo: ORG_LOGO,
  phone: ORG_PHONE,
  email: ORG_EMAIL,
  locale: "en_IN",
  twitter: "@kaveri_industries",
  foundingDate: "2008",
  /** Geo for LocalBusiness / Knowledge Panel. Whitefield, Bengaluru HQ. */
  geo: { lat: 12.9698, lng: 77.7499 },
  address: {
    street: "Plot 14, Phase II, Peenya Industrial Area",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560058",
    country: "IN",
  },
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
  social: [
    "https://www.linkedin.com/company/kaveri-industries",
    "https://www.facebook.com/kaveriindustries",
    "https://twitter.com/kaveri_industries",
    "https://www.youtube.com/@kaveri-industries",
  ],
} as const;

// ---------------------------------------------------------------- //
// Types
// ---------------------------------------------------------------- //

export type JsonLd =
  | Record<string, unknown>
  | Record<string, unknown>[];

export interface ReviewInput {
  /** Display name of the reviewer. */
  author: string;
  /** Optional review headline. */
  headline?: string;
  /** Full review body. Plain text only — sanitise before passing user content. */
  body: string;
  /** 1–5 inclusive. */
  rating: number;
  /** ISO 8601 date — e.g. "2025-08-14". */
  datePublished: string;
  /** Author role/company — used in the visible card too. */
  authorRole?: string;
  /** Optional URL to the reviewer's profile. */
  authorUrl?: string;
}

// ---------------------------------------------------------------- //
// Builders
// ---------------------------------------------------------------- //

/** Generic Organization schema used site-wide (injected by SEO component). */
export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    url: SITE_URL,
    logo: ORG_LOGO,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    sameAs: [...siteConfig.social],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        areaServed: ["IN", "AE", "SG", "DE"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

/**
 * LocalBusiness schema — extends Organization with address + hours + geo.
 * Required for Google Knowledge Panel and Google Maps rich results.
 */
export function localBusinessSchema(): Record<string, unknown> {
  const a = siteConfig.address;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    url: SITE_URL,
    logo: ORG_LOGO,
    image: ORG_LOGO,
    description: siteConfig.description,
    telephone: ORG_PHONE,
    email: ORG_EMAIL,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    parentOrganization: { "@id": `${SITE_URL}#organization` },
  };
}

/** WebSite schema with SearchAction for sitelinks search box. */
export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** BreadcrumbList schema — pass ordered crumb labels and paths. */
export function breadcrumbSchema(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absUrl(item.url),
    })),
  };
}

/** Product schema for industrial product / SKU pages. */
export function productSchema(p: {
  name: string;
  description: string;
  image: string;
  sku: string;
  brand?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: absUrl(p.image),
    sku: p.sku,
    brand: { "@type": "Brand", name: p.brand ?? SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}#organization` },
  };
}

/** FAQPage schema — pair each question with its accepted answer. */
export function faqSchema(
  qa: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

/** A single Review. Used inside `aggregateRatingSchema` and `localBusinessSchema`. */
export function reviewSchema(r: ReviewInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: r.author,
      ...(r.authorUrl ? { url: r.authorUrl } : {}),
      ...(r.authorRole ? { jobTitle: r.authorRole } : {}),
    },
    datePublished: r.datePublished,
    reviewBody: r.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

/**
 * AggregateRating — drives the star snippet in Google search results.
 * Pair it with the parent entity it rates (Organization, LocalBusiness, Product).
 */
export function aggregateRatingSchema(opts: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: Number(opts.ratingValue.toFixed(1)),
    reviewCount: opts.reviewCount,
    bestRating: opts.bestRating ?? 5,
    worstRating: opts.worstRating ?? 1,
  };
}

/**
 * Reviews + AggregateRating combined, ready to attach to a parent entity
 * (pass to `<SEO schema={reviewsBlock({ reviews })} />`).
 */
export function reviewsBlock(reviews: ReviewInput[]): Record<string, unknown>[] {
  if (reviews.length === 0) return [];
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  const avg = sum / reviews.length;
  return [
    aggregateRatingSchema({ ratingValue: avg, reviewCount: reviews.length }),
    ...reviews.map(reviewSchema),
  ];
}

/** Service schema — used for capability / capability-card pages. */
export function serviceSchema(s: {
  name: string;
  description: string;
  url: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    name: s.name,
    description: s.description,
    url: absUrl(s.url),
    image: s.image ? absUrl(s.image) : ORG_LOGO,
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: { "@type": "Country", name: "India" },
  };
}

/** SiteNavigationElement — surfaces the main nav in sitelinks. */
export function siteNavigationSchema(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: items.map((i) => i.name),
    url: items.map((i) => absUrl(i.url)),
  };
}

/** Article schema for blog / news posts. */
export function articleSchema(a: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.headline,
    description: a.description,
    image: absUrl(a.image),
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    author: { "@type": "Person", name: a.authorName },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: ORG_LOGO },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": absUrl(a.url) },
  };
}