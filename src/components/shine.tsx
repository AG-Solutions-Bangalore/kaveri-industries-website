"use client";
import type { ButtonHTMLAttributes } from "react";

interface ShineButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  direction?: "left" | "right";
}

/**
 * CSS-only shine sweep — previously `motion.button` + `whileHover`, which
 * dragged the entire `motion` runtime into the critical path (Navbar mounts
 * it on every page). The sweep is a pure hover transition now: identical
 * 600ms diagonal gloss, zero JS.
 */
export function ShineButton({
  children,
  direction = "right",
  className,
  type = "button",
  ...props
}: ShineButtonProps) {
  return (
    <button
      type={type}
      className={`group/shine relative cursor-pointer overflow-hidden ${className || ""}`}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 block transition-transform duration-[600ms] ease-in-out ${
          direction === "right"
            ? "-translate-x-full group-hover/shine:translate-x-full"
            : "translate-x-full group-hover/shine:-translate-x-full"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
      />
    </button>
  );
}
