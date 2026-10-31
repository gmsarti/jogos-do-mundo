import { esc } from "../lib/md.ts";
import {
  countByCountry,
  gamesWithoutCountry,
  topCountries,
  visibleGames,
} from "../lib/selectors.ts";
import type { Catalog } from "../types.ts";
import { gameButton, gameCount } from "./game-button.ts";

const TOP_COUNTRIES = 8;

export function homeView(catalog: Catalog, fam: string | null): string {
  const games = visibleGames(catalog.games, fam);
  const countryTotal = Object.keys(countByCountry(games)).length;
  const withoutCountry = gamesWithoutCountry(games);

  const withoutCountrySection = withoutCountry.length
    ? `<h3>Sem país definido</h3><ul class="list">${withoutCountry.map((g) => gameButton(catalog, g)).join("")}</ul>`
    : "";
  const top = topCountries(games, TOP_COUNTRIES)
    .map(
      ([iso, n]) =>
        `<li><button type="button" data-iso="${esc(iso)}"><span>${esc(catalog.countries[iso]?.pt ?? iso)}</span><small>${gameCount(n)}</small></button></li>`,
    )
    .join("");

  return `<h2>${games.length} jogos, ${countryTotal} países</h2>
<p class="muted">Escolha um país no mapa. Jogos de povos antigos aparecem nos países onde estão hoje os sítios ou as comunidades.</p>
${withoutCountrySection}
<h3>Mais registrados</h3><ul class="list">${top}</ul>
<p class="note">Rascunho: regras e datas ainda passam por verificação. Trechos marcados “(a verificar)” ainda não foram conferidos com a fonte primária.</p>`;
}
