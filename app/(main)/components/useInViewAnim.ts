"use client";

import { useEffect, useRef } from "react";

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Run an anime.js callback once when the ref's element scrolls into view. */
export function useInViewAnim<T extends HTMLElement>(run: (root: T) => void, threshold = 0.15) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.animDone) return;
    if (prefersReduced()) {
      run(el!);
      el.dataset.animDone = "1";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !el.dataset.animDone) {
            el.dataset.animDone = "1";
            run(el);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}
