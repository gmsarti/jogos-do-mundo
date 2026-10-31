import { readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { describe, expect, test } from "vitest";
import { buildCatalog } from "../../scripts/build-data.ts";

interface Topology {
  objects: { countries: { geometries: { id: string }[] } };
}

const GEO_PATH = "public/geo/countries.json";
const geoText = readFileSync(GEO_PATH, "utf8");
const geo: Topology = JSON.parse(geoText);
const catalog = buildCatalog("content");
const geoIds = new Set(geo.objects.countries.geometries.map((g) => g.id));

describe("public/geo/countries.json", () => {
  test("has every country of countries.json", () => {
    const missing = Object.entries(catalog.countries)
      .filter(([, country]) => !geoIds.has(country.num))
      .map(([iso]) => iso);
    expect(missing).toEqual([]);
  });

  test("keeps geo + catalog within 250 KB gzip (RNF-02)", () => {
    const gzipped =
      gzipSync(geoText).length + gzipSync(JSON.stringify(catalog)).length;
    expect(gzipped).toBeLessThanOrEqual(250 * 1024);
  });
});
