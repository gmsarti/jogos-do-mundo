import { defineConfig } from "vitest/config";

// The site is served from the root of jogosdomundo.com.br; BASE_PATH only matters for a build under a subpath.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  test: {
    include: ["tests/**/*.test.ts"],
  },
});
