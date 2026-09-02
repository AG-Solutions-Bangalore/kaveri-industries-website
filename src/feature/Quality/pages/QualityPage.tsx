import { BadgeCheck } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { company } from "@/lib/company";
import { qualitySEO } from "@/feature/Quality/seo/qualitySeo";

export default function QualityPage() {
  return (
    <>
      <SEO {...qualitySEO} />
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <header className="mb-8 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Quality
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Zero-defect, by design
          </h1>
        </header>
        <article className="prose prose-slate max-w-none space-y-5 text-muted-foreground">
          <p>
            The manufacturers of zero-defect fasteners speak volumes for our
            commitment to quality. We have made quality a way of life at every
            step of the manufacturing process — the {company.isoStandard} certification is
            ample proof of our insatiable quest for quality and desire for
            perfection.
          </p>
          <p>
            Each employee is immensely quality-conscious and takes it upon
            themselves to ensure that there is no room for even the slightest
            error. Accordingly, they deliver and settle for nothing but the very
            best.
          </p>
          <div className="not-prose mt-6 inline-flex items-center gap-3 rounded-md bg-inverted px-4 py-3 text-inverted-foreground shadow-md">
            <BadgeCheck className="h-5 w-5 text-brand-300" aria-hidden="true" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-widest opacity-80">
                Certified Quality
              </span>
              <span className="text-sm font-semibold">{company.isoStandard}</span>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}