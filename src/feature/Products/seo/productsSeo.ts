import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

export const productsSEO: Pick<SEOProps, "title" | "description" | "path" | "type"> = {
  title: "Products — Hex Head Bolts, Nuts, Studs, Washers, U-Bolts & Center Bolts",
  description: `${company.name} — manufacturers of hex head bolts (HSFG), hot-dip galvanised fasteners, hex nuts, slotted nuts, nylock nuts, studs & threaded bars, U-bolts & center bolts, and plain/machined/spring washers as per IS: 2016, 3063. ${company.isoStandard} certified.`,
  path: "/products",
  type: "product",
};

export const productsBreadcrumb = () =>
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ]);