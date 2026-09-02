import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TARGET_SECTORS } from "@/feature/Home/api/sectors";

/**
 * Target sectors grid. Copy drawn from brochure pages 6–7
 * ("Transmission & Telecommunication Towers" through
 * "Road Guard Rail Systems & Other Development Projects").
 * Emits one `Service` JSON-LD block per sector via the page-level <SEO />.
 */
export function TargetSectors() {
  return (
    <section
      aria-labelledby="sectors-heading"
      className="bg-background py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Industries We Serve
          </p>
          <h2
            id="sectors-heading"
            className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Target Sectors
          </h2>
          <p className="mt-3 text-muted-foreground">
            Precision engineered for specific industrial requirements — from
            lattice towers to highways, refineries to rolling stock.
          </p>
        </header>

        <ul
          role="list"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Industries served"
        >
          {TARGET_SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <li key={sector.id}>
                <article className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-colors hover:border-brand-300 hover:shadow-md">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold leading-snug">
                    {sector.name}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground">
                    {sector.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-brand-700"
                    aria-label={`Enquire about ${sector.name}`}
                  >
                    Explore Industry
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
