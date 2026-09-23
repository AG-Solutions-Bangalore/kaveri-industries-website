import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Shield, Briefcase, Settings, ChevronRight } from "lucide-react";
import { VENDOR_HERO_PILLS } from "../api/vendorApprovalConstants";

const EASE = [0.22, 1, 0.36, 1] as const;

export function VendorApprovalHero() {
  const getIcon = (icon: "shield" | "briefcase" | "settings") => {
    switch (icon) {
      case "shield":
        return <Shield className="h-4 w-4 text-brand-400" />;
      case "briefcase":
        return <Briefcase className="h-4 w-4 text-brand-400" />;
      case "settings":
        return <Settings className="h-4 w-4 text-brand-400" />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background banner image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-slate-900">
        <img
          src="/images/vendor-approval/vendor_hero_banner.webp"
          alt="RDSO Approval – Kaveri Industries"
          title="RDSO Approval – Kaveri Industries"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          sizes="100vw"
          loading="eager"
          decoding="async"
        />
        {/* Gradient overlays for text contrast */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#071120]/50 via-transparent to-[#071120]/80" />
      </div>

      <section
        aria-labelledby="vendor-hero-heading"
        className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 md:pt-16 md:pb-28 lg:px-8"
      >
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 text-xs text-slate-400"
        >
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="font-medium text-slate-300" aria-current="page">
            RDSO Approval
          </span>
        </nav>

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Subtitle, Badges */}
          <div className="lg:col-span-7">
            <motion.h1
              id="vendor-hero-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            >
              RDSO <span className="text-brand-400">Approval</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.08 }}
              className="mt-3 text-sm font-semibold text-slate-100 sm:text-base"
            >
              Government approved. Trusted for railways.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
              className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm"
            >
              Our products are approved by the Research Designs and Standards
              Organisation (RDSO), Ministry of Railways, meeting the highest
              standards of quality, safety and reliability.
            </motion.p>

            {/* Badges / Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
              className="mt-6 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:mt-8 lg:flex lg:flex-wrap lg:items-center lg:gap-6"
            >
              {VENDOR_HERO_PILLS.map((pill, idx) => (
                <div
                  key={`${pill.line1}-${pill.line2}`}
                  className={`flex min-w-0 items-center gap-3 ${idx < VENDOR_HERO_PILLS.length - 1
                    ? "lg:border-r lg:border-slate-700/80 lg:pr-6"
                    : ""
                    }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/10">
                    {getIcon(pill.icon)}
                  </div>
                  <div className="text-xs font-medium leading-snug sm:text-sm">
                    <span className="block font-semibold text-slate-100">
                      {pill.line1}
                    </span>
                    <span className="block text-slate-300">{pill.line2}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>


        </div>
      </section>
    </div>
  );
}
