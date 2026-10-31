import { describe, expect, test } from "vitest";
import {
  colorBand,
  countByCountry,
  gamesOfCountry,
  gamesWithoutCountry,
  searchFamilies,
  searchGames,
  topCountries,
  visibleGames,
} from "../../src/lib/selectors.ts";
import type { Game } from "../../src/types.ts";
import { catalog } from "../fixtures/catalog.ts";

const ids = (games: { id: string }[]) => games.map((g) => g.id);

describe("visibleGames", () => {
  test("returns every game without a family filter", () => {
    expect(visibleGames(catalog.games, null)).toHaveLength(7);
  });

  test("filters games by family", () => {
    expect(ids(visibleGames(catalog.games, "mancala"))).toEqual([
      "c",
      "d",
      "e",
      "f",
    ]);
  });
});

describe("gamesOfCountry", () => {
  test("returns the games that list the country", () => {
    expect(ids(gamesOfCountry(catalog.games, "NG"))).toEqual(["a", "c"]);
  });

  test("returns nothing for a country without games", () => {
    expect(gamesOfCountry(catalog.games, "BR")).toEqual([]);
  });
});

describe("countByCountry", () => {
  test("counts games per country", () => {
    expect(countByCountry(catalog.games)).toEqual({ GH: 4, NG: 2, MV: 1 });
  });

  test("counts only the games it receives", () => {
    const mancala = visibleGames(catalog.games, "mancala");
    expect(countByCountry(mancala)).toEqual({ NG: 1, GH: 2 });
  });
});

describe("colorBand", () => {
  test.each([
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 2],
    [4, 3],
    [10, 3],
  ])("maps %i games to band %i", (count, band) => {
    expect(colorBand(count)).toBe(band);
  });
});

describe("topCountries", () => {
  test("ranks countries by game count, descending", () => {
    expect(topCountries(catalog.games, 8)).toEqual([
      ["GH", 4],
      ["NG", 2],
      ["MV", 1],
    ]);
  });

  test("breaks ties by ISO code and honors the limit", () => {
    const tied = catalog.games.filter((g) => g.id === "c" || g.id === "g");
    expect(topCountries(tied, 1)).toEqual([["MV", 1]]);
  });
});

describe("gamesWithoutCountry", () => {
  test("returns only games with no country", () => {
    expect(ids(gamesWithoutCountry(catalog.games))).toEqual(["d"]);
  });
});

describe("searchGames", () => {
  const base = catalog.games.slice(0, 2) as [Game, Game];
  const games: Game[] = [
    { ...base[0], id: "x", title: "Ọ̀wàrẹ́", names: ["Awalé", "Ayo"] },
    { ...base[1], id: "y", title: "Jogo da Onça", names: [] },
  ];

  test("matches local names ignoring accents and case", () => {
    expect(ids(searchGames(games, "AWALE"))).toEqual(["x"]);
  });

  test("matches the title ignoring accents", () => {
    expect(ids(searchGames(games, "onca"))).toEqual(["y"]);
  });

  test("returns nothing for a blank query", () => {
    expect(searchGames(games, "   ")).toEqual([]);
  });
});

describe("searchFamilies", () => {
  const families = { ...catalog.families, cacada: "Caça assimétrica" };

  test("matches family labels ignoring accents and case", () => {
    expect(searchFamilies(families, catalog.games, "MANC")).toEqual([
      ["mancala", "Mancala"],
    ]);
  });

  test("skips families without games", () => {
    expect(searchFamilies(families, catalog.games, "jogos")).toEqual([]);
    expect(searchFamilies(families, catalog.games, "caca")).toEqual([]);
  });

  test("returns nothing for a blank query", () => {
    expect(searchFamilies(families, catalog.games, " ")).toEqual([]);
  });
});
