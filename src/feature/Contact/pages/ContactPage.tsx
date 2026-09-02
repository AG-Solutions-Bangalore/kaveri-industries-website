import { SEO } from "@/components/common/SEO";
import { company } from "@/lib/company";
import { contactSEO } from "@/feature/Contact/seo/contactSeo";

export default function ContactPage() {
  return (
    <>
      <SEO {...contactSEO} />
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-muted-foreground">
        Reach our sales desk at{" "}
        <a className="text-brand-600 underline" href={`mailto:${company.contact.salesEmail}`}>
          {company.contact.salesEmail}
        </a>
        .
      </p>
    </>
  );
}