import { esc, md } from "../lib/md.ts";
import type { Catalog, Game, Status } from "../types.ts";

const STATUS_LABEL: Record<Status, string> = {
  documented: "regra documentada",
  reconstructed: "regra reconstruída",
  partial: "regra parcial",
  unknown: "regra desconhecida",
};

function section(title: string, body: string): string {
  return body ? `<h3>${title}</h3>${body}` : "";
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
  const recon = game.recon.length
    ? `<dt>Reconstrução</dt><dd>${esc(game.recon.join("; "))}</dd>`
    : "";
  const refs = game.refs
    .map(
      (r) =>
        `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.title)}</a></li>`,
    )
    .join("");

  return `<button type="button" class="back" data-back>${from ? esc(countryName(from)) : "Voltar"}</button>
<h2>${esc(game.title)}</h2>
<p><span class="badge b-${game.status}">${STATUS_LABEL[game.status]}</span><span class="badge b-unknown">${esc(families)}</span></p>
${game.names.length ? `<p class="muted">${game.names.map(esc).join("<br>")}</p>` : ""}
<div class="prose">${md(game.summary)}</div>
<dl>
<dt>Tabuleiro</dt><dd>${esc(game.board)}</dd>
<dt>Peças</dt><dd>${esc(game.pieces)}</dd>
<dt>Jogadores</dt><dd>${esc(game.players)}</dd>
<dt>Povos</dt><dd>${esc(game.cultures.join(", "))}</dd>
<dt>Países</dt><dd>${esc(countries)}${place}</dd>
<dt>Evidência</dt><dd>${esc(evidence)}</dd>
<dt>Tradição viva</dt><dd>${esc(game.living)}</dd>
<dt>Sensibilidade</dt><dd>${esc(game.sens)}</dd>
${recon}
</dl>
${section("História", game.history ? `<div class="prose">${md(game.history)}</div>` : "")}
${section("Regras", game.rules ? `<div class="prose">${md(game.rules)}</div>` : "")}
${section("Referências", refs ? `<ul class="prose">${refs}</ul>` : "")}`;
}
