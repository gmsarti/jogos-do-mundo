import { describe, expect, test } from "vitest";
import { chipsView } from "../../src/panel/chips.ts";
import { catalog } from "../fixtures/catalog.ts";

describe("chipsView", () => {
  test("lists only families that have games", () => {
    const html = chipsView(catalog, null);
    expect(html).toContain("Alinhamento");
    expect(html).toContain("Mancala");
    expect(html).not.toContain("Sem jogos");
  });

  test("starts with the 'all families' chip", () => {
    expect(chipsView(catalog, null).indexOf("Todas as famílias")).toBeLessThan(
      chipsView(catalog, null).indexOf("Alinhamento"),
    );
  });

  test("marks 'all' as pressed without a filter", () => {
    const html = chipsView(catalog, null);
    expect(html).toContain('aria-pressed="true"');
    expect(html.match(/aria-pressed="true"/g)).toHaveLength(1);
    expect(html).toMatch(/aria-pressed="true"[^>]*>Todas as famílias/);
  });

  test("marks only the active family as pressed", () => {
    const html = chipsView(catalog, "mancala");
    expect(html.match(/aria-pressed="true"/g)).toHaveLength(1);
    expect(html).toMatch(
      /data-fam="mancala"[^>]*aria-pressed="true"|aria-pressed="true"[^>]*data-fam="mancala"/,
    );
  });
});
