import { existsSync, readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const main = readFileSync("src/main.ts", "utf8");
const tokens = readFileSync("src/styles/tokens.css", "utf8");
const print = existsSync("src/styles/print.css")
  ? readFileSync("src/styles/print.css", "utf8")
  : "";

describe("print styles", () => {
  test("are imported after the other styles so they win", () => {
    const imports = main.match(/import "\.\/styles\/[^"]+";/g) ?? [];
    expect(imports.at(-1)).toBe('import "./styles/print.css";');
  });

  test("only apply when printing", () => {
    expect(print.trim().startsWith("@media print")).toBe(true);
  });

  test("leave out the map, the toolbar and the sheet handle", () => {
    for (const selector of [".mapbox", ".tools", ".handle"])
      expect(print).toContain(selector);
    expect(print).toMatch(/display:\s*none/);
  });

  test("print the address of each reference", () => {
    expect(print).toContain('content: " (" attr(href) ")"');
  });

  // A dark theme would print light text on white paper
  test("force the light palette, whatever the theme", () => {
    const block = tokens.split("@media print")[1] ?? "";
    expect(block).toContain(':root[data-theme="dark"]');
    expect(block).toContain("--ink: #23201b");
    expect(block).toContain("color-scheme: light");
  });
});
