# PRD — Jogos do Mundo

> Documento vivo. Mudanças de escopo passam por aqui antes de virar tarefa em [TASKS.md](TASKS.md).
> Última revisão: 2026-10-31.

## 1. Visão

Um atlas interativo, bonito e leve, que mostra a diversidade dos jogos de tabuleiro tradicionais do mundo. A pessoa explora um mapa, descobre o que se joga (ou se jogava) em cada lugar e lê a história e as regras de cada jogo, sempre sabendo o quanto aquela informação é confiável.

## 2. Problema

As informações sobre jogos tradicionais estão espalhadas (Ludii, Wikipedia, etnografias, artigos) e raramente aparecem organizadas por lugar. Quase nunca dizem com clareza o que é regra documentada e o que é reconstrução moderna. Falta um ponto de entrada visual e confiável.

## 3. Público

- **Curiosos e entusiastas de jogos**, que chegam por um link e querem explorar
- **Educadores**, que procuram jogos de uma região para usar em aula
- **Pesquisadores e jogadores**, que querem nomes locais, fontes e o grau de confiança das regras

## 4. Objetivos

1. Explorar o catálogo pelo mapa de forma fluida, no desktop e no celular
2. Apresentar cada jogo com clareza: o que é, de onde vem, como se joga e qual a fonte
3. Deixar explícito o grau de confiança (`status`, "(a verificar)", reconstruções)
4. Manter o site leve, rápido e publicável no GitHub Pages, sem servidor
5. Facilitar a curadoria contínua do conteúdo por pessoas e agentes de IA

## 5. Fora do escopo (por enquanto)

- Jogar os jogos no navegador
- Contas, comentários ou qualquer recurso que exija backend
- Edição de conteúdo pelo site (a curadoria acontece via PRs em `content/`)
- Outros idiomas além do pt-BR (a estrutura não deve impedir isso no futuro)

## 6. Casos de uso principais

1. Abro o site, vejo o mapa colorido pela quantidade de jogos e clico num país para ver a lista
2. Filtro por família (ex.: mancala) e vejo onde ela aparece no mundo
3. Abro um jogo e leio resumo, nomes locais, tabuleiro, peças, história, regras e referências
4. Copio a URL de um jogo ou país e mando para alguém, que abre exatamente a mesma tela
5. Procuro um jogo pelo nome, inclusive pelos nomes locais
6. No celular, navego pelo mapa com toque e leio os detalhes num painel que sobe da parte de baixo da tela

## 7. Requisitos funcionais

Prioridade: **M** = obrigatório no MVP, **S** = deveria ter logo depois, **C** = desejável.

| ID | Requisito | Prior. |
| --- | --- | --- |
| RF-01 | Mapa-múndi com países coloridos em 3 faixas pela quantidade de jogos visíveis | M |
| RF-02 | Zoom e arraste (mouse, roda, pinça), com botões de aproximar, afastar e ver o mundo inteiro | M |
| RF-03 | Tooltip ao passar o mouse: país + número de jogos | M |
| RF-04 | Países pequenos com jogos aparecem como pontos clicáveis | M |
| RF-05 | Filtro por família, que atualiza mapa e painel | M |
| RF-06 | Painel home: totais, países com mais jogos, jogos sem país definido | M |
| RF-07 | Painel de país: lista de jogos com família | M |
| RF-08 | Painel de jogo: status, famílias, nomes locais, resumo, ficha (tabuleiro, peças, jogadores, povos, países, evidência, tradição viva, sensibilidade, reconstrução), história, regras, referências | M |
| RF-09 | Rotas por hash para país, jogo e filtro; voltar e avançar do navegador funcionam | M |
| RF-10 | Layout responsivo: painel lateral no desktop, bottom sheet no celular | M |
| RF-11 | Temas claro e escuro automáticos, com opção manual | S |
| RF-12 | Busca por nome do jogo e por nomes locais | S |
| RF-13 | Ao abrir um país ou jogo, o mapa aproxima e destaca o(s) país(es) | S |
| RF-14 | Navegação do mapa pelo teclado | S |
| RF-15 | Metadados de compartilhamento (título, descrição, imagem) | S |
| RF-16 | Jogos relacionados (mesma família ou região) no painel do jogo | C |
| RF-17 | Diagrama SVG do tabuleiro para os tipos mais comuns (ex.: 3×3 com diagonais, mancala de 2 fileiras) | C |
| RF-18 | Filtro por status de confiança das regras | C |

## 8. Requisitos não funcionais

| ID | Requisito |
| --- | --- |
| RNF-01 | **Estático:** build em `dist/` servido pelo GitHub Pages, sem backend |
| RNF-02 | **Leve:** JS inicial ≤ 60 KB gzip (sem contar o catálogo e o geo); geo + catálogo ≤ 250 KB gzip |
| RNF-03 | **Rápido:** Lighthouse mobile ≥ 90 em Performance; interação no mapa sem travadas perceptíveis em celular médio |
| RNF-04 | **Acessível:** Lighthouse Accessibility ≥ 95, contraste AA nos dois temas, foco visível, `prefers-reduced-motion` |
| RNF-05 | **Responsivo:** funciona de 360px a telas largas, sem rolagem horizontal |
| RNF-06 | **Seguro:** todo texto do conteúdo é escapado; nenhuma dependência via CDN |
| RNF-07 | **Manutenível por agentes:** TypeScript strict, TDD, `make check` verde em todo PR |

## 9. Conteúdo e dados

- Fonte de verdade: `content/games/<id>.md`, um jogo por arquivo, com frontmatter validado por schema (zod)
- Ponto de partida: os 94 jogos, 12 famílias e 79 países do protótipo (bundle OKF v0.2, rodadas 0 e 1)
- Geometria: TopoJSON do Natural Earth (world-atlas). A resolução será escolhida para atender ao RNF-02 sem perder países com jogos
- Regras de curadoria: em [AGENTS.md](AGENTS.md#regras-de-conteúdo). Nada inventado, toda afirmação com fonte, `status` honesto

## 10. Métricas de sucesso

- Paridade completa com o protótipo no MVP (RF-01 a RF-10)
- Metas do RNF-02, RNF-03 e RNF-04 atingidas e conferidas a cada release
- 100% dos jogos com pelo menos uma referência e `status` definido (validado no `make check`)
- Queda contínua do número de trechos "(a verificar)" ao longo das rodadas de curadoria

## 11. Marcos

| Marco | Entrega |
| --- | --- |
| M0 — Fundação | Diretrizes, PRD, TASKS, repositório, scaffold e deploy vazio no ar |
| M1 — Dados | Conteúdo extraído para `content/`, validação e geração do catálogo |
| M2 — MVP | Paridade com o protótipo (RF-01 a RF-10) publicada no Pages |
| M3 — Experiência | RF-11 a RF-15 e polimento visual |
| M4 — Conteúdo | Rodadas de verificação e novos jogos; RF-16 a RF-18 |

## 12. Questões em aberto

- Licença do código e do conteúdo (ex.: MIT + CC BY-SA?)
- Domínio próprio ou `<usuario>.github.io/jogos-do-mundo`
- Como tratar jogos com área de origem incerta ou que atravessa fronteiras (hoje vão para "sem país definido" ou para vários países)
- Fontes tipográficas: manter Young Serif + Instrument Sans do protótipo e hospedá-las localmente?
