# TASKS — Jogos do Mundo

Backlog e andamento do projeto. Requisitos e prioridades vêm do [PRD.md](PRD.md).

## Como usar

- Status: `[ ]` a fazer · `[~]` em andamento · `[x]` concluída · `[!]` bloqueada (diga o motivo na linha)
- **Uma tarefa = uma branch = um PR.** Branch com o tipo e o id: `feat/t-033-map-render`
- Toda tarefa de código segue TDD (ver [AGENTS.md](AGENTS.md#estratégia-de-testes-tdd)): os **testes** listados são escritos antes da implementação
- Ao começar, marque `[~]`. Ao concluir, marque `[x]` no mesmo PR e anote desvios em uma linha
- Tarefa nova entra na fase certa, com id livre na sequência da fase. Mudança de escopo passa antes pelo PRD

---

## Fase 0 — Fundação (M0)

- [x] **T-001** Diretrizes para agentes (`AGENTS.md`, `CLAUDE.md`), `README.md`, `commit-rules.md`
- [x] **T-002** `PRD.md` e `TASKS.md`; TDD incorporado às diretrizes
- [x] **T-003** `git init` com branch `main`
- [x] **T-004** Primeiro commit e repositório remoto no GitHub
  - Aceite: `main` publicada no GitHub com os arquivos de fundação

## Fase 1 — Scaffold (M0)

- [x] **T-010** Projeto Vite + TypeScript strict + Biome + Vitest + `Makefile` + `.nvmrc` + `.gitignore`
  - Desvio: `make data` é um placeholder até o T-021; dependências de runtime (D3, zod, topojson) entram nas tarefas que as usam
  - Testes: um teste smoke trivial que prova que o Vitest roda
  - Aceite: `make install`, `make dev`, `make test`, `make format`, `make check` e `make build` funcionam; `tsconfig` em strict
- [x] **T-011** Workflow `.github/workflows/deploy.yml`: `make check` + `make build` + deploy no Pages
  - Pendente fora do código: ativar Settings → Pages → Source: GitHub Actions no repositório; o workflow ainda não rodou no GitHub
  - Aceite: push em `main` publica o site; PR roda `make check`; `base` do Vite correto para `/<repo>/`
- [x] **T-012** Tokens de design (`src/styles/tokens.css`, `base.css`) a partir do protótipo, com dark mode
  - Desvio: tokens de status (`--st-*`) criados para os badges; fontes seguem no Google Fonts (questão aberta do PRD); conferência visual no navegador não feita
  - Aceite: nenhuma cor fora dos tokens; temas claro e escuro conferidos no `make dev`

## Fase 2 — Dados (M1)

- [x] **T-020** Tipos (`src/types.ts`) e schema zod de um jogo, de famílias e de países
  - Desvio: o schema fica em `scripts/schema.ts` (zod só no build; `src/types.ts` só tem os tipos); `id` entra no frontmatter, senão não há o que comparar com o nome do arquivo
  - Testes: jogo válido passa; falham id ≠ nome do arquivo, família inexistente, país inexistente, `status` inválido e jogo sem `refs`
- [x] **T-021** `scripts/build-data.ts`: lê `content/`, separa frontmatter de `## História` / `## Regras`, valida e gera `src/generated/catalog.json`
  - Testes: com fixtures em `tests/fixtures/`, gera o JSON esperado e falha com mensagem clara apontando arquivo e campo
- [x] **T-022** Extração única do protótipo para `content/games/*.md`, `families.json` e `countries.json`
  - Testes: o catálogo gerado a partir de `content/` é igual ao `DATA` do protótipo (94 jogos, 12 famílias, 79 países)
  - Desvio: o teste de jogos idênticos do `tests/content/prototype-parity.test.ts` foi aposentado quando a curadoria começou (país do `dadu`); sobram as checagens de contagem, famílias e países; o script ficou em `scripts/once/extract-prototype.ts`
  - Aceite: o script de extração é descartado depois do uso ou fica isolado em `scripts/once/`
- [x] **T-023** Geometria leve em `public/geo/`
  - Testes: todo país de `countries.json` existe no TopoJSON
  - Desvio: `countries.json` = 110m + 5 países pequenos do 50m (SG, MV, CV, AG, BB), gerado por `scripts/once/build-geo.ts`. O protótipo usa 50m inteiro (236 KB gzip), que sozinho estoura o RNF-02; o resultado tem 39 KB gzip. Comparação visual no navegador não feita
  - Aceite: tamanho dentro do RNF-02; comparar a resolução 110m com a do protótipo e registrar a escolha
- [x] **T-024** `content/AGENTS.md`: schema completo, exemplo comentado e guia de curadoria

## Fase 3 — MVP: paridade com o protótipo (M2)

- [x] **T-030** `src/lib/md.ts` (porta do `md()` do protótipo)
  - Desvio: `esc()` também escapa `'`; `esc` e `md` vivem no mesmo arquivo
  - Testes: negrito, itálico, listas ordenadas e não ordenadas, parágrafos, escape de HTML (XSS)
- [x] **T-031** Seletores puros: jogos visíveis por família, jogos por país, contagem por país, faixa de cor, ranking da home
  - Desvio: ficam em `src/lib/selectors.ts`
  - Testes: um por seletor, com catálogo de fixture
- [x] **T-032** `src/state.ts`: estado + rotas por hash (`#/pais/GH`, `#/jogo/achi`, `?fam=`)
  - Testes: parse e serialização ida e volta; rota inválida cai na home; país sem jogos no filtro cai na home
  - Desvio: o jogo carrega `?pais=<ISO>` com o país de origem (botão voltar e destaque no mapa); `normalizeState` descarta o que o filtro oculta
- [x] **T-033** Mapa: projeção, render dos países, faixas de cor, pontos de países pequenos, zoom e tooltip (RF-01 a RF-04)
  - Testes: cálculos extraídos para funções puras (classe de cada país, quais pontos aparecem)
  - Desvio: adiciona `d3-transition` (zoom animado dos botões, como no protótipo). Teclado no mapa fica para o T-043; conferido em Chrome headless (desktop, tema escuro), tema claro não conferido
  - Aceite: comportamento igual ao protótipo, conferido no `make dev`
- [x] **T-034** Views do painel: home, país e jogo (RF-06 a RF-08)
  - Testes: cada view recebe dados e devolve HTML com os campos esperados; texto do conteúdo sai escapado
- [x] **T-035** Chips de filtro por família (RF-05)
  - Testes: lista só famílias com jogos; estado `aria-pressed` correto
- [x] **T-036** Layout responsivo: painel lateral e bottom sheet no celular (RF-10)
  - Desvio: sheet fixo de 45dvh com rolagem interna, sem arrastar/expandir; conferido em iframe de 375px e desktop
  - Aceite: conferido em 375px e em desktop, sem rolagem horizontal
- [x] **T-037** `src/AGENTS.md`: módulos, fluxo de estado e padrões de UI
- [~] **T-038** Primeiro release do MVP no Pages + medição Lighthouse (RNF-02 a RNF-04) registrada aqui
  - Release: site publicado em `gmsarti.github.io/jogos-do-mundo/` (deploy do PR #3 funcionando)
  - Medição 1, no site publicado (mobile): Performance **74**, Accessibility **100**, CLS 0,38, LCP 2,9 s. Abaixo da meta de Performance (RNF-03)
  - Correções: fontes self-hosted via `@fontsource` (tira o CSS do Google Fonts do caminho crítico), preload do geo, altura reservada para os chips e altura fixa do bottom sheet (CLS), token `--link` (o `--h2` dava 3,4:1 e 3,8:1 nos links e no botão voltar; agora ≥ 5,6:1)
  - Medição 2, build local (`make build` + `vite preview`, mobile, 3 rodadas): Performance **99**, Accessibility **100**, CLS 0, LCP 2,1 s. Contraste AA conferido por cálculo nos dois temas (todos os pares de texto ≥ 4,5:1)
  - RNF-02: JS inicial 28,9 KB gzip (meta 60); geo + catálogo cerca de 80 KB gzip (meta 250)
  - Pendente: repetir o Lighthouse no site publicado depois do merge; teclado no mapa (T-043); licença e domínio (PRD § 12). Fontes: decidido manter Young Serif + Instrument Sans, hospedadas no projeto

## Fase 4 — Experiência (M3)

- [x] **T-040** Seletor de tema claro/escuro (RF-11)
  - Desvio: um botão só com ícone (sol = claro, lua = escuro) no cabeçalho; sem escolha salva segue o sistema, a escolha fica em `localStorage`; as paletas já existiam no T-012
- [x] **T-041** Busca por nome e nomes locais (RF-12)
  - Desvio: o texto da busca não vai para a URL (é transitório); a lista de resultados ocupa o painel e qualquer navegação limpa o campo. Conferido no Playwright em desktop e 375px
  - Testes: busca sem acento e sem diferenciar maiúsculas encontra nomes locais
- [x] **T-042** Zoom animado até o país ou os países do jogo aberto, respeitando `prefers-reduced-motion` (RF-13)
  - Desvio: o zoom só roda quando o alvo muda (trocar de chip mantém o zoom do usuário); escala máxima 8. Conferido no Playwright (desktop): país, país pequeno e carga direta por URL
- [x] **T-043** Navegação do mapa pelo teclado (RF-14)
  - Desvio: cada país com jogos é um `role="button"` com `tabindex="0"` e `aria-label` igual ao tooltip (Enter/Espaço abrem); países pequenos entram pelo ponto, não pela forma. São 79 paradas de Tab na ordem do desenho, sem atalhos de seta (a "saída" do mapa é pular para o painel). Conferido no Playwright (desktop)
- [x] **T-044** Metadados de compartilhamento e imagem social (RF-15)
  - Desvio: metatags estáticas no `index.html` (rotas por hash não têm metadados próprios para crawlers); `og:image` precisa de URL absoluta e usa a origem `https://gmsarti.github.io` fixa + `%BASE_URL%` (revisar junto com a decisão de domínio do PRD § 12). `public/og.png` (1200×630) é um print do mapa, gerado à mão no navegador; refazer se a paleta mudar
- [~] **T-045** Polimento visual: tipografia, transições do painel, estados de hover e foco
  - Escopo ampliado com a revisão de design (combinação C e filtro F2): fontes Gloock + Commissioner com todos os subconjuntos (hoje só `latin`, e nomes como "Ayò Ọlọ́pọ́n" misturam fontes), paleta "semente e madeira" com contorno no país selecionado, filtro de famílias num botão com menu no lugar dos chips, busca que também acha famílias, destaque de todos os países do jogo aberto (RF-13), bottom sheet com estados recolhido e expandido, cabeçalho compacto, ficha sem campos de curadoria crus, voltar com seta, ícones SVG no zoom, hover e foco comuns, transição do painel e `og.png` refeito
  - Testes: fontes não restritas a `latin`; classe dos países do jogo aberto; menu de famílias com contagem e `aria-pressed`; busca encontra famílias sem acento; ficha omite sensibilidade "nenhuma"
- [ ] **T-046** Nomes de línguas legíveis nos nomes locais: mostrar o nome em pt-BR no lugar do código ISO 639 e omitir `und` (RF-08)
  - Conteúdo: tabela código → nome em `content/`, com fonte (ISO 639-3); hoje 17 nomes usam `und`
  - Testes: código conhecido vira nome; `und` some; código sem nome cai no próprio código
- [ ] **T-047** Clareza de confiança e cobertura: explicar os quatro níveis de `status` a partir do badge, ponto de status nas listas, e rótulo honesto no ranking da home ("no catálogo até agora") (RF-06, RF-07, objetivo 3)
  - Testes: listas mostram o status de cada jogo; a explicação cobre os quatro níveis
- [ ] **T-048** Enquadramento do mapa no desktop: hoje o mundo ocupa cerca de 60% da altura da caixa em 1440×900; ajustar à altura disponível ou cortar latitudes polares, conferindo junto com o zoom do T-042
  - Testes: cálculo do enquadramento em `map/model.ts`
- [ ] **T-049** Estilo de impressão da ficha do jogo (RF-19): `@media print` só com a ficha e as referências por extenso
  - Aceite: conferido na prévia de impressão do navegador, nos dois temas

## Fase 5 — Conteúdo e extras (M4)

- [ ] **T-050** Relatório (`make` target) de trechos "(a verificar)" e jogos com `status` `unknown`
- [ ] **T-051** Jogos relacionados (RF-16)
- [ ] **T-052** Diagramas SVG de tabuleiro para os tipos mais comuns (RF-17)
- [ ] **T-053** Filtro por status de confiança (RF-18)

## Decisões pendentes

Ver [PRD.md § Questões em aberto](PRD.md#12-questões-em-aberto). Licença e domínio ainda precisam de resposta (fontes: resolvido no T-045, Gloock + Commissioner self-hosted).
