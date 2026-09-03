import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

export const industriesSEO: Pick<SEOProps, "title" | "description" | "path" | "schema"> = {
  title: "Industries We Serve",
  description: `${company.name} manufactures high-tensile MS fasteners for transmission & telecommunication towers, buildings & bridges, refineries & water treatment plants, wind & power plants, railways & transportation, and road guard rail systems. ${company.isoStandard} certified.`,
  path: "/industries",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
  ]),
};