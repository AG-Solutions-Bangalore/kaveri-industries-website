import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * "About Kaveri" preview. Copy drawn from page 2 of the company brochure
 * ("Focused on Quality and Precision"). Stats are illustrative
 * milestones, not fictional claims — update with audited figures.
 */
export function QualityStatement() {
  return (
    <section
      aria-labelledby="quality-heading"
      className="bg-secondary py-16 md:py-20"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Visual — factory floor placeholder */}
        <div
          className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm md:order-1"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,theme(colors.slate.200),theme(colors.slate.100))]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <ShieldCheck
              className="h-24 w-24 text-brand-600/40"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="order-1 space-y-5 md:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            About Kaveri
          </p>
          <h2
            id="quality-heading"
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Focused on Quality and Precision
          </h2>
          <p className="text-muted-foreground">
            For over two decades, Kaveri Industries has been synonymous with
            unyielding structural integrity. We specialise in the manufacturing
            of high-tensile fasteners, delivering critical components to sectors
            where failure is not an option.
          </p>
          <p className="text-muted-foreground">
            Our state-of-the-art facilities leverage advanced metallurgical
            testing and automated precision machining to ensure every batch
            meets rigorous international standards. We are not just suppliers;
            we are structural confidence.
          </p>

          {/* Stats */}
          <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6">
            <div>
              <dt className="text-3xl font-semibold tracking-tight md:text-4xl">
                20+
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                Years Engineering
              </dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold tracking-tight md:text-4xl">
                Zero
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                Defect Objective
              </dd>
            </div>
          </dl>

          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-brand-700"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}