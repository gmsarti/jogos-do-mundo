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
    alinhamento: "Alinhamento",
    mancala: "Mancala",
    vazia: "Sem jogos",
  },
  countries: {
    GH: { pt: "Gana", num: "288" },
    NG: { pt: "Nigéria", num: "566" },
    MV: { pt: "Maldivas", num: "462" },
    BR: { pt: "Brasil", num: "076" },
  },
};
