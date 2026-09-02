import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

export const industriesSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "Industries We Serve",
  description: `${company.name} supplies high-tensile fasteners to transmission, infrastructure, energy, and transportation sectors worldwide.`,
  path: "/industries",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
  ]),
};