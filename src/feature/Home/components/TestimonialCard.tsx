import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  author: string;
  headline?: string;
  body: string;
  rating: number;
  datePublished: string;
  authorRole?: string;
  className?: string;
}

/** Renders a single customer testimonial card with star rating. */
export function TestimonialCard({
  author,
  headline,
  body,
  rating,
  datePublished,
  authorRole,
  className,
}: TestimonialCardProps) {
  const formattedDate = new Date(datePublished).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
  });
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm",
        className,
      )}
      aria-label={`Review by ${author}`}
    >
      <div
        className="flex items-center gap-0.5 text-amber-500"
        role="img"
        aria-label={`Rated ${rating} out of 5`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating ? "fill-current" : "fill-transparent opacity-40",
            )}
          />
        ))}
      </div>
      {headline && (
        <h3 className="text-base font-semibold leading-snug">{headline}</h3>
      )}
      <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
        “{body}”
      </blockquote>
      <footer className="mt-2 flex flex-col gap-0.5 border-t border-border pt-3 text-xs">
        <cite className="not-italic font-medium text-foreground">{author}</cite>
        {authorRole && (
          <span className="text-muted-foreground">{authorRole}</span>
        )}
        <time
          dateTime={datePublished}
          className="text-muted-foreground"
          aria-label={`Reviewed in ${formattedDate}`}
        >
          {formattedDate}
        </time>
      </footer>
    </article>
  );
}