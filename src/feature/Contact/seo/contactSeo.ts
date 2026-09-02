import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const contactSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "Contact",
  description:
    "Reach Kaveri Industries' sales desk for enquiries, quotations, and technical consultation.",
  path: "/contact",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]),
};