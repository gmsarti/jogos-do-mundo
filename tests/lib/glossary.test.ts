import { describe, expect, test } from "vitest";
import { termsIn } from "../../src/lib/glossary.ts";
import type { Glossary } from "../../src/types.ts";

const glossary: Glossary = {
  "captura-por-aproximacao": {
    termo: "captura por aproximação",
    def: "Chegar perto e capturar.",
    variantes: ["aproximação"],
  },
  reserva: { termo: "reserva", def: "Peças fora do tabuleiro.", variantes: [] },
  semeadura: {
    termo: "semeadura",
    def: "Soltar uma semente em cada cova.",
    variantes: ["cova", "covas"],
  },
};

const terms = (text: string) => termsIn(glossary, text).map((t) => t.termo);

describe("termsIn", () => {
  test("finds a term ignoring accents and case", () => {
    expect(terms("Vale a CAPTURA POR APROXIMACAO.")).toEqual([
      "captura por aproximação",
    ]);
  });

  test("finds a term by one of its variants", () => {
    expect(terms("Pegue as sementes de uma **cova**.")).toEqual(["semeadura"]);
  });

  test("matches whole words only", () => {
    expect(terms("O tabuleiro fica reservado.")).toEqual([]);
  });

  test("lists only the terms used in the text, in glossary order", () => {
    expect(terms("Covas e reserva.")).toEqual(["reserva", "semeadura"]);
  });
});
