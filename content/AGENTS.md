# content/ — Guia de Curadoria

Regras específicas da pasta `content/`. As regras globais (honestidade, "nunca invente", fluxo de commits) estão em [`../AGENTS.md`](../AGENTS.md#regras-de-conteúdo) e valem aqui também.

## Estrutura

| Caminho | O que é |
| --- | --- |
| `games/<id>.md` | Um jogo por arquivo: frontmatter YAML + corpo com `## História`, as seções didáticas e `## Regras` |
| `families.json` | Famílias: `id` → rótulo em pt-BR |
| `countries.json` | Países: ISO 3166-1 alfa-2 → `{ "pt": nome, "num": código numérico do TopoJSON }` |
| `languages.json` | Línguas dos nomes locais: código ISO 639 → nome em pt-BR |
| `glossary.json` | Glossário: `id` → `{ termo, def, variantes }`, as "Palavras do jogo" da ficha |
| `VOZ.md` | Guia de voz das seções didáticas (resumo, "Do que você vai precisar?", "Como jogar?", "Para quem conduz") |

`make data` valida tudo com zod (`scripts/schema.ts`) e gera `src/generated/catalog.json`. Os erros apontam arquivo e campo (`games/achi.md: status: ...`). O `make check` roda a mesma validação.

## Schema de um jogo

Todos os campos são obrigatórios, a menos que a coluna diga o contrário. Campo desconhecido no frontmatter é erro.

| Campo | Tipo | Regra |
| --- | --- | --- |
| `id` | string | kebab-case sem acentos, **igual ao nome do arquivo** |
| `title` | string | Nome de exibição (pode trazer o país entre parênteses para desambiguar) |
| `names` | lista de strings | Nomes locais no formato `nome · código-do-idioma` (ex.: `achi · ak`). Código ISO 639 (`und` = indeterminado, não aparece no site); etiquetas como `pt-MZ` e listas como `la/sv` valem. Todo código precisa estar em `languages.json`. Pode ser vazia |
| `fam` | lista de ids | Pelo menos uma; cada uma existe em `families.json` |
| `countries` | lista de ISO-2 | Cada uma existe em `countries.json`. Vazia = "sem país definido" |
| `cultures` | lista de strings | Povos ou comunidades. Use `a verificar` se não souber |
| `board` | string | Tabuleiro. `desconhecido` se não houver fonte |
| `diagram` | objeto | **Opcional.** Como desenhar o tabuleiro (ver abaixo). Só quando a fonte dá as medidas |
| `pieces` | string | Peças. `desconhecido` se não houver fonte |
| `players` | string | **Sempre entre aspas** (`"2"`), senão o YAML vira número e a validação falha |
| `period` | string | Período em que o jogo é atestado |
| `status` | enum | `documented`, `partial`, `reconstructed` ou `unknown` (ver abaixo) |
| `living` | string | Tradição viva? Comece por `sim`, `não` ou `desconhecido`; detalhes entre parênteses |
| `sens` | string | Sensibilidade cultural. `nenhuma` ou `desconhecido`, ou o motivo (`ritual`, `aposta`, `restrito (...)`) |
| `ev` | objeto | Evidência: `kind` (`ethnography`, `text`, `iconography`, `artifact`, `oral`, `unknown`), `date` e `ref` (texto, podem ser `""`) |
| `recon` | lista de strings | Reconstruções modernas das regras (autores e anos). `[]` se não houver |
| `refs` | lista de `{title, url}` | **Pelo menos uma.** `url` http(s) verificável |
| `place` | string | Local mais preciso que o país (ex.: `Havaí`). `""` se não houver |
| `summary` | string | Uma ou duas frases |

O corpo do arquivo tem até cinco seções, todas opcionais (omita a seção em vez de deixá-la vazia), nesta ordem:

| Título | Chave | Conteúdo |
| --- | --- | --- |
| `## História` | `history` | De onde vem, com as fontes no texto |
| `## Do que você vai precisar?` | `needs` | Tabuleiro, peças e dados, com a dica de improviso |
| `## Como jogar?` | `howto` | Passo a passo para iniciante, reescrito a partir de `## Regras` |
| `## Para quem conduz` | `guide` | Notas para quem ensina; adaptação que não está na fonte começa com "**Sugestão do site:**" |
| `## Regras` | `rules` | Referência completa, com as fontes |

Qualquer outro título `##` é erro. As três seções do meio seguem o [guia de voz](VOZ.md), e **"Como jogar?" não traz regra que não esteja em "Regras"**: lacuna em "Regras" continua lacuna no passo a passo. O texto aceita só o mini-Markdown do app: **negrito**, *itálico*, listas (`-` e `1.`), sub-itens (`-` com recuo de 3 espaços, embaixo de um item numerado) e parágrafos.

### `diagram`

Desenha o tabuleiro no painel e no kit de impressão. Os números contam o que a fonte conta. `note` (opcional) diz qual variante foi desenhada quando as fontes divergem.

| `type` | Campos | Exemplos |
| --- | --- | --- |
| `grid` | `rows`, `cols` (casas), `checkered` opcional | Xadrez, Shogi, Yote |
| `lines` | `rows`, `cols` (interseções, sem marcar os pontos) | Weiqi |
| `points` | `rows`, `cols` (pontos), `diagonals`: `alternate` (padrão do alquerque), `main` ou `none` | Achi, Alquerque, Fanorona |
| `pits` | `rows`, `cols` (covas por fileira), `stores`: `0` ou `2` (um depósito em cada ponta) | Oware, Omweso |
| `mill` | `diagonals` | Trilha, Morabaraba |

Sem `diagram`, o jogo fica sem desenho, o que é melhor que um desenho errado. Não desenhe: medida ausente ou ambígua (“2 fileiras”, “4×12 a 4×20”), casas ou pontos marcados que o tipo não sabe desenhar (castelo do Tablut, rio do Xiangqi) e tabuleiros únicos. Esses casos estão nas tarefas T-054 a T-057.

### `status`

| Valor | Quando usar |
| --- | --- |
| `documented` | As regras vêm de registro etnográfico, texto histórico ou fonte confiável |
| `partial` | Há registro, mas incompleto ou com lacunas nas regras |
| `reconstructed` | As regras são reconstrução moderna (liste os autores em `recon`) |
| `unknown` | Não há regras confiáveis |

Na dúvida, escolha o status **menos** confiável.

## Glossário (`glossary.json`)

Termos que um iniciante pode não conhecer, com a definição na voz do [`VOZ.md`](VOZ.md). A ficha mostra em "Palavras do jogo" todo termo cujo `termo` ou alguma das `variantes` aparece em "Como jogar?" ou em "Regras", como palavra inteira, sem diferenciar acento nem maiúscula. Plural e verbo não são achados sozinhos: entram como variantes (`captura` → `capturar`, `capturadas`).

A definição vale para todo jogo em que o termo aparece. Não use como variante uma palavra que outros jogos usam com outro sentido: "saltar" ficou de fora de *captura por salto* porque no Janggi e no Chaturanga o salto é movimento, não captura.

## Línguas (`languages.json`)

Código ISO 639 → nome da língua em pt-BR, em minúsculas, como aparece no site (`awalé · francês`). Fonte do nome: o título do artigo da Wikipedia em português ligado ao código (`en.wikipedia.org/wiki/ISO_639:<código>` → link "Português"). Sem artigo em português, use o nome de referência da [tabela ISO 639-3 da SIL](https://iso639-3.sil.org/code_tables/download_tables) (foi o caso de `akan` e `mocoví`). Etiquetas com região ou escrita (`pt-MZ`, `ko-Hani`) podem ter nome próprio; sem ele, o site usa o nome do código-base.

## Exemplo comentado

```markdown
---
id: konane                  # igual ao nome do arquivo (konane.md)
title: Kōnane
names:
  - kōnane · haw            # nome local · código do idioma
fam:
  - damas                   # existe em families.json
countries:
  - US                      # existe em countries.json
cultures:
  - Kānaka Maoli
board: 6×6 a 14×14+
pieces: tabuleiro cheio, cores alternadas
players: "2"                # entre aspas
period: pré-contato (a verificar) – presente   # "(a verificar)": não conferido na fonte primária
status: documented
living: sim
sens: desconhecido
ev:
  kind: ethnography
  date: início do séc. XX
  ref: "Emory 1924: 85"     # aspas porque tem ":"
recon: []
summary: Jogo havaiano de captura por salto, num tabuleiro totalmente preenchido.
refs:
  - title: "Ludii: 10x10 Konane"
    url: https://ludii.games/variantDetails.php?keyword=Konane&variant=59
place: Havaí
---

## História

Texto em Markdown simples.

## Do que você vai precisar?

- O tabuleiro, em palavras que dá para desenhar
- As peças de cada jogador

Dica de improviso: com o que dá para fazer o tabuleiro e as peças.

## Como jogar?

1. Na sua vez, faça uma ação.
   - Exceção como sub-item, com recuo de 3 espaços.
2. Último passo: como a partida acaba e quem vence.

## Para quem conduz

**Sugestão do site:** uma adaptação que não está na fonte.

## Regras

1. Primeiro passo.
2. Segundo passo.
```

As seções didáticas do exemplo são só um molde; o Kōnane real ainda não as tem.

O arquivo real está em [`games/konane.md`](games/konane.md).

## Guia de curadoria

1. **Nunca invente.** Sem fonte, o campo fica `desconhecido`, `a verificar` ou `a levantar`. Uma resposta plausível e errada é pior que uma lacuna.
2. **Toda afirmação tem fonte.** Cite a fonte no texto (como em "(Wikipedia)") e liste-a em `refs`. Use só URLs que você abriu e conferiu.
3. **Marque o que não foi conferido.** Trecho não verificado com a fonte primária leva "(a verificar)".
4. **Reconstrução não é registro.** Regras reconstruídas hoje ficam em `recon` e o `status` não pode ser `documented`.
5. **Países são o lugar atual.** Jogos de povos antigos entram nos países onde hoje ficam os sítios ou as comunidades. Se a origem for incerta, deixe `countries: []` (aparece em "sem país definido") e explique na `history`.
6. **Respeite a sensibilidade.** Registre rituais, restrições de gênero ou de acesso em `sens`. Em caso de dúvida sobre como apresentar uma tradição viva, pergunte antes de publicar.
7. **Novo país ou família:** adicione a `countries.json` / `families.json` na mesma mudança. O `num` é o código numérico do país no TopoJSON de `public/geo/` (a validação de dados confere que ele existe lá).
8. **Commit de conteúdo é separado de commit de código.**

## Fluxo para adicionar ou editar um jogo

1. Crie ou edite `games/<id>.md`
2. `make data` — corrige o que a validação apontar
3. `make check`

## Geometria (`public/geo/`)

`public/geo/countries.json` é o mapa 110m do `world-atlas` mais cinco países pequenos com jogos (Singapura, Maldivas, Cabo Verde, Barbados, Antígua e Barbuda) vindos do 50m, porque o 110m não os tem. É gerado por `scripts/once/build-geo.ts`. Ele fica dentro do orçamento de peso do PRD (RNF-02); o 50m inteiro do protótipo sozinho já consome quase todo o orçamento.
