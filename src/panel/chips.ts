import { esc } from "../lib/md.ts";
import type { Catalog } from "../types.ts";

function chip(label: string, fam: string, pressed: boolean): string {
  return `<button type="button" class="chip" data-fam="${esc(fam)}" aria-pressed="${pressed}">${esc(label)}</button>`;
}

/** One chip per family that has games, plus "all" (empty `data-fam`). */
export function chipsView(catalog: Catalog, fam: string | null): string {
  const used = new Set(catalog.games.flatMap((g) => g.fam));
  const families = Object.entries(catalog.families)
    .filter(([id]) => used.has(id))
    .map(([id, label]) => chip(label, id, fam === id));
  return [chip("Todas as famílias", "", fam === null), ...families].join("");
}
