import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

export const contactSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "Contact",
  description: `Reach ${company.name}'s sales desk for enquiries, quotations, and technical consultation.`,
  path: "/contact",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]),
};