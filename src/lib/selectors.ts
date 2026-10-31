import type { Game } from "../types.ts";

export function visibleGames(games: Game[], fam: string | null): Game[] {
  return fam ? games.filter((g) => g.fam.includes(fam)) : games;
}

export function gamesOfCountry(games: Game[], iso: string): Game[] {
  return games.filter((g) => g.countries.includes(iso));
}

export function gamesWithoutCountry(games: Game[]): Game[] {
  return games.filter((g) => g.countries.length === 0);
}

export function countByCountry(games: Game[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const game of games) {
    for (const iso of game.countries) counts[iso] = (counts[iso] ?? 0) + 1;
  }
  return counts;
}

/** Color band of a country: 0 = no games, 1 = one game, 2 = 2–3, 3 = 4 or more. */
export function colorBand(count: number): 0 | 1 | 2 | 3 {
  if (count >= 4) return 3;
  if (count >= 2) return 2;
  return count === 1 ? 1 : 0;
}

/** Countries with the most games, ties broken by ISO code. */
export function topCountries(games: Game[], limit: number): [string, number][] {
  return Object.entries(countByCountry(games))
    .sort(([isoA, a], [isoB, b]) => b - a || isoA.localeCompare(isoB))
    .slice(0, limit);
}

function fold(text: string): string {
  return text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

/** Games whose title or local names contain the query, ignoring accents and case. */
export function searchGames(games: Game[], query: string): Game[] {
  const needle = fold(query.trim());
  if (!needle) return [];
  return games.filter((g) =>
    [g.title, ...g.names].some((name) => fold(name).includes(needle)),
  );
}

/** Families with games whose label matches the query, as [id, label]. */
export function searchFamilies(
  families: Record<string, string>,
  games: Game[],
  query: string,
): [string, string][] {
  const needle = fold(query.trim());
  if (!needle) return [];
  const used = new Set(games.flatMap((g) => g.fam));
  return Object.entries(families).filter(
    ([id, label]) => used.has(id) && fold(label).includes(needle),
  );
}
