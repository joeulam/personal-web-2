/* ── isometric projection helpers (CAD axonometric) ─────────────────────── */

const ISO_OX = 600;
const ISO_OY = 380;
const C30 = 0.8660254;
const S30 = 0.5;

export function iso(x: number, y: number, z: number): [number, number] {
  return [ISO_OX + (x - y) * C30, ISO_OY + (x + y) * S30 - z];
}

export const f1 = (n: number) => n.toFixed(1);

export type O3 = [number, number, number];

/** The three viewer-facing faces of an axonometric box. */
export function isoBox(o: O3, a: number, b: number, c: number) {
  const p = (dx: number, dy: number, dz: number) => {
    const [X, Y] = iso(o[0] + dx, o[1] + dy, o[2] + dz);
    return `${f1(X)},${f1(Y)}`;
  };
  return {
    top: `M${p(0, 0, c)} L${p(a, 0, c)} L${p(a, b, c)} L${p(0, b, c)} Z`,
    right: `M${p(a, 0, c)} L${p(a, b, c)} L${p(a, b, 0)} L${p(a, 0, 0)} Z`,
    left: `M${p(0, b, c)} L${p(a, b, c)} L${p(a, b, 0)} L${p(0, b, 0)} Z`,
  };
}

/** Disc whose face points along the ex axis (flywheel / crank caps / wheels). */
export function axisDisc(cx: number, cy: number, cz: number, r: number) {
  const [X, Y] = iso(cx, cy, cz);
  return { X, Y, rx: r * 0.62, ry: r };
}

/* ── exploded-state constants (shared by animation + callout anchors) ── */
export const EXD = {
  head: [0, -185],
  gasket: [0, -150],
  cyl: [
    [-14, -150],
    [6, -172],
    [-8, -160],
    [14, -186],
  ],
  crank: [0, 150],
  pan: [0, 172],
  fw: [185, 0],
} as const;

/** Anchors (engine-viewBox user coords, exploded state) for the overlay callouts. */
export const CALLOUT_ANCHORS = (() => {
  // anchors sit on silhouette corners/edges facing their label so the
  // 45° leader stubs exit the drawing immediately instead of crossing it
  const roofPeak = iso(-6, -6, 163);
  const crateEdge = iso(245, 40, 70);
  const chassisCorner = iso(-8, 102, 30);
  const doorEdge = iso(190, 113, 100);

  return [
    { ax: roofPeak[0] + EXD.head[0], ay: roofPeak[1] + EXD.head[1] },
    { ax: crateEdge[0] + EXD.cyl[3][0], ay: crateEdge[1] + EXD.cyl[3][1] },
    { ax: chassisCorner[0] + EXD.crank[0], ay: chassisCorner[1] + EXD.crank[1] },
    { ax: doorEdge[0] + EXD.fw[0], ay: doorEdge[1] + EXD.fw[1] },
  ];
})();
