# Jogos do Mundo

Atlas interativo de jogos de tabuleiro tradicionais: explore o mapa, escolha um país e descubra os jogos, suas histórias e suas regras.

**Site:** _em breve no GitHub Pages_

## O que é

Um mapa-múndi interativo que reúne jogos de tabuleiro tradicionais de várias culturas: mancalas, jogos de alinhamento, de caça, de corrida, damas, xadrez e outros. Clicando num país você vê os jogos registrados ali. Cada jogo tem nomes locais, família, povos, tabuleiro e peças, evidência histórica, regras e referências.

Os jogos de povos antigos aparecem nos países onde hoje ficam os sítios arqueológicos ou as comunidades.

## Status

**Rascunho.** O catálogo atual tem 94 jogos em 79 países, vindos das rodadas 0 e 1 de levantamento. Regras e datas ainda estão sendo verificadas, e os trechos marcados "(a verificar)" não foram conferidos com a fonte primária.

O arquivo `Atlas de jogos de tabuleiro tradicionais.html` é o protótipo original, que serve de referência visual e de comportamento.

## Stack

- [Vite](https://vite.dev) + TypeScript (strict), sem framework de UI
- [D3](https://d3js.org) modular (`d3-geo`, `d3-zoom`, `d3-selection`) + `topojson-client` para o mapa
- [Biome](https://biomejs.dev) para lint e formatação, [Vitest](https://vitest.dev) para testes
- [zod](https://zod.dev) para validar o conteúdo
- GitHub Actions + GitHub Pages para o deploy

## Começando

Pré-requisitos: Node na versão de `.nvmrc` e `make`.

```sh
make install   # instala dependências
make dev       # servidor local com hot reload
```

| Comando | O que faz |
| --- | --- |
| `make install` | Instala dependências |
| `make dev` | Gera os dados e sobe o servidor local |
| `make data` | Valida `content/` e gera o catálogo |
| `make test` | Roda os testes (`make test-watch` para o ciclo TDD) |
| `make format` | Formata e corrige lint |
| `make check` | Lint + typecheck + validação de dados + testes |
| `make build` | Build de produção em `dist/` |
| `make preview` | Serve o build localmente |

## Estrutura

```
content/        conteúdo: um arquivo .md por jogo + famílias e países
scripts/        build e validação dos dados
src/            app: mapa, painel, rotas, estilos
public/geo/     geometria dos países (TopoJSON)
tests/          testes
```

## Documentação do projeto

- [`PRD.md`](PRD.md) — visão, requisitos e métricas de sucesso
- [`TASKS.md`](TASKS.md) — backlog e andamento
- [`AGENTS.md`](AGENTS.md) — arquitetura e regras de desenvolvimento (inclusive para agentes de IA). O projeto segue **TDD**: teste primeiro, depois a implementação
- [`commit-rules.md`](commit-rules.md) — branches (feature → `main`), commits e PRs

## Contribuindo com um jogo

1. Crie `content/games/<id>.md` (o `id` é kebab-case e igual ao nome do arquivo)
2. Preencha o frontmatter e as seções `## História` e `## Regras`
3. Inclua pelo menos uma referência verificável e um `status` honesto (`documented`, `partial`, `reconstructed` ou `unknown`)
4. Rode `make check`

O schema completo fica em `content/AGENTS.md`. A regra principal: **nada inventado**. O que não tem fonte fica como "desconhecido".

## Roadmap

Marcos em [`PRD.md`](PRD.md#11-marcos) e tarefas detalhadas em [`TASKS.md`](TASKS.md).

## Fontes e créditos

- [Ludii](https://ludii.games), [Wikipedia](https://wikipedia.org) e [GamesCrafters](https://ocf.berkeley.edu/~gamers/), além das referências citadas em cada jogo
- Geometria dos países: [Natural Earth](https://www.naturalearthdata.com) via [world-atlas](https://github.com/topojson/world-atlas)

## Licença

A definir.
