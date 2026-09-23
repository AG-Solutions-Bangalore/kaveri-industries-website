import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const vendorApprovalSEO: Pick<
  SEOProps,
  "title" | "description" | "path" | "schema"
> = {
  title: "RDSO Approval | Kaveri Industries",
  description:
    "Kaveri Industries is an authorized RDSO approved vendor for high tensile MS fasteners, studs, U-bolts, and washers for Indian Railways infrastructure.",
  path: "/rdso-approval",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "RDSO Approval", url: "/rdso-approval" },
  ]),
};
