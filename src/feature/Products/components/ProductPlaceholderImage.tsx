import type { LucideIcon } from "lucide-react";
import { Camera } from "lucide-react";

export interface ProductPlaceholderImageProps {
  icon?: LucideIcon;
  label: string;
  /** When set, the placeholder also shows "Photography pending" hint. */
  pending?: boolean;
  className?: string;
}

/**
 * Mock product image — used for products where photography is pending.
 * Subtle blueprint grid, centered product icon, and a discreet corner
 * ribbon so the rest of the page never breaks visually.
 *
 * Replace by setting `imageUrl` on the product in `api/products.ts`.
 */
export function ProductPlaceholderImage({
  icon: Icon,
  label,
  pending = true,
  className = "",
}: ProductPlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — photography pending`}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 ${className}`}
    >
      {/* Centered icon */}
      <div className="relative z-10 grid h-20 w-20 place-items-center rounded-sm border border-brand-200/60 bg-white/70 text-brand-700 shadow-sm backdrop-blur-xs dark:border-brand-700/40 dark:bg-slate-900/60 dark:text-brand-400">
        {Icon ? (
          <Icon className="h-10 w-10 stroke-[1.5]" aria-hidden="true" />
        ) : (
          <Camera className="h-9 w-9 stroke-[1.5]" aria-hidden="true" />
        )}
      </div>
      {/* Bottom corner hint */}
      {pending && (
        <span className="absolute bottom-2 right-2 z-10 inline-flex items-center gap-1 rounded-xs bg-slate-900/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-xs">
          Photo pending
        </span>
      )}
    </div>
  );
}
