import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const main = readFileSync("src/main.ts", "utf8");
const tokens = readFileSync("src/styles/tokens.css", "utf8");
const fontImports = main.match(/import "@fontsource[^"]+";/g) ?? [];

describe("fonts", () => {
  test("self-hosts the display and text faces", () => {
    expect(main).toContain('import "@fontsource/gloock/');
    expect(main).toContain('import "@fontsource/commissioner/');
  });

  // Local names use ā, ọ́, ğ, ư, Cyrillic…; a latin-only file makes them fall back mid-word
  test("loads every subset, not only latin", () => {
    expect(fontImports.length).toBeGreaterThan(0);
    for (const line of fontImports) expect(line).not.toMatch(/\/latin-\d+/);
  });

  test("tokens point to the self-hosted families", () => {
    expect(tokens).toMatch(/--font-serif:\s*"Gloock"/);
    expect(tokens).toMatch(/--font-sans:\s*"Commissioner"/);
  });
});
