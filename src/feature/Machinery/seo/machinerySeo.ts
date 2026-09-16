import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const machinerySEO: Pick<
  SEOProps,
  "title" | "description" | "path" | "schema"
> = {
  title: "Machinery & Facilities | Kaveri Industries",
  description:
    "Kaveri Industries manufacturing facilities: CNC turning centres, VMC machines, lathes, drilling & milling equipment, and precision metrology inspection.",
  path: "/machinery",
  schema: breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Machinery", url: "/machinery" },
  ]),
};
