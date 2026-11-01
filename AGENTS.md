# AGENTS.md / CLAUDE.md — GUIDELINES

Guia para agentes de IA que vão trabalhar neste projeto (**Jogos do Mundo** — atlas interativo de jogos de tabuleiro tradicionais). Leia antes de criar ou modificar qualquer coisa.

## Antes de Começar

Antes de iniciar qualquer implementação, verifique a branch atual. Nunca trabalhe direto em `main`; crie uma branch curta a partir dela seguindo as convenções em [commit-rules.md](commit-rules.md). Depois, escolha ou confirme a tarefa em [TASKS.md](TASKS.md) e leia o trecho correspondente do [PRD.md](PRD.md).

**Tasks pontuais** (uma implementação focada que termina em um ciclo): todo commit exige autorização. Mesmo que já tenha commitado várias vezes na mesma sessão, **nunca assuma que a autorização se repete**. Após cada implementação, rode `make check` e pergunte sobre o commit.

**Tasks longas e complexas** (múltiplas etapas com validações intermediárias): se necessário, comite as evoluções ao longo da implementação e, ao concluir tudo, pergunte sobre o push e o PR ou siga as regras estipuladas para isso.

## Filosofia

**KISS — Keep It Simple, Stupid.** Toda decisão de código deve favorecer a solução mais simples que resolve o problema. Não adicione abstrações, configurabilidade ou generalização antecipada. Prefira nomes claros, estrutura óbvia e comentários onde a lógica não é autoevidente a soluções "inteligentes" que exigem decifração.

Regras práticas que derivam disso:

- Prefira **funções a classes**. Use `type`/`interface` para dados puros
- TypeScript em modo **strict**, sem `any` e sem `@ts-ignore`. Funções exportadas têm parâmetros e retorno tipados
- Use **early return** para evitar aninhamento e manter a complexidade cognitiva baixa (regra do Biome)
- **Código mínimo que resolve o problema. Nada especulativo.**

**Toque só o que precisa. Limpe só a sua bagunça.** Esta é uma regra de escopo, não de estilo. Altere apenas o que é necessário para cumprir a tarefa. Não refatore código adjacente, não renomeie variáveis fora do problema, não faça "melhorias" oportunistas. Se você introduziu algo, você organiza. O resto fica como estava.

**Seja honesto — nunca invente.** Se não sabe, diga diretamente e aponte o que precisa verificar. Se está em dúvida, consulte a fonte (código, documentação, testes) antes de afirmar. Nunca entregue uma resposta plausível no lugar de uma correta. Isso vale em dobro para o **conteúdo** dos jogos (ver [Regras de Conteúdo](#regras-de-conteúdo)).

**Não assuma — pergunte.** Se durante a implementação bater em um problema que não tem certeza de como resolver, pare e pergunte. Não adivinhe o caminho. Descreva o bloqueio, mostre as opções se houver, e deixe o time decidir.

**Tente antes de interromper — mas saiba a hora de parar.** Se uma tentativa falhar e a correção não exigir tocar em nada fora do escopo da tarefa, tente novamente. Até 2-3 tentativas são aceitáveis sem avisar. Depois disso, pare.

**Quando travar de verdade — pare e explique.** Interrompa imediatamente (sem esperar o limite de tentativas) se o bloqueio for externo à tarefa:

- precisa alterar arquivo ou módulo fora do escopo
- depende de algo fora do seu controle (config, variável de ambiente, serviço, permissão)
- exige uma decisão de design que impacta outras partes do sistema
- a tentativa quebrou código que já funcionava

Ao parar: descreva o bloqueio e sugira 1-2 opções de caminho. Sem histórico de tentativas — direto ao ponto. **Exceção:** ao iniciar uma tarefa, pergunte ao usuário se prefere ser notificado a cada bloqueio ou se quer que você tente resolver de forma autônoma até o fim — e siga a preferência declarada durante toda aquela sessão.

**Ao concluir uma implementação planejada — registre o resultado.** Escreva um resumo curto do que foi feito e se houve desvios do plano.

## Como Manter Este Arquivo

Este arquivo é o índice global do projeto — contém só o que vale para **todo** o código. Regras técnicas de uma pasta específica ficam no `AGENTS.md` interno dela (`src/AGENTS.md`, `content/AGENTS.md`).

- Máximo de **200 linhas** — se ultrapassar, mova conteúdo para o sub-arquivo da pasta
- Nunca adicione blocos de código longos neste arquivo
- **Antes de planejar:** consulte os arquivos de diretrizes internos de cada pasta que será modificada
- `CLAUDE.md` só importa este arquivo (`@AGENTS.md`) — edite aqui, nunca lá

## Arquivos Auxiliares

- [`PRD.md`](PRD.md) — o que o produto é, para quem, requisitos e critérios de sucesso
- [`TASKS.md`](TASKS.md) — backlog e andamento; atualize o status da tarefa no mesmo PR que a conclui
- [`commit-rules.md`](commit-rules.md) — regras de commit, branch, push e PR
- [`README.md`](README.md) — visão geral e comandos básicos do projeto
- `src/AGENTS.md` — arquitetura do app, módulos e padrões de UI
- `content/AGENTS.md` — schema completo de um jogo e guia de curadoria

## Arquitetura em Uma Linha

Conteúdo em Markdown (`content/`) → `scripts/build-data.ts` valida e gera JSON → app Vite + TypeScript sem framework desenha mapa D3 + painel → build estático publicado no GitHub Pages.

## Mapa de Arquivos Críticos

| Caminho | Propósito |
| --- | --- |
| `index.html` | Shell mínimo da página (header, mapa, painel) |
| `src/main.ts` | Bootstrap: carrega catálogo e geo, inicia mapa, painel e rotas |
| `src/state.ts` | Estado único + rotas por hash (`#/pais/GH`, `#/jogo/achi`, `?fam=`) |
| `src/map/` | Render do mapa (`d3-geo`), zoom (`d3-zoom`), tooltip, pontos de países pequenos; `model.ts` guarda a lógica pura |
| `src/panel/` | Views do painel: home, país, jogo |
| `src/lib/md.ts` | Mini-Markdown seguro (negrito, itálico, listas) para os textos dos jogos |
| `src/lib/selectors.ts` | Seletores puros: filtro por família, jogos por país, contagens, faixa de cor, ranking |
| `src/types.ts` | Tipos `Game`, `Family`, `Country` — espelham o schema de `content/` |
| `src/styles/` | `tokens.css` (cores e tipografia, light/dark) e `base.css` |
| `src/generated/` | **Gerado** por `make data` — nunca edite, está no `.gitignore` |
| `content/games/<id>.md` | Um jogo por arquivo: frontmatter YAML + seções `## História` e `## Regras` |
| `content/families.json` | Famílias de jogos: id → rótulo em pt-BR |
| `content/countries.json` | Países: ISO-2 → `{ pt, num }` (nome e código numérico do TopoJSON) |
| `scripts/build-data.ts` | Lê `content/`, valida com `zod`, gera `src/generated/catalog.json` |
| `scripts/schema.ts` | Schemas zod de jogo, famílias e países |
| `scripts/once/` | Scripts de uso único (extração do protótipo, geração do geo) |
| `public/geo/` | TopoJSON dos países |
| `tests/` | Testes Vitest, espelhando `src/` e `scripts/`; `tests/fixtures/` com dados de teste |
| `.github/workflows/deploy.yml` | CI: `make check` + `make build` + deploy no Pages |
| `Makefile` | Ponto de entrada de todos os comandos |
| `Atlas de jogos de tabuleiro tradicionais.html` | **Protótipo de referência** (visual e comportamento). Só leitura: não edite, não importe |

## Como Adicionar uma Feature

O projeto segue **TDD**. Ordem obrigatória:

1. **Contexto** — leia a tarefa em `TASKS.md`, os critérios de aceite, o `AGENTS.md` da pasta e, se for UI, o comportamento equivalente no protótipo
2. **Red** — escreva primeiro o teste que descreve o comportamento esperado e rode `make test` para vê-lo **falhar** pelo motivo certo
3. **Green** — implemente o mínimo para o teste passar, seguindo as [Regras Globais do Código](#regras-globais-do-código)
4. **Refactor** — limpe o código com os testes verdes, sem mudar comportamento
5. **Formatação e Qualidade** — rode `make format` e depois `make check` (zero erros tolerados)
6. **Conferência visual** — se mexeu em UI, rode `make dev` e confira em largura de desktop e de celular (~375px), nos temas claro e escuro
7. **Registro** — marque a tarefa em `TASKS.md`

## Estratégia de Testes (TDD)

- **O que se testa primeiro:** toda lógica pura (seletores e filtros, rotas, `md`, validação e geração de dados) e as views do painel, que são funções que recebem dados e devolvem HTML
- **Mantenha a lógica fora do D3.** Cálculos (contagens, faixas de cor, centróides de países pequenos) ficam em funções puras testáveis; o código D3 só aplica o resultado no SVG. O render do SVG em si é conferido no `make dev`
- **Bug começa com teste.** Toda correção começa com um teste que reproduz o bug e falha
- **Testes de dados:** o catálogo real de `content/` é validado no `make check`; casos de erro usam fixtures pequenas em `tests/fixtures/`
- **Um comportamento por teste**, nome descrevendo o comportamento (`"filters games by family"`). Testes ficam em `tests/`, espelhando o caminho de `src/` (`tests/lib/md.test.ts`)
- Não apague nem enfraqueça um teste para fazê-lo passar. Se o teste estiver errado, explique por quê

## Como Adicionar ou Editar um Jogo

1. Crie ou edite `content/games/<id>.md`. O `id` é kebab-case e igual ao nome do arquivo
2. Frontmatter: `id, title, names, fam, countries, cultures, board, pieces, players, period, status, living, sens, ev, recon, refs, place, summary` (detalhes e exemplos em `content/AGENTS.md`)
3. Corpo: seções `## História` e `## Regras`, em Markdown simples (negrito, itálico, listas)
4. Rode `make data` (valida e gera o catálogo) e depois `make check`
5. Commit de conteúdo separado de commit de código

## Como Rodar o Projeto

Sempre execute ferramentas através do `make` — nunca chame `npx`, `vite` ou `biome` diretamente.

| Comando | O que faz |
| --- | --- |
| `make install` | Instala dependências (`npm ci`) |
| `make dev` | Gera os dados e sobe o servidor local com hot reload |
| `make data` | Valida `content/` e gera `src/generated/catalog.json` |
| `make test` | Roda só os testes (use `make test-watch` durante o ciclo TDD) |
| `make format` | Formata e corrige lint automaticamente (Biome) |
| `make check` | Lint + typecheck + validação de dados + testes — tem que passar limpo |
| `make build` | Build de produção em `dist/` |
| `make preview` | Serve o `dist/` localmente |

**Ambiente:** a versão do Node fica em `.nvmrc`. Nesta máquina o Node está em `/opt/homebrew/bin`, que pode não estar no PATH do shell do agente. Se `node` não for encontrado, rode `export PATH="/opt/homebrew/bin:$PATH"` antes do `make`.

## Convenções de Nomenclatura

- Arquivos e pastas: `kebab-case` (`country-view.ts`). Funções e variáveis: `camelCase`. Tipos: `PascalCase`
- Ids de jogo: `kebab-case` sem acentos (`adji-boto`). Países: ISO 3166-1 alfa-2 (`GH`). Famílias: ids de `content/families.json`
- Classes CSS: `kebab-case` curtas, escopadas pelo componente (`.panel-list`, `.map-dot`)
- Idioma: UI e conteúdo em **pt-BR**; código, comentários e commits em **inglês**

## Regras Globais do Código

- **Sem framework de UI.** DOM direto + D3 modular (`d3-geo`, `d3-zoom`, `d3-selection`) + `topojson-client`. Nova dependência só com justificativa e aprovação
- **Sem CDN.** Tudo entra pelo npm e pelo bundle. Fontes ficam self-hosted ou em Google Fonts
- **Leve e rápido.** Carregue o catálogo e o geo uma vez. Atualize classes e atributos do SVG em vez de redesenhar tudo. Animações só com `transform`/`opacity`
- **Mobile-first.** Abaixo de ~860px o painel vira bottom sheet sobre o mapa. Toque e pinça funcionam no mapa
- **Temas.** Toda cor vem de um token em `tokens.css`, com variante escura (`prefers-color-scheme` + `data-theme`). Nada de cor solta
- **Movimento.** Respeite `prefers-reduced-motion`
- **Acessibilidade.** Elementos clicáveis são `<button>` ou `<a>`, foco visível, `aria-*` nos controles, mapa navegável por teclado, painel com `aria-live`
- **Segurança.** Todo texto vindo de `content/` é escapado antes de ir para o DOM. Links externos com `rel="noopener"`
- **Rotas por hash.** Todo estado relevante (país, jogo, filtro) fica na URL, que pode ser compartilhada e funciona no GitHub Pages sem servidor
- **Base path.** Caminhos de assets usam `import.meta.env.BASE_URL` (o site roda na raiz de `jogosdomundo.com.br`)

## Regras de Conteúdo

- **Nunca invente** regras, datas, nomes, povos ou fontes. Sem fonte, o campo fica como "desconhecido" ou "a levantar"
- Todo jogo tem pelo menos uma `ref` com URL verificável
- `status` honesto: `documented`, `partial`, `reconstructed` ou `unknown`. Reconstruções modernas são listadas em `recon`
- Trechos ainda não conferidos com a fonte primária levam a marca "(a verificar)"
- Respeite `sens` (sensibilidade cultural). Em caso de dúvida sobre como apresentar uma tradição viva, pergunte

## O que NÃO Fazer

- Não edite `src/generated/` nem o protótipo HTML
- Não adicione framework (React, Vue, Svelte…), CDN ou biblioteca pesada sem aprovação
- Não misture conteúdo (`content/`) e código no mesmo commit
- Não use cores, tamanhos de fonte ou espaçamentos fixos fora dos tokens
- Não quebre URLs de rota existentes — links compartilhados precisam continuar funcionando
- Não pule o `make check` nem desative regras de lint ou do TypeScript para "fazer passar"
- Não execute `git commit`, `git push` nem abra PR sem autorização explícita
