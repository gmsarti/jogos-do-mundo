import { describe, expect, test } from "vitest";
import { countryView } from "../../src/panel/country-view.ts";
import { gameView } from "../../src/panel/game-view.ts";
import { homeView } from "../../src/panel/home-view.ts";
import type { Catalog, Game } from "../../src/types.ts";
import { catalog } from "../fixtures/catalog.ts";

function gameById(id: string): Game {
  const found = catalog.games.find((g) => g.id === id);
  if (!found) throw new Error(`fixture game ${id} missing`);
  return found;
}

describe("homeView", () => {
  test("shows totals of games and countries", () => {
    expect(homeView(catalog, null)).toContain("7 jogos, 3 países");
  });

  test("totals follow the family filter", () => {
    expect(homeView(catalog, "mancala")).toContain("4 jogos, 2 países");
  });

  test("labels the ranking as what the catalog holds so far", () => {
    expect(homeView(catalog, null)).toContain(
      "Países com mais jogos no catálogo até agora",
    );
  });

  test("warns that the catalog is still a draft", () => {
    expect(homeView(catalog, null)).toContain("Rascunho");
  });

  test("lists games without a country", () => {
    const html = homeView(catalog, null);
    expect(html).toContain("Sem país definido");
    expect(html).toContain('data-id="d"');
  });

  test("omits the section when every game has a country", () => {
    expect(homeView(catalog, "alinhamento")).not.toContain("Sem país definido");
  });

  test("ranks countries with their game count", () => {
    const html = homeView(catalog, null);
    expect(html).toContain('data-iso="GH"');
    expect(html).toContain("4 jogos");
    expect(html).toContain("1 jogo<");
    expect(html.indexOf('data-iso="GH"')).toBeLessThan(
      html.indexOf('data-iso="NG"'),
    );
  });
});

describe("countryView", () => {
  test("shows the country name, count and its games with families", () => {
    const html = countryView(catalog, null, "NG");
    expect(html).toContain("<h2>Nigéria</h2>");
    expect(html).toContain("2 jogos registrados");
    expect(html).toContain('data-id="a"');
    expect(html).toContain('data-id="c"');
    expect(html).toContain("Alinhamento");
    expect(html).toContain("Mancala");
  });

  test("shows each game's status as text next to the dot", () => {
    const html = countryView(catalog, null, "NG");
    expect(html).toContain(
      '<small class="st-label"><i class="st st-documented" aria-hidden="true"></i>Regras registradas</small>',
    );
  });

  test("uses the singular for one game", () => {
    expect(countryView(catalog, null, "MV")).toContain("1 jogo registrado");
  });

  test("mentions the family filter and hides other games", () => {
    const html = countryView(catalog, "mancala", "NG");
    expect(html).toContain("na família Mancala");
    expect(html).not.toContain('data-id="a"');
  });

  test("has a button back to the home", () => {
    expect(countryView(catalog, null, "NG")).toContain("data-home");
  });

  test("back to the home shows an arrow hidden from screen readers", () => {
    expect(countryView(catalog, null, "NG")).toContain(
      '<span aria-hidden="true">←</span> Todos os países',
    );
  });
});

describe("gameView", () => {
  const full: Game = {
    ...gameById("a"),
    names: ["achi · ak"],
    cultures: ["ganenses"],
    board: "3×3",
    pieces: "3 pedras",
    summary: "Resumo **forte**.",
    history: "Contexto.",
    rules: "- passo um",
    place: "Norte",
    recon: ["Fulano (2020)"],
    ev: { kind: "text", date: "séc. XX", ref: "Ludii" },
  };

  test("shows every field of the sheet", () => {
    const html = gameView(catalog, full, null);
    expect(html).toContain("<h2>A</h2>");
    expect(html).toContain("Regras registradas");
    expect(html).toContain("achi · akan");
    expect(html).toContain("<strong>forte</strong>");
    expect(html).toContain("3×3");
    expect(html).toContain("3 pedras");
    expect(html).toContain("ganenses");
    expect(html).toContain("Gana, Nigéria (Norte)");
    expect(html).toContain("séc. XX — Ludii");
    expect(html).toContain("Fulano (2020)");
    expect(html).toContain("<h3>História</h3>");
    expect(html).toContain("<h3>Regras</h3>");
    expect(html).toContain("<li>passo um</li>");
  });

  test("shows the teaching sections between História and Regras", () => {
    const html = gameView(
      catalog,
      { ...full, needs: "- 9 pedras", howto: "1. Coloque", guide: "Dica" },
      null,
    );
    const order = [
      "<h3>História</h3>",
      "<h3>Do que você vai precisar?</h3>",
      "<h3>Como jogar?</h3>",
      "<h3>Para quem conduz</h3>",
      "<h3>Regras</h3>",
    ].map((h) => html.indexOf(h));
    expect(order.every((i) => i >= 0)).toBe(true);
    expect(order).toEqual([...order].sort((a, b) => a - b));
    expect(html).toContain("<li>9 pedras</li>");
  });

  test("explains the glossary words used in the rules", () => {
    const html = gameView(
      catalog,
      { ...full, rules: "1. Pule por cima da peça." },
      null,
    );
    expect(html).toContain("<h3>Palavras do jogo</h3>");
    expect(html).toContain("<dt>captura por salto</dt>");
    expect(html).toContain("<dd>Pular por cima da peça do adversário.</dd>");
  });

  test("puts the glossary words right after Como jogar?", () => {
    const html = gameView(
      catalog,
      { ...full, howto: "1. Faça uma captura por salto." },
      null,
    );
    const words = html.indexOf("Palavras do jogo");
    expect(words).toBeGreaterThan(html.indexOf("Como jogar?"));
    expect(words).toBeLessThan(html.indexOf("<h3>Regras</h3>"));
  });

  test("links to references safely", () => {
    const html = gameView(catalog, full, null);
    expect(html).toContain('href="https://example.org"');
    expect(html).toContain('rel="noopener"');
  });

  test("omits empty sections", () => {
    const html = gameView(catalog, gameById("b"), null);
    expect(html).not.toContain("História");
    expect(html).not.toContain("<h3>Regras</h3>");
    expect(html).not.toContain("Como jogar?");
    expect(html).not.toContain("Palavras do jogo");
    expect(html).not.toContain("Reconstrução");
  });

  test("falls back to 'a levantar' without evidence", () => {
    expect(gameView(catalog, gameById("b"), null)).toContain("a levantar");
  });

  test("back button names the country the game was opened from", () => {
    expect(gameView(catalog, full, "GH")).toContain(" Gana</button>");
    expect(gameView(catalog, full, null)).toContain(" Voltar</button>");
  });

  test("explains the four rule status levels next to the badge", () => {
    const html = gameView(catalog, full, null);
    expect(html).toContain("<details");
    expect(html).toContain("O que significa?");
    for (const text of [
      "Regras registradas",
      "Alguém registrou como se joga, e a fonte foi conferida.",
      "Regras incompletas",
      "Dá para jogar em boa parte, mas algum detalhe não foi registrado.",
      "Regras reconstruídas",
      "Ninguém registrou as regras antigas.",
      "Regras desconhecidas",
      "Ainda não sabemos como se jogava.",
    ])
      expect(html).toContain(text);
  });

  test("back button shows an arrow hidden from screen readers", () => {
    expect(gameView(catalog, full, "GH")).toContain(
      '<span aria-hidden="true">←</span> Gana',
    );
  });

  test("explains the kind of game with each family's description", () => {
    const html = gameView(
      catalog,
      { ...full, fam: ["alinhamento", "mancala"] },
      null,
    );
    expect(html).toContain("<h3>Tipo de jogo</h3>");
    expect(html).toContain(
      "<p><strong>Alinhamento.</strong> O objetivo é colocar peças suas em linha.</p>",
    );
    expect(html).toContain(
      "<p><strong>Mancala.</strong> Você distribui as sementes.</p>",
    );
  });

  test("shows families as a neutral tag, not with a status style", () => {
    const html = gameView(catalog, full, null);
    expect(html).toContain('<span class="tag">Alinhamento</span>');
    expect(html).not.toContain('b-unknown">Alinhamento');
  });

  test("asks whether the game is still played", () => {
    expect(gameView(catalog, full, null)).toContain(
      "<dt>Ainda é jogado?</dt><dd>desconhecido</dd>",
    );
  });

  test("hides sensitivity when there is none", () => {
    expect(gameView(catalog, full, null)).not.toContain("Sensibilidade");
  });

  test("shows sensitivity when there is something to say", () => {
    const html = gameView(catalog, { ...full, sens: "ritual" }, null);
    expect(html).toContain("<dt>Sensibilidade</dt><dd>ritual</dd>");
  });

  test("escapes text coming from the content", () => {
    const evil: Game = {
      ...gameById("b"),
      title: "<img src=x onerror=alert(1)>",
      board: '<script>alert("x")</script>',
      refs: [{ title: "<b>t</b>", url: 'https://x.org/"onclick="1' }],
    };
    const html = gameView(catalog, evil, null);
    expect(html).not.toContain("<img");
    expect(html).not.toContain("<script");
    expect(html).not.toContain("<b>");
    expect(html).not.toContain('"onclick="');
  });

  test("tolerates a country missing from the catalog", () => {
    const lonely: Catalog = { ...catalog, countries: {} };
    expect(gameView(lonely, gameById("a"), null)).toContain("GH, NG");
  });

  test("draws the board when the game has a diagram", () => {
    const drawn: Game = {
      ...full,
      diagram: { type: "points", rows: 3, cols: 3, diagonals: "alternate" },
    };
    const html = gameView(catalog, drawn, null);
    expect(html).toContain('<figure class="board-figure">');
    expect(html).toContain('aria-label="Tabuleiro de A"');
    expect(gameView(catalog, full, null)).not.toContain("<svg");
  });

  test("says which variant the drawing shows", () => {
    const drawn: Game = {
      ...full,
      diagram: { type: "grid", rows: 5, cols: 5, note: "variante <5×5>" },
    };
    expect(gameView(catalog, drawn, null)).toContain(
      "<figcaption>variante &lt;5×5&gt;</figcaption>",
    );
  });

  test("links the printable kit when the game has rules", () => {
    const html = gameView(catalog, full, null);
    expect(html).toContain('href="kits/a.pdf"');
    expect(html).toContain("Baixar regras (PDF)");
    expect(gameView(catalog, gameById("b"), null)).not.toContain("kits/");
  });

  test("names the board in the kit link when there is a drawing", () => {
    const drawn: Game = {
      ...full,
      diagram: { type: "mill", diagonals: false },
    };
    expect(gameView(catalog, drawn, null)).toContain(
      "Baixar regras e tabuleiro (PDF)",
    );
  });
});
