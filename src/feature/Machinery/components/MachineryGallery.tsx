import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MACHINERY_GALLERY_DATA } from "../api/machineryConstants";

export function MachineryGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="machinery-gallery-heading"
      className="bg-slate-50/50 py-12 sm:py-16 dark:bg-[#071224]/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Carousel Navigation */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Machinery Gallery
            </span>
            <h2
              id="machinery-gallery-heading"
              className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Our Manufacturing Setup
            </h2>
          </div>

          {/* Carousel arrows are only needed on mobile (snap-scroll list).
              sm+ renders a static grid, so hide them there. */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll gallery left"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Scroll gallery right"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile: snap-scroll carousel. sm+: static grid. */}
        <div
          ref={scrollRef}
          className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 scrollbar-none sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
        >
          {MACHINERY_GALLERY_DATA.map((item) => (
            <div
              key={item.id}
              className="group flex w-[78%] min-w-[240px] max-w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:w-auto sm:min-w-0 sm:max-w-none dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Photo Frame */}
              <div className="aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Title Bar */}
              <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
