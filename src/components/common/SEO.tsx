import { Helmet } from "react-helmet-async";
import { type JsonLd } from "@/lib/schemas";
import { company } from "@/lib/company";

export type SeoOgType = "website" | "article" | "product" | "profile";

export interface SEOProps {
  /** Page-specific title. Joined with site name in the renderer. */
  title?: string;
  /** 50–160 characters. Falls back to company.description. */
  description?: string;
  /** Path of the page, e.g. "/about". Used to build canonical + OG url. */
  path?: string;
  /** Absolute URL or `/`-rooted path. 1200×630 PNG/JPG recommended. */
  image?: string;
  /** Alt text for the social preview image. Required for accessibility. */
  imageAlt?: string;
  /** Set true on pages you don't want indexed (e.g. 404, internal tools). */
  noindex?: boolean;
  /**
   * Page-specific schema.org JSON-LD. The site-wide Organization + WebSite +
   * LocalBusiness graph lives ONCE as static JSON-LD in index.html (visible
   * without JavaScript) — do NOT re-emit those here or validators will
   * report every entity twice. Pass only page-specific schemas
   * (BreadcrumbList, Product/ItemList, FAQPage, Service, …).
   */
  schema?: JsonLd | JsonLd[];
  /** Drives OG `og:type` + `twitter:card`. */
  type?: SeoOgType;
  /** Comma-separated keywords — keep ≤10 and avoid stuffing. */
  keywords?: string[];
  /** Page-specific override for OG locale (BCP 47). */
  locale?: string;
  /** Article-only: publish + modify timestamps (ISO 8601). */
  publishedTime?: string;
  modifiedTime?: string;
  /** Article-only: author display name. */
  authorName?: string;
  /** hreflang alternates — e.g. `[{ hrefLang: "en-IN", href: "..." }]`. */
  alternates?: { hrefLang: string; href: string }[];
}

/** Default OG image dimensions — matches Google's recommended 1200×630. */
const OG_W = 1200;
const OG_H = 630;

/**
 * Drop-in `<SEO />` for every page. Wraps react-helmet-async, emits title /
 * description / canonical / Open Graph / Twitter / JSON-LD in one go.
 *
 * Performance: `<Helmet>` is async, only the tags whose values changed are
 * touched in the DOM. `prioritizeSeoTags` flushes SEO-critical tags first
 * so crawlers see them on the first byte.
 */
export function SEO({
  title,
  description = company.description,
  path = "/",
  image,
  imageAlt = title ?? company.name,
  noindex = false,
  schema,
  type = "website",
  keywords,
  locale = company.locale,
  publishedTime,
  modifiedTime,
  authorName,
  alternates,
}: SEOProps) {
  const fullTitle = title
    ? title.includes(company.name)
      ? title
      : `${title} | ${company.name}`
    : `${company.name} — Precision-Engineered Fasteners`;
  const url = `${company.url}${path.startsWith("/") ? "" : "/"}${path}`;
  // og:image / twitter:image must be absolute — resolve `/`-rooted paths
  // against the site URL so validators never receive a relative URL.
  const rawImage = image ?? company.logo;
  const ogImage = /^https?:\/\//i.test(rawImage)
    ? rawImage
    : `${company.url}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;

  // Page-specific schemas only — site-wide entities are served statically
  // from index.html. Emitting them here too would duplicate every entity
  // (Rich Results Test would show "2 valid items" per type).
  const ld: Record<string, unknown>[] = schema
    ? Array.isArray(schema)
      ? (schema as Record<string, unknown>[])
      : [schema as Record<string, unknown>]
    : [];

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>

      {/* Core meta */}
      <meta name="description" content={description} />
      <meta name="author" content={authorName ?? company.name} />
      <meta name="publisher" content={company.name} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1"} />
      <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="format-detection" content="telephone=no" />

      {/* Canonical + hreflang */}
      <link rel="canonical" href={url} />
      {alternates?.map((a) => (
        <link key={a.hrefLang} rel="alternate" hrefLang={a.hrefLang} href={a.href} />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content={String(OG_W)} />
      <meta property="og:image:height" content={String(OG_H)} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={locale.replace("-", "_")} />

      {/* Article-specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && authorName && (
        <meta property="article:author" content={authorName} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={company.twitter} />
      <meta name="twitter:creator" content={company.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Schema.org JSON-LD — one <script> per @graph entry for clean parsing */}
      {ld.map((entry, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}