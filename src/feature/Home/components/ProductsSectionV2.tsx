import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { IMAGE_BASE_URL } from "@/lib/images";

const V2_PRODUCTS = [
  {
    id: "hex-bolts",
    name: "HEX BOLTS",
    image: `${IMAGE_BASE_URL}/home/v2-hex-bolts.webp`,
    href: "/products/hex-bolts",
  },
  {
    id: "socket-head-cap-screws",
    name: "SOCKET HEAD CAP SCREWS",
    image: `${IMAGE_BASE_URL}/home/v2-socket-head-cap-screws.webp`,
    href: "/products",
  },
  {
    id: "anchor-bolts",
    name: "ANCHOR BOLTS",
    image: `${IMAGE_BASE_URL}/home/v2-anchor-bolts.webp`,
    href: "/products",
  },
  {
    id: "threaded-rods",
    name: "THREADED RODS",
    image: `${IMAGE_BASE_URL}/home/v2-threaded-rods.webp`,
    href: "/products/studs",
  },
  {
    id: "nuts",
    name: "NUTS",
    image: `${IMAGE_BASE_URL}/home/v2-nuts.webp`,
    href: "/products/hex-nuts",
  },
  {
    id: "washers",
    name: "WASHERS",
    image: `${IMAGE_BASE_URL}/home/v2-washers.webp`,
    href: "/products/washers",
  },
];

export function ProductsSectionV2() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="v2-products-heading"
      className="bg-white py-14 sm:py-16 md:py-20 dark:bg-[#0A0D12]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Top Header matching exact mockup */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-12">
          {/* Left Title Block */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A83B]">
              OUR PRODUCTS
            </span>
            <h2
              id="v2-products-heading"
              className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl font-display dark:text-white"
            >
              Engineered to Perfection
            </h2>
          </div>

          {/* Middle Subtitle */}
          <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            From standard to special fasteners, we deliver solutions that meet
            global standards and exceed expectations.
          </p>

          {/* Right Outlined Action Button */}
          <div>
            <button
              type="button"
              onClick={() => navigate("/products")}
              className="group inline-flex items-center gap-2 rounded-none border border-[#E5A83B] bg-transparent px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-900 transition-all duration-200 hover:bg-[#E5A83B] hover:text-[#0B0D12] dark:text-white dark:hover:text-[#0B0D12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A83B]"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* 6-Card Product Grid matching exact mockup */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-4">
          {V2_PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                to={product.href}
                className="group flex h-full flex-col justify-between border border-slate-200/90 bg-white p-3 sm:p-4 shadow-sm transition-all duration-300 hover:border-[#E5A83B] hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80"
              >
                {/* Product Image Canvas */}
                <div className="aspect-square w-full mb-3 flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900/60 p-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Bottom Row: Name and Gold Arrow */}
                <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 transition-colors duration-200 group-hover:text-[#E5A83B] dark:text-white leading-tight">
                    {product.name}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 text-[#E5A83B] transition-transform duration-300 ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSectionV2;
