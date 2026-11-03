import { boardShapes } from "../boards/geometry.ts";
import { boardSvg } from "../boards/svg.ts";
import { esc, md } from "../lib/md.ts";
import { localName } from "../lib/names.ts";
import type { Catalog, Game } from "../types.ts";
import { STATUS_LABEL, statusHelp } from "./status.ts";

function section(title: string, body: string): string {
  return body ? `<h3>${title}</h3>${body}` : "";
}

function prose(title: string, text = ""): string {
  return section(title, text ? `<div class="prose">${md(text)}</div>` : "");
}

function boardFigure(game: Game): string {
  if (!game.diagram) return "";
  const svg = boardSvg(boardShapes(game.diagram), `Tabuleiro de ${game.title}`);
  const note = game.diagram.note
    ? `<figcaption>${esc(game.diagram.note)}</figcaption>`
    : "";
  return `<figure class="board-figure">${svg}${note}</figure>`;
}

// The PDFs are built by `make kits` for every game with rules; the link is relative to the site root
function kitLink(game: Game): string {
  if (!game.rules) return "";
  const label = game.diagram
    ? "Baixar regras e tabuleiro (PDF)"
    : "Baixar regras (PDF)";
  return `<p class="kit-link"><a href="kits/${esc(game.id)}.pdf" download>${label}</a><small>A4, imprima em tamanho real (100%)</small></p>`;
}

/** `from` is the country the game was opened from, used by the back button. */
export function gameView(
  catalog: Catalog,
  game: Game,
  from: string | null,
): string {
  const countryName = (iso: string) => catalog.countries[iso]?.pt ?? iso;
  const families = game.fam.map((f) => catalog.families[f] ?? f).join(", ");
  const evidence =
    [game.ev.date, game.ev.ref].filter(Boolean).join(" — ") || "a levantar";
  const countries = game.countries.map(countryName).join(", ") || "—";
  const place = game.place ? ` (${esc(game.place)})` : "";
  // "nenhuma" is curation bookkeeping; anything else is worth a line
  const sens =
    game.sens === "nenhuma"
      ? ""
      : `<dt>Sensibilidade</dt><dd>${esc(game.sens)}</dd>`;
  const recon = game.recon.length
    ? `<dt>Reconstrução</dt><dd>${esc(game.recon.join("; "))}</dd>`
    : "";
  const refs = game.refs
    .map(
      (r) =>
        `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.title)}</a></li>`,
    )
    .join("");

  return `<button type="button" class="back" data-back><span aria-hidden="true">←</span> ${from ? esc(countryName(from)) : "Voltar"}</button>
<h2>${esc(game.title)}</h2>
<p><span class="badge b-${game.status}">${STATUS_LABEL[game.status]}</span><span class="tag">${esc(families)}</span></p>
${statusHelp()}
${game.names.length ? `<p class="muted">${game.names.map((n) => esc(localName(n, catalog.languages))).join("<br>")}</p>` : ""}
<div class="prose">${md(game.summary)}</div>
${boardFigure(game)}
${kitLink(game)}
<dl>
<dt>Tabuleiro</dt><dd>${esc(game.board)}</dd>
<dt>Peças</dt><dd>${esc(game.pieces)}</dd>
<dt>Jogadores</dt><dd>${esc(game.players)}</dd>
<dt>Povos</dt><dd>${esc(game.cultures.join(", "))}</dd>
<dt>Países</dt><dd>${esc(countries)}${place}</dd>
<dt>Evidência</dt><dd>${esc(evidence)}</dd>
<dt>Ainda é jogado?</dt><dd>${esc(game.living)}</dd>
${sens}
${recon}
</dl>
${prose("História", game.history)}
${prose("Do que você vai precisar?", game.needs)}
${prose("Como jogar?", game.howto)}
${prose("Para quem conduz", game.guide)}
${prose("Regras", game.rules)}
${section("Referências", refs ? `<ul class="prose">${refs}</ul>` : "")}`;
}
