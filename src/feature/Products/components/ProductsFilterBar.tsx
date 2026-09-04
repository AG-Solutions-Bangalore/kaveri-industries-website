import { useId } from "react";
import { Filter } from "lucide-react";
import {
  PRODUCT_CATEGORIES,
  type ProductCategory,
} from "@/feature/Products/api/products";

export type CategoryFilter = ProductCategory | "all";

export interface ProductsFilterBarProps {
  value: CategoryFilter;
  onChange: (next: CategoryFilter) => void;
  resultCount?: number;
}

const OPTIONS: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All Categories" },
  ...PRODUCT_CATEGORIES.map((c) => ({ value: c.id, label: c.label })),
];

/**
 * Filter dropdown, matching the design reference.
 * Native <select> so it works without JS, then enhanced styling on top.
 */
export function ProductsFilterBar({
  value,
  onChange,
}: ProductsFilterBarProps) {
  const selectId = useId();

  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Precision Fastening Solutions
        </h2>
        <p className="mt-1 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Explore our comprehensive catalog of high-grade industrial fasteners.
          Each product line is manufactured to rigorous international standards,
          ensuring structural integrity across infrastructure, automotive, and
          heavy engineering sectors.
        </p>
      </div>

      <div className="flex items-center shrink-0">
        <label htmlFor={selectId} className="sr-only">
          Filter by category
        </label>
        <div className="relative min-w-[180px]">
          <Filter
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <select
            id={selectId}
            value={value}
            onChange={(e) => onChange(e.target.value as CategoryFilter)}
            className="h-10 w-full appearance-none rounded-sm border border-border bg-card pl-9 pr-9 text-sm font-medium text-foreground shadow-xs transition-colors hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          >
            {OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground"
          >
            ▼
          </span>
        </div>
      </div>
    </div>
  );
}
