import type { Game } from "../src/types.ts";

const MARK = /a verificar/gi;
const MAX_LINE = 240;

/** Every text of a game that can carry a mark, in the order the game page shows them. */
function fields(game: Game): [label: string, text: string][] {
  return [
    ["Resumo", game.summary],
    ["Nomes", game.names.join("\n")],
    ["Povos", game.cultures.join("\n")],
    ["Lugar", game.place],
    ["Tabuleiro", game.board],
    ["Peças", game.pieces],
    ["Jogadores", game.players],
    ["Período", game.period],
    ["Ainda é jogado?", game.living],
    ["Sensibilidade", game.sens],
    ["Evidência", [game.ev.date, game.ev.ref].join("\n")],
    ["Reconstrução", game.recon.join("\n")],
    ["Do que você vai precisar?", game.needs ?? ""],
    ["Como jogar?", game.howto ?? ""],
    ["Para quem conduz", game.guide ?? ""],
    ["História", game.history],
    ["Regras", game.rules],
  ];
}

const countMarks = (text: string): number => text.match(MARK)?.length ?? 0;

/** A long line is cut around its first mark. */
function excerpt(line: string): string {
  const text = line.trim().replace(/^[-*] /, "");
  if (text.length <= MAX_LINE) return text;
  const at = text.search(MARK);
  const from = Math.max(0, at - MAX_LINE / 2);
  const cut = text.slice(from, from + MAX_LINE);
  return `${from > 0 ? "…" : ""}${cut}…`;
}

interface Found {
  game: Game;
  total: number;
  sections: { label: string; lines: string[] }[];
}

function find(game: Game): Found {
  const sections = fields(game)
    .map(([label, text]) => ({
      label,
      lines: text
        .split("\n")
        .filter((line) => countMarks(line) > 0)
        .map(excerpt),
    }))
    .filter((s) => s.lines.length > 0);
  const total = fields(game).reduce((n, [, text]) => n + countMarks(text), 0);
  return { game, total, sections };
}

const plural = (n: number, one: string, many: string): string =>
  `${n} ${n === 1 ? one : many}`;

function gameBlock({ game, total, sections }: Found): string {
  const sources = game.refs.map((r) => `[${r.title}](${r.url})`).join("; ");
  const body = sections
    .map((s) => `**${s.label}**\n\n${s.lines.map((l) => `- ${l}`).join("\n")}`)
    .join("\n\n");
  return `### ${game.title} (\`${game.id}\`): ${plural(total, "marca", "marcas")}

Status: ${game.status} · Fontes da ficha: ${sources}

${body}`;
}

/**
 * Markdown report of every "(a verificar)" left in the games and of the games with
 * `unknown` status. Games with fewer marks come first, so the ones closest to clean
 * are done first. No dates or counters that change on their own: the file only
 * changes when the content does.
 */
export function buildReport(games: Game[]): string {
  const found = games
    .map(find)
    .filter((f) => f.total > 0)
    .sort((a, b) => a.total - b.total || a.game.id.localeCompare(b.game.id));
  const unknown = games.filter((g) => g.status === "unknown");
  const marks = found.reduce((n, f) => n + f.total, 0);

  const table = found
    .map((f) => `| \`${f.game.id}\` | ${f.total} | ${f.game.status} |`)
    .join("\n");
  const unknownList = unknown
    .map((g) => `- \`${g.id}\` (${g.title})`)
    .join("\n");

  return `# Relatório de "(a verificar)" e de status \`unknown\`

Gerado por \`make report\`. Não edite à mão: confira a fonte, corrija a ficha em \`content/games/\` e rode \`make report\` de novo. Os jogos com menos marcas vêm primeiro.

${plural(marks, "marca", "marcas")} em ${plural(found.length, "jogo", "jogos")} (de ${games.length}). ${plural(unknown.length, "jogo", "jogos")} com status \`unknown\`.

## Resumo

| Jogo | Marcas | Status |
| --- | --- | --- |
${table}

## Jogos com status \`unknown\`

${unknownList || "Nenhum."}

## Por jogo

${found.map(gameBlock).join("\n\n")}
`;
}
