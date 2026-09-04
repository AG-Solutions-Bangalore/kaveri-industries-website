import { SEO } from "@/components/common/SEO";
import { ContactHero } from "@/feature/Contact/components/ContactHero";
import { ContactInfoCards } from "@/feature/Contact/components/ContactInfoCards";
import { ContactForm } from "@/feature/Contact/components/ContactForm";
import { ContactLocation } from "@/feature/Contact/components/ContactLocation";
import { contactSEO } from "@/feature/Contact/seo/contactSeo";

/**
 * /contact — single-page contact flow.
 *
 * Sections, top to bottom:
 * 1. ContactHero (dark image hero with title)
 * 2. Let's Talk + Send Us a Message (two-column: info cards + form)
 * 3. Our Location (OpenStreetMap embed with address callout)
 * 4. Looking for a Fastening Solution? (light CTA)
 */
export default function ContactPage() {
  return (
    <>
      <SEO {...contactSEO} />
      <ContactHero />

      <section
        aria-labelledby="contact-talks-heading"
        className="bg-background py-12 md:py-20"
      >
        <h2 id="contact-talks-heading" className="sr-only">
          Get in touch
        </h2>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <ContactInfoCards />
          <ContactForm />
        </div>
      </section>

      <ContactLocation />
      
    </>
  );
}
