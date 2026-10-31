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
});
