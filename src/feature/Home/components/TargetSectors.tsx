import { SECTORS_SECTION_HEADER } from "@/feature/Home/api/homeConstants";
import { TARGET_SECTORS } from "@/feature/Home/api/sectors";
import { useNativeInView } from "@/hooks/useNativeInView";

function SectorCard({
  sector,
  idx,
}: {
  sector: (typeof TARGET_SECTORS)[number];
  idx: number;
}) {
  const { ref, isInView } = useNativeInView<HTMLLIElement>("300px");
  const formattedIndex = String(idx + 1).padStart(2, "0");

  return (
    <li
      ref={ref}
      className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-slate-700 hover:shadow-xl list-none"
    >
      {/* Background Image — only rendered when near viewport to save 5.4MB on initial load */}
      {sector.imageUrl && isInView && (
        <img
          src={sector.imageUrl}
          alt={sector.imageAlt ?? sector.name}
          title={sector.imageTitle}
          width={800}
          height={500}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Dark Gradient Overlay for optimal contrast and mood */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071120]/95 via-[#071120]/80 to-[#071120]/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-start">
        {/* Number Badge */}
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white shadow-md shadow-brand-700/30 mb-3">
          {formattedIndex}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-white leading-snug group-hover:text-brand-300 transition-colors">
          {sector.name}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 max-w-[90%]">
          {sector.description}
        </p>
      </div>
    </li>
  );
}

export function TargetSectors() {
  return (
    <section
      aria-labelledby="sectors-heading"
      className="border-t border-slate-200/80 bg-slate-50/60 py-16 text-slate-900 md:py-24 dark:border-slate-800/80 dark:bg-[#071120] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-400">
              {SECTORS_SECTION_HEADER.badge}
            </p>
            <h2
              id="sectors-heading"
              className="mt-1.5 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              {SECTORS_SECTION_HEADER.heading}
            </h2>
          </div>
        </div>

        {/* 3x2 Grid of Sector Cards */}
        <ul
          aria-label="Industries served"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0"
        >
          {TARGET_SECTORS.map((sector, idx) => (
            <SectorCard key={sector.id} sector={sector} idx={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
}