# src/ — Arquitetura do App

Regras específicas da pasta `src/`. As regras globais (KISS, TDD, tokens, acessibilidade, segurança) estão em [`../AGENTS.md`](../AGENTS.md) e valem aqui também.

## Módulos

| Caminho | Papel |
| --- | --- |
| `main.ts` | Bootstrap: carrega catálogo (import dinâmico) e geo (`fetch`), cria o mapa, liga os eventos e chama `render()` |
| `state.ts` | `State` (`fam`, `country`, `game`), `parseHash`, `serializeState` e `normalizeState` — funções puras |
| `types.ts` | Tipos `Game`, `Catalog` etc., espelham `scripts/schema.ts` |
| `lib/md.ts` | `esc()` (escape de HTML) e `md()` (mini-Markdown seguro) |
| `lib/selectors.ts` | Seletores puros sobre `Game[]`: filtro por família, por país, contagens, faixa de cor, ranking |
| `map/model.ts` | Lógica pura do mapa: classe CSS de cada país, quais pontos aparecem, texto do tooltip |
| `map/render.ts` | Único lugar com D3: desenha o SVG uma vez e só troca classes em `paint()` |
| `panel/*-view.ts`, `panel/chips.ts` | Views: recebem `catalog` e dados, devolvem uma string HTML |
| `styles/` | `tokens.css` (cores, fontes), `base.css`, `layout.css`, `map.css`, `panel.css` |

## Fluxo de estado

A URL é a única fonte de verdade:

1. Um clique (chip, país no mapa, botão do painel) chama `go(next)` em `main.ts`
2. `go` normaliza o estado, serializa e só atribui `location.hash`
3. `hashchange` faz `parseHash` → `render()`: chips, `map.paint()` e painel

Voltar e avançar do navegador funcionam pelo mesmo caminho. O `parseHash` descarta tudo que o catálogo ou o filtro não mostram (país sem jogos no filtro, jogo oculto, família inexistente) e cai na home.

Formato das rotas: `#/`, `#/pais/GH`, `#/jogo/achi`, com `?fam=<familia>` e, no jogo, `?pais=<ISO>` (país de onde ele foi aberto, para o botão voltar).

## Padrões de UI

- **Views são funções puras** `(catalog, ...dados) => string`. Todo texto do conteúdo passa por `esc()` ou `md()` antes de entrar no HTML
- **Eventos por delegação** no `#chips` e no `#panel`, lendo `data-fam`, `data-id`, `data-iso`, `data-home`, `data-back`. As views não registram handlers
- **Mapa:** os países são desenhados uma vez; `paint(counts, selected)` só troca `class`. Cálculos novos vão para `map/model.ts` com teste, não para `render.ts`
- **Países pequenos** (`SMALL_COUNTRIES` em `map/model.ts`) ganham um ponto clicável quando têm jogos
- **Celular (≤ 860px):** o painel vira bottom sheet (`position: fixed`, `max-height: 45dvh`) e o `main` reserva essa altura para o sheet não cobrir o mapa. Se mudar um, mude o outro
- **Assets:** o geo sai de `import.meta.env.BASE_URL + "geo/countries.json"`
