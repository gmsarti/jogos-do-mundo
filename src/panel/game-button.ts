import { esc } from "../lib/md.ts";
import type { Catalog, Game } from "../types.ts";
import { STATUS_LABEL, statusDot } from "./status.ts";

export function gameCount(count: number): string {
  return `${count} ${count > 1 ? "jogos" : "jogo"}`;
}

export function gameButton(catalog: Catalog, game: Game): string {
  const families = game.fam.map((f) => catalog.families[f] ?? f).join(", ");
  return `<li><button type="button" data-id="${esc(game.id)}"><span>${statusDot(game.status)}${esc(game.title)}<span class="sr-only">, ${STATUS_LABEL[game.status]}</span></span><small>${esc(families)}</small></button></li>`;
}
