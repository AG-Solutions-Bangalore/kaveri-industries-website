import { company } from "@/lib/company";
import { KAVERI_VENDOR_PROFILE_SECTIONS } from "../api/vendorApprovalConstants";

/**
 * Detailed vendor-profile table — reference layout
 * (Item | Information / Sub-Tab | Details) rebuilt in the Kaveri theme.
 * Every field is Kaveri Industries data; Ownership uses
 * Proprietor Mr. Rajesh Bhalla instead of a Board of Directors.
 *
 * Responsive: stacked cards on phones/tablets (< lg), 3-column table on desktop.
 */

function ContactLine({ line }: { line: string }) {
  if (line.startsWith("Email: ")) {
    const email = line.replace("Email: ", "").trim();
    return (
      <p className="break-words">
        Email:{" "}
        <a
          href={`mailto:${email}`}
          title="Email Kaveri Industries"
          aria-label="Email Kaveri Industries"
          className="font-medium break-all text-brand-700 hover:underline dark:text-brand-400"
        >
          {email}
        </a>
      </p>
    );
  }
  if (line.startsWith("Phone: ")) {
    return (
      <p className="break-words">
        Phone:{" "}
        {company.contact.phones.map((p, i) => {
          const phoneTitle =
            p.tel === "+918027825275"
              ? "Call Kaveri Industries – +91 80 2782 5275"
              : "Call Kaveri Industries – +91 80 2782 5276";
          return (
            <span key={p.tel} className="whitespace-nowrap">
              {i > 0 && " / "}
              <a
                href={`tel:${p.tel}`}
                title={phoneTitle}
                aria-label={phoneTitle}
                className="font-medium text-brand-700 hover:underline dark:text-brand-400"
              >
                {p.display}
              </a>
            </span>
          );
        })}
      </p>
    );
  }
  if (line.startsWith("Website: ")) {
    const host = line.replace("Website: ", "").trim();
    return (
      <p className="break-words">
        Website:{" "}
        <a
          href={company.url}
          target="_blank"
          rel="noreferrer"
          title="Kaveri Industries Official Website"
          aria-label="Kaveri Industries Official Website"
          className="font-medium break-all text-brand-700 hover:underline dark:text-brand-400"
        >
          {host}
        </a>
      </p>
    );
  }
  return <p className="break-words">{line}</p>;
}

function DetailLines({ info, lines }: { info: string; lines: string[] }) {
  if (info === "Contact Information") {
    return (
      <div className="min-w-0 space-y-1">
        {lines.map((line) => (
          <ContactLine key={line} line={line} />
        ))}
      </div>
    );
  }
  return (
    <div className="min-w-0 space-y-1">
      {lines.map((line) => (
        <p
          key={line}
          className="break-words [overflow-wrap:anywhere]"
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function ProprietorBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span
        aria-hidden="true"
        className={
          compact
            ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-extrabold text-brand-700 dark:text-brand-400"
            : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-sm font-extrabold text-brand-700 dark:text-brand-400"
        }
      >
        RB
      </span>
      <span className="min-w-0">
        <span
          className={
            compact
              ? "block break-words text-sm font-bold text-[#16233f] dark:text-white"
              : "block break-words font-bold text-[#16233f] dark:text-white"
          }
        >
          Mr. Rajesh Bhalla
        </span>
        <span className="block break-words text-[11px] text-slate-500 sm:text-xs dark:text-slate-400">
          Proprietor, Kaveri Industries
        </span>
      </span>
    </span>
  );
}

export function VendorApprovalInfoTable() {
  return (
    <section
      aria-labelledby="vendor-profile-heading"
      className="bg-white py-10 sm:py-14 dark:bg-[#071224] lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-400">
            Vendor Approval — RDSO
          </p>
          <h2
            id="vendor-profile-heading"
            className="mt-2 text-xl font-extrabold tracking-tight text-balance text-[#16233f] sm:text-2xl lg:text-3xl dark:text-white"
          >
            Vendor Profile &amp; Approval Details
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm dark:text-slate-400">
            Consolidated vendor-approval information for Kaveri Industries, a
            proprietorship concern. All documents are available for inspection
            and verification by RDSO and other authorised agencies.
          </p>
        </div>

        {/* Desktop table — reference 3-column layout (lg and up) */}
        <div className="mt-8 hidden overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs lg:mt-10 lg:block dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#16233f] text-white">
                  <th scope="col" className="w-[22%] px-5 py-3.5 font-bold">
                    Item
                  </th>
                  <th scope="col" className="w-[33%] px-5 py-3.5 font-bold">
                    Information / Sub-Tab
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-bold">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                {KAVERI_VENDOR_PROFILE_SECTIONS.map((section) =>
                  section.rows.map((row, rowIdx) => (
                    <tr
                      key={`${section.group}-${row.info}`}
                      className="align-top transition-colors hover:bg-slate-50/60 dark:hover:bg-slate-800/30"
                    >
                      {rowIdx === 0 && (
                        <th
                          scope="rowgroup"
                          rowSpan={section.rows.length}
                          className="bg-[#f2f7ff]/70 px-5 py-4 text-left font-bold break-words text-[#16233f] dark:bg-slate-900 dark:text-brand-400"
                        >
                          {section.group}
                        </th>
                      )}
                      <td className="border-l border-slate-200/70 px-5 py-4 font-medium break-words text-slate-700 dark:border-slate-800 dark:text-slate-300">
                        {row.info}
                      </td>
                      <td className="min-w-0 px-5 py-4 text-slate-600 dark:text-slate-300">
                        {row.info === "Proprietor" ? (
                          <ProprietorBadge />
                        ) : (
                          <DetailLines info={row.info} lines={row.details} />
                        )}

                        {row.statusActive && (
                          <p className="mt-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                              {row.statusActive}
                            </span>
                          </p>
                        )}
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile / tablet cards — same data, stacked (below lg) */}
        <div className="mt-6 space-y-4 sm:space-y-5 lg:hidden">
          {KAVERI_VENDOR_PROFILE_SECTIONS.map((section) => (
            <div
              key={section.group}
              className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="break-words bg-[#16233f] px-4 py-3 text-sm font-bold text-white">
                {section.group}
              </p>
              <dl className="divide-y divide-slate-100 dark:divide-slate-800">
                {section.rows.map((row) => (
                  <div key={row.info} className="min-w-0 px-4 py-3.5">
                    <dt className="break-words text-xs font-bold text-[#16233f] dark:text-brand-400">
                      {row.info}
                    </dt>
                    <dd className="mt-1.5 min-w-0 text-xs leading-relaxed break-words text-slate-600 sm:text-[13px] dark:text-slate-300">
                      {row.info === "Proprietor" ? (
                        <ProprietorBadge compact />
                      ) : (
                        <DetailLines info={row.info} lines={row.details} />
                      )}
                      {row.statusActive && (
                        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          {row.statusActive}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
