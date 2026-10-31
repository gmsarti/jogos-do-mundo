import { defineConfig } from "vitest/config";

// BASE_PATH is set by the deploy workflow to "/<repo>/"; locally the site is served from "/".
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  test: {
    include: ["tests/**/*.test.ts"],
  },
});
