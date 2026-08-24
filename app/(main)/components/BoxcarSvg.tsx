"use client";

import { axisDisc, f1, iso, isoBox } from "../lib/iso";

/** Outlined tube following a screen-space path (two-stroke ink/face sandwich). */
function InkTube({ d, r, tone = "#EFEDE7" }: { d: string; r: number; tone?: string }) {
  return (
    <>
      <path d={d} fill="none" stroke="#1C1C1A" strokeWidth={r * 2 + 1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke={tone} strokeWidth={r * 2 - 0.8} strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

/**
 * Shaded isometric boxcar — a railroad freight car in exploded view.
 * The roof lifts, the sliding door rolls open, cargo crates rise from
 * inside, and the chassis drops onto its trucks. Each assembly is its own
 * <g> so the anime.js timeline can pull it apart.
 */
export function BoxcarSvg() {
  const INK = "#23252A";
  const sw = { stroke: INK, strokeWidth: 1.1, strokeLinejoin: "round" as const };
  const thin = { stroke: INK, strokeWidth: 0.75, fill: "none" as const };
  const F = (fill: string) => ({ fill, stroke: INK, strokeWidth: 1.1, strokeLinejoin: "round" as const });

  const body = isoBox([0, 0, 30], 280, 110, 120);
  const roof = isoBox([-6, -6, 150], 292, 122, 13);
  const chassis = isoBox([-8, 8, 18], 296, 94, 12);
  const couplerL = isoBox([-24, 30, 20], 18, 50, 14);
  const couplerR = isoBox([286, 30, 20], 18, 50, 14);
  const door = isoBox([90, 110, 40], 100, 7, 110);

  const CRATE_X = [45, 105, 165, 225];
  const crates = CRATE_X.map((cx) => isoBox([cx - 20, 35, 32], 40, 42, 38));
  const TRUCK_X = [62, 218];

  const [shX, shY] = iso(140, 55, -40);

  return (
    <svg viewBox="420 20 570 960" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="alu-t" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F2F4F7" />
          <stop offset="1" stopColor="#D6DBE2" />
        </linearGradient>
        <linearGradient id="alu-l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CBD1D9" />
          <stop offset="1" stopColor="#A6AEBA" />
        </linearGradient>
        <linearGradient id="alu-r" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9CA4B0" />
          <stop offset="1" stopColor="#7B8492" />
        </linearGradient>
        <linearGradient id="red-t" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C96148" />
          <stop offset="1" stopColor="#A93B26" />
        </linearGradient>
        <linearGradient id="red-l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B8462F" />
          <stop offset="1" stopColor="#96351F" />
        </linearGradient>
        <linearGradient id="red-r" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#832C16" />
          <stop offset="1" stopColor="#63200F" />
        </linearGradient>
        <linearGradient id="iron-t" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8A9099" />
          <stop offset="1" stopColor="#6B717A" />
        </linearGradient>
        <linearGradient id="iron-l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#696F78" />
          <stop offset="1" stopColor="#52575E" />
        </linearGradient>
        <linearGradient id="iron-r" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#545A62" />
          <stop offset="1" stopColor="#3F444B" />
        </linearGradient>
        <linearGradient id="wood-t" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#DCC08A" />
          <stop offset="1" stopColor="#C6A468" />
        </linearGradient>
        <linearGradient id="wood-l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C6A468" />
          <stop offset="1" stopColor="#AE8C55" />
        </linearGradient>
        <linearGradient id="wood-r" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#AE8C55" />
          <stop offset="1" stopColor="#937445" />
        </linearGradient>
        <radialGradient id="ground-shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#23252A" stopOpacity="0.2" />
          <stop offset="0.75" stopColor="#23252A" stopOpacity="0.08" />
          <stop offset="1" stopColor="#23252A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx={f1(shX)} cy={f1(shY)} rx={230} ry={48} fill="url(#ground-shadow)" />

      {/* ── wheel trucks ────────────────────────────────── */}
      <g data-part="pan" className="engine-g-pan" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        {TRUCK_X.map((cx) => {
          const frame = isoBox([cx - 30, 24, 4], 60, 62, 14);
          const bolster = isoBox([cx - 9, 45, 14], 18, 20, 4);
          return (
            <g key={cx}>
              {/* bolster — ties the truck to the car */}
              <path d={bolster.right} {...F("#545A62")} />
              <path d={bolster.left} {...F("#696F78")} />
              <path d={bolster.top} {...F("#8A9099")} />
              {/* side frame */}
              <path d={frame.right} {...F("url(#iron-r)")} />
              <path d={frame.left} {...F("url(#iron-l)")} />
              <path d={frame.top} {...F("url(#iron-t)")} />
              {/* leaf springs + axle boxes */}
              {[cx - 16, cx + 16].map((wx) => (
                <g key={wx}>
                  {[6, 9, 12].map((sz) => (
                    <line
                      key={sz}
                      x1={f1(iso(wx - 8, 86, sz)[0])}
                      y1={f1(iso(wx - 8, 86, sz)[1])}
                      x2={f1(iso(wx + 8, 86, sz)[0])}
                      y2={f1(iso(wx + 8, 86, sz)[1])}
                      stroke="#3F444B"
                      strokeWidth={2.6}
                      strokeLinecap="round"
                    />
                  ))}
                  {(() => {
                    const box = isoBox([wx - 5, 88, -16], 10, 8, 18);
                    return (
                      <g>
                        <path d={box.right} {...F("#3F444B")} />
                        <path d={box.left} {...F("#545A62")} />
                        <path d={box.top} {...F("#6B717A")} />
                      </g>
                    );
                  })()}
                  {/* axle stub into the wheel */}
                  <InkTube d={`M${f1(iso(wx, 96, -13)[0])},${f1(iso(wx, 96, -13)[1])} L${f1(iso(wx, 104, -13)[0])},${f1(iso(wx, 104, -13)[1])}`} r={3.5} tone="#545A62" />
                </g>
              ))}
              {/* wheels — tire, plate face, bolt ring, hub */}
              {[cx - 16, cx + 16].map((wx) => {
                const w = axisDisc(wx, 104, -13, 17);
                return (
                  <g key={`w${wx}`}>
                    <ellipse cx={f1(w.X)} cy={f1(w.Y)} rx={f1(w.rx + 1.5)} ry={f1(w.ry + 1.5)} transform={`rotate(-28 ${f1(w.X)} ${f1(w.Y)})`} {...F("#2E3136")} />
                    <ellipse cx={f1(w.X)} cy={f1(w.Y)} rx={f1(w.rx)} ry={f1(w.ry)} transform={`rotate(-28 ${f1(w.X)} ${f1(w.Y)})`} {...F("#575D66")} />
                    <ellipse cx={f1(w.X)} cy={f1(w.Y)} rx={f1(w.rx * 0.62)} ry={f1(w.ry * 0.62)} transform={`rotate(-28 ${f1(w.X)} ${f1(w.Y)})`} {...thin} />
                    {[0, 60, 120, 180, 240, 300].map((a) => {
                      const rad = (a * Math.PI) / 180;
                      return (
                        <circle
                          key={a}
                          cx={f1(w.X + w.rx * 0.45 * Math.cos(rad))}
                          cy={f1(w.Y + w.ry * 0.45 * Math.sin(rad))}
                          r={1.1}
                          fill={INK}
                          stroke="none"
                        />
                      );
                    })}
                    <circle cx={f1(w.X)} cy={f1(w.Y)} r={2.6} {...F("#C9CFD8")} />
                  </g>
                );
              })}
            </g>
          );
        })}
      </g>

      {/* ── chassis + couplers ──────────────────────────── */}
      <g data-part="crank" className="engine-g-crank" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <path d={chassis.right} {...F("url(#iron-r)")} />
        <path d={chassis.left} {...F("url(#iron-l)")} />
        <path d={chassis.top} {...F("url(#iron-t)")} />
        <path d={couplerL.right} {...F("url(#iron-r)")} />
        <path d={couplerL.left} {...F("url(#iron-l)")} />
        <path d={couplerL.top} {...F("url(#iron-t)")} />
        <path d={couplerR.right} {...F("url(#iron-r)")} />
        <path d={couplerR.left} {...F("url(#iron-l)")} />
        <path d={couplerR.top} {...F("url(#iron-t)")} />
        {/* coupler heads */}
        <circle cx={f1(iso(-26, 55, 27)[0])} cy={f1(iso(-26, 55, 27)[1])} r={3.4} {...F("#3F444B")} />
        <circle cx={f1(iso(306, 55, 27)[0])} cy={f1(iso(306, 55, 27)[1])} r={3.4} {...F("#3F444B")} />
        {/* truss rod */}
        <line x1={f1(iso(0, 100, 16)[0])} y1={f1(iso(0, 100, 16)[1])} x2={f1(iso(280, 100, 16)[0])} y2={f1(iso(280, 100, 16)[1])} {...thin} opacity={0.7} />
      </g>

      {/* ── cargo crates (rise out of the open door) ────── */}
      {crates.map((c, i) => (
        <g key={i} data-part={`cyl${i}`} className={`engine-g-cyl${i}`} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <path d={c.right} {...F("url(#wood-r)")} />
          <path d={c.left} {...F("url(#wood-l)")} />
          <path d={c.top} {...F("url(#wood-t)")} />
          {[44, 56].map((pz) => (
            <g key={pz}>
              <line x1={f1(iso(CRATE_X[i] - 20, 77, pz)[0])} y1={f1(iso(CRATE_X[i] - 20, 77, pz)[1])} x2={f1(iso(CRATE_X[i] + 20, 77, pz)[0])} y2={f1(iso(CRATE_X[i] + 20, 77, pz)[1])} {...thin} opacity={0.7} />
              <line x1={f1(iso(CRATE_X[i] + 20, 39, pz)[0])} y1={f1(iso(CRATE_X[i] + 20, 39, pz)[1])} x2={f1(iso(CRATE_X[i] + 20, 73, pz)[0])} y2={f1(iso(CRATE_X[i] + 20, 73, pz)[1])} {...thin} opacity={0.7} />
            </g>
          ))}
        </g>
      ))}

      {/* ── car body ────────────────────────────────────── */}
      <g data-part="block" className="engine-g-block">
        <path d={body.right} {...F("url(#red-r)")} />
        <path d={body.left} {...F("url(#red-l)")} />
        <path d={body.top} {...F("url(#red-t)")} />
        {/* door opening — dark interior */}
        {(() => {
          const pts = [iso(88, 110, 150), iso(192, 110, 150), iso(192, 110, 38), iso(88, 110, 38)]
            .map((pt) => pt.map(f1).join(","))
            .join(" ");
          return <polygon points={pts} {...F("#2E3136")} />;
        })()}
        {(() => {
          const pts = [iso(92, 110, 146), iso(188, 110, 146), iso(188, 110, 42), iso(92, 110, 42)]
            .map((pt) => pt.map(f1).join(","))
            .join(" ");
          return <polygon points={pts} fill="#232529" stroke="none" />;
        })()}
        {/* panel ribs */}
        {[20, 35, 50, 65, 205, 220, 235, 250, 265].map((rx) => (
          <line key={rx} x1={f1(iso(rx, 110, 146)[0])} y1={f1(iso(rx, 110, 146)[1])} x2={f1(iso(rx, 110, 34)[0])} y2={f1(iso(rx, 110, 34)[1])} stroke="#7E2412" strokeWidth={0.9} opacity={0.65} />
        ))}
        {/* side sill */}
        <line x1={f1(iso(0, 110, 36)[0])} y1={f1(iso(0, 110, 36)[1])} x2={f1(iso(280, 110, 36)[0])} y2={f1(iso(280, 110, 36)[1])} stroke="#6E2412" strokeWidth={1.4} />
        {/* door track */}
        <line x1={f1(iso(82, 113, 151)[0])} y1={f1(iso(82, 113, 151)[1])} x2={f1(iso(198, 113, 151)[0])} y2={f1(iso(198, 113, 151)[1])} {...thin} />
        {/* end ladder */}
        {[30, 54].map((ly) => (
          <line key={ly} x1={f1(iso(280, ly, 142)[0])} y1={f1(iso(280, ly, 142)[1])} x2={f1(iso(280, ly, 42)[0])} y2={f1(iso(280, ly, 42)[1])} {...thin} />
        ))}
        {[54, 66, 78, 90, 102, 114, 126, 138].map((rz) => (
          <line key={rz} x1={f1(iso(280, 30, rz)[0])} y1={f1(iso(280, 30, rz)[1])} x2={f1(iso(280, 54, rz)[0])} y2={f1(iso(280, 54, rz)[1])} {...thin} />
        ))}
        {/* end report marks */}
        <text
          transform={`matrix(0.866 -0.5 0 1 ${f1(iso(280.5, 58, 72)[0])} ${f1(iso(280.5, 58, 72)[1])})`}
          fontFamily="monospace"
          fontSize={13}
          letterSpacing={2}
          fill="#EFE6D2"
          opacity={0.8}
        >
          4021
        </text>
      </g>

      {/* ── roof ────────────────────────────────────────── */}
      <g data-part="head" className="engine-g-head" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <path d={roof.right} {...F("url(#alu-r)")} />
        <path d={roof.left} {...F("url(#alu-l)")} />
        <path d={roof.top} {...F("url(#alu-t)")} />
        <line x1={f1(iso(-2, 55, 163)[0])} y1={f1(iso(-2, 55, 163)[1])} x2={f1(iso(282, 55, 163)[0])} y2={f1(iso(282, 55, 163)[1])} {...thin} opacity={0.6} />
      </g>

      {/* ── roof walk removed — timeline hook kept ──────── */}
      <g data-part="gasket" className="engine-g-gasket" />

      {/* ── sliding door ────────────────────────────────── */}
      <g data-part="fw" className="engine-g-fw" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <path d={door.right} {...F("url(#red-r)")} />
        <path d={door.left} {...F("url(#red-l)")} />
        <path d={door.top} {...F("url(#red-t)")} />
        {[100, 116, 132, 148, 164, 180].map((dx) => (
          <line key={dx} x1={f1(iso(dx, 117, 144)[0])} y1={f1(iso(dx, 117, 144)[1])} x2={f1(iso(dx, 117, 46)[0])} y2={f1(iso(dx, 117, 46)[1])} stroke="#7E2412" strokeWidth={0.9} opacity={0.8} />
        ))}
        <line x1={f1(iso(92, 117, 144)[0])} y1={f1(iso(92, 117, 144)[1])} x2={f1(iso(188, 117, 144)[0])} y2={f1(iso(188, 117, 144)[1])} stroke="#7E2412" strokeWidth={1.2} />
        <line x1={f1(iso(92, 117, 46)[0])} y1={f1(iso(92, 117, 46)[1])} x2={f1(iso(188, 117, 46)[0])} y2={f1(iso(188, 117, 46)[1])} stroke="#7E2412" strokeWidth={1.2} />
        {/* handle */}
        <line x1={f1(iso(184, 117.4, 78)[0])} y1={f1(iso(184, 117.4, 78)[1])} x2={f1(iso(184, 117.4, 98)[0])} y2={f1(iso(184, 117.4, 98)[1])} {...sw} />
        <circle cx={f1(iso(184, 117.4, 100)[0])} cy={f1(iso(184, 117.4, 100)[1])} r={1.8} fill={INK} stroke="none" />
        {/* stencil */}
        <text
          transform={`matrix(0.866 0.5 0 1 ${f1(iso(103, 117.3, 92)[0])} ${f1(iso(103, 117.3, 92)[1])})`}
          fontFamily="monospace"
          fontSize={15}
          letterSpacing={2.5}
          fill="#EFE6D2"
          opacity={0.92}
        >
          JL 777
        </text>
      </g>

    </svg>
  );
}
