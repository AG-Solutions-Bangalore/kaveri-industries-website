import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const industriesSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "Industries Served by High Tensile Fasteners | Kaveri Industries",
  description:
    "Kaveri Industries supplies high tensile MS fasteners for telecom towers, buildings, bridges, refineries, power plants, railways and guard rails.",
  path: "/industries",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
  ]),
};