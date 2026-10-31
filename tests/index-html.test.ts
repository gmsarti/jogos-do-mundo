import { existsSync, readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const html = readFileSync("index.html", "utf8");

describe("index.html", () => {
  test("loads no resource from an external origin (fonts are self-hosted)", () => {
    expect(html).not.toMatch(/(?:href|src)="https?:\/\//);
  });

  test("preloads the geo file so it downloads in parallel with the script", () => {
    expect(html).toContain('rel="preload"');
    expect(html).toContain("%BASE_URL%geo/countries.json");
  });

  test("theme button has an accessible name before the script runs", () => {
    expect(html).toMatch(/<button[^>]*id="theme"[^>]*aria-label="[^"]+"/);
  });

  test.each([
    'name="description"',
    'property="og:title"',
    'property="og:description"',
    'property="og:type"',
    'name="twitter:card" content="summary_large_image"',
  ])("has the share meta tag %s", (tag) => {
    expect(html).toContain(tag);
  });

  test("share image is an absolute URL and the file exists", () => {
    expect(html).toMatch(
      /property="og:image" content="https:\/\/[^"]+%BASE_URL%og\.png"/,
    );
    expect(existsSync("public/og.png")).toBe(true);
  });
});
