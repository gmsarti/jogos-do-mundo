import { describe, expect, test } from "vitest";
import { buildCatalog } from "../../scripts/build-data.ts";
import { readPrototypeData } from "../../scripts/once/extract-prototype.ts";

// One-time migration check: content/ must match the prototype's DATA.
// Retire this test when curation starts changing the content on purpose.
const prototype = readPrototypeData();
const catalog = buildCatalog("content");

describe("content/ vs prototype", () => {
  test("has 94 games, 12 families and 79 countries", () => {
    expect(catalog.games).toHaveLength(94);
    expect(Object.keys(catalog.families)).toHaveLength(12);
    expect(Object.keys(catalog.countries)).toHaveLength(79);
  });

  test("games are identical to the prototype's", () => {
    const byId = (a: { id: string }, b: { id: string }) =>
      a.id.localeCompare(b.id);
    expect([...catalog.games].sort(byId)).toEqual(
      [...prototype.games].sort(byId),
    );
  });

  test("families are identical to the prototype's", () => {
    expect(catalog.families).toEqual(prototype.fam);
  });

  test("countries carry the prototype's names and numeric codes", () => {
    const expected = Object.fromEntries(
      Object.entries(prototype.pt).map(([iso, pt]) => [
        iso,
        { pt, num: prototype.num[iso] },
      ]),
    );
    expect(catalog.countries).toEqual(expected);
  });
});
