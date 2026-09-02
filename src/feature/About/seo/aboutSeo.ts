import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

export const aboutSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "About Us",
  description: `Learn about ${company.name}, a premier manufacturer of high-tensile MS fasteners and precision-engineered industrial components since ${company.foundingDate}.`,
  path: "/about",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]),
};