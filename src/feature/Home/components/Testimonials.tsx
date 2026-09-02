import { useTestimonials } from "@/feature/Home/api/testimonials";
import { TestimonialCard } from "@/feature/Home/components/TestimonialCard";

/**
 * Customer testimonials grid. Backed by `useTestimonials()` (react-query)
 * and seeded so the homepage renders + emits valid AggregateRating JSON-LD
 * the moment the site boots.
 */
export function Testimonials() {
  const { data: reviews = [], isLoading } = useTestimonials();

  if (isLoading) {
    return (
      <section
        aria-busy="true"
        aria-label="Loading customer reviews"
        className="mt-16"
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          What our customers say
        </h2>
        <p className="text-sm text-muted-foreground">Loading reviews…</p>
      </section>
    );
  }

  const avg = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mt-16 scroll-mt-20"
    >
      <header className="mb-6 flex flex-col gap-1">
        <h2
          id="testimonials-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          What our customers say
        </h2>
        <p className="text-sm text-muted-foreground">
          Rated{" "}
          <strong className="font-semibold text-foreground">
            {avg.toFixed(1)} / 5
          </strong>{" "}
          across{" "}
          <strong className="font-semibold text-foreground">
            {reviews.length}
          </strong>{" "}
          verified B2B reviews.
        </p>
      </header>

      <ul
        role="list"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Customer testimonials"
      >
        {reviews.map((r, idx) => (
          <li key={`${r.author}-${idx}`}>
            <TestimonialCard
              author={r.author}
              headline={r.headline}
              body={r.body}
              rating={r.rating}
              datePublished={r.datePublished}
              authorRole={r.authorRole}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}