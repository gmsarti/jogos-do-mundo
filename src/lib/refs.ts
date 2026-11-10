import type { Languages, Reference } from "../types.ts";

/** Portuguese references first; the rest keep their order. Returns a new list. */
export function orderRefs(refs: Reference[]): Reference[] {
  const isPt = (r: Reference) => r.lang === "pt";
  return [...refs.filter(isPt), ...refs.filter((r) => !isPt(r))];
}

/** "em inglês" for a reference in another language; empty for Portuguese or an untagged one. */
export function refNote(ref: Reference, languages: Languages): string {
  if (!ref.lang || ref.lang === "pt") return "";
  return `em ${languages[ref.lang] ?? ref.lang}`;
}
