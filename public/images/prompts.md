# Kaveri Industries — Image Generation Prompts

> **Purpose:** Ready-to-paste image-generation prompts for every image that
> the **Products**, **About Us**, and **Contact** modules still need.
>
> **How to use:**
> 1. Pick the prompt you need.
> 2. Generate at the size/aspect noted.
> 3. Save under the matching path in `public/images/{products,about,contact}/`.
> 4. Update the corresponding `imageUrl` constant in the feature's `api/`
>    file (e.g. `src/feature/Products/api/products.ts`).
>
> **Brand context** (consistent across all prompts):
> B2B manufacturer of high-tensile MS (mild-steel) fasteners — industrial,
> precise, premium, restrained. Brand colours: deep-navy `#1E3A8A`,
> rust-orange `#E55934`, white, neutral slate. Avoid stock-photo clichés,
> neon cyber colours, glossy automotive advertising, AI-face artefacts,
> and on-image text.
>
> **Format policy:** the site is WebP-only at runtime. Contributors may
> drop `.jpg`/`.jpeg`/`.png` sources into `public/images/` and a
> prebuild script (`scripts/images-to-webp.mjs`, run via the
> `prebuild` and `predev` npm scripts) will convert any non-WebP asset
> to `.webp` alongside the original. **Reference `.webp` paths in
> your code**, not the source extension. Manual conversion
> (`npm run images:convert`) is also available.

---

## Folder structure

```
public/images/
├── home/             ← already populated (hero, products carousel, sectors)
│   ├── hero-fasteners.webp
│   ├── manufacturing-plant.webp
│   ├── product-{hex-bolts,galvanised,hex-nuts,studs,ubolts,washers}.webp
│   └── sector-{telecom,structures,refineries,wind-power,railways,guard-rail}.webp
│
├── products/         ← populated (slotted, nylock, center-bolts, washers, banner)
├── about/            ← populated (panorama, team, tensile, hardness, certifications)
└── contact/          ← optional (no inline images — Google Maps iframe only)
```

### Image format policy (WebP-only at runtime)

The site serves **WebP only**. A build-time script
([`scripts/images-to-webp.mjs`](../../scripts/images-to-webp.mjs)) converts
any non-WebP source (`.jpg`, `.jpeg`, `.png`) found in `public/images/`
into a sibling `.webp` file before each `dev` and `build`. The
originals are kept on disk so the script is idempotent and re-runs
are safe.

- Run manually: `npm run images:convert`
- Verify all sources have a `.webp` companion: `npm run images:check`
- See [BUILD-IMAGE-POLICY.md](../../docs/BUILD-IMAGE-POLICY.md) for the
  full policy and contribution rules.

---

## `/images/products/` — Products module

The Products page lists 8 product cards and renders a dedicated detail
page for each. Photography exists for hex-bolts, galvanised, hex-nuts,
studs, and u-bolts (currently served from `home/`). The following are
**missing** and need to be generated.

### 1. `products/product-slotted-nuts.webp`

**Used by:** [ProductCard](../../src/feature/Products/components/ProductCard.tsx)
+ [ProductDetailHero](../../src/feature/Products/components/ProductDetailHero.tsx)
for the "Slotted Nuts" entry.
**Size:** 1200 × 900 px (4:3).
**Visual brief:** Top-down close-up of slotted (castle) hex nuts in zinc
finish, arranged in neat rows. Each nut shows the radial slots cut into
its crown. A small MS cotter pin sits in the foreground, hinting at the
locking mechanism. Dark slate surface, soft top-left rim light.

**Generation prompt:**
```
Top-down close-up product photography of slotted castle hex nuts in
bright zinc finish, arranged in three neat rows on a dark slate surface.
The radial crown slots on each nut are clearly visible. A small mild-
steel cotter pin rests in the foreground, hinting at the locking
mechanism. Soft directional rim light from the upper left, neutral
surround, slight shadow. Industrial, restrained, no on-image text.
1200x900 px, 4:3 aspect ratio.
```

### 2. `products/product-nylock-nuts.webp`

**Used by:** "Nylock Nuts" product card and detail page.
**Size:** 1200 × 900 px.
**Visual brief:** Three or four hex lock nuts at slight angles, each
showing the white nylon collar at the top of the threads. Matte zinc
finish, light grey background, soft shadow. Macro detail — the nylon
ring is the hero.

**Generation prompt:**
```
Product photography of four hex lock nuts (Nylock type) at slight
angles on a soft light grey surface, each nut clearly showing the white
nylon insert collar at the top of its threads. Matte zinc finish, soft
directional light from the upper left, gentle shadow beneath each nut.
Macro detail emphasises the nylon ring. Industrial, clean, no text.
1200x900 px, 4:3.
```

### 3. `products/product-center-bolts.webp`

**Used by:** "Center Bolts" product card and detail page.
**Size:** 1200 × 900 px.
**Visual brief:** Two or three leaf-spring center bolts on an aged
wooden workbench, dark patina. One bolt shows the integral hex collar
mid-shaft, the others show the threaded ends. Automotive / heavy-vehicle
mood, rust-orange accent from a workshop lamp.

**Generation prompt:**
```
Product photography of two leaf-spring center bolts on an aged wooden
workbench with rust patina. Each bolt has a forged hex collar mid-shaft
and threaded ends on both sides. Warm rust-orange workshop lamp light
from the right, cool ambient fill from the left. Industrial automotive
mood, no on-image text, no people. 1200x900 px, 4:3.
```

### 4. `products/product-washers-detail.webp` *(optional upgrade)*

A `product-washers.webp` already exists in `home/`. If you want a
sharper, more graphic image specifically for the washers detail page
(better contrast on the spring-washer split), use this prompt.

**Size:** 1200 × 900 px.

**Generation prompt:**
```
Top-down product photography of industrial washers in three concentric
rings on a light grey background. Outer ring: plain flat washers in
zinc. Middle ring: machined washers with a visible chamfered edge.
Inner ring: split-lock spring washers with the helical split clearly
visible. Soft top-down studio light, crisp shadow, no text. 1200x900 px.
```

### 5. `products/product-page-banner.jpg` *(optional)*

Wide hero-style image for use as a subtle background watermark on the
products list page (currently uses a CSS gradient with a faint bolt
photo at 5% opacity). If you want a more graphic banner, generate this
and reference it from [ProductsHero](../../src/feature/Products/components/ProductsHero.tsx).

**Size:** 1920 × 720 px.

**Generation prompt:**
```
Wide horizontal hero image, 1920x720 px. A flat-lay of high-tensile
fasteners (hex bolts, hex nuts, washers, threaded bars) arranged in
loose rows on a light grey workshop surface. Top-down camera, even soft
daylight, no shadows, no text. Industrial, premium, restrained.
```

---

## `/images/about/` — About Us module

The About page currently uses three photos that live at the root of
`public/images/`:
- `/images/about-who-we-are.jpg` → **move to** `about/about-who-we-are.jpg`
- `/images/quality-caliper.jpg`   → **move to** `about/quality-caliper.jpg`
- `/images/manufacturing-shop-overview.jpg` → **move to** `about/manufacturing-shop-overview.jpg`

When you move those three files, also update the three `imageUrl`
constants in [aboutConstants.ts](../../src/feature/About/api/aboutConstants.ts).

Beyond those, the About page can be enriched with the following
**additional** images. None are required for the page to render — they
upgrade the visual richness of the Quality & Process sections.

### 6. `about/about-hero-panorama.jpg`

**Used by:** [AboutHero](../../src/feature/About/components/AboutHero.tsx)
watermark grid (centre panel) or a future large hero photo.
**Size:** 1920 × 1080 px.

**Generation prompt:**
```
Wide industrial interior of a precision fastener manufacturing shop.
Rows of CNC machines under cool white LED lighting, polished concrete
floor, a few workers in navy-blue uniforms visible at a distance
(small, blurred, no faces). Documentary style, no text, no logos.
1920x1080 px.
```

### 7. `about/quality-tensile-testing.jpg`

**Used by:** Optional enrichment of [QualityCommitment](../../src/feature/About/components/QualityCommitment.tsx)
or a new "Testing Capabilities" section.
**Size:** 1200 × 900 px.

**Generation prompt:**
```
Product photography of a Universal Testing Machine (UTM) tensile-test
rig clamping a high-tensile hex bolt specimen. A small digital display
shows load in kN. Side-on view, dark lab background with cool blue
overhead light. Industrial, scientific, no text, no people. 1200x900 px.
```

### 8. `about/quality-hardness-testing.jpg`

**Used by:** Optional enrichment of a Quality Capabilities section.
**Size:** 1200 × 900 px.

**Generation prompt:**
```
Close-up of a Rockwell hardness testing machine pressing a conical
diamond indenter into a polished steel coupon. The polished sample
sits on the anvil, the indenter is in mid-travel. Dark background,
focused key light. Industrial, scientific, no text, no people.
1200x900 px.
```

### 9. `about/team-engineering.jpg`

**Used by:** Optional enrichment of a "Our People" sub-section.
**Size:** 1600 × 900 px.

**Generation prompt:**
```
Documentary-style photo of three engineers in navy-blue work uniforms
reviewing a fastener drawing on a clipboard in a factory aisle. CNC
machines softly out of focus in the background. The two engineers on
the sides are turned away; only the centre engineer's back-of-head is
visible — no faces, no logos. Cool fluorescent overhead light.
1600x900 px.
```

### 10. `about/certifications-display.jpg`

**Used by:** Optional enrichment of a Quality / Certifications section.
**Size:** 1200 × 900 px.

**Generation prompt:**
```
Top-down flat-lay of an ISO 9001:2015 certificate (printed, generic,
no company name visible) and a small steel caliper on a walnut desk.
A second certificate is partially visible at the edge. Soft top-down
daylight, restrained, no logos, no on-image text other than the
generic certificate headings. 1200x900 px.
```

---

## `/images/contact/` — Contact module

The Contact page currently uses a Google Maps iframe and three info
cards. It has no inline images, so this folder is **optional**. The
two prompts below are upgrades for when you want a stronger visual.

### 11. `contact/contact-hero-factory.jpg`

**Used by:** Optional — replace the gradient mock in
[ContactHero](../../src/feature/Contact/components/ContactHero.tsx).
**Size:** 1920 × 1080 px.

**Generation prompt:**
```
Wide horizontal photograph of a fastener manufacturing facility
exterior at dusk. Low-angle camera, clean modern industrial façade in
deep-navy cladding with the word "KAVERI" subtly embossed on a
corner panel. Soft warm interior light glowing through the windows, a
few delivery trucks parked in the foreground. Moody, premium,
industrial. 1920x1080 px.
```

### 12. `contact/contact-office.jpg`

**Used by:** Optional — backdrop for the contact section CTA or info
column.
**Size:** 1200 × 900 px.

**Generation prompt:**
```
Interior photograph of a small, modern engineering office inside a
fastener factory. A wooden desk with a laptop, blueprints rolled in
the foreground, a wall of shelving with sample boxes behind. Soft
natural light from a window on the left. No people, no text, no logos.
1200x900 px.
```

---

## Generation parameter cheatsheet

| Asset type         | Aspect | Resolution           | Format | Notes                          |
|--------------------|--------|----------------------|--------|--------------------------------|
| Product card       | 4:3    | 1200 × 900           | `.webp`| Square crops well to social    |
| Hero / panorama    | 16:9   | 1920 × 1080          | `.jpg` | Larger continuous-tone files   |
| Wide banner        | 8:3    | 1920 × 720           | `.jpg` | For watermark backgrounds      |
| Square (logo/og)   | 1:1    | 1200 × 1200          | `.png` | Only for social/og cards       |

**Renderer tips:**
- **Midjourney:** `--ar 4:3 --style raw --s 50` for product cards.
  Avoid `--v 6 --style raw` for on-image text (still hallucinates).
- **DALL-E 3:** request "natural colour photograph, no on-image text".
- **SDXL / Flux:** use the brand colour palette in the prompt prefix
  (deep-navy `#1E3A8A`, rust-orange `#E55934`).

## Accessibility note

Whenever you replace a placeholder image, double-check the matching
`imageAlt` string in the consuming `api/*.ts` file so screen readers
describe what's actually on screen. Keep alt text under ~140 characters
and front-load the most important noun (the product or scene).
