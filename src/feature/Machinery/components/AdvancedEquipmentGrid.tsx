import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ADVANCED_EQUIPMENT_DATA } from "../api/machineryConstants";

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

        {/* 4 Equipment Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANCED_EQUIPMENT_DATA.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Image Frame */}
              <div className="aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
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
          ))}
        </div>
      </div>
    </section>
  );
}
