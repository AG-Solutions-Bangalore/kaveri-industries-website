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
 * - URLs are resolved to absolute form against `company.url`.
 */

import { company } from "@/lib/company";

// ---------------------------------------------------------------- //
// Types
// ---------------------------------------------------------------- //

export type JsonLd =
  | Record<string, unknown>
  | Record<string, unknown>[];

// Review/AggregateRating schema helpers were removed along with the
// testimonials section (which had no brochure backing). The brochure
// does not advertise customer reviews, and Google's structured-data
// guidelines forbid fabricated AggregateRating. If real verified
// reviews are added later, reintroduce `ReviewInput`, `reviewSchema`,
// `aggregateRatingSchema`, and `reviewsBlock` here.

// ---------------------------------------------------------------- //
// Builders
// ---------------------------------------------------------------- //

/** Absolute-URL helper used by every schema builder. */
export function absUrl(path: string): string {
  if (!path) return company.url;
  if (/^https?:\/\//i.test(path)) return path;
  return `${company.url}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Generic Organization schema used site-wide (injected by SEO component). */
export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${company.url}#organization`,
    name: company.name,
    legalName: company.legalName,
    url: company.url,
    logo: company.logo,
    description: company.description,
    foundingDate: company.foundingDate,
    email: company.contact.primaryEmail,
    telephone: company.contact.phones[0].tel,
    sameAs: [...company.social],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: company.contact.salesEmail,
        telephone: company.contact.phones[0].tel,
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
  const a = company.address;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${company.url}#localbusiness`,
    name: company.name,
    legalName: company.legalName,
    url: company.url,
    logo: company.logo,
    image: company.logo,
    description: company.description,
    telephone: company.contact.phones[0].tel,
    email: company.contact.primaryEmail,
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
      latitude: a.geo.lat,
      longitude: a.geo.lng,
    },
    openingHoursSpecification: company.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    parentOrganization: { "@id": `${company.url}#organization` },
  };
}

/** WebSite schema with SearchAction for sitelinks search box. */
export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${company.url}#website`,
    name: company.name,
    url: company.url,
    inLanguage: company.locale.replace("_", "-"),
    publisher: { "@id": `${company.url}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${company.url}/search?q={search_term_string}`,
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
    brand: { "@type": "Brand", name: p.brand ?? company.name },
    manufacturer: { "@id": `${company.url}#organization` },
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
    image: s.image ? absUrl(s.image) : company.logo,
    provider: { "@id": `${company.url}#organization` },
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
      name: company.name,
      logo: { "@type": "ImageObject", url: company.logo },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": absUrl(a.url) },
  };
}