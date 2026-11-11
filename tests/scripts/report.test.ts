import { describe, expect, test } from "vitest";
import { buildReport } from "../../scripts/report.ts";
import type { Game } from "../../src/types.ts";
import { catalog } from "../fixtures/catalog.ts";

function game(id: string, extra: Partial<Game> = {}): Game {
  const base = catalog.games[0] as Game;
  return { ...base, id, title: id.toUpperCase(), ...extra };
}

const one = game("um", { rules: "Regra (a verificar)." });
const two = game("dois", {
  rules: "Primeira (a verificar).\nSegunda (a verificar).",
  board: "3×3 (a verificar)",
});
const clean = game("limpo");
const unknown = game("sumido", { status: "unknown" });

describe("buildReport", () => {
  test("counts every mark of a game, in any field", () => {
    expect(buildReport([two])).toContain("### DOIS (`dois`): 3 marcas");
  });

  test("leaves out games with no mark", () => {
    expect(buildReport([one, clean])).not.toContain("`limpo`");
  });

  test("lists the games with fewer marks first", () => {
    const report = buildReport([two, one]);
    expect(report.indexOf("### UM")).toBeLessThan(report.indexOf("### DOIS"));
  });

  test("breaks ties by id", () => {
    const report = buildReport([
      game("b", { rules: one.rules }),
      game("a", { rules: one.rules }),
    ]);
    expect(report.indexOf("### A (`a`)")).toBeLessThan(
      report.indexOf("### B (`b`)"),
    );
  });

  test("shows the section and the line that holds each mark", () => {
    const report = buildReport([two]);
    expect(report).toContain("**Regras**");
    expect(report).toContain("- Segunda (a verificar).");
    expect(report).toContain("**Tabuleiro**");
    expect(report).toContain("- 3×3 (a verificar)");
  });

  test("does not double the list marker of a line that already is a list item", () => {
    const item = game("item", { needs: "- Um tabuleiro (a verificar)" });
    expect(buildReport([item])).toContain("\n- Um tabuleiro (a verificar)");
  });

  test("lists games with unknown status in their own section, marks or not", () => {
    const report = buildReport([unknown, one]);
    const section = report.slice(
      report.indexOf("## Jogos com status"),
      report.indexOf("## Por jogo"),
    );
    expect(section).toContain("`sumido`");
    expect(section).not.toContain("`um`");
  });

  test("gives the sources of the game to open first", () => {
    const withRef = game("fonte", {
      rules: "x (a verificar)",
      refs: [{ title: "Ludii", url: "https://ludii.games/x" }],
    });
    expect(buildReport([withRef])).toContain("[Ludii](https://ludii.games/x)");
  });

  test("totals the marks and the games", () => {
    const report = buildReport([one, two, clean]);
    expect(report).toContain("4 marcas em 2 jogos");
  });

  test("is the same on every run, so the file only changes when the content does", () => {
    expect(buildReport([two, one])).toBe(buildReport([two, one]));
  });
});
