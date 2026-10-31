// One-time extraction of the prototype's DATA into content/ (T-022).
// Run with: node scripts/once/extract-prototype.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { stringify } from "yaml";
import type { Game } from "../../src/types.ts";

const PROTOTYPE = "Atlas de jogos de tabuleiro tradicionais.html";
const DATA_PREFIX = "const DATA = ";

interface PrototypeData {
  games: Game[];
  fam: Record<string, string>;
  pt: Record<string, string>;
  num: Record<string, string>;
}

export function readPrototypeData(): PrototypeData {
  const line = readFileSync(PROTOTYPE, "utf8")
    .split("\n")
    .find((l) => l.startsWith(DATA_PREFIX));
  if (!line) throw new Error(`DATA not found in ${PROTOTYPE}`);
  return JSON.parse(line.slice(DATA_PREFIX.length).replace(/;\s*$/, ""));
}

function gameToMarkdown(game: Game): string {
  const { history, rules, ...frontmatter } = game;
  const sections = [
    history && `## História\n\n${history.trim()}`,
    rules && `## Regras\n\n${rules.trim()}`,
  ].filter(Boolean);
  const yaml = stringify(frontmatter, { lineWidth: 0 });
  return `---\n${yaml}---\n\n${sections.join("\n\n")}\n`;
}

function sortedJson(obj: Record<string, unknown>): string {
  const sorted = Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)),
  );
  return `${JSON.stringify(sorted, null, 2)}\n`;
}

function main(): void {
  const data = readPrototypeData();
  mkdirSync("content/games", { recursive: true });
  for (const game of data.games) {
    writeFileSync(`content/games/${game.id}.md`, gameToMarkdown(game));
  }
  writeFileSync("content/families.json", sortedJson(data.fam));
  const countries = Object.fromEntries(
    Object.entries(data.pt).map(([iso, pt]) => [
      iso,
      { pt, num: data.num[iso] },
    ]),
  );
  writeFileSync("content/countries.json", sortedJson(countries));
  console.log(`extracted ${data.games.length} games`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
