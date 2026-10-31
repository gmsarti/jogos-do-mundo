import { esc } from "../lib/md.ts";
import type { Catalog } from "../types.ts";

function option(
  label: string,
  fam: string,
  count: number,
  pressed: boolean,
): string {
  return `<li><button type="button" data-fam="${esc(fam)}" aria-pressed="${pressed}"><span>${esc(label)}</span><small>${count}</small></button></li>`;
}

/** Text of the menu button: the active family, or "todas". */
export function familyLabel(catalog: Catalog, fam: string | null): string {
  return `Família: ${fam ? (catalog.families[fam] ?? fam) : "todas"}`;
}

/** One option per family that has games, with its game count, plus "all" (empty `data-fam`). */
export function familyMenuView(catalog: Catalog, fam: string | null): string {
  const counts: Record<string, number> = {};
  for (const g of catalog.games)
    for (const f of g.fam) counts[f] = (counts[f] ?? 0) + 1;
  const families = Object.entries(catalog.families)
    .filter(([id]) => counts[id])
    .map(([id, label]) => option(label, id, counts[id] ?? 0, fam === id));
  return [
    option("Todas as famílias", "", catalog.games.length, fam === null),
    ...families,
  ].join("");
}
