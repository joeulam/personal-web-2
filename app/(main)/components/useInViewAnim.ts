"use client";

import { useEffect, useRef } from "react";

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Force-show any JS-gated children so sections are never stuck invisible on mobile. */
export function forceShow(root: HTMLElement) {
  const targets = root.querySelectorAll<HTMLElement>(
    '[data-hero], [data-foot], .about-pop, .about-chip, .work-card, .xp-row'
  );
  targets.forEach((t) => {
    t.style.opacity = '1';
    t.style.transform = 'none';
  });
  // Also clear the root itself if it was gated.
  if (root.style.opacity === '0') {
    root.style.opacity = '1';
    root.style.transform = 'none';
  }
}

/** Run an anime.js callback once when the ref's element scrolls into view. */
export function useInViewAnim<T extends HTMLElement>(run: (root: T) => void, threshold = 0.15) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.animDone) return;
    // Reduced motion: show content immediately, never leave opacity:0.
    if (prefersReduced()) {
      try {
        run(el!);
      } catch {
        // ignore — forceShow below guarantees visibility
      } finally {
        forceShow(el);
        el.dataset.animDone = "1";
      }
      return;
    }
    const safeRun = (target: T) => {
      try {
        run(target);
      } catch {
        forceShow(target);
      }
      // Safety net: if anime.js fails silently / never completes (slow mobile
      // JS, interrupted observer), force visibility after a delay.
      window.setTimeout(() => {
        const stuck = target.querySelector('[style*="opacity: 0"]');
        if (stuck) forceShow(target);
      }, 3500);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !el.dataset.animDone) {
            el.dataset.animDone = "1";
            safeRun(el);
            io.disconnect();
          }
        });
      },
      // Trigger on any visibility (0) so tall sections still animate on 390px
      // viewports where a 0.15–0.25 threshold may never be met.
      { threshold: [0, threshold], rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    // Last-resort fallback: if the observer never fires (e.g. element already
    // in view on load but IO delayed), ensure content still appears.
    const fallback = window.setTimeout(() => {
      if (!el.dataset.animDone) {
        const r = el.getBoundingClientRect();
        const inView = r.top < window.innerHeight * 0.95 && r.bottom > 0;
        if (inView) {
          el.dataset.animDone = "1";
          safeRun(el);
          io.disconnect();
        }
      }
    }, 4000);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}
