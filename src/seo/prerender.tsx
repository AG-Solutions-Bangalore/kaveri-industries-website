/**
 * @file src/seo/prerender.tsx
 * Static Site Generation (SSG) prerender entry point for Vite.
 *
 * Invoked by `vite-prerender-plugin` at build time to produce static HTML pages for
 * all routes across the Kaveri Industries website.
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type { Thing } from "schema-dts";

import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { RootLayout } from "@/components/layout/RootLayout";
import HomePage from "@/feature/Home/pages/HomePage";
import HomePageV2 from "@/feature/Home/pages/HomePageV2";
import AboutPage from "@/feature/About/pages/AboutPage";
import ProductsPage from "@/feature/Products/pages/ProductsPage";
import ProductDetailPage from "@/feature/Products/pages/ProductDetailPage";
import IndustriesPage from "@/feature/Industries/pages/IndustriesPage";
import VendorApprovalPage from "@/feature/VendorApproval/pages/VendorApprovalPage";
import MachineryPage from "@/feature/Machinery/pages/MachineryPage";
import ContactPage from "@/feature/Contact/pages/ContactPage";
import LegalPage from "@/feature/Legal/pages/LegalPage";
import NotFoundPage from "@/feature/NotFound/pages/NotFoundPage";

import { company } from "@/lib/company";
import { PRODUCTS } from "@/feature/Products/api/products";
import { resolveRouteSEO, type SeoKey } from "./seo";
import { absUrl, createCompositeGraph } from "./schemas";

/* ------------------------------------------------------------------ */
/* Static Route Definitions                                           */
/* ------------------------------------------------------------------ */

interface StaticRouteDef {
  path: string;
  key: SeoKey;
  label: string;
}

const STATIC_ROUTES: StaticRouteDef[] = [
  { path: "/", key: "home", label: "Home" },
  { path: "/about", key: "about", label: "About Us" },
  { path: "/products", key: "products", label: "Products" },
  { path: "/industries", key: "industries", label: "Industries" },
  { path: "/rdso-approval", key: "rdsoApproval", label: "RDSO Approval" },
  { path: "/machinery", key: "machinery", label: "Machinery & Facilities" },
  { path: "/contact", key: "contact", label: "Contact" },
  { path: "/certificate", key: "certificate", label: "Certifications" },
  { path: "/privacy", key: "privacy", label: "Privacy Policy" },
  { path: "/terms", key: "terms", label: "Terms of Service" },
  { path: "/compliance", key: "compliance", label: "Compliance" },
  { path: "/sitemap", key: "sitemap", label: "Sitemap" },
];

/* ------------------------------------------------------------------ */
/* Head Tags Generator                                                */
/* ------------------------------------------------------------------ */

interface HeadElement {
  type: string;
  props: Record<string, string>;
  children?: string;
}

function buildHeadElements(
  title: string,
  desc: string,
  kw: string,
  canonical: string,
  schemas: readonly Thing[],
  noindex = false,
  image: string = company.logo,
  imageAlt: string = company.name,
  type: string = "website",
) {
  const rh = "true";
  const absImg = absUrl(image);
  const elements: HeadElement[] = [
    { type: "meta", props: { name: "description", content: desc, "data-rh": rh } },
    { type: "meta", props: { name: "author", content: company.name, "data-rh": rh } },
    { type: "meta", props: { name: "publisher", content: company.name, "data-rh": rh } },
    {
      type: "meta",
      props: {
        name: "robots",
        content: noindex
          ? "noindex,nofollow"
          : "index,follow,max-image-preview:large,max-snippet:-1",
        "data-rh": rh,
      },
    },
    { type: "link", props: { rel: "canonical", href: canonical, "data-rh": rh } },
    { type: "meta", props: { property: "og:type", content: type, "data-rh": rh } },
    { type: "meta", props: { property: "og:site_name", content: company.name, "data-rh": rh } },
    { type: "meta", props: { property: "og:title", content: title, "data-rh": rh } },
    { type: "meta", props: { property: "og:description", content: desc, "data-rh": rh } },
    { type: "meta", props: { property: "og:url", content: canonical, "data-rh": rh } },
    { type: "meta", props: { property: "og:image", content: absImg, "data-rh": rh } },
    { type: "meta", props: { property: "og:image:width", content: "1200", "data-rh": rh } },
    { type: "meta", props: { property: "og:image:height", content: "630", "data-rh": rh } },
    { type: "meta", props: { property: "og:image:alt", content: imageAlt, "data-rh": rh } },
    {
      type: "meta",
      props: {
        property: "og:locale",
        content: company.locale.replace("-", "_"),
        "data-rh": rh,
      },
    },
    { type: "meta", props: { name: "twitter:card", content: "summary_large_image", "data-rh": rh } },
    { type: "meta", props: { name: "twitter:site", content: company.twitter, "data-rh": rh } },
    { type: "meta", props: { name: "twitter:creator", content: company.twitter, "data-rh": rh } },
    { type: "meta", props: { name: "twitter:title", content: title, "data-rh": rh } },
    { type: "meta", props: { name: "twitter:description", content: desc, "data-rh": rh } },
    { type: "meta", props: { name: "twitter:image", content: absImg, "data-rh": rh } },
  ];

  if (kw) {
    elements.push({
      type: "meta",
      props: { name: "keywords", content: kw, "data-rh": rh },
    });
  }

  if (schemas.length > 0) {
    elements.push({
      type: "script",
      props: {
        type: "application/ld+json",
        id: "kaveri-rich-results",
        "data-rh": rh,
      },
      children: JSON.stringify(createCompositeGraph(schemas)),
    });
  }

  return new Set(elements);
}

/* ------------------------------------------------------------------ */
/* Server Route Renderer                                              */
/* ------------------------------------------------------------------ */

function renderRouteHtml(url: string): string {
  // Provide a helmet context so react-helmet-async extracts <title>/<meta>/
  // <link> during renderToString instead of inlining them into the #root
  // HTML string (which would place SEO tags inside <body> → W3C errors).
  // Head tags are supplied authoritatively via buildHeadElements() above,
  // so the extracted helmet state is intentionally discarded here.
  const helmetContext = {};
  try {
    return renderToString(
      <HelmetProvider context={helmetContext}>
        <QuoteModalProvider>
          <StaticRouter location={url}>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route path="v2" element={<HomePageV2 />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="products/:slug" element={<ProductDetailPage />} />
                <Route path="industries" element={<IndustriesPage />} />
                <Route path="rdso-approval" element={<VendorApprovalPage />} />
                <Route path="machinery" element={<MachineryPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="certificate" element={<VendorApprovalPage />} />
                <Route path="privacy" element={<LegalPage slug="privacy" />} />
                <Route path="terms" element={<LegalPage slug="terms" />} />
                <Route path="compliance" element={<LegalPage slug="compliance" />} />
                <Route path="sitemap" element={<LegalPage slug="sitemap" />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </StaticRouter>
        </QuoteModalProvider>
      </HelmetProvider>,
    );
  } catch (err) {
    console.warn(`⚠️ [SSG] Server render warning for ${url}:`, (err as Error)?.message ?? err);
    return `<div id="root"></div>`;
  }
}

/* ------------------------------------------------------------------ */
/* Main Prerender Entry Point                                         */
/* ------------------------------------------------------------------ */

export async function prerender(data: { url: string }) {
  const url = data.url || "/";
  const cleanPath = url.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
  const resolved = resolveRouteSEO(cleanPath);

  // Render static HTML body
  const html = renderRouteHtml(url);

  // Collect all crawlable routes (static + all dynamic product slugs)
  const links = new Set<string>([
    ...STATIC_ROUTES.map((r) => r.path),
    ...PRODUCTS.map((p) => `/products/${p.slug}`),
  ]);

  return {
    html,
    head: {
      lang: "en",
      title: resolved.title,
      elements: buildHeadElements(
        resolved.title,
        resolved.description,
        resolved.keywords,
        resolved.canonical,
        resolved.schemas,
        resolved.noindex,
        resolved.image,
        resolved.imageAlt,
        resolved.type,
      ),
    },
    links,
    data: { url },
  };
}
