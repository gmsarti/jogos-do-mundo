import { readFileSync } from "node:fs";
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
});
