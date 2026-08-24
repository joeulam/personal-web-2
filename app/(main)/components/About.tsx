"use client";

import { animate, stagger } from "animejs";
import { TOOLBOX } from "../lib/constants";
import { Reveal, SectionHead } from "./ui";
import { useInViewAnim } from "./useInViewAnim";

export function About() {
  const aboutRef = useInViewAnim<HTMLDivElement>((root) => {
    const pop = root.querySelector(".about-pop");
    if (pop)
      animate(pop, {
        opacity: [0, 1],
        scale: [0.88, 1],
        rotate: [-4, 0],
        ease: "outBack(1.5)",
        duration: 800,
      });
    animate(root.querySelectorAll(".about-chip"), {
      opacity: [0, 1],
      translateY: [14, 0],
      scale: [0.85, 1],
      ease: "outBack(2)",
      duration: 600,
      delay: stagger(55, { start: 350 }),
    });
  });

  return (
    <section id="about" className="border-t border-rule px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[300px_1fr] md:gap-16">
        <figure ref={aboutRef} className="about-pop max-w-[300px]" style={{ opacity: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/headshot.png"
            alt="Photo of Joey Lam"
            className="aspect-[4/5] w-full border border-rule object-cover"
          />
          <figcaption className="mt-3 font-mono text-xs text-mute">
            Fig. 1 — the maker, Boston
          </figcaption>
        </figure>
        <div>
          <SectionHead title="About" />
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed md:text-lg">
              <p>
                I&apos;m a senior Computer Science and Economics student at Boston University.
                Right now I consult for the Andrew W. Mellon Foundation, where I build and work on full stack development.
              </p>
              <p>
                Off-screen I crochet, grow vegetables, and play table tennis.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {TOOLBOX.map((t) => (
                <li
                  key={t}
                  style={{ opacity: 0 }}
                  className="about-chip cursor-default border border-rule bg-card px-3.5 py-1.5 font-mono text-xs transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
