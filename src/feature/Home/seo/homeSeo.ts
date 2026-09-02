import {
  breadcrumbSchema,
  siteNavigationSchema,
} from "@/lib/schemas";
import { company } from "@/lib/company";
import { sectorsSchema } from "@/feature/Home/api/sectorsSchema";
import { NAV } from "@/components/layout/Navbar";
import type { SEOProps } from "@/components/common/SEO";

const PRIMARY_NAV = NAV.map((item) => ({ name: item.label, url: item.to }));

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
  description: `${company.name} — manufacturers of high-tensile mild-steel fasteners for transmission towers, refineries, railways, and structural infrastructure. ${company.isoStandard} certified.`,
  path: "/",
  keywords: [
    "high tensile fasteners",
    "MS fasteners manufacturer",
    "hex head bolts",
    "structural bolts",
    "foundation bolts",
    "hot dip galvanised fasteners",
    `${company.isoStandard} fasteners`,
    "Jigani Bangalore fasteners",
  ],
  image: "/og/cover.png",
  imageAlt: `${company.name} — high-tensile fasteners for transmission towers, refineries, and structural infrastructure`,
  schema: [
    breadcrumbSchema([{ name: "Home", url: "/" }]),
    siteNavigationSchema(PRIMARY_NAV),
    ...sectorsSchema(),
  ],
};