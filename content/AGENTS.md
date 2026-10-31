# content/ — Guia de Curadoria

Regras específicas da pasta `content/`. As regras globais (honestidade, "nunca invente", fluxo de commits) estão em [`../AGENTS.md`](../AGENTS.md#regras-de-conteúdo) e valem aqui também.

## Estrutura

| Caminho | O que é |
| --- | --- |
| `games/<id>.md` | Um jogo por arquivo: frontmatter YAML + corpo com `## História` e `## Regras` |
| `families.json` | Famílias: `id` → rótulo em pt-BR |
| `countries.json` | Países: ISO 3166-1 alfa-2 → `{ "pt": nome, "num": código numérico do TopoJSON }` |

`make data` valida tudo com zod (`scripts/schema.ts`) e gera `src/generated/catalog.json`. Os erros apontam arquivo e campo (`games/achi.md: status: ...`). O `make check` roda a mesma validação.

## Schema de um jogo

Todos os campos são obrigatórios, a menos que a coluna diga o contrário. Campo desconhecido no frontmatter é erro.

| Campo | Tipo | Regra |
| --- | --- | --- |
| `id` | string | kebab-case sem acentos, **igual ao nome do arquivo** |
| `title` | string | Nome de exibição (pode trazer o país entre parênteses para desambiguar) |
| `names` | lista de strings | Nomes locais no formato `nome · código-do-idioma` (ex.: `achi · ak`). Pode ser vazia |
| `fam` | lista de ids | Pelo menos uma; cada uma existe em `families.json` |
| `countries` | lista de ISO-2 | Cada uma existe em `countries.json`. Vazia = "sem país definido" |
| `cultures` | lista de strings | Povos ou comunidades. Use `a verificar` se não souber |
| `board` | string | Tabuleiro. `desconhecido` se não houver fonte |
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

O corpo do arquivo tem as seções `## História` e `## Regras`, ambas opcionais (omita a seção em vez de deixá-la vazia). Qualquer outro título `##` é erro. O texto aceita só o mini-Markdown do app: **negrito**, *itálico*, listas (`-` e `1.`) e parágrafos.

### `status`

| Valor | Quando usar |
| --- | --- |
| `documented` | As regras vêm de registro etnográfico, texto histórico ou fonte confiável |
| `partial` | Há registro, mas incompleto ou com lacunas nas regras |
| `reconstructed` | As regras são reconstrução moderna (liste os autores em `recon`) |
| `unknown` | Não há regras confiáveis |

Na dúvida, escolha o status **menos** confiável.

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

## Regras

1. Primeiro passo.
2. Segundo passo.
```

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
