import type { Catalog, Game } from "../types.ts";
import { gameButton } from "./game-button.ts";

export function searchView(catalog: Catalog, results: Game[]): string {
  if (!results.length) return `<p class="muted">Nenhum jogo encontrado.</p>`;
  const count = `${results.length} ${results.length > 1 ? "resultados" : "resultado"}`;
  return `<h2>${count}</h2><ul class="list">${results.map((g) => gameButton(catalog, g)).join("")}</ul>`;
}
