import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const vendorApprovalSEO: Pick<
  SEOProps,
  "title" | "description" | "path" | "schema"
> = {
  title: "RDSO Vendor Approval | Kaveri Industries",
  description:
    "Kaveri Industries is an authorized RDSO approved vendor for high tensile MS fasteners, studs, U-bolts, and washers for Indian Railways infrastructure.",
  path: "/vendor-approval",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Vendor Approval", url: "/vendor-approval" },
  ]),
};
