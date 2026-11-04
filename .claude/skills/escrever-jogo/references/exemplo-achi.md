# Exemplo: Achi, antes e depois

Piloto da skill (T-067). O Achi está no catálogo e na oficina, o que permite comparar a reescrita com um texto humano na mesma voz.

## Antes (`content/games/achi.md`, só as partes que mudam)

```markdown
summary: "Jogo de alinhamento da África Ocidental, de 3×3 pontos com diagonais: alinhar três peças, primeiro colocando e depois deslizando."
---

## História

O Ludii registra que foi observado entre os iorubás, que o chamavam *akidada*, e em Gana, no início do séc. XX. O tabuleiro era riscado na areia e as peças eram pedaços de folha de palmeira, verdes para um jogador e marrons para o outro.

## Regras

1. Tabuleiro de 9 pontos (3×3) ligados por ortogonais e pelas duas diagonais.
2. Cada jogador coloca suas peças alternadamente.
3. Depois de colocadas, as peças deslizam para um ponto vizinho vazio.
4. Vence quem alinhar três peças; perde quem não puder mover (Wikipedia).
```

Frontmatter relevante: `board: 3×3 pontos com diagonais`, `pieces: 3 ou 4 por jogador`, `players: "2"`, `countries: [GH, NG]`, `cultures: [ganenses, iorubás]`, `status: documented`.

## Inventário de fatos

- Tabuleiro: 9 pontos em 3×3, ligados na horizontal, na vertical e pelas duas diagonais
- Peças: 3 ou 4 por jogador; 2 jogadores
- Colocação alternada; depois, as peças deslizam para um ponto vizinho vazio
- Vence quem alinhar três; perde quem não puder mover (Wikipedia)
- Material tradicional (História): tabuleiro riscado na areia, peças de folha de palmeira verdes e marrons

## Depois

```markdown
summary: "Jogo de alinhamento registrado em Gana e entre os iorubás, na Nigéria. Começa como um jogo da velha, mas, quando as peças acabam, elas passam a andar pelo tabuleiro."
---

## História

O Ludii registra que foi observado entre os iorubás, que o chamavam *akidada*, e em Gana, no início do séc. XX. O tabuleiro era riscado na areia e as peças eram pedaços de folha de palmeira, verdes para um jogador e marrons para o outro.

## Do que você vai precisar?

- Um tabuleiro de 9 pontos, em 3 fileiras de 3, ligados por linhas na horizontal, na vertical e pelas duas diagonais
- 3 ou 4 peças para cada jogador, de cores diferentes

Dá para riscar o tabuleiro na areia, como no registro do início do séc. XX, ou desenhar no papel. Para as peças, vale o que tiver à mão: pedaços de folha de palmeira, como no mesmo registro, feijões, tampinhas, botões.

## Como jogar?

1. O jogo tem duas fases: primeiro vocês colocam as peças, depois movem as peças.
2. O tabuleiro começa vazio. Na sua vez, coloque uma peça sua num ponto livre.
3. Revezem-se colocando peças até que todas estejam no tabuleiro.
4. Agora as peças andam. Na sua vez, deslize uma peça sua pela linha até um ponto vizinho que esteja vazio.
5. Vence quem alinhar três peças suas numa das linhas do tabuleiro.
6. Se chegar a sua vez e você não tiver nenhuma peça que possa andar, você perde.

## Para quem conduz

**Sugestão do site:** com crianças pequenas, jogue primeiro só a fase de colocar as peças, como um jogo da velha. Quando todos tiverem entendido, acrescente a fase de mover.

## Regras

(sem mudança)
```

O que mudou e por quê:

- O resumo trocou a classificação ("3×3 pontos com diagonais") por uma imagem conhecida (o jogo da velha), sem afirmar parentesco. Diz "registrado", não "jogado", porque a ficha não sabe se a tradição é viva (`living: desconhecido`).
- "Do que você vai precisar?" diz as duas quantidades de peças, porque a ficha registra as duas, e usa o material da `## História` na dica de improviso, com a data do registro. A História não diz que a areia era só de Gana, então o texto também não diz.
- O passo 1 avisa que há duas fases, porque é isso que diferencia o Achi do jogo da velha.
- O passo 6 vem de "perde quem não puder mover"; a fonte (Wikipedia) continua em "Regras".
- Nada sobre quem começa, empate ou alinhar durante a colocação: a ficha não diz.

## Relatório de lacunas

### achi — Joga com lacunas

Status: documented

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1; `board` |
| E2 Peças | sim, mas ambíguo | `pieces`: "3 ou 4"; a ficha não diz quando usar cada um |
| E3 Preparação | sim | Regras 2 (colocação alternada implica tabuleiro vazio) |
| E4 Ação da vez | sim | Regras 2 e 3 |
| E5 Movimento | sim | Regras 3 |
| E6 Fim e vitória | sim, mas ambíguo | Regras 4; não diz se alinhar já na colocação vale vitória |
| I1 Quem começa | não | — |
| I2 Captura | não se aplica | — |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim | Regras 4 (Wikipedia) |
| I5 Empate | não | — |
| I6 Fases | sim | Regras 3 |

**Lacunas:**

- E2: 3 ou 4 peças — são variantes diferentes? Com 4 peças sobra um só ponto vazio; com 3, sobram três.
- E6: alinhar três durante a colocação já vence?
- I1: quem começa?
- I5: existe empate (por exemplo, por repetição de jogadas)?

**Divergências com a oficina *Jogos africanos*:**

- Jogador travado: a oficina diz que a partida **empata**; a ficha diz que ele **perde** (Wikipedia).
- Peças: a oficina usa 4 por jogador; a ficha registra 3 ou 4.
- A oficina diz que a vitória vale na horizontal, na vertical ou na diagonal, e que alinhar já na colocação vence como no jogo da velha. Se a fonte confirmar, isso fecha as lacunas E6.
