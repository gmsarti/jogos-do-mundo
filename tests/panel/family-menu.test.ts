import { describe, expect, test } from "vitest";
import { familyLabel, familyMenuView } from "../../src/panel/family-menu.ts";
import { catalog } from "../fixtures/catalog.ts";

describe("familyMenuView", () => {
  test("lists only families that have games", () => {
    const html = familyMenuView(catalog, null);
    expect(html).toContain("Alinhamento");
    expect(html).toContain("Mancala");
    expect(html).not.toContain("Sem jogos");
  });

  test("starts with the 'all families' option", () => {
    const html = familyMenuView(catalog, null);
    expect(html.indexOf("Todas as famílias")).toBeLessThan(
      html.indexOf("Alinhamento"),
    );
  });

  test("shows how many games each option has", () => {
    const html = familyMenuView(catalog, null);
    expect(html).toMatch(/Todas as famílias<\/span><small>7<\/small>/);
    expect(html).toMatch(/Alinhamento<\/span><small>3<\/small>/);
    expect(html).toMatch(/Mancala<\/span><small>4<\/small>/);
  });

  test("marks 'all' as pressed without a filter", () => {
    const html = familyMenuView(catalog, null);
    expect(html.match(/aria-pressed="true"/g)).toHaveLength(1);
    expect(html).toMatch(/aria-pressed="true"><span>Todas as famílias/);
  });

  test("marks only the active family as pressed", () => {
    const html = familyMenuView(catalog, "mancala");
    expect(html.match(/aria-pressed="true"/g)).toHaveLength(1);
    expect(html).toMatch(/data-fam="mancala" aria-pressed="true"/);
  });
});

describe("familyLabel", () => {
  test("names the active family on the button", () => {
    expect(familyLabel(catalog, null)).toBe("Família: todas");
    expect(familyLabel(catalog, "mancala")).toBe("Família: Mancala");
  });
});
