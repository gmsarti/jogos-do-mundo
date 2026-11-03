import type { Glossary, GlossaryEntry } from "../types.ts";
import { fold } from "./selectors.ts";

/** Folded text with every run of non-letters turned into one space, padded so words can be matched whole. */
function words(text: string): string {
  return ` ${fold(text)
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()} `;
}

/** Entries whose term or a variant appears in `text` as whole words, ignoring accents and case. */
export function termsIn(glossary: Glossary, text: string): GlossaryEntry[] {
  const haystack = words(text);
  return Object.values(glossary).filter((entry) =>
    [entry.termo, ...entry.variantes].some((w) => haystack.includes(words(w))),
  );
}
