import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const productsSEO: Pick<SEOProps, "title" | "description" | "path" | "type"> = {
  title: "High Tensile Fasteners & Bolts Manufacturer | Kaveri Industries",
  description:
    "Explore high tensile MS fasteners from Kaveri Industries, including hex bolts, nuts, studs, washers, U-bolts and center bolts for industrial applications.",
  path: "/products",
  type: "product",
};

export const productsBreadcrumb = () =>
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ]);