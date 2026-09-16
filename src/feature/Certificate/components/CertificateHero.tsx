import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Shield, Settings, Users, ChevronRight } from "lucide-react";
import { HERO_PILLS } from "../api/certificateConstants";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CertificateHero() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "shield":
        return <Shield className="h-4 w-4 text-brand-400" />;
      case "settings":
        return <Settings className="h-4 w-4 text-brand-400" />;
      case "users":
        return <Users className="h-4 w-4 text-brand-400" />;
      default:
        return <Shield className="h-4 w-4 text-brand-400" />;
    }
  };

  return (
    <div className="relative text-white overflow-hidden bg-slate-900">
      {/* Background banner image matching Hero.tsx layout & width */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-slate-900">
        <img
          src="/images/certificate/hero_banner.webp"
          alt="Certifications & Approvals – Kaveri Industries"
          title="Certifications & Approvals – Kaveri Industries"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          sizes="100vw"
          loading="eager"
          decoding="async"
        />

        {/* Gradient overlay to ensure crisp readability on the left while showcasing the stamp on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071120] from-20% via-[#071120]/85 via-55% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071120]/50 via-transparent to-[#071120]/80" />
      </div>

      <section
        aria-labelledby="cert-hero-heading"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-16 md:pb-28"
      >
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-slate-400">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="font-medium text-slate-300" aria-current="page">
            Certifications
          </span>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Subtitle, Badges */}
          <div className="lg:col-span-7">
            <motion.h1
              id="cert-hero-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Certifications &{" "}
              <span className="text-brand-400">Approvals</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              Our commitment to quality, safety and compliance is validated
              through recognized certifications and approvals from leading
              authorities.
            </motion.p>

            {/* Badges / Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6"
            >
              {HERO_PILLS.map((pill, idx) => (
                <div
                  key={pill.line1}
                  className={`flex items-center gap-3 ${
                    idx < HERO_PILLS.length - 1
                      ? "sm:border-r sm:border-slate-700/80 sm:pr-6"
                      : ""
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/10">
                    {getIcon(pill.icon)}
                  </div>
                  <div className="text-xs font-medium leading-snug sm:text-sm">
                    <span className="block font-semibold text-slate-100">{pill.line1}</span>
                    <span className="block text-slate-300">{pill.line2}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Industrial Stamp Typography */}
          <div className="flex justify-start lg:col-span-5 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="border-l-2 border-slate-700/80 pl-5 py-2 space-y-1 backdrop-blur-[2px]"
            >
              <span className="block text-xs font-bold tracking-[0.22em] text-white">
                COMPLIANCE
              </span>
              <span className="block text-xs font-bold tracking-[0.22em] text-brand-400">
                QUALITY
              </span>
              <span className="block text-xs font-bold tracking-[0.22em] text-white">
                TRUST
              </span>
              <span className="block pt-1 text-[10px] font-semibold tracking-wider text-slate-300">
                A STRONGER TOMORROW
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
