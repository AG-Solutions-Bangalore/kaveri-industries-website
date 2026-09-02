import { SEO } from "@/components/common/SEO";
import { aboutSEO } from "@/feature/About/seo/aboutSeo";

export default function AboutPage() {
  return (
    <>
      <SEO {...aboutSEO} />
      <article className="prose max-w-none">
        <h1 className="text-3xl font-semibold tracking-tight">About Kaveri</h1>
        <p className="mt-4 text-muted-foreground">
          Founded in 2008, Kaveri Industries operates three plants across South
          India with a combined annual capacity of 4,200 metric tonnes.
        </p>
      </article>
    </>
  );
}