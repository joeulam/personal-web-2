"use client";

import { animate, stagger } from "animejs";
import { motion } from "motion/react";
import { experience } from "../project";
import { Reveal, SectionHead } from "./ui";
import { useInViewAnim } from "./useInViewAnim";

export function Experience() {
  const listRef = useInViewAnim<HTMLDivElement>((root) => {
    animate(root.querySelectorAll(".xp-row"), {
      opacity: [0, 1],
      translateX: [-36, 0],
      ease: "outQuart",
      duration: 700,
      delay: stagger(130),
    });
  });

  return (
    <section id="experience" className="border-t border-rule px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead title="Experience" />
        <Reveal>
          <p className="-mt-4 mb-10 max-w-xl text-base leading-relaxed text-mute md:mb-14">
            Past Experiences
          </p>
        </Reveal>
        <div ref={listRef}>
          {experience.map((job, i) => (
            <div key={`${job.companyTitle}-${job.date}`}>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="h-px origin-left bg-rule"
              />
              <article
                style={{ opacity: 0 }}
                className="xp-row grid gap-2 py-7 md:grid-cols-[130px_1fr_1.4fr] md:gap-8 md:py-9"
              >
                <span className="font-mono text-xs leading-6 text-mute">{job.date}</span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl">{job.companyTitle}</h3>
                  <p className="mt-1 text-sm text-accent">{job.jobTitle}</p>
                </div>
                <ul className="space-y-3">
                  {job.responsibility.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-mute">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-px origin-left bg-rule"
          />
        </div>
        <Reveal>
          <a href="/cv.pdf" download="Joey Lam CV" className="text-link mt-8 inline-block text-sm">
            Download full CV (PDF) ↓
          </a>
        </Reveal>
      </div>
    </section>
  );
}
