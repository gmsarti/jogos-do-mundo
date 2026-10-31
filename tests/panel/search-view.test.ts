import { describe, expect, test } from "vitest";
import { searchView } from "../../src/panel/search-view.ts";
import { catalog } from "../fixtures/catalog.ts";

describe("searchView", () => {
  test("lists the matching games as buttons", () => {
    const html = searchView(catalog, catalog.games.slice(0, 1));
    expect(html).toContain('data-id="a"');
  });

  test("says when nothing matches", () => {
    expect(searchView(catalog, [])).toContain("Nenhum jogo encontrado");
  });
});
