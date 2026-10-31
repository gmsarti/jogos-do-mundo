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
  - Desvio: o teste de paridade (`tests/content/prototype-parity.test.ts`) deve ser aposentado quando a curadoria começar a alterar o conteúdo de propósito; o script ficou em `scripts/once/extract-prototype.ts`
  - Aceite: o script de extração é descartado depois do uso ou fica isolado em `scripts/once/`
- [x] **T-023** Geometria leve em `public/geo/`
  - Testes: todo país de `countries.json` existe no TopoJSON
  - Desvio: `countries.json` = 110m + 5 países pequenos do 50m (SG, MV, CV, AG, BB), gerado por `scripts/once/build-geo.ts`. O protótipo usa 50m inteiro (236 KB gzip), que sozinho estoura o RNF-02; o resultado tem 39 KB gzip. Comparação visual no navegador não feita
  - Aceite: tamanho dentro do RNF-02; comparar a resolução 110m com a do protótipo e registrar a escolha
- [x] **T-024** `content/AGENTS.md`: schema completo, exemplo comentado e guia de curadoria

## Fase 3 — MVP: paridade com o protótipo (M2)

- [ ] **T-030** `src/lib/md.ts` (porta do `md()` do protótipo)
  - Testes: negrito, itálico, listas ordenadas e não ordenadas, parágrafos, escape de HTML (XSS)
- [ ] **T-031** Seletores puros: jogos visíveis por família, jogos por país, contagem por país, faixa de cor, ranking da home
  - Testes: um por seletor, com catálogo de fixture
- [ ] **T-032** `src/state.ts`: estado + rotas por hash (`#/pais/GH`, `#/jogo/achi`, `?fam=`)
  - Testes: parse e serialização ida e volta; rota inválida cai na home; país sem jogos no filtro cai na home
- [ ] **T-033** Mapa: projeção, render dos países, faixas de cor, pontos de países pequenos, zoom e tooltip (RF-01 a RF-04)
  - Testes: cálculos extraídos para funções puras (classe de cada país, quais pontos aparecem)
  - Aceite: comportamento igual ao protótipo, conferido no `make dev`
- [ ] **T-034** Views do painel: home, país e jogo (RF-06 a RF-08)
  - Testes: cada view recebe dados e devolve HTML com os campos esperados; texto do conteúdo sai escapado
- [ ] **T-035** Chips de filtro por família (RF-05)
  - Testes: lista só famílias com jogos; estado `aria-pressed` correto
- [ ] **T-036** Layout responsivo: painel lateral e bottom sheet no celular (RF-10)
  - Aceite: conferido em 375px e em desktop, sem rolagem horizontal
- [ ] **T-037** `src/AGENTS.md`: módulos, fluxo de estado e padrões de UI
- [ ] **T-038** Primeiro release do MVP no Pages + medição Lighthouse (RNF-02 a RNF-04) registrada aqui

## Fase 4 — Experiência (M3)

- [ ] **T-040** Seletor de tema claro/escuro (RF-11)
- [ ] **T-041** Busca por nome e nomes locais (RF-12)
  - Testes: busca sem acento e sem diferenciar maiúsculas encontra nomes locais
- [ ] **T-042** Zoom animado até o país ou os países do jogo aberto, respeitando `prefers-reduced-motion` (RF-13)
- [ ] **T-043** Navegação do mapa pelo teclado (RF-14)
- [ ] **T-044** Metadados de compartilhamento e imagem social (RF-15)
- [ ] **T-045** Polimento visual: tipografia, transições do painel, estados de hover e foco

## Fase 5 — Conteúdo e extras (M4)

- [ ] **T-050** Relatório (`make` target) de trechos "(a verificar)" e jogos com `status` `unknown`
- [ ] **T-051** Jogos relacionados (RF-16)
- [ ] **T-052** Diagramas SVG de tabuleiro para os tipos mais comuns (RF-17)
- [ ] **T-053** Filtro por status de confiança (RF-18)

## Decisões pendentes

Ver [PRD.md § Questões em aberto](PRD.md#12-questões-em-aberto). Licença, domínio e fontes precisam de resposta antes do T-038.
