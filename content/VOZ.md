# content/ — Guia de Voz

Como escrever as seções didáticas de um jogo: o resumo, `## Do que você vai precisar?`, `## Como jogar?` e `## Para quem conduz`. As regras de curadoria do [`AGENTS.md`](AGENTS.md#guia-de-curadoria) valem aqui também e vêm antes deste guia.

A voz nasceu na oficina *Jogos africanos — Dá Jogo!*. Os fatos, não: **a voz vem da oficina, os fatos vêm da ficha.**

## Para quem escrevemos

Para uma professora que vai ensinar o jogo amanhã, para uma família num domingo à tarde, para alguém que abriu o link por curiosidade. Ninguém aqui conhece o jogo, e ninguém precisa saber o que é "captura posicional".

Um bom teste: **dá para ler o "Como jogar?" em voz alta numa roda e todo mundo começar a jogar?**

## O molde

Cada jogo responde a três perguntas, nesta ordem.

### 1. De onde vem? (resumo e `## História`)

O resumo é a porta de entrada: uma ou duas frases que dizem onde e por quem o jogo é jogado e o que se faz nele. Uma imagem concreta ajuda mais que uma classificação.

> **Melhor:** Jogo de alinhamento dos Tiriki, no Quênia. *Shisima* quer dizer fonte de água, e as peças são *imbalavali*, insetos d'água: é como se os bichinhos andassem por cima da água.
>
> **Pior:** Jogo abstrato de alinhamento em grafo octogonal com nó central.

A `## História` continua com as fontes no texto, como hoje. Pode trazer a lenda ou a curiosidade, desde que tenha fonte.

### 2. Do que você vai precisar?

Uma lista curta e, depois dela, a dica de improviso.

```markdown
## Do que você vai precisar?

- Um tabuleiro de 3×3 pontos, ligados por linhas retas e pelas duas diagonais
- 3 ou 4 peças para cada jogador, de cores diferentes

O tabuleiro pode ser impresso, desenhado no papel ou riscado na terra. As peças podem ser feijões, tampinhas, botões, pedrinhas e por aí vai.
```

- Diga o tamanho do tabuleiro em palavras que alguém consegue desenhar ("7 linhas na horizontal e 6 na vertical").
- Se a ficha registra mais de uma quantidade de peças, diga as duas.
- Dado, varetas, sementes: tudo o que for preciso entra na lista.

### 3. Como jogar?

Passos numerados, do começo ao fim da partida.

- **Um passo, uma ação.** "Coloque uma peça num ponto livre" é um passo. "Coloque e depois mova" são dois.
- **Imperativo e "você".** "Mova uma peça sua", não "o jogador move uma peça".
- **Exceções como sub-itens**, com recuo de 3 espaços (depende do T-064; até lá, escreva a exceção numa frase dentro do próprio passo):

  ```markdown
  3. Na sua vez, mova uma peça para uma casa vizinha vazia.
     - Só na horizontal ou na vertical, nunca na diagonal.
     - Não dá para pular por cima de outra peça.
  ```

- **Sempre feche a partida.** O último passo diz como se vence e, se a ficha registrar, como se empata ou quando o jogo acaba sem vencedor.
- **De 4 a 10 passos.** Se passar de 10, o jogo provavelmente tem fases; diga isso no primeiro passo ("O jogo tem duas fases: colocar as peças e mover as peças").

Use o [checklist de jogabilidade](../.claude/skills/escrever-jogo/references/checklist-jogabilidade.md) para conferir se nada ficou de fora.

### 4. Para quem conduz (opcional)

Notas para quem vai ensinar: por onde começar com crianças pequenas, que parte da regra costuma confundir, como simplificar.

**Sugestão pedagógica não é tradição.** Toda adaptação que não está nas fontes é apresentada como sugestão, nunca como regra do jogo:

> **Sugestão do site:** com crianças pequenas, comece jogando só a fase de colocar as peças, como no jogo da velha. Quando todos entenderem, acrescente a fase de mover.

## Palavras

| Use | Evite | Por quê |
| --- | --- | --- |
| povo, comunidade, os iorubás | tribo | "Tribo" carrega um olhar colonial e é impreciso |
| jogo tradicional | jogo primitivo, exótico | Juízo de valor |
| o nome atual do país | "a região do Niger" sem dizer o país | O mapa é por país atual |
| *nome local* em itálico | nome local sem marcação | Ajuda a ler e a pronunciar |
| **ponto** quando as peças ficam nos cruzamentos; **casa** quando ficam nos quadrados | misturar os dois no mesmo jogo | Quem vai desenhar o tabuleiro precisa saber onde as peças ficam |

**Termos do glossário** (captura por salto, captura por cerco, semeadura…) podem ser usados sem explicar: a ficha lista as "Palavras do jogo" no fim de "Como jogar?". Na primeira vez, prefira a forma mais simples: "pule por cima da peça do adversário" antes de "captura por salto".

**Comparações com jogos conhecidos** (jogo da velha, damas, trilha) ajudam a ensinar e podem ser usadas como apoio. Mas "parece o jogo da velha" é uma comparação; "é da mesma família do jogo da velha" é uma afirmação histórica e precisa de fonte.

## Fatos

1. **Tudo o que está em "Como jogar?" está em "Regras".** O passo a passo reescreve as regras da ficha para iniciantes; não acrescenta regra.
2. **Lacuna continua lacuna.** Se "Regras" não diz quem começa, "Como jogar?" também não diz. A lacuna vai para o relatório de jogabilidade, e quem fecha é a curadoria, com fonte.
3. **"(a verificar)" é herdado.** Uma regra marcada "(a verificar)" em "Regras" leva a mesma marca em "Como jogar?".
4. **Fonte de fora entra pela curadoria.** Se você conhece uma versão do jogo que não está na ficha, inclusive a da oficina, abra uma issue em vez de escrever.

## Formatação

O site usa um mini-Markdown: **negrito**, *itálico*, listas (`-` e `1.`) e parágrafos. Não use títulos dentro das seções, tabelas, links ou imagens no texto.
