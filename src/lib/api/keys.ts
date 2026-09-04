/**
 * React Query key factory.
 *
 * Convention used across the app: every domain owns a top-level entry in this
 * factory. Each entry exposes:
 *   - `all`       → invalidates/refetches the entire domain
 *   - `lists()`   → invalidates/refetches every list of the domain
 *   - `list(filters?)` → a specific list
 *   - `details()` → invalidates/refetches every detail of the domain
 *   - `detail(id)`→ a specific detail
 *
 * This keeps cache keys stable, type-safe, and discoverable from one file.
 */
export const queryKeys = {
  enquiry: {
    all: ["enquiry"] as const,
    lists: () => [...queryKeys.enquiry.all, "list"] as const,
    list: (filters?: Record<string, unknown>) =>
      [...queryKeys.enquiry.lists(), filters ?? {}] as const,
    details: () => [...queryKeys.enquiry.all, "detail"] as const,
    detail: (id: string | number) =>
      [...queryKeys.enquiry.details(), id] as const,
  },
  // placeholder for future domains — keeps the shape consistent
  products: {
    all: ["products"] as const,
    lists: () => [...queryKeys.products.all, "list"] as const,
    list: (filters?: Record<string, unknown>) =>
      [...queryKeys.products.lists(), filters ?? {}] as const,
  },
} as const;

export type QueryKeys = typeof queryKeys;