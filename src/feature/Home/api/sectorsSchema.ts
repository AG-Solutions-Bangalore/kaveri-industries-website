import { serviceSchema } from "@/lib/schemas";
import { TARGET_SECTORS } from "@/feature/Home/api/sectors";

/** Build the JSON-LD block for all target sectors. Pass into <SEO schema={...} />. */
export function sectorsSchema() {
  return TARGET_SECTORS.map((s) =>
    serviceSchema({
      name: s.name,
      description: s.description,
      url: `/contact?sector=${s.id}`,
    }),
  );
}