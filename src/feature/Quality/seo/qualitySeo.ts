import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

export const qualitySEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "Quality & Certifications",
  description: `${company.name} maintains ${company.isoStandard} certification and a zero-defect manufacturing objective across every production line.`,
  path: "/quality",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Quality", url: "/quality" },
  ]),
};