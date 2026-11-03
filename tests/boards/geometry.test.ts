import { describe, expect, test } from "vitest";
import {
  type Board,
  boardShapes,
  rotate,
  type Shape,
} from "../../src/boards/geometry.ts";
import type { Diagram } from "../../src/types.ts";

function count(board: Board, role: Shape["role"]): number {
  return board.shapes.filter((s) => s.role === role).length;
}

function corners(s: Shape): [number, number][] {
  if (s.kind === "rect")
    return [
      [s.x, s.y],
      [s.x + s.w, s.y + s.h],
    ];
  if (s.kind === "circle")
    return [
      [s.cx - s.r, s.cy - s.r],
      [s.cx + s.r, s.cy + s.r],
    ];
  return [
    [s.x1, s.y1],
    [s.x2, s.y2],
  ];
}

function insideBounds(board: Board): boolean {
  return board.shapes.every((s) =>
    corners(s).every(
      ([x, y]) =>
        x >= -1e-9 &&
        y >= -1e-9 &&
        x <= board.width + 1e-9 &&
        y <= board.height + 1e-9,
    ),
  );
}

const samples: Diagram[] = [
  { type: "grid", rows: 8, cols: 8, checkered: true },
  { type: "lines", rows: 19, cols: 19 },
  { type: "points", rows: 5, cols: 9, diagonals: "alternate" },
  { type: "pits", rows: 2, cols: 6, stores: 2 },
  { type: "mill", diagonals: true },
];

describe("boardShapes", () => {
  test("starts every board with one surface", () => {
    for (const d of samples) {
      const board = boardShapes(d);
      expect(count(board, "surface")).toBe(1);
      expect(board.shapes[0]?.role).toBe("surface");
    }
  });

  test.each(samples)("keeps every shape inside the board ($type)", (d) => {
    expect(insideBounds(boardShapes(d))).toBe(true);
  });

  test("draws a grid of cells with one more line than cells", () => {
    const board = boardShapes({ type: "grid", rows: 8, cols: 8 });
    expect(count(board, "line")).toBe(18);
    expect(count(board, "dark")).toBe(0);
    expect(board.width).toBe(board.height);
  });

  test("checkers a grid with a dark bottom-left corner", () => {
    const board = boardShapes({
      type: "grid",
      rows: 8,
      cols: 8,
      checkered: true,
    });
    const dark = board.shapes.filter((s) => s.role === "dark");
    expect(dark).toHaveLength(32);
    const bottomLeft = dark.some(
      (s) => s.kind === "rect" && s.x < 5 && s.y + s.h > board.height - 5,
    );
    expect(bottomLeft).toBe(true);
  });

  test("draws intersections without points for line boards", () => {
    const board = boardShapes({ type: "lines", rows: 19, cols: 19 });
    expect(count(board, "line")).toBe(38);
    expect(count(board, "point")).toBe(0);
  });

  test("draws the 3×3 board with both main diagonals", () => {
    const board = boardShapes({
      type: "points",
      rows: 3,
      cols: 3,
      diagonals: "alternate",
    });
    expect(count(board, "point")).toBe(9);
    // 3 rows + 3 columns + 4 diagonal segments
    expect(count(board, "line")).toBe(10);
  });

  test("alternates the diagonals of an alquerque board", () => {
    const board = boardShapes({
      type: "points",
      rows: 5,
      cols: 5,
      diagonals: "alternate",
    });
    expect(count(board, "point")).toBe(25);
    expect(count(board, "line")).toBe(10 + 16);
  });

  test("draws only the two main diagonals when asked", () => {
    const board = boardShapes({
      type: "points",
      rows: 5,
      cols: 5,
      diagonals: "main",
    });
    expect(count(board, "line")).toBe(10 + 2);
  });

  test("draws pits in rows and a store at each end", () => {
    const board = boardShapes({ type: "pits", rows: 2, cols: 6, stores: 2 });
    const pits = board.shapes.filter((s) => s.role === "pit");
    expect(pits.filter((s) => s.kind === "circle")).toHaveLength(12);
    expect(pits.filter((s) => s.kind === "rect")).toHaveLength(2);
    expect(board.width).toBeGreaterThan(board.height);
  });

  test("draws four-row boards without stores", () => {
    const board = boardShapes({ type: "pits", rows: 4, cols: 8, stores: 0 });
    expect(count(board, "pit")).toBe(32);
  });

  test("draws three concentric squares with 24 points", () => {
    const plain = boardShapes({ type: "mill", diagonals: false });
    const crossed = boardShapes({ type: "mill", diagonals: true });
    expect(count(plain, "point")).toBe(24);
    expect(count(crossed, "line")).toBe(count(plain, "line") + 4);
  });
});

describe("rotate", () => {
  test("turns the board a quarter and keeps it inside", () => {
    const board = boardShapes({ type: "pits", rows: 2, cols: 6, stores: 2 });
    const turned = rotate(board);
    expect(turned.width).toBe(board.height);
    expect(turned.height).toBe(board.width);
    expect(turned.shapes).toHaveLength(board.shapes.length);
    expect(insideBounds(turned)).toBe(true);
  });
});
