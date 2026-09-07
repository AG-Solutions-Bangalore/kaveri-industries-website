import { SEO } from "@/components/common/SEO";
import { TargetSectors } from "@/feature/Home/components/TargetSectors";
import { sectorsSchema } from "@/feature/Home/api/sectorsSchema";
import { industriesSEO } from "@/feature/Industries/seo/industriesSeo";

export default function IndustriesPage() {
  return (
    <>
      <SEO
        {...industriesSEO}
        schema={[...(Array.isArray(industriesSEO.schema) ? industriesSEO.schema : [industriesSEO.schema ?? {}]), ...sectorsSchema()]}
      />
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <header className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              Industries
            </p>
            <h1 className="mt-1 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              Sectors we engineer for
            </h1>
            <p className="mt-4 text-slate-600 dark:text-muted-foreground">
              Six core industries, one rigorous standard. Every Kaveri fastener is
              produced to the same audited quality programme regardless of
              application.
            </p>
          </header>
        </div>
      </section>
      <TargetSectors />
    </>
  );
}