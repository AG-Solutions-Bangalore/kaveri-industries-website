import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

export const aboutSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "About Us",
  description: `${company.name} — manufacturers of 'Zero defect' high-tensile MS fasteners. ${company.isoStandard} certified. Encompassing the total customer experience. ${company.address.city}, ${company.address.region}.`,
  path: "/about",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]),
};