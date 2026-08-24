"use client";

import { animate, createTimeline } from "animejs";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { SOCIALS } from "../lib/constants";
import { prefersReduced } from "./useInViewAnim";

/** The hero's catalog card — anime.js pops it in with an overshoot bounce. */
function CatalogCard() {
  const rows = [
    ["Role", "Full-stack engineer"],
    ["Location", "Boston, MA"],
    ["Education", "CS & Economics, Boston University"],
    ["Currently", "Consultant, Andrew W. Mellon Foundation"],
  ];
  return (
    <div
      data-hero="card"
      style={{ opacity: 0 }}
      className="relative w-full max-w-md bg-card border border-rule shadow-card"
    >
      <div className="flex items-center justify-between border-b border-rule px-6 py-3">
        <span className="font-mono text-sm font-medium">JOEY LAM</span>
        <span className="call-no">BA · 2026 · JL</span>
      </div>
      <dl className="px-6 py-2">
        {rows.map(([k, v], i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 + i * 0.12 }}
            className="grid grid-cols-[92px_1fr] gap-4 border-b border-rule/70 py-3 last:border-0"
          >
            <dt className="font-mono text-xs text-mute pt-[3px]">{k}</dt>
            <dd className="text-sm leading-snug">{v}</dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // anime.js load sequence
  useEffect(() => {
    const root = heroRef.current;
    if (!root || root.dataset.heroDone) return;
    root.dataset.heroDone = "1";
    const q = (s: string) => Array.from(root.querySelectorAll(s));
    if (prefersReduced()) return;
    const tl = createTimeline({ defaults: { ease: "outExpo", duration: 750 } });
    tl.add(q('[data-hero="eyebrow"]'), { opacity: [0, 1], translateY: [10, 0] })
      .add(q('[data-hero="line"]'), { translateY: ["115%", "0%"], ease: "outQuint", duration: 950 }, "-=450")
      .add(q('[data-hero="sub"]'), { opacity: [0, 1], translateY: [18, 0] }, "-=500")
      .add(q('[data-hero="links"]'), { opacity: [0, 1], translateY: [14, 0] }, "-=550")
      .add(
        q('[data-hero="card"]'),
        {
          opacity: [0, 1],
          translateY: [44, 0],
          rotate: [-5.5, -0],
          ease: "outBack(1.3)",
          duration: 900,
        },
        "-=650"
      );
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative overflow-hidden px-5 pb-20 h-[100vh] pt-32 md:px-8 md:pt-44"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0 31px, rgba(33,28,19,0.035) 31px 32px)",
      }}
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 md:grid-cols-[1.15fr_1fr] md:gap-12">
        <div>
          <p
            data-hero="eyebrow"
            style={{ opacity: 0 }}
            className="call-no mb-6"
          >
            Learning and exploring
          </p>
          <h1
            aria-label="Software, made the way you'd make a thing by hand."
            className="font-display text-5xl leading-[1.05] md:text-7xl"
          >
            <span aria-hidden className="block overflow-hidden pb-1">
              <span
                data-hero="line"
                style={{ transform: "translateY(115%)" }}
                className="block will-change-transform"
              >
                Hi there! I'm
              </span>
            </span>
            <span aria-hidden className="block overflow-hidden pb-2">
              <span
                data-hero="line"
                style={{ transform: "translateY(115%)" }}
                className="block will-change-transform"
              >
                <em>Joey Lam</em>.
              </span>
            </span>
          </h1>
          <p
            data-hero="sub"
            style={{ opacity: 0 }}
            className="mt-7 max-w-md text-base leading-relaxed text-mute md:text-lg"
          >
            I&apos;m a full-stack engineer and economics student who loves to learn about different topics.
            Currently developing and researching a new trading algorithm
            </p>
          <div
            data-hero="links"
            style={{ opacity: 0 }}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm"
          >
            <a href="#work" className="text-link">
              See my work ↓
            </a>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-link">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <motion.div style={{ y: cardY }} className="justify-self-center md:justify-self-end">
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <CatalogCard />
          </motion.div>
        </motion.div>
      </div>

      <span
        aria-hidden
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-[11px] uppercase tracking-[0.5em] text-ink/30 lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Code as craft — Boston, MA
      </span>
      <Mountains />
    </section>
  );
}

function Mountains() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bx = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const fx = useTransform(scrollYProgress, [0, 1], [-20, 60]);
  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[36%] overflow-hidden">
      <motion.svg
        style={{ x: bx }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="absolute inset-x-[-5%] bottom-[-2px] h-full w-[110%] text-ink/[0.05]"
      >
        <path
          fill="currentColor"
          d="M0 320 C60 300 95 215 145 185 C185 162 205 238 265 232 C335 226 355 148 415 128 C455 115 485 188 545 203 C615 220 655 158 725 148 C795 138 825 208 895 213 C955 218 995 168 1055 163 C1125 158 1165 223 1235 218 C1305 213 1370 258 1440 248 L1440 400 L0 400 Z"
        />
      </motion.svg>
      <motion.svg
        style={{ x: fx }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="absolute inset-x-[-5%] bottom-[-2px] h-[62%] w-[110%] text-ink/[0.07]"
      >
        <path
          fill="currentColor"
          d="M0 345 C80 334 125 278 185 268 C245 259 275 312 345 306 C425 299 475 246 545 255 C615 264 655 318 735 310 C805 303 855 250 935 258 C1005 265 1065 313 1145 302 C1225 291 1310 326 1440 308 L1440 400 L0 400 Z"
        />
      </motion.svg>
    </div>
  );
}
