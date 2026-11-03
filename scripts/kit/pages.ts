import {
  type Board,
  type Role,
  rotate,
  type Shape,
} from "../../src/boards/geometry.ts";

/** A rectangle on the A4 page, in millimetres. */
export interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

// Paper is always white: fixed ink, the same in both site themes (same values as the print palette)
const INK = "#23201b";
const ACCENT = "#8a4d1c";
const DARK_CELL = "#dcd6cb";

// Room left for the title, which Typst sets above (ornate) or below (simple) the board
const SIMPLE_BOX: Box = { x: 25, y: 20, w: 160, h: 240 };
const ORNATE_BOX: Box = { x: 32, y: 68, w: 146, h: 190 };
const MAX_POINT = 2.2;

function n(v: number): number {
  return Math.round(v * 100) / 100;
}

function moved(s: Shape, k: number, dx: number, dy: number): Shape {
  if (s.kind === "rect")
    return {
      ...s,
      x: dx + s.x * k,
      y: dy + s.y * k,
      w: s.w * k,
      h: s.h * k,
      r: s.r * k,
    };
  // Points stay small on small boards, so the pieces still see where the lines meet
  if (s.kind === "circle")
    return {
      ...s,
      cx: dx + s.cx * k,
      cy: dy + s.cy * k,
      r: s.role === "point" ? Math.min(s.r * k, MAX_POINT) : s.r * k,
    };
  return {
    ...s,
    x1: dx + s.x1 * k,
    y1: dy + s.y1 * k,
    x2: dx + s.x2 * k,
    y2: dy + s.y2 * k,
  };
}

/** Scales the board into the box (in mm), standing it upright when that makes it larger. */
export function fitBoard(board: Board, box: Box): Board {
  const scale = (b: Board) => Math.min(box.w / b.width, box.h / b.height);
  const turned = rotate(board);
  const b = scale(turned) > scale(board) * 1.05 ? turned : board;
  const k = scale(b);
  const dx = box.x + (box.w - b.width * k) / 2;
  const dy = box.y + (box.h - b.height * k) / 2;
  return {
    width: b.width * k,
    height: b.height * k,
    shapes: b.shapes.map((s) => moved(s, k, dx, dy)),
  };
}

const LOOK: Record<Role, string> = {
  surface: `fill="none" stroke="${INK}" stroke-width="0.5"`,
  dark: `fill="${DARK_CELL}"`,
  line: `stroke="${INK}" stroke-width="0.45" stroke-linecap="round"`,
  point: `fill="${INK}"`,
  pit: `fill="none" stroke="${INK}" stroke-width="0.4"`,
};

// The ornate board looks carved: a thin second ring inside the surface and every pit
const CARVED = `fill="none" stroke="${INK}" stroke-width="0.2"`;
const CARVE_INSET: Partial<Record<Role, number>> = { surface: 2.2, pit: 1.4 };

function element(s: Shape, look: string, inset = 0): string {
  if (s.kind === "rect")
    return `<rect x="${n(s.x + inset)}" y="${n(s.y + inset)}" width="${n(s.w - 2 * inset)}" height="${n(s.h - 2 * inset)}" rx="${n(Math.max(0, s.r - inset))}" ${look}/>`;
  if (s.kind === "circle")
    return `<circle cx="${n(s.cx)}" cy="${n(s.cy)}" r="${n(s.r - inset)}" ${look}/>`;
  return `<line x1="${n(s.x1)}" y1="${n(s.y1)}" x2="${n(s.x2)}" y2="${n(s.y2)}" ${look}/>`;
}

function drawBoard(board: Board, carved: boolean): string {
  return board.shapes
    .map((s) => {
      const inset = carved ? CARVE_INSET[s.role] : undefined;
      const ring = inset ? element(s, CARVED, inset) : "";
      return element(s, LOOK[s.role]) + ring;
    })
    .join("");
}

function seed(x: number, y: number, deg: number, rx = 1.9, ry = 0.95): string {
  return `<ellipse cx="${n(x)}" cy="${n(y)}" rx="${rx}" ry="${ry}" transform="rotate(${n(deg)} ${n(x)} ${n(y)})" fill="${ACCENT}"/>`;
}

function rosette(x: number, y: number, r = 2.6): string {
  const petals = [0, 45, 90, 135].map((d) => seed(x, y, d, r, n(r * 0.34)));
  return `${petals.join("")}<circle cx="${x}" cy="${y}" r="${n(r * 0.22)}" fill="${ACCENT}"/>`;
}

// Seeds along one side of the border, tilted alternately like a braid
function seedRow(x1: number, y1: number, x2: number, y2: number): string {
  const count = Math.floor(Math.hypot(x2 - x1, y2 - y1) / 5.4);
  const base = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  let out = "";
  for (let i = 0; i <= count; i++) {
    const t = i / count;
    out += seed(
      x1 + (x2 - x1) * t,
      y1 + (y2 - y1) * t,
      base + (i % 2 ? 35 : -35),
    );
  }
  return out;
}

/** The collection's own frame: the same seeds on every game, borrowed from no people's art. */
function frame(): string {
  const c = 15.5;
  const fx = 210 - c;
  const fy = 297 - c;
  let out = "";
  for (const [inset, width] of [
    [10, 0.7],
    [11.4, 0.25],
    [19.6, 0.25],
    [21, 0.6],
  ] as const)
    out += `<rect x="${inset}" y="${inset}" width="${n(210 - inset * 2)}" height="${n(297 - inset * 2)}" fill="none" stroke="${ACCENT}" stroke-width="${width}"/>`;
  out += seedRow(25, c, 185, c) + seedRow(25, fy, 185, fy);
  out += seedRow(c, 25, c, 272) + seedRow(fx, 25, fx, 272);
  for (const [x, y] of [
    [c, c],
    [fx, c],
    [c, fy],
    [fx, fy],
  ] as const)
    out += `<rect x="${n(x - 4.1)}" y="${n(y - 4.1)}" width="8.2" height="8.2" fill="none" stroke="${ACCENT}" stroke-width="0.25"/>${rosette(x, y)}`;
  // Divider under the title
  out += `<line x1="78" y1="58" x2="99" y2="58" stroke="${ACCENT}" stroke-width="0.3"/><line x1="111" y1="58" x2="132" y2="58" stroke="${ACCENT}" stroke-width="0.3"/>${rosette(105, 58, 2.2)}`;
  return out;
}

function page(inner: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm" viewBox="0 0 210 297">${inner}</svg>`;
}

/** Just the board, line only; the title goes underneath. */
export function simplePage(board: Board): string {
  return page(drawBoard(fitBoard(board, SIMPLE_BOX), false));
}

/** Seed frame and carved board; the title goes on top. */
export function ornatePage(board: Board): string {
  return page(frame() + drawBoard(fitBoard(board, ORNATE_BOX), true));
}
