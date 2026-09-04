import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

export const contactSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "Contact Us",
  description: `Reach ${company.name}'s sales and engineering desks in Bangalore for enquiries, quotations, technical consultation, and bulk OEM orders.`,
  path: "/contact",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]),
};
