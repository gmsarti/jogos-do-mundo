import { existsSync, statSync } from "node:fs";
import { expect, test } from "vitest";
import { buildCatalog } from "../../scripts/build-data.ts";

const MAX_BYTES = 80 * 1024; // RNF-02: images stay light

test("every game image in content/ exists in public/ and is at most 80 KB", () => {
  for (const game of buildCatalog("content").games) {
    if (!game.image) continue;
    const path = `public/${game.image.src}`;
    expect(existsSync(path), `${game.id}: ${path} is missing`).toBe(true);
    expect(
      statSync(path).size,
      `${game.id}: ${path} is too big`,
    ).toBeLessThanOrEqual(MAX_BYTES);
  }
});
