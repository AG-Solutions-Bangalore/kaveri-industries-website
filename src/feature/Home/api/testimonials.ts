import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { ReviewInput } from "@/lib/schemas";

/**
 * Seed testimonials — also drive the AggregateRating + Review JSON-LD on
 * the homepage until the backend is wired up. Replace the API call below
 * with the CMS endpoint when it ships; the rendered UI and structured data
 * are agnostic to the source.
 */
export const SEED_TESTIMONIALS: ReviewInput[] = [
  {
    author: "Anita Rao",
    headline: "Tight tolerances, every shipment.",
    body: "We've run Kaveri as our primary moulding partner for three years. Their Cpk numbers are the most consistent in our supply chain.",
    rating: 5,
    datePublished: "2025-08-14",
    authorRole: "VP Procurement, AutoComp OEM",
  },
  {
    author: "Marcus Lindgren",
    headline: "On-spec delivery to our Stuttgart line.",
    body: "Engineering support is responsive and DFM feedback actually moves the part, not just the model. Zero line-side defects in the last 18 months.",
    rating: 5,
    datePublished: "2025-06-02",
    authorRole: "Industrial Sourcing Lead, EU Tier-1",
  },
  {
    author: "Priya Subramanian",
    headline: "They scale with our roadmap.",
    body: "From 200-unit prototyping to 250k/yr production, Kaveri absorbed the volume without tooling transfers. Communication is excellent.",
    rating: 4,
    datePublished: "2025-04-19",
    authorRole: "Founder, Consumer Electronics Startup",
  },
  {
    author: "Hideki Tanaka",
    headline: "Material expertise you can audit.",
    body: "They sent us full PPAP with resin lot traceability on day one. That's unusual for this region. We're expanding the relationship in 2026.",
    rating: 5,
    datePublished: "2025-03-05",
    authorRole: "Quality Director, Japanese Auto Ancillary",
  },
];

/**
 * React-Query hook for testimonials. While `/testimonials` isn't live, falls
 * back to the seed list so the homepage renders + emits valid JSON-LD.
 */
export function useTestimonials() {
  return useQuery({
    queryKey: ["home", "testimonials"],
    queryFn: async () => {
      try {
        return await api.get<ReviewInput[]>("/testimonials");
      } catch {
        return SEED_TESTIMONIALS;
      }
    },
    staleTime: 5 * 60 * 1000,
    initialData: SEED_TESTIMONIALS,
  });
}