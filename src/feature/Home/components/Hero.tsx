import { ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { HERO_CONTENT } from "@/feature/Home/api/homeConstants";
import { company } from "@/lib/company";

/**
 * Hero section — precisely matching the design reference.
 * Border radius set strictly to `sm` (smallest unit).
 */
export function Hero() {
  // For the above-the-fold hero we never drop opacity to 0 — that would
  // delay the LCP. We only translate-Y, which is fully GPU-accelerated
  // and doesn't trigger layout/paint on the first frame.
  const slideUp = {
    initial: { y: 14 },
    animate: { y: 0 },
  };
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background py-12 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(226,232,240,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.3) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content Column */}
          <div className="space-y-6">
            <motion.div
              {...slideUp}
              transition={{ duration: 0.5, ease, delay: 0.05 }}
              className="flex items-center gap-2"
            >
              <span className="h-px w-6 bg-muted-foreground/60" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase relative tracking-[0.2em] text-muted-foreground">
                {HERO_CONTENT.tagline}

              </p>
            </motion.div>

            <motion.h1
              id="hero-heading"
              {...slideUp}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl"
            >
              High-Tensile MS<br />
              Fasteners for<br />
              <span className="text-brand-600">Demanding Applications</span>
            </motion.h1>

            <motion.p
              {...slideUp}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...slideUp}
              transition={{ duration: 0.6, ease, delay: 0.28 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                to={HERO_CONTENT.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-none bg-brand-700 px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow-xs transition-colors duration-200 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {HERO_CONTENT.primaryCta.label}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to={HERO_CONTENT.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-none border border-border bg-background px-5 py-2.5 text-xs md:text-sm font-semibold text-foreground shadow-xs transition-colors duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {HERO_CONTENT.secondaryCta.label}
              </Link>
            </motion.div>
          </div>

          {/* Visual Column — Screenshot Matched Photo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative"
          >
            {/* Background Offset Card Accent */}
            <div
              className="absolute -right-3 -bottom-3 h-full w-full rounded-none bg-brand-100/60 dark:bg-brand-950/40"
              aria-hidden="true"
            />

            {/* Main Image Frame — the LCP element. width/height attrs reserve
                layout space up front (kills CLS), fetchpriority="high" tells the
                browser to start the request before lower-priority images.
                srcset serves a smaller variant on smaller viewports. */}
            <div className="relative aspect-4/3 overflow-hidden rounded-none border border-border bg-card shadow-sm">
              <img
                src={HERO_CONTENT.imageUrl}
                srcSet="
                  /images/home/hero-fasteners-600.webp 600w,
                  /images/home/hero-fasteners-800.webp 800w,
                  /images/home/hero-fasteners-1200.webp 1200w
                "
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt={HERO_CONTENT.imageAlt}
                width={1200}
                height={900}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating Tolerance Spec Badge — gentle bob */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.6 }}
              className="float-soft absolute bottom-8 -left-12 rounded-none border border-border bg-card/95 p-3 shadow-md backdrop-blur-xs"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand-50 text-brand-700 dark:bg-brand-950/80">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    TOLERANCE SPEC
                  </p>
                  <p className="text-xs font-extrabold text-foreground">
                    {company.isoStandard}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}