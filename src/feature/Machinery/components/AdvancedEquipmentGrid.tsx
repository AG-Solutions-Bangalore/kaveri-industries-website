import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Cog } from "lucide-react";
import { ADVANCED_EQUIPMENT_DATA, type EquipmentItem } from "../api/machineryConstants";

function EquipmentCard({ item }: { item: EquipmentItem }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      to={item.link}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Image Frame */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-white p-3 dark:bg-slate-950 flex items-center justify-center">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.imageAlt}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-4 text-slate-400 dark:text-slate-600">
            <Cog className="h-9 w-9 text-brand-500/40 mb-2 animate-spin" style={{ animationDuration: "12s" }} />
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              {item.title}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 font-mono">
              {item.imageName}
            </span>
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="flex flex-1 flex-col justify-between p-4 border-t border-slate-100 dark:border-slate-800/80">
        <div>
          {item.capacity && (
            <div className="mb-1.5 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-brand-50 px-1.5 py-0.5 text-[10px] font-semibold text-brand-700 ring-1 ring-inset ring-brand-700/10 dark:bg-brand-950/40 dark:text-brand-300 dark:ring-brand-500/20">
                {item.capacity}
              </span>
              {item.make && (
                <span className="text-[10px] text-slate-400 dark:text-slate-500">
                  {item.make}
                </span>
              )}
            </div>
          )}
          <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400">
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="mt-4 flex justify-start">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white dark:border-slate-700 dark:text-slate-300"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function AdvancedEquipmentGrid() {
  return (
    <section
      aria-labelledby="advanced-equipment-heading"
      className="bg-slate-50/50 pt-16 sm:pt-20 md:pt-24 pb-16 dark:bg-[#071224]/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Our Machinery
            </span>
            <h2
              id="advanced-equipment-heading"
              className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Advanced Equipment for Superior Quality
            </h2>
          </div>

          <p className="max-w-md text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm lg:text-right">
            Our manufacturing facility is equipped with a comprehensive range of
            modern machines and equipment to meet diverse production
            requirements with high accuracy and efficiency.
          </p>
        </div>

        {/* 11 Equipment Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ADVANCED_EQUIPMENT_DATA.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
