"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { NAV } from "../lib/constants";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-rule bg-paper/85 backdrop-blur-sm" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5 md:h-16 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="font-display text-xl">Joey Lam</span>
        </a>
        <div className="flex gap-6">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-link hidden text-sm text-ink sm:block">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="text-link text-sm sm:hidden">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
