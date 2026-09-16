import { Download } from "lucide-react";
import { EQUIPMENT_TABLE_DATA } from "../api/machineryConstants";

export function EquipmentTable() {
  const handleDownloadList = () => {
    const link = document.createElement("a");
    link.href = "/images/machinery/machinery_hero_banner.webp";
    link.download = "Kaveri_Industries_Machinery_Equipment_List.webp";
    link.click();
  };

  return (
    <section
      aria-labelledby="machinery-table-heading"
      className="bg-white py-16 dark:bg-[#071224]/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Download CTA */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Machinery List
            </span>
            <h2
              id="machinery-table-heading"
              className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Our Equipment Details
            </h2>
          </div>

          <button
            type="button"
            onClick={handleDownloadList}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-brand-500/40 bg-white px-4 py-2.5 text-xs font-semibold text-brand-700 shadow-xs transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-300 dark:hover:bg-brand-950/40 sm:text-sm"
          >
            <Download className="h-4 w-4" />
            Download Machinery List (PDF)
          </button>
        </div>

        {/* Specifications Table */}
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-[#0B1528] text-white">
                  <th scope="col" className="px-4 py-3.5 font-bold text-center w-16">
                    S. No.
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold">
                    Machine / Equipment
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold">
                    Make
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold">
                    Model
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold text-center">
                    Quantity
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold">
                    Capacity / Size
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold">
                    Application
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {EQUIPMENT_TABLE_DATA.map((row) => (
                  <tr
                    key={row.sNo}
                    className="transition-colors hover:bg-slate-50/70 dark:hover:bg-slate-800/40"
                  >
                    <td className="px-4 py-3.5 text-center font-medium text-slate-500 dark:text-slate-400">
                      {row.sNo}
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-white">
                      {row.equipment}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600 dark:text-slate-300">
                      {row.make}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600 dark:text-slate-300">
                      {row.model}
                    </td>
                    <td className="px-4 py-3.5 text-center font-medium text-slate-700 dark:text-slate-200">
                      {row.quantity}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600 dark:text-slate-300">
                      {row.capacity}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600 dark:text-slate-300">
                      {row.application}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
