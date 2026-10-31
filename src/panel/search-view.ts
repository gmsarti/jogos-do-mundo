import { esc } from "../lib/md.ts";
import type { Catalog, Game } from "../types.ts";
import { gameButton } from "./game-button.ts";

/** `families`: matching [id, label] pairs; picking one filters the map. */
export function searchView(
  catalog: Catalog,
  results: Game[],
  families: [string, string][],
): string {
  const total = results.length + families.length;
  if (!total) return `<p class="muted">Nenhum resultado.</p>`;
  const count = `${total} ${total > 1 ? "resultados" : "resultado"}`;
  const familyList = families.length
    ? `<h3>Famílias</h3><ul class="list">${families
        .map(
          ([id, label]) =>
            `<li><button type="button" data-fam="${esc(id)}"><span>${esc(label)}</span><small>filtrar o mapa</small></button></li>`,
        )
        .join("")}</ul>`
    : "";
  const gameList = results.length
    ? `<h3>Jogos</h3><ul class="list">${results.map((g) => gameButton(catalog, g)).join("")}</ul>`
    : "";
  return `<h2>${count}</h2>${familyList}${gameList}`;
}
