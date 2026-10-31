import { colorBand } from "../lib/selectors.ts";
import type { Countries } from "../types.ts";

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
