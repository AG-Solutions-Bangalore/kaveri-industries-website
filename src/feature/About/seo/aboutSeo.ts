import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

export const aboutSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "About Us",
  description: `Founded in ${company.foundingDate}, ${company.name} operates three plants across South India with a combined annual capacity of 4,200 metric tonnes.`,
  path: "/about",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]),
};