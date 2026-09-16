import { type ComponentType, type ReactNode, isValidElement } from "react";
import { cn } from "@/lib/utils";

export interface FloatingHighlightItem {
  id?: string;
  title: string;
  description: string;
  icon?: ComponentType<{ className?: string; strokeWidth?: number }> | ReactNode;
}

export interface FloatingHighlightStripProps {
  items: FloatingHighlightItem[];
  className?: string;
  cardClassName?: string;
  ariaLabel?: string;
}

/**
 * Reusable floating highlight banner card.
 *
 * Sits 50% on the preceding hero section and 50% on the following section
 * (`-mt-12 sm:-mt-14 md:-mt-16 relative z-20`).
 *
 * Features:
 * - Rounded container with soft depth shadow and subtle border
 * - Responsive grid with column dividers on large viewports
 * - Amber tinted circular icon badges matching the Kaveri design system
 * - Full light & dark mode support
 */
export function FloatingHighlightStrip({
  items,
  className,
  cardClassName,
  ariaLabel = "Key Highlights",
}: FloatingHighlightStripProps) {
  const getGridColsClass = (count: number) => {
    switch (count) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    }
  };

  const renderIcon = (
    IconProp?: ComponentType<{ className?: string; strokeWidth?: number }> | ReactNode,
  ) => {
    if (!IconProp) return null;
    if (isValidElement(IconProp)) return IconProp;
    const IconComp = IconProp as ComponentType<{
      className?: string;
      strokeWidth?: number;
    }>;
    return <IconComp className="h-6 w-6 text-brand-600 dark:text-brand-400" strokeWidth={1.75} />;
  };

  return (
    <section
      aria-label={ariaLabel}
      className={cn(
        "relative z-20 -mt-12 sm:-mt-14 md:-mt-16 px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-xl border border-slate-200/90 bg-white p-5 sm:p-6 lg:p-7 shadow-xl dark:border-slate-800 dark:bg-slate-900",
          cardClassName,
        )}
      >
        <div
          className={cn(
            "grid gap-6 lg:divide-x lg:divide-slate-100 dark:lg:divide-slate-800",
            getGridColsClass(items.length),
          )}
        >
          {items.map((item, index) => (
            <div
              key={item.id ?? item.title}
              className={cn(
                "flex items-center gap-4",
                index === 0
                  ? "lg:pr-6"
                  : index === items.length - 1
                    ? "lg:pl-6"
                    : "lg:px-6",
              )}
            >
              {item.icon && (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fef9ee] text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
                  {renderIcon(item.icon)}
                </div>
              )}
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FloatingHighlightStrip;
