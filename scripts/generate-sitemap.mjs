/**
 * Build-time sitemap generator.
 *
 * Produces `public/sitemap.xml` (which Vite then copies to `dist/sitemap.xml`)
 * from:
 *   1. A hand-maintained list of static routes — kept here so it stays in sync
 *      with `src/routes/routes.tsx`. If you add a route there, add it here.
 *   2. The product catalogue, parsed out of `src/feature/Products/api/products.ts`
 *      by scanning for `slug: "…"` lines. That keeps a single source of truth
 *      and means adding a product automatically grows the sitemap.
 *
 * Run via the npm scripts:
 *   npm run sitemap            # generate only
 *   npm run sitemap:check      # exit 1 if sitemap is stale / missing
 *
 * Wired into `predev` and `prebuild` so the file is always fresh before Vite
 * runs. The check variant is useful in CI to fail builds that drift.
 */

import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public", "sitemap.xml");
const PRODUCTS_TS = path.join(
  ROOT,
  "src",
  "feature",
  "Products",
  "api",
  "products.ts",
);

const args = new Set(process.argv.slice(2));
const CHECK_ONLY = args.has("--check");

/**
 * Base URL used for every <loc>. Override at build time with
 * `SITE_URL=https://example.com npm run sitemap`.
 */
const SITE_URL =
  (process.env.SITE_URL ??
    process.env.VITE_SITE_URL ??
    "https://kaveri-industries.example.com").replace(/\/$/, "");

/** Static routes — keep in sync with `src/routes/routes.tsx`. */
const STATIC_ROUTES = [
  { path: "/",            changefreq: "weekly",  priority: 1.0 },
  { path: "/about",       changefreq: "monthly", priority: 0.8 },
  { path: "/products",    changefreq: "weekly",  priority: 0.9 },
  { path: "/industries",  changefreq: "monthly", priority: 0.7 },
  { path: "/contact",     changefreq: "yearly",  priority: 0.6 },
  { path: "/privacy",     changefreq: "yearly",  priority: 0.3 },
  { path: "/terms",       changefreq: "yearly",  priority: 0.3 },
  { path: "/compliance",  changefreq: "yearly",  priority: 0.3 },
  { path: "/demo",        changefreq: "monthly", priority: 0.4 },
];

/**
 * Read the products catalogue and pull out every `slug: "…"` value.
 * Lightweight regex parse — we don't need a TS toolchain for this.
 */
async function readProductSlugs() {
  if (!existsSync(PRODUCTS_TS)) return [];
  const src = await readFile(PRODUCTS_TS, "utf8");
  const matches = src.matchAll(/^\s*slug:\s*"([^"]+)"/gm);
  return Array.from(matches, (m) => m[1]);
}

/** ISO 8601 date string for `<lastmod>` — one value for the whole build. */
function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

/** XML-escape a string for safe inclusion in element text. */
function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Build the <urlset>…</urlset> body. */
function renderXml({ staticRoutes, productSlugs, lastmod }) {
  const urls = [];

  for (const route of staticRoutes) {
    urls.push(
      `  <url>
    <loc>${escapeXml(`${SITE_URL}${route.path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
    );
  }

  for (const slug of productSlugs) {
    urls.push(
      `  <url>
    <loc>${escapeXml(`${SITE_URL}/products/${slug}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${"monthly"}</changefreq>
    <priority>${"0.7"}</priority>
  </url>`,
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}

async function build() {
  const productSlugs = await readProductSlugs();
  const lastmod = todayIso();
  const xml = renderXml({ staticRoutes: STATIC_ROUTES, productSlugs, lastmod });
  const total = STATIC_ROUTES.length + productSlugs.length;

  if (CHECK_ONLY) {
    if (!existsSync(OUT)) {
      console.error(`[sitemap] missing ${path.relative(ROOT, OUT)}`);
      process.exit(1);
    }
    const existing = await readFile(OUT, "utf8");
    if (existing.trim() !== xml.trim()) {
      console.error(
        `[sitemap] ${path.relative(ROOT, OUT)} is out of date. Re-run \`npm run sitemap\`.`,
      );
      process.exit(1);
    }
    console.log(
      `[sitemap] ${path.relative(ROOT, OUT)} is fresh (${total} URLs) ✓`,
    );
    return;
  }

  await writeFile(OUT, xml, "utf8");
  console.log(
    `[sitemap] wrote ${path.relative(ROOT, OUT)} (${STATIC_ROUTES.length} static + ${productSlugs.length} product = ${total} URLs)`,
  );
}

build().catch((err) => {
  console.error("[sitemap] failed:", err);
  process.exit(1);
});
