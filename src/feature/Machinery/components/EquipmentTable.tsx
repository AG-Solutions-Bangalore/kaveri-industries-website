import { Download } from "lucide-react";
import { MACHINERY_SECTIONS } from "../api/machineryConstants";

const MACHINE_PDF_URL = "/pdf/vendor-approval/LIST%20OF%20MACHINE.pdf";
const MACHINE_PDF_NAME = "LIST OF MACHINE.pdf";

export function EquipmentTable() {
  return (
    <section
      aria-labelledby="machinery-table-heading"
      className="bg-white py-12 sm:py-16 dark:bg-[#071224]/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Download CTA */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              List of Machinery
            </span>
            <h2
              id="machinery-table-heading"
              className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Our Equipment Details
            </h2>
            <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm">
              Complete section-wise machinery list as per our audited records —
              Kaveri Industries, Bangalore.
            </p>
          </div>

          <a
            href={MACHINE_PDF_URL}
            download={MACHINE_PDF_NAME}
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-brand-500/40 bg-white px-4 py-2.5 text-xs font-semibold text-brand-700 shadow-xs transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-300 dark:hover:bg-brand-950/40 sm:w-auto sm:text-sm"
          >
            <Download className="h-4 w-4 shrink-0" />
            Download Machinery List (PDF)
          </a>
        </div>

        {MACHINERY_SECTIONS.map((section) => (
          <div key={section.code} className="mt-8 first:mt-6 sm:first:mt-8">
            <h3 className="flex items-center gap-3 text-sm font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-base">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#0B1528] text-[11px] font-bold text-white">
                {section.code}
              </span>
              {section.title}
              <span className="ml-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                {section.rows.length} {section.rows.length === 1 ? "machine" : "machines"}
              </span>
            </h3>

            {/* Mobile & tablet: stacked cards */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
              {section.rows.map((row) => (
                <article
                  key={`${section.code}-${row.mcNo || row.name}-${row.sNo}`}
                  className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/70 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/40">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B1528] text-[11px] font-bold text-white">
                      {row.sNo}
                    </span>
                    <h4 className="min-w-0 flex-1 text-sm font-bold break-words text-slate-900 dark:text-white">
                      {row.name}
                    </h4>
                    {row.mcNo && (
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {row.mcNo}
                      </span>
                    )}
                  </div>
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-3 px-4 py-4 text-xs">
                    <div className="min-w-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                        Manufacture
                      </dt>
                      <dd className="mt-0.5 break-words text-slate-700 dark:text-slate-200">
                        {row.manufacture || "—"}
                      </dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                        Capacity
                      </dt>
                      <dd className="mt-0.5 break-words text-slate-700 dark:text-slate-200">
                        {row.capacity || "—"}
                      </dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                        Year of Installation
                      </dt>
                      <dd className="mt-0.5 break-words text-slate-700 dark:text-slate-200">
                        {row.year || "—"}
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>

            {/* Desktop: specifications table */}
            <div className="mt-4 hidden overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs lg:block dark:border-slate-800 dark:bg-slate-900">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[820px] text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-[#0B1528] text-white">
                      <th scope="col" className="w-16 px-4 py-3.5 text-center font-bold">
                        S. No.
                      </th>
                      <th scope="col" className="px-4 py-3.5 font-bold">
                        M/C No.
                      </th>
                      <th scope="col" className="px-4 py-3.5 font-bold">
                        Name of Machine
                      </th>
                      <th scope="col" className="px-4 py-3.5 font-bold">
                        Manufacture
                      </th>
                      <th scope="col" className="px-4 py-3.5 font-bold">
                        Capacity
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-center font-bold">
                        Year of Installation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {section.rows.map((row) => (
                      <tr
                        key={`${section.code}-${row.mcNo || row.name}-${row.sNo}`}
                        className="transition-colors hover:bg-slate-50/70 dark:hover:bg-slate-800/40"
                      >
                        <td className="px-4 py-3.5 text-center font-medium text-slate-500 dark:text-slate-400">
                          {row.sNo}
                        </td>
                        <td className="px-4 py-3.5 font-mono text-slate-700 dark:text-slate-200">
                          {row.mcNo || "—"}
                        </td>
                        <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-white">
                          {row.name}
                        </td>
                        <td className="px-4 py-3.5 text-slate-600 dark:text-slate-300">
                          {row.manufacture || "—"}
                        </td>
                        <td className="px-4 py-3.5 text-slate-600 dark:text-slate-300">
                          {row.capacity || "—"}
                        </td>
                        <td className="px-4 py-3.5 text-center font-medium text-slate-700 dark:text-slate-200">
                          {row.year || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
