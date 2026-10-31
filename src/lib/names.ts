import type { Languages } from "../types.ts";

/** "awalé · fr" → "awalé · francês". `und` (undetermined) is dropped; a code without a name stays as it is. */
export function localName(name: string, languages: Languages): string {
  const cut = name.lastIndexOf(" · ");
  if (cut < 0) return name;
  const word = name.slice(0, cut);
  const tag = name.slice(cut + 3);
  if (tag === "und") return word;
  const label = tag
    .split("/")
    .map(
      (code) => languages[code] ?? languages[code.split("-")[0] ?? ""] ?? code,
    )
    .join(" / ");
  return `${word} · ${label}`;
}
