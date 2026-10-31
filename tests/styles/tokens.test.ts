import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const tokens = readFileSync("src/styles/tokens.css", "utf8");
const base = readFileSync("src/styles/base.css", "utf8");

const colorTokens = [
  "bg",
  "panel",
  "ink",
  "muted",
  "line",
  "sea",
  "land",
  "h1",
  "h2",
  "h3",
  "link",
  "sel",
  "game",
  "chip",
  "st-documented",
  "st-reconstructed",
  "st-partial",
  "st-unknown",
];

// Light is the :root block; dark appears in the media query and in [data-theme="dark"].
const lightBlock = tokens.split("@media")[0] ?? "";
const mediaBlock =
  tokens.split("@media")[1]?.split(':root[data-theme="dark"]')[0] ?? "";
const manualDarkBlock = tokens.split(':root[data-theme="dark"]')[1] ?? "";

function token(block: string, name: string): string {
  return (
    block.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, "i"))?.[1] ?? ""
  );
}

// WCAG contrast ratio between two #rrggbb colors
function contrast(a: string, b: string): number {
  const lum = (hex: string) => {
    const [r, g, b] = [1, 3, 5].map((i) => {
      const v = Number.parseInt(hex.slice(i, i + 2), 16) / 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    }) as [number, number, number];
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}

describe("design tokens", () => {
  test.each(colorTokens)("defines --%s in the light theme", (name) => {
    expect(lightBlock).toContain(`--${name}:`);
  });

  test.each(colorTokens)("defines --%s in both dark variants", (name) => {
    expect(mediaBlock).toContain(`--${name}:`);
    expect(manualDarkBlock).toContain(`--${name}:`);
  });

  test("dark variants respect an explicit light choice", () => {
    expect(mediaBlock).toContain(':root:not([data-theme="light"])');
  });

  test("base.css has no hard-coded colors", () => {
    expect(base).not.toMatch(/#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(/);
  });

  test.each([
    ["land", "sea", 1.5],
    ["h1", "sea", 2.5],
    ["h1", "land", 1.5],
  ])("dark map: --%s stands out from --%s", (a, b, min) => {
    for (const block of [mediaBlock, manualDarkBlock])
      expect(contrast(token(block, a), token(block, b))).toBeGreaterThanOrEqual(
        min,
      );
  });
});
