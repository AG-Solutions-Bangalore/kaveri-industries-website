import { Link } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { notFoundSEO } from "@/feature/NotFound/seo/notFoundSeo";

export default function NotFoundPage() {
  return (
    <>
      <SEO {...notFoundSEO} />
      <div className="mx-auto max-w-md py-24 text-center">
        <p className="text-7xl font-semibold tracking-tight">404</p>
        <h1 className="mt-4 text-2xl font-medium">Page not found</h1>
        <p className="mt-2 text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90"
        >
          Back home
        </Link>
      </div>
    </>
  );
}