"use client";

import { createTimeline } from "animejs";
import { SOCIALS } from "../lib/constants";
import { useInViewAnim } from "./useInViewAnim";

export function Footer() {
  const footRef = useInViewAnim<HTMLElement>((root) => {
    const tl = createTimeline({ defaults: { ease: "outExpo", duration: 750 } });
    tl.add(root.querySelectorAll('[data-foot="line"]'), {
      translateY: ["110%", "0%"],
      ease: "outQuint",
      duration: 900,
    }).add(
      root.querySelectorAll('[data-foot="cta"]'),
      { opacity: [0, 1], translateY: [16, 0] },
      "-=400"
    );
  }, 0.25);

  return (
    <footer
      ref={footRef}
      id="contact"
      className="bg-ink px-5 pb-12 pt-20 text-paper md:px-8 md:pb-16 md:pt-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2
          aria-label="The next entry could be yours."
          className="font-display text-4xl leading-tight md:text-6xl"
        >
          <span aria-hidden className="block overflow-hidden pb-1">
            <span
              data-foot="line"
              style={{ transform: "translateY(110%)" }}
              className="block will-change-transform"
            >
              The next entry could be <em>yours</em>.
            </span>
          </span>
        </h2>
        <p
          data-foot="cta"
          style={{ opacity: 0 }}
          className="mt-5 max-w-md text-base leading-relaxed text-[#B8B0A0]"
        >
          I&apos;m open to 2026 engineering roles and freelance work. The fastest way to reach me is
          LinkedIn.
        </p>
        <div
          data-foot="cta"
          style={{ opacity: 0 }}
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm"
        >
          <a
            href="https://www.linkedin.com/in/joey-lam-89057021b/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-paper px-6 py-3 text-ink transition-colors duration-300 hover:bg-accent hover:text-paper"
          >
            Message on LinkedIn ↗
          </a>
          <a href="/cv.pdf" download="Joey Lam CV" className="text-link text-paper">
            Download CV ↓
          </a>
        </div>
        <div className="mt-20 flex flex-col gap-3 border-t border-paper/15 pt-6 font-mono text-xs text-[#B8B0A0] md:flex-row md:items-center md:justify-between">
          <span>© 2026 Joey Lam · Boston, MA</span>
          <div className="flex gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-paper"
              >
                {s.label}
              </a>
            ))}
          </div>
          <span>Set in Instrument Serif &amp; Sans · Animated with anime.js</span>
        </div>
      </div>
    </footer>
  );
}
