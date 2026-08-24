"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ title, aside }: { title: string; aside?: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-end justify-between pb-4">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl">{title}</h2>
        </Reveal>
        {aside && (
          <Reveal delay={0.1}>
            <span className="font-mono text-xs text-mute">{aside}</span>
          </Reveal>
        )}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="h-px origin-left bg-rule"
      />
    </div>
  );
}

/** Project screenshot with a gentle scroll-linked drift inside its frame. */
export function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  return (
    <div ref={ref} className="mt-4 aspect-[16/9] w-full overflow-hidden border border-rule">
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        loading="lazy"
        className="h-[112%] w-full object-cover object-top"
      />
    </div>
  );
}
