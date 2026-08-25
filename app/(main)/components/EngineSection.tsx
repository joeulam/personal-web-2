"use client";

import { createTimeline, onScroll, stagger } from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { BoxcarSvg } from "./BoxcarSvg";
import { CALLOUT_ANCHORS, EXD } from "../lib/iso";
import { ROLES } from "../lib/constants";

/** Vertical slot (% of stage height) for each role callout, alternating margins. */
const LABEL_SLOTS: Record<number, string> = {
  0: "8%",
  1: "27%",
  2: "40%",
  3: "55%",
  4: "72%",
};

/**
 * The exploded boxcar - a scroll-scrubbed anime.js sequence (like the one on
 * animejs.com): an assembled boxcar idles at center, then the roof lifts, the
 * door slides open and the cargo rises - each part landing as one of Joey's roles.
 */
export function EngineSection() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const check = () =>
      setEnabled(mq.matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    check();
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  const engineWrapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<SVGSVGElement>(null);
  const labelRefs = useRef<Array<HTMLDivElement | null>>([]);

  /** Draw/redraw the 45°→horizontal leaders between parts and margin labels. */
  const drawLeaders = useCallback(() => {
    const stage = stageRef.current;
    const engineSvg = engineWrapRef.current?.querySelector("svg");
    const overlay = overlayRef.current;
    if (!stage || !engineSvg || !overlay) return;

    const er = engineSvg.getBoundingClientRect();
    const sr = stage.getBoundingClientRect();
    const vb = { x: 420, y: 20, w: 570, h: 960 };
    const sc = Math.min(er.width / vb.w, er.height / vb.h);
    const ox = er.left + (er.width - vb.w * sc) / 2;
    const oy = er.top + (er.height - vb.h * sc) / 2;

    CALLOUT_ANCHORS.forEach((a, i) => {
      const label = labelRefs.current[i];
      const path = overlay.querySelector(`.callout-line[data-i="${i}"]`);
      const dot = overlay.querySelector(`.callout-dot[data-i="${i}"]`);
      if (!label || !path || !dot) return;
      const lr = label.getBoundingClientRect();
      const ax = ox + (a.ax - vb.x) * sc - sr.left;
      const ay = oy + (a.ay - vb.y) * sc - sr.top;
      const lx = i % 2 === 0 ? lr.right - sr.left - 8 : lr.left - sr.left + 8;
      const ly = lr.top - sr.top + 46;
      // 30° isometric stub (parallel to the car edges), then horizontal baseline run
      const side = i % 2 === 0 ? -1 : 1;
      const dy = ly - ay;
      const mx = ax + side * Math.abs(dy) * Math.tan(Math.PI / 3);
      path.setAttribute(
        "d",
        `M${ax.toFixed(1)},${ay.toFixed(1)} L${mx.toFixed(1)},${ly.toFixed(1)} L${lx.toFixed(1)},${ly.toFixed(1)}`
      );
      dot.setAttribute("cx", ax.toFixed(1));
      dot.setAttribute("cy", ay.toFixed(1));
    });
  }, []);

  useEffect(() => {
    if (!enabled) return;
    drawLeaders();
    window.addEventListener("resize", drawLeaders);
    return () => window.removeEventListener("resize", drawLeaders);
  }, [enabled, drawLeaders]);

  useEffect(() => {
    if (!enabled || !runwayRef.current || !stageRef.current) return;
    if (stageRef.current.dataset.engineDone) return;
    stageRef.current.dataset.engineDone = "1";
    drawLeaders();

    const stage = stageRef.current;
    const g = (name: string) => stage!.querySelector(`.engine-g-${name}`)!;
    const caps = Array.from(stage.querySelectorAll<HTMLElement>(".engine-cap"));
    const cap1 = caps[0];

    const tl = createTimeline({
      defaults: { ease: "inOutQuad" },
      autoplay: onScroll({
        target: runwayRef.current,
        enter: "top top",
        leave: "bottom bottom",
        sync: true,
      }),
    });

    tl.add(cap1, { opacity: [0, 1], duration: 400 }, 150)
      .add(cap1, { opacity: [1, 0], duration: 350 }, 1050)
      // the pull apart — each layer travels along its assembly axis
      .add(g("head"), { translateX: [0, EXD.head[0]], translateY: [0, EXD.head[1]], duration: 1400 }, 900)
      .add(g("gasket"), { translateX: [0, 0], translateY: [0, EXD.gasket[1]], duration: 1300 }, 960)
      .add(g("cyl0"), { translateX: [EXD.cyl[0][0], EXD.cyl[0][0]], translateY: [0, EXD.cyl[0][1]], duration: 1300 }, 1000)
      .add(g("cyl1"), { translateX: [EXD.cyl[1][0], EXD.cyl[1][0]], translateY: [0, EXD.cyl[1][1]], duration: 1300 }, 1060)
      .add(g("cyl2"), { translateX: [EXD.cyl[2][0], EXD.cyl[2][0]], translateY: [0, EXD.cyl[2][1]], duration: 1300 }, 1120)
      .add(g("cyl3"), { translateX: [EXD.cyl[3][0], EXD.cyl[3][0]], translateY: [0, EXD.cyl[3][1]], duration: 1300 }, 1180)
      .add(g("crank"), { translateY: [0, EXD.crank[1]], duration: 1300 }, 1000)
      .add(g("pan"), { translateY: [0, EXD.pan[1]], duration: 1200 }, 1150)
      .add(
        g("fw"),
        {
          translateX: [0, EXD.fw[0]],
          translateY: [0, EXD.fw[1]],
          duration: 1500,
          ease: "inOutQuad",
        },
        950
      )
      .add(g("block"), { opacity: [1, 0.22], duration: 900 }, 1350);

    const calloutLines = Array.from(stage.querySelectorAll<SVGPathElement>(".callout-line"));
    const calloutDots = Array.from(stage.querySelectorAll<SVGCircleElement>(".callout-dot"));
    const roleLabels = Array.from(stage.querySelectorAll<HTMLElement>(".role-label"));
    const leftLabels = roleLabels.filter((_, i) => i % 2 === 0);
    const rightLabels = roleLabels.filter((_, i) => i % 2 === 1);

    tl.add(
      calloutLines,
      {
        strokeDashoffset: [1, 0],
        duration: 600,
        delay: stagger(170),
        ease: "outQuart",
      },
      2250
    )
      .add(
        calloutDots,
        {
          opacity: [0, 1],
          scale: [0.3, 1],
          duration: 350,
          delay: stagger(170),
          ease: "outBack(2)",
        },
        2500
      )
      .add(
        leftLabels,
        {
          opacity: [0, 1],
          translateX: [-24, 0],
          duration: 650,
          delay: stagger(180),
          ease: "outQuart",
        },
        2600
      )
      .add(
        rightLabels,
        {
          opacity: [0, 1],
          translateX: [24, 0],
          duration: 650,
          delay: stagger(180),
          ease: "outQuart",
        },
        2600
      );
  }, [enabled, drawLeaders]);

  // Compact static fallback for mobile / reduced motion.
  if (!enabled) {
    return (
      <section className="border-t border-rule px-5 py-16 lg:hidden">
        <div className="mx-auto max-w-[520px]">
          <h2 className="font-display text-3xl">The boxcar</h2>
          <BoxcarSvg />
        </div>
      </section>
    );
  }

  return (
    <div ref={runwayRef} className="relative hidden h-[340vh] lg:block">
      <div
        ref={stageRef}
        className="sticky top-14 flex h-[calc(100vh-3.5rem)] flex-col overflow-hidden md:top-16 md:h-[calc(100vh-4rem)]"
      >
        <div className="relative min-h-0 flex-1">
          {/* strict three-column layout: margins for callouts, isolated center canvas */}
          <div className="absolute inset-0 grid grid-cols-[260px_1fr_260px]">
            {/* column 1 — left callouts */}
            <div className="relative z-10 h-full">
              {[0, 2, 4].map((idx) => (
                <RoleLabel key={ROLES[idx].key} role={ROLES[idx]} idx={idx} slot={LABEL_SLOTS[idx]} labelRefs={labelRefs} />
              ))}
            </div>

            {/* column 2 — isolated engine canvas */}
            <div ref={engineWrapRef} className="relative h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <BoxcarSvg />
              </div>
            </div>

            {/* column 3 — right callouts */}
            <div className="relative z-10 h-full">
              {[1, 3].map((idx) => (
                <RoleLabel key={ROLES[idx].key} role={ROLES[idx]} idx={idx} slot={LABEL_SLOTS[idx]} labelRefs={labelRefs} />
              ))}
            </div>
          </div>

          {/* leader-line overlay */}
          <svg
            ref={overlayRef}
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
            fill="none"
          >
            {CALLOUT_ANCHORS.map((_, i) => (
              <g key={i}>
                <path
                  className="callout-line"
                  data-i={i}
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1}
                  stroke="#1C1C1A"
                  strokeOpacity={0.55}
                  strokeWidth={1}
                />
                <circle
                  className="callout-dot"
                  data-i={i}
                  r={3.5}
                  fill="#E9E6E0"
                  stroke="#1C1C1A"
                  strokeWidth={1}
                  opacity={0}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

/** One margin callout card describing the role a pulled-apart part represents. */
function RoleLabel({
  role,
  idx,
  slot,
  labelRefs,
}: {
  role: (typeof ROLES)[number];
  idx: number;
  slot: string;
  labelRefs: React.MutableRefObject<Array<HTMLDivElement | null>>;
}) {
  return (
    <div
      ref={(el) => {
        labelRefs.current[idx] = el;
      }}
      data-side={role.side}
      style={{ opacity: 0, top: slot }}
      className={`role-label absolute flex w-[240px] flex-col gap-1 ${
        role.side === "L" ? "right-0 text-right" : "left-0 text-left"
      }`}
    >
      <span className="font-mono text-xs tracking-[0.08em] text-mute">{role.date}</span>
      <span className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
        {role.company}
      </span>
      <span className="font-display text-[26px] font-semibold leading-tight">{role.role}</span>
      {role.blurbLines.map((b, j) => (
        <span key={j} className="font-mono text-[11px] leading-relaxed text-mute">
          {b}
        </span>
      ))}
    </div>
  );
}
