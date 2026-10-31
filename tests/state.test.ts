import { describe, expect, test } from "vitest";
import { parseHash, type State, serializeState } from "../src/state.ts";
import { catalog } from "./fixtures/catalog.ts";

const home: State = { fam: null, country: null, game: null };

describe("serializeState", () => {
  test("home is #/", () => {
    expect(serializeState(home)).toBe("#/");
  });

  test("country route", () => {
    expect(serializeState({ ...home, country: "GH" })).toBe("#/pais/GH");
  });

  test("game route", () => {
    expect(serializeState({ ...home, game: "a" })).toBe("#/jogo/a");
  });

  test("game route keeps the country it was opened from", () => {
    expect(serializeState({ ...home, game: "a", country: "GH" })).toBe(
      "#/jogo/a?pais=GH",
    );
  });

  test("family filter goes in the query", () => {
    expect(serializeState({ ...home, fam: "mancala" })).toBe("#/?fam=mancala");
    expect(serializeState({ fam: "mancala", country: "GH", game: null })).toBe(
      "#/pais/GH?fam=mancala",
    );
  });
});

describe("parseHash", () => {
  test.each<State>([
    home,
    { fam: null, country: "GH", game: null },
    { fam: null, country: null, game: "a" },
    { fam: null, country: "GH", game: "a" },
    { fam: "alinhamento", country: null, game: null },
    { fam: "alinhamento", country: "NG", game: "a" },
  ])("round-trips %j", (state) => {
    expect(parseHash(serializeState(state), catalog)).toEqual(state);
  });

  test("empty hash is home", () => {
    expect(parseHash("", catalog)).toEqual(home);
  });

  test("unknown route falls back to home", () => {
    expect(parseHash("#/nada/aqui", catalog)).toEqual(home);
  });

  test("unknown country falls back to home", () => {
    expect(parseHash("#/pais/ZZ", catalog)).toEqual(home);
  });

  test("country without games falls back to home", () => {
    expect(parseHash("#/pais/BR", catalog)).toEqual(home);
  });

  test("country without games under the filter falls back to home keeping the filter", () => {
    expect(parseHash("#/pais/MV?fam=mancala", catalog)).toEqual({
      ...home,
      fam: "mancala",
    });
  });

  test("unknown game falls back to home", () => {
    expect(parseHash("#/jogo/zzz", catalog)).toEqual(home);
  });

  test("game hidden by the filter falls back to home keeping the filter", () => {
    expect(parseHash("#/jogo/a?fam=mancala", catalog)).toEqual({
      ...home,
      fam: "mancala",
    });
  });

  test("unknown family is dropped", () => {
    expect(parseHash("#/?fam=zzz", catalog)).toEqual(home);
  });

  test("invalid origin country of a game is dropped", () => {
    expect(parseHash("#/jogo/a?pais=ZZ", catalog)).toEqual({
      ...home,
      game: "a",
    });
  });
});
