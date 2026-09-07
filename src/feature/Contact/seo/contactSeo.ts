import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const contactSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "Contact Kaveri Industries | MS Fasteners & Bolt Manufacturer",
  description:
    "Contact Kaveri Industries for high tensile MS fasteners, bolts, nuts, U-bolts and washers for industrial and infrastructure applications.",
  path: "/contact",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]),
};
