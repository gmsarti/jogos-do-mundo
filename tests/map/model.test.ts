import { describe, expect, test } from "vitest";
import { buildCatalog } from "../../scripts/build-data.ts";
import {
  countryClass,
  dotClass,
  isoByNum,
  SMALL_COUNTRIES,
  tooltipText,
  visibleDots,
} from "../../src/map/model.ts";
import { catalog } from "../fixtures/catalog.ts";

describe("countryClass", () => {
  test("country without games has only the base class", () => {
    expect(countryClass(0, false)).toBe("country");
  });

  test.each([
    [1, "country has c1"],
    [2, "country has c2"],
    [3, "country has c2"],
    [4, "country has c3"],
  ])("%i games", (count, expected) => {
    expect(countryClass(count, false)).toBe(expected);
  });

  test("selected country gets sel", () => {
    expect(countryClass(2, true)).toBe("country has c2 sel");
  });
});

describe("dotClass", () => {
  test("marks the selected dot", () => {
    expect(dotClass(false)).toBe("dot");
    expect(dotClass(true)).toBe("dot sel");
  });
});

describe("visibleDots", () => {
  test("shows only small countries that have games", () => {
    const counts = { MV: 1, GH: 4 };
    expect(visibleDots(["MV", "SG"], counts)).toEqual(new Set(["MV"]));
  });
});

describe("tooltipText", () => {
  test("uses singular and plural", () => {
    expect(tooltipText("Gana", 1)).toBe("Gana: 1 jogo");
    expect(tooltipText("Gana", 4)).toBe("Gana: 4 jogos");
  });
});

describe("isoByNum", () => {
  test("inverts the numeric codes of the catalog", () => {
    expect(isoByNum(catalog.countries)).toMatchObject({
      "288": "GH",
      "566": "NG",
    });
  });
});

describe("SMALL_COUNTRIES", () => {
  test("are all known countries", () => {
    const real = buildCatalog("content");
    expect(SMALL_COUNTRIES.filter((iso) => !(iso in real.countries))).toEqual(
      [],
    );
  });
});
