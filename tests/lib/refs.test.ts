import { describe, expect, test } from "vitest";
import { orderRefs, refNote } from "../../src/lib/refs.ts";

const en = { title: "En", url: "https://en.example.org", lang: "en" };
const pt = { title: "Pt", url: "https://pt.example.org", lang: "pt" };
const plain = { title: "Plain", url: "https://plain.example.org" };
const languages = { en: "inglês", pt: "português" };

describe("orderRefs", () => {
  test("puts Portuguese references first", () => {
    expect(orderRefs([en, pt]).map((r) => r.title)).toEqual(["Pt", "En"]);
  });

  test("keeps the original order among the rest", () => {
    expect(orderRefs([en, plain, pt]).map((r) => r.title)).toEqual([
      "Pt",
      "En",
      "Plain",
    ]);
  });

  test("does not change the list it receives", () => {
    const list = [en, pt];
    orderRefs(list);
    expect(list[0]).toBe(en);
  });
});

describe("refNote", () => {
  test("names the language of a reference that is not in Portuguese", () => {
    expect(refNote(en, languages)).toBe("em inglês");
  });

  test("says nothing for Portuguese or for an untagged reference", () => {
    expect(refNote(pt, languages)).toBe("");
    expect(refNote(plain, languages)).toBe("");
  });

  test("falls back to the code when the language has no name", () => {
    expect(refNote({ ...en, lang: "xx" }, languages)).toBe("em xx");
  });
});
