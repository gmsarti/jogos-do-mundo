import { describe, expect, test } from "vitest";
import { esc, md } from "../../src/lib/md.ts";

describe("md", () => {
  test("renders bold", () => {
    expect(md("um **forte** texto")).toBe(
      "<p>um <strong>forte</strong> texto</p>",
    );
  });

  test("renders italic", () => {
    expect(md("um *leve* texto")).toBe("<p>um <em>leve</em> texto</p>");
  });

  test("renders unordered lists", () => {
    expect(md("- a\n- b")).toBe("<ul><li>a</li><li>b</li></ul>");
  });

  test("renders ordered lists", () => {
    expect(md("1. a\n2. b")).toBe("<ol><li>a</li><li>b</li></ol>");
  });

  test("closes a list when a paragraph follows", () => {
    expect(md("- a\ntexto")).toBe("<ul><li>a</li></ul><p>texto</p>");
  });

  test("switches between list types", () => {
    expect(md("- a\n1. b")).toBe("<ul><li>a</li></ul><ol><li>b</li></ol>");
  });

  test("splits lines into paragraphs and skips blank lines", () => {
    expect(md("um\n\ndois")).toBe("<p>um</p><p>dois</p>");
  });

  test("escapes HTML in text and list items", () => {
    const html = md('<script>alert("x")</script>\n- <img src=x onerror=1>');
    expect(html).not.toContain("<script");
    expect(html).not.toContain("<img");
    expect(html).toContain("&lt;script&gt;");
  });

  test("returns an empty string for empty input", () => {
    expect(md("")).toBe("");
  });
});

describe("esc", () => {
  test("escapes &, <, >, double and single quotes", () => {
    expect(esc(`&<>"'`)).toBe("&amp;&lt;&gt;&quot;&#39;");
  });
});
