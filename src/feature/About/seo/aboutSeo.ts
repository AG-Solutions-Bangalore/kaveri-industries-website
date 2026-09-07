import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const aboutSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "About Kaveri Industries | High Tensile Fasteners Manufacturer",
  description:
    "Learn about Kaveri Industries, a manufacturer of high tensile MS fasteners, bolts, nuts, U-bolts and washers for industrial and infrastructure applications.",
  path: "/about",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]),
};