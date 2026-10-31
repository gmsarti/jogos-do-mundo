import { describe, expect, test } from "vitest";
import {
  nextTheme,
  parseTheme,
  themeIcon,
  themeLabel,
} from "../../src/lib/theme.ts";

describe("parseTheme", () => {
  test.each(["light", "dark"])("accepts %s", (value) => {
    expect(parseTheme(value)).toBe(value);
  });

  test.each([null, undefined, "", "auto", "blue", 3])(
    "returns null for %j (no saved choice)",
    (value) => {
      expect(parseTheme(value)).toBeNull();
    },
  );
});

describe("nextTheme", () => {
  test("toggles between light and dark", () => {
    expect(nextTheme("light")).toBe("dark");
    expect(nextTheme("dark")).toBe("light");
  });
});

describe("themeLabel", () => {
  test("names the theme the button switches to", () => {
    expect(themeLabel("light")).toBe("Mudar para o tema escuro");
    expect(themeLabel("dark")).toBe("Mudar para o tema claro");
  });
});

describe("themeIcon", () => {
  test("shows a decorative svg, different for each theme", () => {
    const sun = themeIcon("light");
    const moon = themeIcon("dark");
    expect(sun).toContain("<svg");
    expect(sun).toContain('aria-hidden="true"');
    expect(moon).toContain("<svg");
    expect(sun).not.toBe(moon);
  });
});
