/**
 * @file src/seo/seo.tsx
 * Central on-page SEO manager, automatic route resolver, and `<SeoManager />` component for Kaveri Industries.
 *
 * Provides:
 * - `SEO_CONFIG` — Single source of truth for all route metadata (title, description, keywords, path, schemas).
 * - `STATIC_PATH_MAP` — Route pathname to config key mapper.
 * - `resolveRouteSEO(pathname)` — Pure function that resolves metadata & schemas for any path (static or `/products/:slug`).
 * - `<SeoManager />` — Mounted once in `RootLayout`. Automatically syncs the document `<head>` on route navigation.
 * - Direct DOM synchronization via `useEffect` ensuring canonical URL, title, description, and keywords ALWAYS match the active URL.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { Thing } from "schema-dts";
import { company } from "@/lib/company";
import { IMAGE_BASE_URL } from "@/lib/images";
import { TARGET_SECTORS } from "@/feature/Home/api/sectors";
import {
  PRODUCTS,
  getProductBySlug,
  type Product,
} from "@/feature/Products/api/products";
import {
  absUrl,
  breadcrumbSchema,
  createCompositeGraph,
  getCanonicalUrl,
  organizationSchema,
  productSchema,
  serviceSchema,
  websiteSchema,
  webPageSchema,
  type JsonLd,
} from "./schemas";

export { absUrl, getCanonicalUrl };

export type SeoOgType = "website" | "article" | "product" | "profile";

export type SeoKey =
  | "home"
  | "about"
  | "products"
  | "industries"
  | "rdsoApproval"
  | "machinery"
  | "contact"
  | "certificate"
  | "privacy"
  | "terms"
  | "compliance"
  | "sitemap"
  | "demo"
  | "notFound";

export interface SeoRouteConfig {
  title: string;
  description: string;
  keywords: string[] | string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: SeoOgType;
  noindex?: boolean;
  getSchemas?: () => Thing[];
}

/** Helper that builds the sector capability schemas. */
export function getSectorSchemas(): Thing[] {
  return TARGET_SECTORS.map((s) =>
    serviceSchema({
      name: s.name,
      description: s.description,
      url: `/contact?sector=${s.id}`,
    }),
  );
}

/** Helper that builds the product catalog ItemList schema. */
export function getProductItemListSchema(): Thing {
  return {
    "@type": "ItemList",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(`/products/${p.slug}`),
      item: productSchema({
        name: p.name,
        description: p.shortDescription,
        image: p.imageUrl ?? `${IMAGE_BASE_URL}/home/product-hex-bolts.webp`,
        sku: p.id.toUpperCase(),
      }),
    })),
  };
}

/**
 * Single source of truth for static page SEO metadata across Kaveri Industries.
 */
export const SEO_CONFIG: Record<SeoKey, SeoRouteConfig> = {
  home: {
    title: `High Tensile MS Fasteners Manufacturer | ${company.name}`,
    description:
      "Kaveri Industries manufactures high tensile MS fasteners, bolts, nuts, U-bolts and washers for towers, infrastructure, power, railways and industrial applications.",
    keywords: [
      "high tensile fasteners",
      "MS fasteners manufacturer",
      "hex head bolts",
      "HSFG bolts",
      "foundation bolts",
      "guard rail bolts",
      "hot dip galvanised fasteners",
      "U-bolts",
      "center bolts",
      "washers IS 2016 IS 3063",
      "transmission tower fasteners",
      `${company.isoStandard} fasteners`,
      "Jigani Bangalore fasteners",
    ],
    path: "/",
    image: `${IMAGE_BASE_URL}/home/home_banner_image.webp`,
    imageAlt: `${company.name} — manufacturers of high-tensile MS fasteners for transmission towers, refineries, railways, and structural infrastructure`,
    type: "website",
    getSchemas: () => getSectorSchemas(),
  },
  about: {
    title: `About ${company.name} | High Tensile Fasteners Manufacturer`,
    description:
      "Learn about Kaveri Industries, a manufacturer of high tensile MS fasteners, bolts, nuts, U-bolts and washers for industrial and infrastructure applications.",
    keywords: [
      "about Kaveri Industries",
      "fasteners manufacturer Bangalore",
      "ISO certified fastener manufacturer",
      "Jigani industrial area fasteners",
      "Rajesh Bhalla Kaveri Industries",
    ],
    path: "/about",
    type: "website",
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
      ]),
    ],
  },
  products: {
    title: `High Tensile Fasteners & Bolts Manufacturer | ${company.name}`,
    description:
      "Explore high tensile MS fasteners from Kaveri Industries, including hex bolts, nuts, studs, washers, U-bolts and center bolts for industrial applications.",
    keywords: [
      "high tensile fasteners catalogue",
      "industrial hex bolts",
      "heavy hex nuts",
      "threaded studs",
      "plain spring washers",
      "hot dip galvanized bolts",
    ],
    path: "/products",
    type: "product",
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
      ]),
      getProductItemListSchema(),
    ],
  },
  industries: {
    title: `Industries Served by High Tensile Fasteners | ${company.name}`,
    description:
      "Kaveri Industries supplies high tensile MS fasteners for telecom towers, buildings, bridges, refineries, power plants, railways and guard rails.",
    keywords: [
      "transmission tower fasteners",
      "structural bridge bolting",
      "refinery pipeline fasteners",
      "wind power plant bolting",
      "railway track fasteners",
      "road guard rail crash barrier bolts",
    ],
    path: "/industries",
    type: "website",
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Industries", url: "/industries" },
      ]),
      ...getSectorSchemas(),
    ],
  },
  rdsoApproval: {
    title: `RDSO Approval | ${company.name}`,
    description:
      "Kaveri Industries is an authorized RDSO approved vendor for HSFG bolting assemblies with DTI washer and high tensile MS fasteners for Indian Railways infrastructure.",
    keywords: [
      "RDSO approved vendor",
      "HSFG bolting assemblies with DTI washer",
      "RDSO fasteners manufacturer",
      "Indian Railways fastener supplier",
      "railway track bolts",
      "RDSO approval certificate",
    ],
    path: "/rdso-approval",
    type: "website",
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "RDSO Approval", url: "/rdso-approval" },
      ]),
    ],
  },
  machinery: {
    title: `Machinery & Facilities | ${company.name}`,
    description:
      "Kaveri Industries manufacturing facilities: CNC turning centres, VMC machines, lathes, drilling & milling equipment, and precision metrology inspection.",
    keywords: [
      "fastener manufacturing machinery",
      "CNC turning centres",
      "VMC machine fasteners",
      "precision metrology inspection",
      "tensile testing lab",
    ],
    path: "/machinery",
    type: "website",
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Machinery", url: "/machinery" },
      ]),
    ],
  },
  contact: {
    title: `Contact ${company.name} | MS Fasteners & Bolt Manufacturer`,
    description:
      "Contact Kaveri Industries for high tensile MS fasteners, bolts, nuts, U-bolts and washers for industrial and infrastructure applications.",
    keywords: [
      "contact Kaveri Industries",
      "fasteners enquiry",
      "bolt quotation Bangalore",
      "Jigani Bangalore address",
      "fastener manufacturer phone",
    ],
    path: "/contact",
    type: "website",
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" },
      ]),
    ],
  },
  certificate: {
    title: `Certifications & Approvals | ${company.name}`,
    description:
      "View Kaveri Industries official quality certifications and approvals including ISO 9001:2015, RDSO Indian Railways, and BIS conformity for fasteners.",
    keywords: [
      "ISO 9001 certificate fasteners",
      "RDSO approval certificate",
      "fastener quality compliance",
      "mill test certificates",
    ],
    path: "/certificate",
    type: "website",
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Certifications", url: "/certificate" },
      ]),
    ],
  },
  privacy: {
    title: `Privacy Policy | ${company.name}`,
    description:
      "Kaveri Industries collects only the contact information you voluntarily submit through our enquiry and quote-request forms. We do not sell, rent, or share your data.",
    keywords: "privacy policy",
    path: "/privacy",
    noindex: true,
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Privacy Policy", url: "/privacy" },
      ]),
    ],
  },
  terms: {
    title: `Terms of Service | ${company.name}`,
    description:
      "By using kaveriindustries.com you agree to the acceptable-use terms set out in our master supply agreement.",
    keywords: "terms of service",
    path: "/terms",
    noindex: true,
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Terms of Service", url: "/terms" },
      ]),
    ],
  },
  compliance: {
    title: `Compliance | ${company.name}`,
    description:
      "Kaveri Industries operates under ISO 9001:2008 and follows the relevant IS / ISO / ASTM standards for every product line.",
    keywords: "compliance standards",
    path: "/compliance",
    noindex: true,
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Compliance", url: "/compliance" },
      ]),
    ],
  },
  sitemap: {
    title: `Sitemap | ${company.name}`,
    description:
      "Browse all sections of the Kaveri Industries website from one place — products, industries, and contact.",
    keywords: "sitemap",
    path: "/sitemap",
    noindex: true,
    getSchemas: () => [
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Sitemap", url: "/sitemap" },
      ]),
    ],
  },
  demo: {
    title: `Component Showcase | ${company.name}`,
    description:
      "Internal showcase of isolated UI primitives used across the Kaveri Industries site — newsletter footer, social link buttons, theme switch, and more.",
    keywords: "demo showcase",
    path: "/demo",
    noindex: true,
  },
  notFound: {
    title: `Page Not Found | ${company.name}`,
    description: "The requested page could not be found.",
    keywords: "404 not found",
    path: "/404",
    noindex: true,
  },
};

export const STATIC_PATH_MAP: Record<string, SeoKey> = {
  "/": "home",
  "/v2": "home",
  "/about": "about",
  "/products": "products",
  "/industries": "industries",
  "/rdso-approval": "rdsoApproval",
  "/vendor-approval": "rdsoApproval",
  "/vendor-approvals": "rdsoApproval",
  "/certificate/vendor-approval": "rdsoApproval",
  "/machinery": "machinery",
  "/infrastructure/machinery": "machinery",
  "/contact": "contact",
  "/certificate": "certificate",
  "/certificates": "certificate",
  "/privacy": "privacy",
  "/terms": "terms",
  "/compliance": "compliance",
  "/sitemap": "sitemap",
  "/demo": "demo",
  "/404": "notFound",
};

/**
 * Builds dynamic per-product SEO config & schemas for `/products/:slug`.
 */
export function productDetailSEO(product: Product): {
  seo: {
    title: string;
    description: string;
    path: string;
    image: string;
    imageAlt: string;
    type: "product";
    schema: Thing[];
  };
  schema: Thing[];
} {
  const path = `/products/${product.slug}`;
  const image = product.imageUrl ?? company.logo;
  const imageAlt = product.imageAlt ?? product.name;

  const schema: Thing[] = [
    productSchema({
      name: product.name,
      description: product.shortDescription,
      image: absUrl(image),
      sku: product.id.toUpperCase(),
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
      { name: product.name, url: path },
    ]),
  ];

  return {
    seo: {
      title: `${product.name} | ${company.name}`,
      description: product.shortDescription,
      path,
      image,
      imageAlt,
      type: "product",
      schema,
    },
    schema,
  };
}

export interface ResolvedSeoData {
  title: string;
  description: string;
  keywords: string;
  path: string;
  canonical: string;
  image: string;
  imageAlt: string;
  type: SeoOgType;
  noindex: boolean;
  schemas: Thing[];
}

/**
 * Automatically resolves the complete SEO metadata & Schema.org graph for ANY pathname.
 */
export function resolveRouteSEO(pathname: string): ResolvedSeoData {
  const cleanPath =
    pathname.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";

  // 1. Dynamic product detail: /products/:slug
  const productMatch = cleanPath.match(/^\/products\/([^/]+)$/);
  if (productMatch) {
    const slug = decodeURIComponent(productMatch[1]).trim();
    const product = getProductBySlug(slug);
    if (product) {
      const detail = productDetailSEO(product);
      return {
        title: detail.seo.title,
        description: detail.seo.description,
        keywords: `${product.name}, high tensile fasteners, industrial bolting, ${company.name}`,
        path: detail.seo.path,
        canonical: getCanonicalUrl(detail.seo.path),
        image: absUrl(detail.seo.image),
        imageAlt: detail.seo.imageAlt,
        type: "product",
        noindex: false,
        schemas: [
          organizationSchema(),
          webPageSchema(
            detail.seo.path,
            detail.seo.title,
            detail.seo.description,
          ),
          ...detail.schema,
        ],
      };
    }
  }

  // 2. Known static route
  const routeKey = STATIC_PATH_MAP[cleanPath];
  if (routeKey && SEO_CONFIG[routeKey]) {
    const cfg = SEO_CONFIG[routeKey];
    const kw = Array.isArray(cfg.keywords)
      ? cfg.keywords.join(", ")
      : cfg.keywords;
    const pageSchemas = cfg.getSchemas ? cfg.getSchemas() : [];
    const schemas: Thing[] = [
      organizationSchema(),
      webPageSchema(cfg.path, cfg.title, cfg.description),
      ...pageSchemas,
    ];
    if (cleanPath === "/") {
      schemas.push(websiteSchema());
    }
    return {
      title: cfg.title,
      description: cfg.description,
      keywords: kw,
      path: cfg.path,
      canonical: getCanonicalUrl(cfg.path),
      image: absUrl(cfg.image ?? company.logo),
      imageAlt: cfg.imageAlt ?? company.name,
      type: cfg.type ?? "website",
      noindex: cfg.noindex ?? false,
      schemas,
    };
  }

  // 3. Fallback / 404
  const notFound = SEO_CONFIG.notFound;
  return {
    title: notFound.title,
    description: notFound.description,
    keywords: "404 not found",
    path: cleanPath,
    canonical: getCanonicalUrl(cleanPath),
    image: absUrl(company.logo),
    imageAlt: company.name,
    type: "website",
    noindex: true,
    schemas: [],
  };
}

const OG_W = 1200;
const OG_H = 630;

export interface SEOProps {
  /** Optional routeKey or manual overrides */
  routeKey?: SeoKey;
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  schema?: JsonLd | JsonLd[] | Thing | Thing[];
  type?: SeoOgType;
  keywords?: string[] | string;
}

/**
 * Root `<SeoManager />` component mounted in `RootLayout`.
 * Automatically reads `useLocation().pathname` and synchronizes the entire document `<head>`:
 * - `<title>`
 * - `<meta name="description">`
 * - `<meta name="keywords">`
 * - `<meta name="robots">`
 * - `<link rel="canonical">` (ensures exact match with active URL)
 * - Open Graph & Twitter Cards
 * - Schema.org JSON-LD `<script type="application/ld+json">`
 */
export function SeoManager(props: SEOProps = {}) {
  const location = useLocation();
  const resolved = resolveRouteSEO(props.path ?? location.pathname);

  const title = props.title ?? resolved.title;
  const description = props.description ?? resolved.description;
  const rawKeywords = props.keywords ?? resolved.keywords;
  const keywords = Array.isArray(rawKeywords)
    ? rawKeywords.join(", ")
    : rawKeywords;
  const canonical = props.path
    ? getCanonicalUrl(props.path)
    : resolved.canonical;
  const image = props.image ? absUrl(props.image) : resolved.image;
  const imageAlt = props.imageAlt ?? resolved.imageAlt;
  const type = props.type ?? resolved.type;
  const noindex = props.noindex ?? resolved.noindex;

  const extraSchemas = props.schema
    ? Array.isArray(props.schema)
      ? props.schema
      : [props.schema]
    : [];
  const allSchemas = [...resolved.schemas, ...extraSchemas];

  // Direct DOM synchronization guarantees the canonical tag, title, and meta tags
  // always match the active URL in the browser even before or after hydration.
  useEffect(() => {
    if (typeof document === "undefined") return;

    // 1. Title
    // eslint-disable-next-line react-hooks/immutability -- intentional direct DOM sync inside useEffect (title/meta/canonical must match active URL)
    document.title = title;

    // 2. Canonical tag: update in place without removing nodes to prevent React 19 reconciliation errors
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonical);
    }

    // 3. Helper to update meta tag content in place
    const setMeta = (attr: string, key: string, content: string) => {
      const el = document.querySelector(`meta[${attr}="${key}"]`);
      if (el) {
        el.setAttribute("content", content);
      }
    };

    setMeta("name", "description", description);
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }
    setMeta(
      "name",
      "robots",
      noindex
        ? "noindex,nofollow"
        : "index,follow,max-image-preview:large,max-snippet:-1",
    );
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, keywords, canonical, image, type, noindex]);

  // SSR/SSG guard: react-helmet-async under React 19 renders <title>/<meta>/
  // <link> inline via React 19's hoisting. During renderToString (no window)
  // those tags stay inline inside the #root div instead of moving to <head>,
  // producing W3C "title not allowed as child of div" + duplicate meta.
  // The prerender entry (src/seo/prerender.tsx) already injects the
  // authoritative per-route head via buildHeadElements(), so SeoManager must
  // render nothing on the server. Client hydration still manages <head>.
  if (typeof window === "undefined") return null;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="author" content={company.name} />
      <meta name="publisher" content={company.name} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex,nofollow"
            : "index,follow,max-image-preview:large,max-snippet:-1"
        }
      />
      <meta
        name="theme-color"
        content="#0f172a"
        media="(prefers-color-scheme: dark)"
      />
      <meta
        name="theme-color"
        content="#ffffff"
        media="(prefers-color-scheme: light)"
      />
      <meta name="format-detection" content="telephone=no" />

      <link rel="canonical" href={canonical} />
      <link rel="ai-catalog" href="/.well-known/ai-catalog.json" type="application/ai-catalog+json" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content={String(OG_W)} />
      <meta property="og:image:height" content={String(OG_H)} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={company.locale.replace("-", "_")} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={company.twitter} />
      <meta name="twitter:creator" content={company.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Schema.org composite JSON-LD */}
      {allSchemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(createCompositeGraph(allSchemas as Thing[]))}
        </script>
      )}
    </Helmet>
  );
}

/** `<SEO />` alias for `<SeoManager />`. */
export const SEO = SeoManager;

/** Convenient static objects if needed */
export const homeSEO = SEO_CONFIG.home;
export const aboutSEO = SEO_CONFIG.about;
export const productsSEO = SEO_CONFIG.products;
export const industriesSEO = SEO_CONFIG.industries;
export const vendorApprovalSEO = SEO_CONFIG.rdsoApproval;
export const machinerySEO = SEO_CONFIG.machinery;
export const contactSEO = SEO_CONFIG.contact;
export const certificateSEO = SEO_CONFIG.certificate;
export const notFoundSEO = SEO_CONFIG.notFound;
export const demoSEO = SEO_CONFIG.demo;
