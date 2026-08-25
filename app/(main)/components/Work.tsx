"use client";

import { animate, stagger } from "animejs";
import { FEATURED } from "../lib/constants";
import { data } from "../project";
import { ParallaxImage, Reveal, SectionHead } from "./ui";
import { useInViewAnim } from "./useInViewAnim";

export function Work() {
  const featured = data.filter((p) => FEATURED.includes(p.title));
  const gridRef = useInViewAnim<HTMLDivElement>((root) => {
    animate(root.querySelectorAll(".work-card"), {
      opacity: [0, 1],
      translateY: [56, 0],
      scale: [0.92, 1],
      ease: "outBack(1.4)",
      duration: 850,
      delay: stagger(80, { start: 150 }),
    });
  });

  return (
    <section id="work" className="border-t border-rule px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1200px]" ref={gridRef}>
        <SectionHead title="Selected work" aside={`${featured.length} of ${data.length} filed`} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 md:gap-6 lg:gap-7">
          {featured.map((item, i) => {
            const live = !!item.websiteURL;
            return (
              <article
                key={item.title}
                style={{ opacity: 0 }}
                className="work-card group flex h-full flex-col bg-card border border-rule p-6 shadow-card transition-shadow duration-300 hover:shadow-lift md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="call-no">JL·{String(i + 1).padStart(3, "0")}</span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-mute">
                    <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-accent" : "bg-mute"}`} />
                    {live ? "Live" : "In progress"}
                  </span>
                </div>
                <ParallaxImage src={item.image} alt={item.title} />
                <h3 className="mt-5 font-display text-2xl md:text-[1.7rem]">{item.title}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-mute">
                  {item.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-rule pt-4">
                  <span className="font-mono text-[11px] leading-snug text-mute">
                    {item.techStack.split(", ").slice(0, 3).join(" · ")}
                  </span>
                  <span className="flex gap-4 text-sm text-nowrap">
                    {item.gitURL && (
                      <a href={item.gitURL} target="_blank" rel="noopener noreferrer" className="text-link">
                        Code ↗
                      </a>
                    )}
                    {live && (
                      <a href={item.websiteURL} target="_blank" rel="noopener noreferrer" className="text-link">
                        Visit ↗
                      </a>
                    )}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
        <Reveal>
          <p className="mt-10 text-sm text-mute">
            The rest live on{" "}
            <a
              href="https://github.com/joeulam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-ink"
            >
              GitHub ↗
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
