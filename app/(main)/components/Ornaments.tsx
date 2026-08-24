"use client";

import { motion, useScroll, useTransform } from "motion/react";

/** Auspicious-cloud spiral ornament that spins and drifts down as you scroll. */
function CloudSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden>
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" opacity="0.55" />
      <path
        d="M100 100 m 0 -7 a 7 7 0 1 1 -7 7 a 16 16 0 1 0 16 -16 a 29 29 0 1 1 -29 29 a 45 45 0 1 0 45 -45 a 62 62 0 1 1 -62 62"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M158 52 c 16 -8 30 -4 36 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 148 c -14 9 -19 22 -15 33" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function ScrollOrnament() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-35vh", "115vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["115vh", "-25vh"]);
  const drift = useTransform(scrollYProgress, [0, 1], ["-4vw", "4vw"]);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block">
      <motion.div style={{ y }} className="absolute left-[3%] top-0">
        <div className="animate-[spin_90s_linear_infinite] text-ink opacity-[0.08]">
          <CloudSvg size={380} />
        </div>
      </motion.div>
      <motion.div style={{ y: y2, x: drift }} className="absolute right-[4%] top-0">
        <div className="animate-[spin_70s_linear_infinite_reverse] text-ink opacity-[0.07]">
          <CloudSvg size={230} />
        </div>
      </motion.div>
    </div>
  );
}
