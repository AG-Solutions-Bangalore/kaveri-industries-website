import { ShieldCheck } from "lucide-react";

export function TrustedRailwaysBanner() {
  return (
    <section
      aria-labelledby="trusted-railways-heading"
      className="bg-white pb-14 dark:bg-[#071224] sm:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-[#f2f7ff] px-6 py-8 dark:bg-slate-900 sm:px-10">
          {/* Faint factory line-art on the right (matches design) */}
          <img
            src="/images/vendor-approval/faint-factory.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width={1200}
            height={240}
            className="pointer-events-none absolute right-0 bottom-0 h-full w-2/3 object-contain object-right-bottom opacity-80 select-none md:w-1/2"
          />
    

          <div className="relative flex items-start gap-4 sm:items-center sm:gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-600 sm:h-16 sm:w-16">
              <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <div className="max-w-2xl">
              <h2
                id="trusted-railways-heading"
                className="text-base font-bold text-[#16233f] dark:text-white sm:text-lg"
              >
                Trusted by Indian Railways
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm">
                Our certifications and approvals reflect our commitment to
                quality, safety and reliability in supporting India&apos;s
                railway infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
