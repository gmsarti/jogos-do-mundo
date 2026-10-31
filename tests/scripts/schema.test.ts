import { describe, expect, test } from "vitest";
import {
  countriesSchema,
  familiesSchema,
  gameSchema,
  languagesSchema,
} from "../../scripts/schema.ts";
import type { Countries, Families, Game } from "../../src/types.ts";

const families: Families = { alinhamento: "Jogos de alinhamento" };
const countries: Countries = { GH: { pt: "Gana", num: "288" } };

const validGame: Game = {
  id: "achi",
  title: "Achi",
  names: ["achi · ak"],
  fam: ["alinhamento"],
  countries: ["GH"],
  cultures: ["ganenses"],
  board: "3×3 pontos com diagonais",
  pieces: "3 ou 4 por jogador",
  players: "2",
  period: "início do séc. XX",
  status: "documented",
  living: "desconhecido",
  sens: "nenhuma",
  ev: { kind: "ethnography", date: "início do séc. XX", ref: "Ludii" },
  recon: [],
  refs: [
    { title: "Ludii", url: "https://ludii.games/details.php?keyword=Achi" },
  ],
  place: "",
  summary: "Jogo de alinhamento.",
  history: "",
  rules: "1. Alinhe três peças.",
};

const schema = gameSchema({ fileId: "achi", families, countries });

function errorPaths(game: unknown): string[] {
  const result = schema.safeParse(game);
  if (result.success) return [];
  return result.error.issues.map((issue) => issue.path.join("."));
}

describe("gameSchema", () => {
  test("accepts a valid game", () => {
    expect(schema.safeParse(validGame).success).toBe(true);
  });

  test("accepts a game without countries", () => {
    expect(schema.safeParse({ ...validGame, countries: [] }).success).toBe(
      true,
    );
  });

  test("rejects an id different from the file name", () => {
    const other = gameSchema({ fileId: "outro", families, countries });
    const result = other.safeParse(validGame);
    expect(result.success).toBe(false);
  });

  test("rejects an id that is not kebab-case", () => {
    const bad = { ...validGame, id: "Achi_Game" };
    const s = gameSchema({ fileId: "Achi_Game", families, countries });
    expect(s.safeParse(bad).success).toBe(false);
  });

  test("rejects an unknown family", () => {
    expect(errorPaths({ ...validGame, fam: ["inexistente"] })).toContain("fam");
  });

  test("rejects a game without family", () => {
    expect(errorPaths({ ...validGame, fam: [] })).toContain("fam");
  });

  test("rejects an unknown country", () => {
    expect(errorPaths({ ...validGame, countries: ["ZZ"] })).toContain(
      "countries",
    );
  });

  test("rejects an invalid status", () => {
    expect(errorPaths({ ...validGame, status: "verified" })).toContain(
      "status",
    );
  });

  test("rejects an invalid evidence kind", () => {
    expect(
      errorPaths({ ...validGame, ev: { ...validGame.ev, kind: "x" } }),
    ).toContain("ev.kind");
  });

  test("rejects a game without references", () => {
    expect(errorPaths({ ...validGame, refs: [] })).toContain("refs");
  });

  test("rejects a reference that is not an http(s) URL", () => {
    const refs = [{ title: "x", url: "javascript:alert(1)" }];
    expect(errorPaths({ ...validGame, refs })).toContain("refs.0.url");
  });

  test("rejects unknown fields", () => {
    expect(schema.safeParse({ ...validGame, extra: 1 }).success).toBe(false);
  });

  test("rejects a missing required field", () => {
    const { summary: _summary, ...rest } = validGame;
    expect(errorPaths(rest)).toContain("summary");
  });
});

describe("familiesSchema", () => {
  test("accepts id → label", () => {
    expect(familiesSchema.safeParse(families).success).toBe(true);
  });

  test("rejects an empty label", () => {
    expect(familiesSchema.safeParse({ corrida: "" }).success).toBe(false);
  });
});

describe("countriesSchema", () => {
  test("accepts ISO-2 → { pt, num }", () => {
    expect(countriesSchema.safeParse(countries).success).toBe(true);
  });

  test("rejects a key that is not ISO-2", () => {
    expect(countriesSchema.safeParse({ gh: countries.GH }).success).toBe(false);
  });

  test("rejects a numeric code that is not 3 digits", () => {
    expect(
      countriesSchema.safeParse({ GH: { pt: "Gana", num: "28" } }).success,
    ).toBe(false);
  });
});

describe("languagesSchema", () => {
  test("accepts ISO 639 codes, with region or script tags", () => {
    const languages = { yo: "iorubá", haw: "havaiano", "pt-MZ": "português" };
    expect(languagesSchema.safeParse(languages).success).toBe(true);
  });

  test("rejects a code that is not ISO 639", () => {
    expect(languagesSchema.safeParse({ Yoruba: "iorubá" }).success).toBe(false);
  });

  test("rejects an empty name", () => {
    expect(languagesSchema.safeParse({ yo: "" }).success).toBe(false);
  });
});
