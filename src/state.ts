import { gamesOfCountry, visibleGames } from "./lib/selectors.ts";
import type { Catalog } from "./types.ts";

/**
 * Everything the URL carries. `country` is the open country, or — when a game
 * is open — the country it was opened from (kept so "back" and the map
 * highlight work as in the prototype).
 */
export interface State {
  fam: string | null;
  country: string | null;
  game: string | null;
}

export function serializeState({ fam, country, game }: State): string {
  const query = new URLSearchParams();
  if (game && country) query.set("pais", country);
  if (fam) query.set("fam", fam);
  const qs = query.size ? `?${query}` : "";
  if (game) return `#/jogo/${game}${qs}`;
  if (country) return `#/pais/${country}${qs}`;
  return `#/${qs}`;
}

/** Drops whatever the catalog and the family filter cannot show. */
export function normalizeState(state: State, catalog: Catalog): State {
  const fam = state.fam && state.fam in catalog.families ? state.fam : null;
  const visible = visibleGames(catalog.games, fam);
  const countryOk =
    state.country !== null && gamesOfCountry(visible, state.country).length > 0;
  const country = countryOk ? state.country : null;
  const gameOk = visible.some((g) => g.id === state.game);
  if (gameOk) return { fam, country, game: state.game };
  return { fam, country: state.game ? null : country, game: null };
}

export function parseHash(hash: string, catalog: Catalog): State {
  const [path = "", search = ""] = hash.replace(/^#\/?/, "").split("?");
  const query = new URLSearchParams(search);
  const [kind, id] = path.split("/");
  const state: State = {
    fam: query.get("fam"),
    country: kind === "pais" ? (id ?? null) : query.get("pais"),
    game: kind === "jogo" ? (id ?? null) : null,
  };
  return normalizeState(state, catalog);
}
