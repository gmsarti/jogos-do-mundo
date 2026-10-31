import { describe, expect, test } from "vitest";
import { localName } from "../../src/lib/names.ts";

const languages = { fr: "francês", la: "latim", sv: "sueco", pt: "português" };

describe("localName", () => {
  test("replaces the language code with its name", () => {
    expect(localName("awalé · fr", languages)).toBe("awalé · francês");
  });

  test("drops the undetermined code", () => {
    expect(localName("wari / awari · und", languages)).toBe("wari / awari");
  });

  test("keeps a code without a name", () => {
    expect(localName("ishe · igl", languages)).toBe("ishe · igl");
  });

  test("names each code of a list", () => {
    expect(localName("tabula · la/sv", languages)).toBe(
      "tabula · latim / sueco",
    );
  });

  test("falls back to the base code of a regional tag", () => {
    expect(localName("ntxuva · pt-MZ", languages)).toBe("ntxuva · português");
  });

  test("leaves a name without a code untouched", () => {
    expect(localName("achi", languages)).toBe("achi");
  });
});
