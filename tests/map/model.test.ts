import { describe, expect, test } from "vitest";
import { buildCatalog } from "../../scripts/build-data.ts";
import {
  countryClass,
  dotClass,
  focusIsos,
  focusTransform,
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

describe("focusTransform", () => {
  const box = { w: 800, h: 400 };

  test("returns the identity when there is nothing to focus", () => {
    expect(focusTransform(null, box.w, box.h)).toEqual({ k: 1, x: 0, y: 0 });
  });

  test("centers the bounds in the box", () => {
    const { k, x, y } = focusTransform(
      [
        [300, 100],
        [500, 200],
      ],
      box.w,
      box.h,
    );
    expect(k).toBeGreaterThan(1);
    expect(k * 400 + x).toBeCloseTo(400);
    expect(k * 150 + y).toBeCloseTo(200);
  });

  test("caps the scale for tiny bounds", () => {
    const { k } = focusTransform(
      [
        [400, 200],
        [401, 201],
      ],
      box.w,
      box.h,
    );
    expect(k).toBeLessThanOrEqual(8);
  });

  test("never zooms out below the whole world", () => {
    const { k } = focusTransform(
      [
        [0, 0],
        [800, 400],
      ],
      box.w,
      box.h,
    );
    expect(k).toBe(1);
  });
});

describe("focusIsos", () => {
  test("focuses the countries of the open game", () => {
    expect(focusIsos(catalog.games, "a", "GH")).toEqual(["GH", "NG"]);
  });

  test("focuses the open country when no game is open", () => {
    expect(focusIsos(catalog.games, null, "NG")).toEqual(["NG"]);
  });

  test("focuses nothing on the home", () => {
    expect(focusIsos(catalog.games, null, null)).toEqual([]);
  });
});
