import { motion } from "motion/react";
import {
  Users,
  FlaskConical,
  ShieldCheck,
  Award,
  type LucideIcon,
} from "lucide-react";
import { company } from "@/lib/company";
import { IMAGE_BASE_URL } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

interface CapabilityCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageTitle: string;
  icon: LucideIcon;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    id: "engineering-team",
    title: "Engineering Team",
    description:
      "A multidisciplinary engineering team supports material selection, custom drawing development, and rapid prototyping for OEM customers.",
    image: `${IMAGE_BASE_URL}/about/team-engineering.webp`,
    imageAlt:
      "Three engineers in navy work uniforms reviewing a fastener drawing in a factory aisle",
    imageTitle:
      "Kaveri Industries Engineering Team Reviewing Fastener Design",
    icon: Users,
  },
  {
    id: "tensile-testing",
    title: "Tensile Testing",
    description:
      "Universal Testing Machine (UTM) tensile rigs validate load capacity, proof load, and yield strength on every batch.",
    image: `${IMAGE_BASE_URL}/about/quality-tensile-testing.webp`,
    imageAlt:
      "Universal Testing Machine tensile rig clamping a high-tensile hex bolt specimen with digital load display",
    imageTitle: "Tensile Strength Testing of High Tensile Fasteners",
    icon: FlaskConical,
  },
  {
    id: "hardness-testing",
    title: "Hardness Testing",
    description:
      "Rockwell hardness testing on every production lot — Vickers for surface and case-hardened parts — guarantees consistent mechanical properties.",
    image: `${IMAGE_BASE_URL}/about/quality-hardness-testing.webp`,
    imageAlt:
      "Rockwell hardness tester pressing a diamond indenter into a polished steel coupon",
    imageTitle:
      "Rockwell Hardness Testing of Steel Fastener Material",
    icon: ShieldCheck,
  },
  {
    id: "certifications",
    title: "Certifications",
    description:
      `${company.isoStandard} certified manufacturing process with full material traceability and batch-level test certificates on dispatch.`,
    image: `${IMAGE_BASE_URL}/about/certifications-display.webp`,
    imageAlt:
      `${company.isoStandard} certificate with a steel caliper on a walnut desk`,
    imageTitle: "Kaveri Industries ISO 9001 Quality Certification",
    icon: Award,
  },
];

/**
 * 2×2 grid of capability cards — engineering team, tensile testing,
 * hardness testing, certifications. Each card pairs a real photo with
 * an icon, title, and a short paragraph. Sits between QualityProcess
 * and CTABanner on the /about page.
 */
export function AboutCapabilities() {
  return (
    <section
      aria-labelledby="about-capabilities-heading"
      className="bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl space-y-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Capabilities
          </motion.p>
          <motion.h2
            id="about-capabilities-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            People, Process, Proof
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            className="text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Behind every Kaveri fastener is a tight loop of engineering,
            in-house testing, and a documented quality programme.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CAPABILITIES.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.55,
                  ease: EASE,
                  delay: 0.08 + idx * 0.06,
                }}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-xs transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    title={card.imageTitle}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="grid h-8 w-8 place-items-center text-brand-600 dark:text-brand-400"
                    >
                      <Icon
                        className="h-5 w-5 stroke-[1.75]"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="text-base font-bold tracking-tight text-foreground">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
