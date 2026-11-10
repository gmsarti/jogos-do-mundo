import { boardShapes } from "../boards/geometry.ts";
import { boardSvg } from "../boards/svg.ts";
import { termsIn } from "../lib/glossary.ts";
import { esc, md } from "../lib/md.ts";
import { localName } from "../lib/names.ts";
import { orderRefs, refNote } from "../lib/refs.ts";
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

// The glossary words used in "Como jogar?" and "Regras"
function wordsBox(catalog: Catalog, game: Game): string {
  const terms = termsIn(catalog.glossary, `${game.howto ?? ""}\n${game.rules}`);
  if (!terms.length) return "";
  const items = terms
    .map((t) => `<dt>${esc(t.termo)}</dt><dd>${esc(t.def)}</dd>`)
    .join("");
  return `<div class="words"><h3>Palavras do jogo</h3><dl>${items}</dl></div>`;
}

// One paragraph per family: its label and how games of that kind are played
function kindOfGame(catalog: Catalog, game: Game): string {
  const items = game.fam
    .map((f) => catalog.families[f])
    .filter((f) => f !== undefined)
    .map((f) => `<p><strong>${esc(f.label)}.</strong> ${esc(f.desc)}</p>`)
    .join("");
  return section("Tipo de jogo", items && `<div class="prose">${items}</div>`);
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
  const families = game.fam
    .map((f) => catalog.families[f]?.label ?? f)
    .join(", ");
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
  // The box closes "Como jogar?"; games without it get the box after "Regras"
  const words = wordsBox(catalog, game);
  const refs = orderRefs(game.refs)
    .map((r) => {
      const note = refNote(r, catalog.languages);
      return `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.title)}</a>${note ? ` <small>(${esc(note)})</small>` : ""}</li>`;
    })
    .join("");

  // Without "Como jogar?", "Regras" is still what the reader plays from, so it stays in the first layer
  const rules = prose("Regras", game.rules);

  return `<button type="button" class="back" data-back><span aria-hidden="true">←</span> ${from ? esc(countryName(from)) : "Voltar"}</button>
<h2>${esc(game.title)}</h2>
<p><span class="badge b-${game.status}">${STATUS_LABEL[game.status]}</span><span class="tag">${esc(families)}</span></p>
${game.names.length ? `<p class="muted">${game.names.map((n) => esc(localName(n, catalog.languages))).join("<br>")}</p>` : ""}
<div class="prose">${md(game.summary)}</div>
${boardFigure(game)}
${kitLink(game)}
<dl>
<dt>Países</dt><dd>${esc(countries)}${place}</dd>
<dt>Povos</dt><dd>${esc(game.cultures.join(", "))}</dd>
</dl>
${kindOfGame(catalog, game)}
${prose("Do que você vai precisar?", game.needs)}
${prose("Como jogar?", game.howto)}
${game.howto ? words : ""}
${prose("Para quem conduz", game.guide)}
${prose("História", game.history)}
${game.howto ? "" : `${rules}${words}`}
<details class="more"><summary>Saiba mais: regras completas, fontes e curadoria</summary>
${statusHelp()}
<h3>Ficha técnica</h3>
<dl>
<dt>Tabuleiro</dt><dd>${esc(game.board)}</dd>
<dt>Peças</dt><dd>${esc(game.pieces)}</dd>
<dt>Jogadores</dt><dd>${esc(game.players)}</dd>
<dt>Evidência</dt><dd>${esc(evidence)}</dd>
<dt>Ainda é jogado?</dt><dd>${esc(game.living)}</dd>
${sens}
${recon}
</dl>
${game.howto ? rules : ""}
${section("Referências", refs ? `<ul class="prose">${refs}</ul>` : "")}
</details>`;
}
