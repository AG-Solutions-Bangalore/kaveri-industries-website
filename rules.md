# Project Rules

This document is the source of truth for conventions on this codebase. Every
contributor (human or agent) **must** follow these rules. Add new sections at
the bottom; never renumber an existing rule.

| # | Section | Purpose |
|---|---------|---------|
| 1 | [SEO Rules](#1-seo-rules) | Make every page Google-rich-search-ready |
| 2 | [Module Structure Rules](#2-module-structure-rules) | Keep `src/feature/{Module}/{api,components,hooks,pages,seo}/` clean and predictable |

> **Adding a new section** — append `## N. <Name>` at the bottom, give it an
> anchor `<a name="N-section-slug"></a>`, list numbered rules below. Update the
> table of contents above and link each rule by anchor (e.g. `S2-R3`).

---

<a name="1-seo-rules"></a>

## 1. SEO Rules

Goal: every public route must surface as a Google rich result (snippet stars,
breadcrumbs, sitelinks search box, Knowledge Panel) and be accessible to
crawlers.

### S1-R1 — Every page renders `<SEO />`

Every route component (under `src/feature/{Module}/pages/`) must render a
`<SEO {...moduleSEO} />` as its first child. Never set `<title>` directly via
document.title — `<SEO />` uses `react-helmet-async` and is the only allowed
title-ownership layer.

### S1-R2 — Title is short, descriptive, and unique

- ≤ 60 characters for the user-visible part (before ` | Kaveri Industries`).
- Must include the primary keyword of the page.
- No two routes may share the same title. Enforced by `homeSEO`, `aboutSEO`,
  `productsSEO`, `contactSEO`, `notFoundSEO` under each module's `seo/`
  folder.

### S1-R3 — Description is 50–160 characters

- Never empty — falls back to `siteConfig.description` but pages must override.
- Action-oriented, contains the page's primary keyword once.
- Different per route. Reusing copy across pages is a thin-content penalty.

### S1-R4 — Canonical URL is set on every page

`<SEO />` always emits `<link rel="canonical" href="...">` built from
`siteConfig.url + path`. Never duplicate canonicals manually.

### S1-R5 — Open Graph + Twitter meta are emitted together

`<SEO />` is the only place that sets `og:*` and `twitter:*`. Both must
appear together. Image must be 1200×630 with explicit `og:image:width`,
`og:image:height`, `og:image:alt`, and matching `twitter:image:alt`.

### S1-R6 — JSON-LD is declarative via `lib/schemas.ts`

Never hand-write `<script type="application/ld+json">`. Use a builder:

- `organizationSchema()` — auto-injected site-wide.
- `localBusinessSchema()` — auto-injected site-wide.
- `websiteSchema()` — auto-injected site-wide.
- `breadcrumbSchema(items)` — required on every non-home page.
- `productSchema(p)` — product detail pages.
- `faqSchema(qa)` — FAQ section / page.
- `reviewSchema(r)` / `reviewsBlock(reviews)` — testimonial sections; emits
  `AggregateRating` + each `Review`.
- `serviceSchema(s)` — capability / service pages.
- `siteNavigationSchema(items)` — surfaces nav in sitelinks.
- `articleSchema(a)` — blog / news.

Pass the result via `<SEO schema={...} />` — accept single object or array.

### S1-R7 — `<h1>` is exactly one per page, descriptive, and contains the page's primary keyword

- Home uses the brand-promise h1 (`Engineered polymer solutions, built to
  spec.`).
- Sub-sections use `<h2>` / `<h3>` in order. Skipping levels breaks document
  outline.

### S1-R8 — Images always have `alt` text

- Decorative images: `alt=""` (explicit empty).
- Meaningful images: descriptive `alt` that also doubles as `og:image:alt`
  on the page-level `<SEO>`.
- Implemented as `<img alt="..." />` or via the SEO component's `imageAlt`.

### S1-R9 — Interactive controls have `aria-label`

Buttons, links, and form inputs that have no visible text (icon-only
buttons, theme toggles, social icons) **must** declare `aria-label` or
`aria-labelledby`. Icon buttons in `ThemeToggle` and `<NavLink>` already do
this — keep the pattern.

### S1-R10 — `noindex` only on truly non-public pages

Use `<SEO noindex />` on `/404`, internal admin tools, and search-result
pages. Never set it on marketing pages.

### S1-R11 — `hreflang` alternates are declared via the `alternates` prop

For every locale a route supports, emit `<link rel="alternate"
hrefLang="...">`. Multi-locale apps must define them; single-locale apps
omit the prop.

### S1-R12 — Reviews / testimonials are real and structured

Every visible customer review must also appear in `reviewsBlock([...])` so
Google sees an `AggregateRating` + matching `Review[]` JSON-LD. Fake reviews
in structured data are a manual action — only emit reviews that exist on
the page.

### S1-R13 — One `<Helmet>` per page

`<SEO />` is the only `<Helmet>` user. Don't import `Helmet` directly in
pages; extend `<SEO />` if a new meta tag is needed.

### S1-R14 — Performance budgets that affect SEO

- Largest Contentful Paint target < 2.5s — keep hero above the fold.
- Cumulative Layout Shift target < 0.1 — `disableTransitionOnChange` is set
  on the theme provider to prevent this.
- All non-critical routes are `React.lazy()` — see `src/routes/routes.tsx`.

### S1-R15 — Validate JSON-LD before merge

Run one of these locally before committing schema changes:

```bash
# Node
npx schema-org-validator "dist/index.html"
# Browser
https://search.google.com/test/rich-results
```

Broken JSON-LD silently disables rich results.

---

<a name="2-module-structure-rules"></a>

## 2. Module Structure Rules

Goal: every feature module under `src/feature/{Module}/` follows the same
five-folder layout so the codebase stays predictable as it grows.

### S2-R1 — Every module lives under `src/feature/{Module}/`

Top-level modules are named in **PascalCase**, singular (`Home`, `About`,
`Products`, `Contact`, `NotFound`). The folder name matches the route
segment.

### S2-R2 — A module contains exactly these sub-folders

```
src/feature/{Module}/
├── api/         # network layer: axios calls, react-query hooks for this module
├── components/  # reusable UI scoped to this module
├── hooks/       # plain React hooks scoped to this module
├── pages/       # route components (one per route under this module)
└── seo/         # SEO config + page-specific schema helpers
```

If a folder is unused, leave a `.gitkeep` — don't delete it. The structure
must exist for **every** module, even if some folders are empty.

### S2-R3 — Page components live in `pages/`

- Path: `src/feature/{Module}/pages/{Module}Page.tsx`
- Each file is the default export consumed by `src/routes/routes.tsx` via
  `React.lazy()`.
- File name is `{Module}Page.tsx` — singular, PascalCase, suffixed `Page`.

### S2-R4 — SEO config lives in `seo/`

- Path: `src/feature/{Module}/seo/{module}Seo.ts` (lowercase `seo.ts`,
  camelCase file name).
- Exports one named const per route in that module: `homeSEO`, `aboutSEO`,
  etc., typed as `Pick<SEOProps, ...>`.
- Type is shared with `<SEO />` — no parallel type definitions.

### S2-R5 — API layer lives in `api/`

- Path: `src/feature/{Module}/api/{feature}.ts`.
- Each file exports a `useXxx` react-query hook and (when applicable) its
  seed/fixture data.
- No fetch / axios calls outside this folder. If you need a generic client,
  use the shared `api` from `@/lib/axios`.

### S2-R6 — Module components live in `components/`

- Path: `src/feature/{Module}/components/{ComponentName}.tsx`.
- One component per file. Default export only when consumed by
  `src/routes/routes.tsx`; named exports otherwise.
- Components here are **module-scoped**. If reused across modules, lift
  them to `src/components/`.

### S2-R7 — Module hooks live in `hooks/`

- Path: `src/feature/{Module}/hooks/use{HookName}.ts(x)`.
- Plain hooks only (no fetch). Hooks that hit the network belong in `api/`.

### S2-R8 — Cross-module imports are downward only

Allowed:
- `feature/{A}/pages → feature/{A}/components`, `seo`, `api`, `hooks`
- `feature/{A}/* → @/components/*`, `@/lib/*`, `@/hooks/*`

Disallowed:
- `feature/{A}/components → feature/{B}/components` — extract to `src/components/`
- `feature/{A}/seo → feature/{B}/seo` — share schema helpers via `@/lib/schemas`
- Any import that climbs sideways or upward between feature modules.

### S2-R9 — Routes are wired in `src/routes/routes.tsx`

The router config is the single entry point for lazy chunks. New routes
go through `lazy(() => import("@/feature/{Module}/pages/{Module}Page"))`
and `routePreloader()` is updated to warm the new chunk on idle.

### S2-R10 — Path alias is `@/*` only

Use `@/lib`, `@/components`, `@/feature/Home/seo/homeSeo` etc. Never
relative paths that escape the current folder (no
`../../../components/...`). Vite + tsconfig both enforce this.

---

<!--
Template for adding a new section — copy below and number from N+1.

<a name="3-section-slug"></a>

## 3. <Section Name>

Goal: <one-line statement>.

### S3-R1 — <Rule title>
<Rule body, 1–3 sentences.>

-->