import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { SEO } from "@/components/common/SEO";
import { Dithered404 } from "@/components/ui/dithered-404";
import { ShineButton } from "@/components/shine";
import { notFoundSEO } from "@/feature/NotFound/seo/notFoundSeo";

/**
 * Interactive 404 page — the centerpiece is the `<Dithered404 />`
 * canvas, which renders a Bayer-dithered "404" glyph and gives the
 * user a fireball cursor that scorches the text on hover. After the
 * cursor leaves, the type reforms and the effect can be replayed.
 *
 * Layout:
 *   - Section is `min-h-[calc(100vh-4rem)]` (full viewport minus the
 *     64px sticky navbar) so the canvas has room to read the "404"
 *     glyph at any breakpoint.
 *   - The canvas itself is `absolute inset-0`, so it needs a `relative`
 *     parent — the section provides that.
 *   - The text + CTA sit in a `relative z-10` overlay so they stay
 *     above the canvas and are always readable.
 *   - The canvas follows shadcn / next-themes automatically (it watches
 *     the `html.dark` class), and respects `prefers-reduced-motion`.
 */
export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <SEO {...notFoundSEO} />
      <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-background">
        <Dithered404 />

        <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-end px-4 pb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Page not found
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <ShineButton
            onClick={() => navigate("/")}
            className="group mt-6 inline-flex items-center gap-2 bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors duration-200 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Back home
            <ArrowRight
              className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </ShineButton>
        </div>
      </section>
    </>
  );
}
