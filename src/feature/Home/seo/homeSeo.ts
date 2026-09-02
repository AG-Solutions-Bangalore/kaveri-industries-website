import {
  breadcrumbSchema,
  reviewsBlock,
  siteNavigationSchema,
} from "@/lib/schemas";
import { SEED_TESTIMONIALS } from "@/feature/Home/api/testimonials";
import { sectorsSchema } from "@/feature/Home/api/sectorsSchema";
import type { SEOProps } from "@/components/common/SEO";

const PRIMARY_NAV = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Products", url: "/products" },
  { name: "Industries", url: "/industries" },
  { name: "Quality", url: "/quality" },
  { name: "Contact Us", url: "/contact" },
];

/**
 * SEO config for the homepage. The site-wide Organization + LocalBusiness
 * + WebSite schemas are injected automatically by `<SEO />` — here we add
 * breadcrumb, site navigation, the per-sector `Service` blocks, and the
 * review block (AggregateRating + each individual Review).
 */
export const homeSEO: Pick<
  SEOProps,
  "title" | "description" | "path" | "schema" | "keywords" | "image" | "imageAlt"
> = {
  title: "High-Tensile MS Fasteners Manufacturer",
  description:
    "Kaveri Industries — manufacturers of high-tensile mild-steel fasteners for transmission towers, refineries, railways, and structural infrastructure. ISO 9001:2015 certified.",
  path: "/",
  keywords: [
    "high tensile fasteners",
    "MS fasteners manufacturer",
    "hex head bolts",
    "structural bolts",
    "foundation bolts",
    "hot dip galvanised fasteners",
    "ISO 9001:2015 fasteners",
  ],
  image: "/og/cover.png",
  imageAlt:
    "Kaveri Industries — high-tensile fasteners for transmission towers, refineries, and structural infrastructure",
  schema: [
    breadcrumbSchema([{ name: "Home", url: "/" }]),
    siteNavigationSchema(PRIMARY_NAV),
    ...sectorsSchema(),
    ...reviewsBlock(SEED_TESTIMONIALS),
  ],
};