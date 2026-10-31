import { esc } from "../lib/md.ts";
import { gamesOfCountry, visibleGames } from "../lib/selectors.ts";
import type { Catalog } from "../types.ts";
import { gameButton } from "./game-button.ts";

export function countryView(
  catalog: Catalog,
  fam: string | null,
  iso: string,
): string {
  const games = gamesOfCountry(visibleGames(catalog.games, fam), iso);
  const plural = games.length > 1;
  const famNote = fam ? ` na família ${esc(catalog.families[fam] ?? fam)}` : "";

  return `<button type="button" class="back" data-home><span aria-hidden="true">←</span> Todos os países</button><h2>${esc(catalog.countries[iso]?.pt ?? iso)}</h2>
<p class="muted">${games.length} ${plural ? "jogos registrados" : "jogo registrado"}${famNote}</p>
<ul class="list">${games.map((g) => gameButton(catalog, g)).join("")}</ul>`;
}
