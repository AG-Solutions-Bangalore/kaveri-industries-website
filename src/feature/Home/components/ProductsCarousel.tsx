import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { PRODUCTS, type Product } from "@/feature/Home/api/products";
import { usePrefersReducedMotion } from "@/feature/Home/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Auto-scrolling product carousel.
 * - Pure CSS marquee animation, paused on hover/focus and on prefers-reduced-motion.
 * - Keyboard-accessible prev/next controls; the running marquee is `aria-hidden`
 *   so screen readers only consume the static product list inside.
 * - Card content is duplicated in the track so the loop is seamless.
 */
export function ProductsCarousel() {
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  // Manual prev/next — translate the track by one card width.
  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    track.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  const isPaused = paused || reducedMotion;

  return (
    <section
      aria-labelledby="products-heading"
      className="bg-secondary py-16 md:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Product Range
            </p>
            <h2
              id="products-heading"
              className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Precision Fastening Solutions
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-brand-700"
          >
            View All Products
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Carousel region */}
        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Product range — auto-scrolling carousel"
        >
          {/* Edge fades so cards appear to slide in/out */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-secondary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-secondary to-transparent" />

          {/* Live track — duplicated for seamless loop */}
          <div
            ref={trackRef}
            className={cn(
              "flex w-max gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            )}
            style={{
              animation: isPaused
                ? "none"
                : "marquee 50s linear infinite",
            }}
            aria-hidden="true"
          >
            {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
              <ProductCard key={`${p.id}-${i}`} product={p} />
            ))}
          </div>

          {/* Accessible static list for screen readers and JS-disabled clients */}
          <ul className="sr-only" aria-label="Product range">
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <strong>{p.name}</strong>: {p.description}
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-pressed={paused}
              aria-label={paused ? "Resume auto-scroll" : "Pause auto-scroll"}
              disabled={reducedMotion}
            >
              {paused ? (
                <Play className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Pause className="h-4 w-4" aria-hidden="true" />
              )}
              {paused ? "Play" : "Pause"}
            </button>
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Next product"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Single product card. */
function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <article
      data-card
      className="group flex w-72 shrink-0 flex-col gap-4 rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-shadow hover:shadow-md"
    >
      <div
        className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700"
        aria-hidden="true"
      >
        <Icon className="h-12 w-12" strokeWidth={1.5} />
      </div>
      <h3 className="text-base font-semibold leading-snug">{product.name}</h3>
      <p className="text-sm text-muted-foreground">{product.description}</p>
      {product.specs.length > 0 && (
        <dl className="mt-auto space-y-1.5 border-t border-border pt-3 text-xs">
          {product.specs.map((s) => (
            <div key={s.label} className="flex justify-between gap-3">
              <dt className="text-muted-foreground">{s.label}</dt>
              <dd className="font-medium text-foreground text-right">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}