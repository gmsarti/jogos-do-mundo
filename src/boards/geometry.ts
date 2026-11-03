import type { Diagram } from "../types.ts";

/** What a shape is on the board; each role has one look (screen tokens or paper ink). */
export type Role = "surface" | "line" | "point" | "pit" | "dark";

export type Shape =
  | {
      kind: "rect";
      role: Role;
      x: number;
      y: number;
      w: number;
      h: number;
      r: number;
    }
  | { kind: "circle"; role: Role; cx: number; cy: number; r: number }
  | {
      kind: "line";
      role: Role;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };

/** Shapes in board units (10 per cell, pit or point gap), surface first. */
export interface Board {
  width: number;
  height: number;
  shapes: Shape[];
}

const STEP = 10;

function surface(width: number, height: number, r: number): Shape {
  return { kind: "rect", role: "surface", x: 0, y: 0, w: width, h: height, r };
}

function line(x1: number, y1: number, x2: number, y2: number): Shape {
  return { kind: "line", role: "line", x1, y1, x2, y2 };
}

function point(cx: number, cy: number): Shape {
  return { kind: "circle", role: "point", cx, cy, r: 1.2 };
}

function grid(rows: number, cols: number, checkered: boolean): Board {
  const m = 3;
  const width = cols * STEP + 2 * m;
  const height = rows * STEP + 2 * m;
  const shapes = [surface(width, height, 2)];
  // Chess convention: the bottom-left cell is dark
  for (let r = 0; checkered && r < rows; r++)
    for (let c = 0; c < cols; c++)
      if ((rows - 1 - r + c) % 2 === 0)
        shapes.push({
          kind: "rect",
          role: "dark",
          x: m + c * STEP,
          y: m + r * STEP,
          w: STEP,
          h: STEP,
          r: 0,
        });
  for (let r = 0; r <= rows; r++)
    shapes.push(line(m, m + r * STEP, width - m, m + r * STEP));
  for (let c = 0; c <= cols; c++)
    shapes.push(line(m + c * STEP, m, m + c * STEP, height - m));
  return { width, height, shapes };
}

/** Intersections joined by lines; `alternate` gives the alquerque pattern. */
function lattice(
  rows: number,
  cols: number,
  diagonals: "alternate" | "main" | "none",
  dots: boolean,
): Board {
  const m = 6;
  const width = (cols - 1) * STEP + 2 * m;
  const height = (rows - 1) * STEP + 2 * m;
  const at = (i: number) => m + i * STEP;
  const shapes = [surface(width, height, 3)];
  for (let r = 0; r < rows; r++) shapes.push(line(m, at(r), width - m, at(r)));
  for (let c = 0; c < cols; c++) shapes.push(line(at(c), m, at(c), height - m));
  if (diagonals === "main") {
    shapes.push(line(m, m, width - m, height - m));
    shapes.push(line(width - m, m, m, height - m));
  }
  for (let r = 0; diagonals === "alternate" && r < rows - 1; r++)
    for (let c = 0; c < cols - 1; c++)
      shapes.push(
        (r + c) % 2 === 0
          ? line(at(c), at(r), at(c + 1), at(r + 1))
          : line(at(c + 1), at(r), at(c), at(r + 1)),
      );
  for (let r = 0; dots && r < rows; r++)
    for (let c = 0; c < cols; c++) shapes.push(point(at(c), at(r)));
  return { width, height, shapes };
}

function pits(rows: number, cols: number, stores: 0 | 2): Board {
  const m = 5;
  const side = stores ? STEP : 0;
  const width = cols * STEP + 2 * m + 2 * side;
  const height = rows * STEP + 2 * m;
  const shapes = [surface(width, height, 6)];
  for (const x of stores ? [m + 1, width - m - 9] : [])
    shapes.push({
      kind: "rect",
      role: "pit",
      x,
      y: m + 1,
      w: 8,
      h: rows * STEP - 2,
      r: 4,
    });
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      shapes.push({
        kind: "circle",
        role: "pit",
        cx: m + side + STEP / 2 + c * STEP,
        cy: m + STEP / 2 + r * STEP,
        r: 4,
      });
  return { width, height, shapes };
}

/** Three concentric squares joined at the midpoints (morris boards). */
function mill(diagonals: boolean): Board {
  const m = 6;
  const size = 6 * STEP + 2 * m;
  const mid = size / 2;
  const inner = m + 2 * STEP;
  const shapes = [surface(size, size, 3)];
  const squares = [0, 1, 2].map((i) => [m + i * STEP, size - m - i * STEP]);
  for (const [a = 0, b = 0] of squares)
    shapes.push(line(a, a, b, a), line(b, a, b, b), line(b, b, a, b));
  for (const [a = 0, b = 0] of squares) shapes.push(line(a, b, a, a));
  shapes.push(
    line(mid, m, mid, inner),
    line(mid, size - inner, mid, size - m),
    line(m, mid, inner, mid),
    line(size - inner, mid, size - m, mid),
  );
  if (diagonals)
    shapes.push(
      line(m, m, inner, inner),
      line(size - m, m, size - inner, inner),
      line(m, size - m, inner, size - inner),
      line(size - m, size - m, size - inner, size - inner),
    );
  for (const [a = 0, b = 0] of squares)
    for (const [x, y] of [
      [a, a],
      [mid, a],
      [b, a],
      [b, mid],
      [b, b],
      [mid, b],
      [a, b],
      [a, mid],
    ] as const)
      shapes.push(point(x, y));
  return { width: size, height: size, shapes };
}

export function boardShapes(d: Diagram): Board {
  switch (d.type) {
    case "grid":
      return grid(d.rows, d.cols, d.checkered ?? false);
    case "lines":
      return lattice(d.rows, d.cols, "none", false);
    case "points":
      return lattice(d.rows, d.cols, d.diagonals, true);
    case "pits":
      return pits(d.rows, d.cols, d.stores);
    case "mill":
      return mill(d.diagonals);
  }
}

/** Turns the board a quarter clockwise: (x, y) → (height − y, x). */
export function rotate(board: Board): Board {
  const h = board.height;
  const shapes = board.shapes.map((s): Shape => {
    if (s.kind === "rect")
      return { ...s, x: h - s.y - s.h, y: s.x, w: s.h, h: s.w };
    if (s.kind === "circle") return { ...s, cx: h - s.cy, cy: s.cx };
    return { ...s, x1: h - s.y1, y1: s.x1, x2: h - s.y2, y2: s.x2 };
  });
  return { width: board.height, height: board.width, shapes };
}
