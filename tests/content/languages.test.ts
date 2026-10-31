import { describe, expect, test } from "vitest";
import { buildCatalog } from "../../scripts/build-data.ts";

const catalog = buildCatalog("content");

describe("content/languages.json", () => {
  test("names every language code used in local names", () => {
    const codes = catalog.games.flatMap((g) =>
      g.names.flatMap((n) => n.split(" · ").at(-1)?.split("/") ?? []),
    );
    const missing = codes.filter(
      (c) => c !== "und" && !(c in catalog.languages),
    );
    expect([...new Set(missing)]).toEqual([]);
  });
});
