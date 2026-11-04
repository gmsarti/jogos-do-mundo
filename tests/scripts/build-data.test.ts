import { describe, expect, test } from "vitest";
import { buildCatalog } from "../../scripts/build-data.ts";

const fixture = (name: string) => `tests/fixtures/${name}`;

describe("buildCatalog", () => {
  test("builds the catalog from a valid content folder", () => {
    const catalog = buildCatalog(fixture("content-valid"));

    expect(catalog.families).toEqual({
      alinhamento: {
        label: "Jogos de alinhamento",
        desc: "O objetivo é colocar peças suas em linha.",
      },
    });
    expect(catalog.countries).toEqual({ GH: { pt: "Gana", num: "288" } });
    expect(catalog.languages).toEqual({ ak: "akan" });
    expect(catalog.glossary.alinhamento?.variantes).toEqual([
      "alinhar",
      "alinhe",
    ]);
    expect(catalog.games.map((g) => g.id)).toEqual(["achi", "solo"]);
  });

  test("splits História and Regras from the body", () => {
    const achi = buildCatalog(fixture("content-valid")).games[0];

    expect(achi?.history).toBe("Observado em **Gana**.");
    expect(achi?.rules).toBe("1. Alinhe três peças.\n2. Vence quem alinhar.");
  });

  test("reads the teaching sections", () => {
    const achi = buildCatalog(fixture("content-valid")).games[0];

    expect(achi?.needs).toBe("- Um tabuleiro de 3×3 pontos");
    expect(achi?.howto).toBe("1. Coloque uma peça.");
    expect(achi?.guide).toBe("**Sugestão do site:** comece só colocando.");
  });

  test("leaves the teaching sections out of a game without them", () => {
    const solo = buildCatalog(fixture("content-valid")).games[1];

    expect(solo).not.toHaveProperty("needs");
    expect(solo).not.toHaveProperty("howto");
    expect(solo).not.toHaveProperty("guide");
  });

  test("leaves a missing section empty", () => {
    const solo = buildCatalog(fixture("content-valid")).games[1];

    expect(solo?.history).toBe("");
    expect(solo?.rules).toBe("- Só regras.");
  });

  test("keeps numeric-looking strings as strings", () => {
    const achi = buildCatalog(fixture("content-valid")).games[0];

    expect(achi?.players).toBe("2");
  });

  test("fails pointing at the file and the field", () => {
    expect(() => buildCatalog(fixture("content-bad-status"))).toThrow(
      /games\/bad\.md: status/,
    );
  });

  test("fails on an unknown section heading", () => {
    expect(() => buildCatalog(fixture("content-bad-section"))).toThrow(
      /games\/bad\.md: .*Lendas/,
    );
  });

  test("fails on an invalid glossary pointing at the file and the field", () => {
    expect(() => buildCatalog(fixture("content-bad-glossary"))).toThrow(
      /glossary\.json: alinhamento\.def/,
    );
  });

  test("fails on a section written as a frontmatter field", () => {
    expect(() =>
      buildCatalog(fixture("content-section-in-frontmatter")),
    ).toThrow(/games\/bad\.md: howto: .*## Como jogar\?/);
  });

  test("fails on a file without frontmatter", () => {
    expect(() => buildCatalog(fixture("content-no-frontmatter"))).toThrow(
      /games\/bad\.md: .*frontmatter/,
    );
  });
});
