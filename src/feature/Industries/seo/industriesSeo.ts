import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const industriesSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "Industries We Serve",
  description:
    "Kaveri Industries supplies high-tensile fasteners to transmission, infrastructure, energy, and transportation sectors worldwide.",
  path: "/industries",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
  ]),
};