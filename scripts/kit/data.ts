import { localName } from "../../src/lib/names.ts";
import { STATUS_HELP, STATUS_LABEL } from "../../src/panel/status.ts";
import type { Catalog, Game, Reference } from "../../src/types.ts";
import { type Block, mdBlocks } from "./blocks.ts";

export const SITE_URL = "https://jogosdomundo.com.br/";

/** Everything the Typst template (kit.typ) prints, already in words. */
export interface KitData {
  title: string;
  family: string;
  status: string;
  statusHelp: string;
  summary: Block[];
  facts: [string, string][];
  rules: Block[];
  history: Block[];
  refs: Reference[];
  url: string;
  board: boolean;
}

function facts(catalog: Catalog, game: Game): [string, string][] {
  const names = game.names.map((n) => localName(n, catalog.languages));
  const countries = game.countries
    .map((iso) => catalog.countries[iso]?.pt ?? iso)
    .join(", ");
  const place = game.place ? ` (${game.place})` : "";
  const note = game.diagram?.note ? ` (desenho: ${game.diagram.note})` : "";

  const rows: [string, string][] = [
    ["Jogadores", game.players],
    ["Peças", game.pieces],
    ["Tabuleiro", game.board + note],
  ];
  if (names.length) rows.push(["Nomes locais", names.join(", ")]);
  if (game.cultures.length) rows.push(["Povos", game.cultures.join(", ")]);
  if (countries) rows.push(["Países", countries + place]);
  rows.push(["Ainda é jogado?", game.living]);
  // Same choices as the game panel: "nenhuma" is curation bookkeeping
  if (game.sens !== "nenhuma") rows.push(["Sensibilidade", game.sens]);
  if (game.recon.length) rows.push(["Reconstrução", game.recon.join("; ")]);
  return rows;
}

export function kitData(catalog: Catalog, game: Game): KitData {
  return {
    title: game.title,
    family: game.fam.map((f) => catalog.families[f]?.label ?? f).join(", "),
    status: STATUS_LABEL[game.status],
    statusHelp: STATUS_HELP[game.status],
    summary: mdBlocks(game.summary),
    facts: facts(catalog, game),
    rules: mdBlocks(game.rules),
    history: mdBlocks(game.history),
    refs: game.refs,
    url: `${SITE_URL}#/jogo/${game.id}`,
    board: game.diagram !== undefined,
  };
}
