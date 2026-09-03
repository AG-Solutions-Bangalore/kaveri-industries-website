// Testimonials section has been removed per senior's instruction:
// "Use the content from the brochure for the page" — the brochure has no
// testimonials, so this UI block is intentionally deleted. The original
// implementation rendered fabricated reviews and emitted AggregateRating
// JSON-LD for non-existent customers, both of which violate Google's
// review-schema guidelines and misrepresent the company.
//
// This file is kept as a marker so the deletion is auditable. The
// matching data + schema helpers (src/feature/Home/api/testimonials.ts,
// src/lib/schemas.ts review/aggregateRating builders) are also removed.
//
// If real customer testimonials become available later, re-introduce the
// section with verified quotes only — and re-add the schema helpers
// behind a feature flag.
export {};
