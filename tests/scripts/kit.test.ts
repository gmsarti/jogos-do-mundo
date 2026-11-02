import { describe, expect, test } from "vitest";
import { mdBlocks } from "../../scripts/kit/blocks.ts";
import { kitData } from "../../scripts/kit/data.ts";
import { fitBoard, ornatePage, simplePage } from "../../scripts/kit/pages.ts";
import { boardShapes } from "../../src/boards/geometry.ts";
import type { Game } from "../../src/types.ts";
import { catalog } from "../fixtures/catalog.ts";

const base = catalog.games[0] as Game;

const game: Game = {
  ...base,
  names: ["achi · ak", "ati · und"],
  board: "3×3 pontos",
  pieces: "3 pedras",
  cultures: ["ganenses"],
  place: "Norte",
  summary: "Resumo **forte**.",
  rules: "1. Coloque.\n2. Deslize.",
  history: "Contexto.",
};

describe("mdBlocks", () => {
  test("turns each text line into a paragraph", () => {
    expect(mdBlocks("Um.\n\nDois.")).toEqual([
      { type: "p", runs: [{ text: "Um.", bold: false, italic: false }] },
      { type: "p", runs: [{ text: "Dois.", bold: false, italic: false }] },
    ]);
  });

  test("groups numbered and bulleted lines into lists", () => {
    const blocks = mdBlocks("1. a\n2. b\n- c");
    expect(blocks.map((b) => b.type)).toEqual(["ol", "ul"]);
    expect(blocks[0]?.type === "ol" && blocks[0].items).toHaveLength(2);
  });

  test("marks bold and italic runs", () => {
    const [block] = mdBlocks("a **b** *c*");
    expect(block?.type === "p" && block.runs).toEqual([
      { text: "a ", bold: false, italic: false },
      { text: "b", bold: true, italic: false },
      { text: " ", bold: false, italic: false },
      { text: "c", bold: false, italic: true },
    ]);
  });

  test("keeps markup characters as plain text", () => {
    const [block] = mdBlocks("<b> & #x");
    expect(block?.type === "p" && block.runs[0]?.text).toBe("<b> & #x");
  });

  test("returns nothing for empty text", () => {
    expect(mdBlocks("")).toEqual([]);
  });
});

describe("kitData", () => {
  test("points the QR to the game page on the site", () => {
    expect(kitData(catalog, game).url).toBe(
      "https://jogosdomundo.com.br/#/jogo/a",
    );
  });

  test("carries the status label and its meaning", () => {
    const data = kitData(catalog, game);
    expect(data.status).toBe("regra documentada");
    expect(data.statusHelp).toContain("registro etnográfico");
  });

  test("fills the sheet with readable names", () => {
    const facts = kitData(catalog, game).facts;
    expect(facts).toContainEqual(["Jogadores", "2"]);
    expect(facts).toContainEqual(["Nomes locais", "achi · akan, ati"]);
    expect(facts).toContainEqual(["Países", "Gana, Nigéria (Norte)"]);
  });

  test("lists reconstruction and sensitivity only when there is something to say", () => {
    const plain = kitData(catalog, game).facts.map(([k]) => k);
    expect(plain).not.toContain("Reconstrução");
    expect(plain).not.toContain("Sensibilidade");
    const marked = kitData(catalog, {
      ...game,
      recon: ["Fulano (2020)"],
      sens: "ritual",
    }).facts;
    expect(marked).toContainEqual(["Reconstrução", "Fulano (2020)"]);
    expect(marked).toContainEqual(["Sensibilidade", "ritual"]);
  });

  test("says which variant the drawing shows", () => {
    const data = kitData(catalog, {
      ...game,
      diagram: { type: "grid", rows: 5, cols: 5, note: "variante 5×5" },
    });
    expect(data.facts).toContainEqual([
      "Tabuleiro",
      "3×3 pontos (desenho: variante 5×5)",
    ]);
    expect(data.board).toBe(true);
    expect(kitData(catalog, game).board).toBe(false);
  });

  test("converts summary, rules and history into blocks", () => {
    const data = kitData(catalog, game);
    expect(data.rules[0]?.type).toBe("ol");
    expect(data.history).toHaveLength(1);
    expect(data.summary[0]?.type).toBe("p");
  });
});

describe("fitBoard", () => {
  const box = { x: 20, y: 30, w: 160, h: 240 };

  function bounds(b: ReturnType<typeof fitBoard>) {
    const surface = b.shapes[0];
    if (surface?.kind !== "rect") throw new Error("no surface");
    return surface;
  }

  test("centers a square board inside the box", () => {
    const fitted = fitBoard(
      boardShapes({ type: "grid", rows: 8, cols: 8 }),
      box,
    );
    const s = bounds(fitted);
    expect(s.w).toBeCloseTo(160);
    expect(s.x).toBeCloseTo(20);
    expect(s.y + s.h / 2).toBeCloseTo(30 + 120);
  });

  test("keeps points small on small boards", () => {
    const fitted = fitBoard(
      boardShapes({ type: "points", rows: 3, cols: 3, diagonals: "alternate" }),
      box,
    );
    const points = fitted.shapes.filter((s) => s.role === "point");
    for (const p of points)
      expect(p.kind === "circle" && p.r).toBeLessThanOrEqual(2.2);
  });

  test("stands a long board upright when that makes it larger", () => {
    const fitted = fitBoard(
      boardShapes({ type: "pits", rows: 2, cols: 6, stores: 2 }),
      box,
    );
    const s = bounds(fitted);
    expect(s.h).toBeGreaterThan(s.w);
    expect(s.y).toBeGreaterThanOrEqual(30 - 1e-9);
    expect(s.y + s.h).toBeLessThanOrEqual(270 + 1e-9);
  });
});

describe("board pages", () => {
  const board = boardShapes({ type: "pits", rows: 2, cols: 6, stores: 2 });

  test("are A4 pages drawn in millimetres", () => {
    for (const page of [simplePage(board), ornatePage(board)]) {
      expect(page).toContain('width="210mm" height="297mm"');
      expect(page).toContain('viewBox="0 0 210 297"');
    }
  });

  test("carry their own ink, without classes", () => {
    for (const page of [simplePage(board), ornatePage(board)]) {
      expect(page).not.toContain("class=");
      expect(page).toContain('stroke="#23201b"');
    }
  });

  test("dress the ornate page with a seed border and carved pits", () => {
    const simple = simplePage(board);
    const ornate = ornatePage(board);
    expect(simple).not.toContain("<ellipse");
    expect(ornate).toContain("<ellipse");
    const circles = (svg: string) => svg.split("<circle").length - 1;
    expect(circles(ornate)).toBeGreaterThan(circles(simple));
  });
});
