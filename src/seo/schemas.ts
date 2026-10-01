/**
 * @file src/seo/schemas.ts
 * Typed Schema.org JSON-LD graph builders for Kaveri Industries.
 *
 * Utilizes `schema-dts` for compile-time type safety against official Schema.org standards.
 * Every builder produces valid, clean `Thing` nodes. The `createCompositeGraph` utility
 * combines them into a single unified `@context/@graph` script tag for crawl efficiency.
 *
 * Real Kaveri Industries business data is used exclusively (no mocks or placeholder strings).
 */

import type {
  Article,
  BreadcrumbList,
  DayOfWeek,
  FAQPage,
  Graph,
  ItemList,
  LocalBusiness,
  Organization,
  Product,
  Service,
  Thing,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";
import { company } from "@/lib/company";

export type {
  Article,
  BreadcrumbList,
  DayOfWeek,
  FAQPage,
  Graph,
  ItemList,
  LocalBusiness,
  Organization,
  Product,
  Service,
  Thing,
  WebPage,
  WebSite,
  WithContext,
};

export const SITE_ORIGIN = company.url;
export const SITE_NAME = company.name;
export const SITE_LOGO = company.logo;

export const ORG_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

/**
 * Strips HTML tags from raw strings.
 */
export function stripHtml(value: unknown): string {
  return typeof value === "string" ? value.replace(/<[^>]+>/g, "").trim() : "";
}

/**
 * Computes an absolute, normalized canonical URL for any internal route.
 *
 * @summary Canonical URL generator.
 * @param pathname - The route path (e.g. `/products` or `about`).
 * @returns Fully-qualified canonical URL with leading/trailing slash normalized.
 */
export function getCanonicalUrl(pathname = ""): string {
  const clean = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? `${SITE_ORIGIN}/${clean}` : `${SITE_ORIGIN}/`;
}

/**
 * Ensures a URL or asset path is absolute against the site origin.
 */
export function absUrl(path = ""): string {
  if (!path) return SITE_ORIGIN;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? "" : "/"}${path}`;
}

/**
 * Normalizes date strings into standard ISO 8601 with an IST (+05:30) offset.
 */
export function toIsoDate(value: unknown): string | null {
  if (typeof value !== "string" || !value.trim()) return null;
  const raw = value.trim();
  if (/^\d{4}-\d{2}-\d{2}T/.test(raw)) return raw;
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(raw);
  if (!match) {
    const parsed = new Date(raw);
    return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
  }
  return `${match[1]}-${match[2]}-${match[3]}T00:00:00+05:30`;
}

/**
 * Generates the central `Organization` + `LocalBusiness` schema for Kaveri Industries.
 *
 * Includes factory address in Jigani Industrial Area, Bangalore, GPS coordinates,
 * ISO 9001:2008 certification, phone numbers, contact point for sales, and working hours.
 *
 * @summary Organization & LocalBusiness schema builder.
 */
export function organizationSchema(): LocalBusiness {
  const a = company.address;
  return {
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: company.name,
    legalName: company.legalName,
    url: `${SITE_ORIGIN}/`,
    logo: absUrl(company.logo),
    image: absUrl(company.logo),
    description: company.description,
    foundingDate: company.foundingDate,
    email: company.contact.primaryEmail,
    telephone: company.contact.phones[0]?.tel ?? "+918027825275",
    priceRange: "₹₹",
    sameAs: [...company.social],
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
      dayOfWeek: h.days as unknown as DayOfWeek[],
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: company.contact.salesEmail,
        telephone: company.contact.phones[0]?.tel ?? "+918027825275",
        areaServed: ["IN", "AE", "SG", "DE"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export const localBusinessSchema = organizationSchema;

/**
 * Generates the Schema.org `WebSite` entity.
 */
export function websiteSchema(): WebSite {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_ORIGIN}/`,
    name: company.name,
    inLanguage: company.locale.replace("_", "-"),
    publisher: { "@id": ORG_ID },
  };
}

/**
 * Generates the Schema.org `WebPage` entity for a specific route.
 */
export function webPageSchema(
  pathname: string,
  title: string,
  description: string,
): WebPage {
  const url = getCanonicalUrl(pathname);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

/**
 * Generates a `BreadcrumbList` schema showing the site navigation hierarchy.
 */
export function breadcrumbSchema(
  items: { name: string; url?: string; path?: string }[],
): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absUrl(item.url ?? item.path ?? "/"),
    })),
  };
}

/**
 * Product schema for industrial product / SKU pages.
 */
export function productSchema(p: {
  name: string;
  description: string;
  image: string;
  sku: string;
  brand?: string;
}): Product {
  return {
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: absUrl(p.image),
    sku: p.sku,
    brand: { "@type": "Brand", name: p.brand ?? company.name },
    manufacturer: { "@type": "Organization", name: company.name, "@id": ORG_ID },
  };
}

/**
 * Service schema for target industries / engineering capabilities.
 */
export function serviceSchema(s: {
  name: string;
  description: string;
  url: string;
  image?: string;
}): Service {
  return {
    "@type": "Service",
    serviceType: s.name,
    name: s.name,
    description: s.description,
    url: absUrl(s.url),
    image: s.image ? absUrl(s.image) : absUrl(company.logo),
    provider: { "@type": "Organization", name: company.name, "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
  };
}

/**
 * FAQPage schema for question and answer pairs.
 */
export function faqSchema(
  qa: { question: string; answer: string }[],
): FAQPage {
  return {
    "@type": "FAQPage",
    mainEntity: qa.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

/**
 * Generates an `ItemList` schema for ordered product or resource listings.
 */
export function itemListSchema(
  items: { name: string; url: string }[],
): ItemList {
  return {
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.url),
    })),
  };
}

/**
 * Article schema for technical updates / compliance announcements.
 */
export function articleSchema(a: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
}): Article {
  const url = absUrl(a.url);
  return {
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
      logo: { "@type": "ImageObject", url: absUrl(company.logo) },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

/**
 * Wraps individual schema nodes into a unified Schema.org `@graph` container.
 *
 * @summary Composite graph wrapper using schema-dts Graph type.
 * @param nodes - Array of Schema.org `Thing` instances.
 * @returns Root JSON-LD object with `@context: 'https://schema.org'` and `@graph: readonly Thing[]`.
 */
export function createCompositeGraph(nodes: readonly Thing[]): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export type JsonLd = Graph | Thing | Record<string, unknown>;
