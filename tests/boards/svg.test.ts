import { describe, expect, test } from "vitest";
import { boardShapes } from "../../src/boards/geometry.ts";
import { boardSvg } from "../../src/boards/svg.ts";

describe("boardSvg", () => {
  const board = boardShapes({ type: "pits", rows: 2, cols: 6, stores: 2 });

  test("uses the board size as the viewBox", () => {
    expect(boardSvg(board, "Oware")).toContain(
      `viewBox="0 0 ${board.width} ${board.height}"`,
    );
  });

  test("is an image with an escaped label", () => {
    const svg = boardSvg(board, 'Jogo "<b>"');
    expect(svg).toContain('role="img"');
    expect(svg).toContain('aria-label="Jogo &quot;&lt;b&gt;&quot;"');
  });

  test("styles shapes by role, never with inline colors", () => {
    const svg = boardSvg(board, "Oware");
    expect(svg).toContain('class="b-surface"');
    expect(svg).toContain('class="b-pit"');
    expect(svg).not.toMatch(/fill="#|stroke="#/);
  });
});
