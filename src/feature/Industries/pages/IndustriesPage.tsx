import { SEO } from "@/components/common/SEO";
import { TargetSectors, sectorsSchema } from "@/feature/Home/components/TargetSectors";
import { industriesSEO } from "@/feature/Industries/seo/industriesSeo";

export default function IndustriesPage() {
  return (
    <>
      <SEO
        {...industriesSEO}
        schema={[...(Array.isArray(industriesSEO.schema) ? industriesSEO.schema : [industriesSEO.schema ?? {}]), ...sectorsSchema()]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Industries
          </p>
          <h1 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
            Sectors we engineer for
          </h1>
          <p className="mt-4 text-muted-foreground">
            Six core industries, one rigorous standard. Every Kaveri fastener is
            produced to the same audited quality programme regardless of
            application.
          </p>
        </header>
        <TargetSectors />
      </section>
    </>
  );
}