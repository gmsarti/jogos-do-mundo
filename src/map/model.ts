import { colorBand } from "../lib/selectors.ts";
import type { Countries, Game } from "../types.ts";

/** Countries too small to click on the map; they get a dot when they have games. */
export const SMALL_COUNTRIES = [
  "MV",
  "SG",
  "CY",
  "LS",
  "RW",
  "BZ",
  "BJ",
  "GM",
  "BI",
  "CV",
  "AG",
  "BB",
];

export function countryClass(count: number, selected: boolean): string {
  const band = colorBand(count);
  const has = band ? ` has c${band}` : "";
  return `country${has}${selected ? " sel" : ""}`;
}

export function dotClass(selected: boolean): string {
  return selected ? "dot sel" : "dot";
}

export function visibleDots(
  small: string[],
  counts: Record<string, number>,
): Set<string> {
  return new Set(small.filter((iso) => (counts[iso] ?? 0) > 0));
}

export function tooltipText(name: string, count: number): string {
  return `${name}: ${count} ${count > 1 ? "jogos" : "jogo"}`;
}

/** TopoJSON numeric id → ISO-2. */
export function isoByNum(countries: Countries): Record<string, string> {
  return Object.fromEntries(
    Object.entries(countries).map(([iso, c]) => [c.num, iso]),
  );
}

const FOCUS_PADDING = 0.8;
const FOCUS_MAX_SCALE = 8;

/** Countries the map should zoom to: the open game's, else the open country. */
export function focusIsos(
  games: Game[],
  gameId: string | null,
  country: string | null,
): string[] {
  const game = games.find((g) => g.id === gameId);
  if (game) return game.countries;
  return country ? [country] : [];
}

/** d3-zoom transform that centers `bounds` ([[x0, y0], [x1, y1]]) in a w×h box. */
export function focusTransform(
  bounds: [[number, number], [number, number]] | null,
  w: number,
  h: number,
): { k: number; x: number; y: number } {
  if (!bounds) return { k: 1, x: 0, y: 0 };
  const [[x0, y0], [x1, y1]] = bounds;
  const fit = FOCUS_PADDING / Math.max((x1 - x0) / w, (y1 - y0) / h, 1e-6);
  const k = Math.min(FOCUS_MAX_SCALE, Math.max(1, fit));
  return {
    k,
    x: w / 2 - (k * (x0 + x1)) / 2,
    y: h / 2 - (k * (y0 + y1)) / 2,
  };
}
