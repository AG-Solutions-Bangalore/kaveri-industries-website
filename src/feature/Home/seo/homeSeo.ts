import { IMAGE_BASE_URL } from "@/lib/images";
import { company } from "@/lib/company";
import { sectorsSchema } from "@/feature/Home/api/sectorsSchema";
import type { SEOProps } from "@/components/common/SEO";

/**
 * SEO config for the homepage. The site-wide Organization + LocalBusiness
 * + WebSite graph is served ONCE as static JSON-LD in index.html (visible
 * without JavaScript) — `<SEO />` only adds the page-specific schemas below.
 *
 * NOTE: no BreadcrumbList here — Google ignores single-item breadcrumbs, so
 * a "Home"-only crumb would add weight without ever producing a rich result.
 * SiteNavigationElement is also omitted — it is not a Google-supported rich
 * result type. Per-sector `Service` blocks describe visible page content.
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
  image: `${IMAGE_BASE_URL}/home/home_banner_image.webp`,
  imageAlt: `${company.name} — manufacturers of high-tensile MS fasteners for transmission towers, refineries, railways, and structural infrastructure`,
  schema: [...sectorsSchema()],
};