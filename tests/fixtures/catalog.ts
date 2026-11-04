import type { Catalog, Game } from "../../src/types.ts";

function game(id: string, fam: string[], countries: string[]): Game {
  return {
    id,
    title: id.toUpperCase(),
    names: [],
    fam,
    countries,
    cultures: [],
    board: "",
    pieces: "",
    players: "2",
    period: "",
    status: "documented",
    living: "desconhecido",
    sens: "nenhuma",
    ev: { kind: "unknown", date: "", ref: "" },
    recon: [],
    refs: [{ title: "Ref", url: "https://example.org" }],
    place: "",
    summary: "",
    history: "",
    rules: "",
  };
}

// GH: a, b, e, f (4 games) · NG: a, c (2) · MV: g (1) · d has no country
export const catalog: Catalog = {
  games: [
    game("a", ["alinhamento"], ["GH", "NG"]),
    game("b", ["alinhamento"], ["GH"]),
    game("c", ["mancala"], ["NG"]),
    game("d", ["mancala"], []),
    game("e", ["mancala"], ["GH"]),
    game("f", ["mancala"], ["GH"]),
    game("g", ["alinhamento"], ["MV"]),
  ],
  families: {
    alinhamento: {
      label: "Alinhamento",
      desc: "O objetivo é colocar peças suas em linha.",
    },
    mancala: { label: "Mancala", desc: "Você distribui as sementes." },
    vazia: { label: "Sem jogos", desc: "Família sem jogos." },
  },
  languages: { ak: "akan" },
  glossary: {
    "captura-por-salto": {
      termo: "captura por salto",
      def: "Pular por cima da peça do adversário.",
      variantes: ["pule por cima"],
    },
  },
  countries: {
    GH: { pt: "Gana", num: "288" },
    NG: { pt: "Nigéria", num: "566" },
    MV: { pt: "Maldivas", num: "462" },
    BR: { pt: "Brasil", num: "076" },
  },
};
