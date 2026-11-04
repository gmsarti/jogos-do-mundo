# Proposta: PRD, schema e textos da interface (Fase 6)

Base das tarefas T-060 a T-073. Cada seção diz a que tarefa pertence.

## 1. Mudanças no PRD (T-060)

### § 3. Público — trocar por

- **Educadores**, que procuram jogos de uma região para usar em aula e precisam entender e ensinar o jogo sem conhecimento prévio. **É o público da primeira camada da ficha.**
- **Curiosos, famílias e jogadores**, que chegam por um link e querem jogar
- **Pesquisadores**, que querem nomes locais, fontes e o grau de confiança das regras. **É o público da segunda camada ("Saiba mais").**

### § 4. Objetivos — acrescentar

6. Acolher quem chega sem conhecimento prévio: texto em português, sem jargão, com o que é preciso para jogar e um passo a passo
7. Separar o que é para jogar do que é para pesquisar, sem esconder a curadoria

### § 6. Casos de uso — acrescentar

7. Sou professor, abro um jogo e, só com a primeira camada da ficha, consigo montar o tabuleiro com material simples e ensinar a turma
8. Clico num país sem jogos, vejo que nenhum foi cadastrado ainda e posso sugerir um

### § 7. Requisitos funcionais — acrescentar

| ID | Requisito | Prior. |
| --- | --- | --- |
| RF-20 | Ficha em duas camadas: para jogar (primeira) e "Saiba mais" (segunda) | S |
| RF-21 | Seções "Do que você vai precisar?", "Como jogar?" e "Para quem conduz" | S |
| RF-22 | Glossário compartilhado e "Palavras do jogo" na ficha | S |
| RF-23 | Países sem jogos abrem um painel próprio com convite para sugerir um jogo | S |
| RF-24 | Acolhimento na home e "Por onde começar" | S |
| RF-25 | Imagem do jogo com crédito e licença | C |
| RF-26 | Referências em português primeiro | C |

Na RF-08, trocar "status" por "status em linguagem simples" e incluir "tipo de jogo".

### § 9. Conteúdo e dados — acrescentar

Os textos da primeira camada seguem o `content/VOZ.md`. A voz vem da oficina *Jogos africanos — Dá Jogo!*; os fatos vêm sempre da ficha e das suas referências.

### § 11. Marcos — acrescentar

M5 — Acolhimento e didática: Fase 6 do `TASKS.md`.

## 2. Schema de um jogo (T-065, T-072, T-073)

### Seções do corpo

Hoje o parser aceita `## História` e `## Regras`. Passa a aceitar também, todas opcionais:

| Título no `.md` | Chave | Conteúdo |
| --- | --- | --- |
| `## Do que você vai precisar?` | `needs` | Tabuleiro, peças e dados, com a dica de improviso |
| `## Como jogar?` | `howto` | Passo a passo para iniciante, derivado de `## Regras` |
| `## Para quem conduz` | `guide` | Sugestões pedagógicas, marcadas como sugestão |

`## Regras` continua sendo a referência completa e com fontes. Regra de coerência: **"Como jogar?" não pode trazer regra que não esteja em "Regras"**. Quando "Regras" tem lacuna, "Como jogar?" também tem; a lacuna vai para o relatório do T-068.

Ordem das seções no arquivo: História, Do que você vai precisar?, Como jogar?, Para quem conduz, Regras.

### Campos novos no frontmatter

```yaml
image:                       # opcional (T-072)
  src: achi.webp             # em public/img/games/
  alt: Tabuleiro de Achi riscado na areia, com peças verdes e marrons
  credit: Nome do autor
  license: CC BY-SA 4.0
  url: https://commons.wikimedia.org/wiki/File:...
refs:
  - title: Wikipédia
    url: https://pt.wikipedia.org/wiki/...
    lang: pt                 # opcional (T-073); sem lang = não informado
```

### Arquivos novos em `content/`

| Arquivo | Formato | Tarefa |
| --- | --- | --- |
| `glossary.json` | `id → {termo, def, variantes}` | T-066 |
| `start.json` | lista de ids de jogos para "Por onde começar" | T-070 |

## 3. Status em linguagem simples (T-061)

| Status | Rótulo hoje | Rótulo novo | Explicação nova |
| --- | --- | --- | --- |
| `documented` | regra documentada | Regras registradas | Alguém registrou como se joga, e a fonte foi conferida. |
| `partial` | regra parcial | Regras incompletas | Dá para jogar em boa parte, mas algum detalhe não foi registrado. A ficha avisa onde está a lacuna. |
| `reconstructed` | regra reconstruída | Regras reconstruídas | Ninguém registrou as regras antigas. Estas são uma proposta moderna de como o jogo pode ter sido; os autores estão em "Saiba mais". |
| `unknown` | regra desconhecida | Regras desconhecidas | Ainda não sabemos como se jogava. A ficha conta o que se sabe do jogo. |

O rótulo aparece sempre em texto ao lado do ponto, inclusive nas listas. A forma e a cor do ponto continuam, mas deixam de ser a única pista.

## 4. Famílias com descrição (T-062)

`families.json` passa a ter `label` e `desc`. Rascunho das descrições, na voz do `VOZ.md`:

```json
{
  "adjacente": {
    "label": "Adjacentes (fora do núcleo)",
    "desc": "Jogos que ficam na fronteira dos jogos de tabuleiro, como jogos com feijões e quebra-cabeças."
  },
  "alinhamento": {
    "label": "Jogos de alinhamento",
    "desc": "O objetivo é colocar peças suas em linha, como no jogo da velha."
  },
  "bloqueio": {
    "label": "Jogos de bloqueio",
    "desc": "O objetivo é deixar o adversário sem ter para onde mover."
  },
  "caca-assimetrico": {
    "label": "Caça e jogos assimétricos",
    "desc": "Os lados são diferentes: poucos caçadores contra muitas presas, ou um rei e seus defensores contra atacantes."
  },
  "captura-posicional": {
    "label": "Captura por posicionamento",
    "desc": "Você captura a peça do adversário pela posição das suas: cercando, chegando perto ou se afastando dela."
  },
  "corrida": {
    "label": "Jogos de corrida",
    "desc": "As peças percorrem um caminho, quase sempre com dados ou varetas, e vence quem chegar primeiro."
  },
  "damas": {
    "label": "Damas e captura por salto",
    "desc": "Você captura pulando por cima da peça do adversário, como nas damas."
  },
  "desconhecida": {
    "label": "Família desconhecida",
    "desc": "Ainda não sabemos em que família este jogo se encaixa."
  },
  "pecas": {
    "label": "Jogos de peças",
    "desc": "Jogos com peças marcadas, como dominós e mahjong, em que o que importa é combinar as peças."
  },
  "semeadura": {
    "label": "Jogos de semeadura (mancala)",
    "desc": "Você pega as sementes de uma cova e as distribui, uma a uma, pelas covas seguintes."
  },
  "territorio": {
    "label": "Jogos de território",
    "desc": "O objetivo é cercar a maior área do tabuleiro."
  },
  "xadrez-e-guerra": {
    "label": "Xadrez e jogos de guerra",
    "desc": "Cada peça tem um movimento próprio, e o objetivo costuma ser capturar ou encurralar a peça principal do adversário."
  }
}
```

## 5. Ordem da ficha em duas camadas (T-069)

**Primeira camada**

1. Título, nomes locais e status (rótulo novo)
2. Imagem, se houver
3. Resumo
4. Onde e quem: países, lugar e povos
5. Tipo de jogo (família com descrição)
6. Do que você vai precisar? · Como jogar? · Palavras do jogo
7. Para quem conduz
8. História

**Segunda camada — "Saiba mais: regras completas, fontes e curadoria"**

1. O que significa o status
2. Ficha técnica: tabuleiro, peças, jogadores, evidência, ainda é jogado, sensibilidade, reconstrução
3. Regras (completas)
4. Referências, português primeiro

Sem `howto`, a ficha fica como hoje, com "Regras" na primeira camada: os 94 jogos continuam legíveis durante a reescrita em lotes.
