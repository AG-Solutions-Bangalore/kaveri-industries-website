import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { APPROVED_PRODUCTS_DATA } from "../api/vendorApprovalConstants";

export function ApprovedProductsGrid() {
  return (
    <section
      aria-labelledby="approved-products-heading"
      className="bg-white py-16 dark:bg-[#071224]/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Approved Products
            </span>
            <h2
              id="approved-products-heading"
              className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Products Covered Under Approval
            </h2>
            <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
              The following products are covered under our RDSO approval.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 sm:text-sm"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 4 Product Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APPROVED_PRODUCTS_DATA.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Image Frame */}
              <div className="aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info & Action */}
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {product.approvalNo}
                  </p>
                </div>

                <div className="mt-4 flex justify-start">
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white dark:border-slate-700 dark:text-slate-300"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
