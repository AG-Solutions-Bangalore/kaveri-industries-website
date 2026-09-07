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
  title: `High Tensile MS Fasteners Manufacturer | ${company.name}`,
  description:
    "Kaveri Industries manufactures high tensile MS fasteners, bolts, nuts, U-bolts and washers for towers, infrastructure, power, railways and industrial applications.",
  path: "/",
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
  image: "/og/cover.png",
  imageAlt: `${company.name} — manufacturers of high-tensile MS fasteners for transmission towers, refineries, railways, and structural infrastructure`,
  schema: [
    breadcrumbSchema([{ name: "Home", url: "/" }]),
    siteNavigationSchema(PRIMARY_NAV),
    ...sectorsSchema(),
  ],
};