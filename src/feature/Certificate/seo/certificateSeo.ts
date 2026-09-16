import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const certificateSEO: Pick<
  SEOProps,
  "title" | "description" | "path" | "schema"
> = {
  title: "Certifications & Approvals | Kaveri Industries",
  description:
    "View Kaveri Industries official quality certifications and approvals including ISO 9001:2015, RDSO Indian Railways, and BIS conformity for fasteners.",
  path: "/certificate",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Certifications", url: "/certificate" },
  ]),
};
