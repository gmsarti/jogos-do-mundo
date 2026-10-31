import { describe, expect, test } from "vitest";
import { buildCatalog } from "../../scripts/build-data.ts";

const fixture = (name: string) => `tests/fixtures/${name}`;

describe("buildCatalog", () => {
  test("builds the catalog from a valid content folder", () => {
    const catalog = buildCatalog(fixture("content-valid"));

    expect(catalog.families).toEqual({ alinhamento: "Jogos de alinhamento" });
    expect(catalog.countries).toEqual({ GH: { pt: "Gana", num: "288" } });
    expect(catalog.languages).toEqual({ ak: "akan" });
    expect(catalog.games.map((g) => g.id)).toEqual(["achi", "solo"]);
  });

  test("splits História and Regras from the body", () => {
    const achi = buildCatalog(fixture("content-valid")).games[0];

    expect(achi?.history).toBe("Observado em **Gana**.");
    expect(achi?.rules).toBe("1. Alinhe três peças.\n2. Vence quem alinhar.");
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

  test("fails on a file without frontmatter", () => {
    expect(() => buildCatalog(fixture("content-no-frontmatter"))).toThrow(
      /games\/bad\.md: .*frontmatter/,
    );
  });
});
