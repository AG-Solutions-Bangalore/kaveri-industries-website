import { SEO } from "@/components/common/SEO";
import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

const LEGAL_TITLES: Record<string, { title: string; body: string }> = {
  privacy: {
    title: "Privacy Policy",
    body: `${company.name} collects only the contact information you voluntarily submit through our enquiry and quote-request forms. We do not sell, rent, or share your data with third parties.`,
  },
  terms: {
    title: "Terms of Service",
    body: `By using ${company.url.replace(/^https?:\/\//, "")} you agree to the acceptable-use terms set out in our master supply agreement. Product specifications, lead times, and minimum order quantities are confirmed in writing per enquiry.`,
  },
  compliance: {
    title: "Compliance",
    body: `${company.name} operates under ${company.isoStandard} and follows the relevant IS / ISO / ASTM standards for every product line. Material test certificates accompany each shipment.`,
  },
  sitemap: {
    title: "Sitemap",
    body: `Browse all sections of the ${company.name} website from one place — products, industries, and contact.`,
  },
};

export interface LegalPageProps {
  slug: keyof typeof LEGAL_TITLES;
}

export default function LegalPage({ slug }: LegalPageProps) {
  const entry = LEGAL_TITLES[slug];
  const seo: Pick<SEOProps, "title" | "path" | "schema" | "noindex"> = {
    title: entry.title,
    path: `/${slug}`,
    noindex: true,
    schema: breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: entry.title, url: `/${slug}` },
    ]),
  };

  return (
    <>
      <SEO {...seo} />
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {entry.title}
        </h1>
        <p className="mt-6 text-muted-foreground">{entry.body}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          For questions about this policy, write to{" "}
          <a className="text-accent underline" href={`mailto:${company.contact.legalEmail}`}>
            {company.contact.legalEmail}
          </a>
          .
        </p>
      </section>
    </>
  );
}