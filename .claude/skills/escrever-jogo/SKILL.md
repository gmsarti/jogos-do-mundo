---
name: escrever-jogo
description: Escreve ou revisa as seções didáticas de um jogo do Jogos do Mundo (resumo, "Do que você vai precisar?", "Como jogar?", "Para quem conduz") na voz da oficina Jogos africanos, usando só os fatos da ficha do jogo, e audita se as regras bastam para jogar. Use sempre que o pedido envolver reescrever, simplificar ou criar o texto de um jogo em content/games/, deixar uma ficha mais acessível para professores ou iniciantes, escrever um tutorial ou passo a passo de um jogo, conferir se as regras de um jogo estão completas ou rodar a auditoria de jogabilidade, mesmo que o pedido não cite a skill nem o guia de voz.
---

# Escrever jogo

Esta skill transforma a ficha de um jogo (`content/games/<id>.md`) num texto que uma professora consegue ler e ensinar no dia seguinte, sem perder a honestidade da curadoria.

Dois princípios guiam tudo:

1. **A voz vem da oficina; os fatos vêm da ficha.** O tom segue o `content/VOZ.md`. Cada fato do texto (peças, tabuleiro, regras, povos, datas) precisa estar no `.md` do jogo. Nada vem da memória do modelo nem da oficina.
2. **A IA aponta lacunas; não preenche regras.** Quando a ficha não diz algo que um jogador precisaria saber, o texto fica sem essa informação e a lacuna vai para o relatório. Uma regra plausível e errada é pior que uma lacuna, e ensinar uma regra inventada a uma turma inteira é o pior caso possível.

## Antes de começar

Leia, nesta ordem:

1. `content/VOZ.md` — a voz, o molde e as palavras. É a fonte de verdade; se este arquivo e o `VOZ.md` divergirem, vale o `VOZ.md`.
2. `content/AGENTS.md` — schema e regras de curadoria.
3. O arquivo do jogo, `content/games/<id>.md`.
4. `references/exemplo-achi.md` — um antes e depois completo, com o relatório de lacunas.
5. Se precisar calibrar o tom, `references/voz-oficina.md` — trechos da oficina original. **Não use como fonte de fatos.**

## Fluxo

### 1. Inventário de fatos

Antes de escrever, liste para si tudo o que a ficha afirma sobre como se joga: tabuleiro, peças, jogadores e cada regra de `## Regras`, com as marcas "(a verificar)" que tiverem. Esse inventário é o limite do texto: o que não está nele não entra.

Consequências diretas podem entrar. "As peças deslizam para um ponto vizinho vazio" permite escrever "a peça anda um ponto por vez". Mas "não dá para pular por cima de outra peça" só entra se a ficha disser, porque há jogos em que se pula.

### 2. Checklist de jogabilidade

Rode o `references/checklist-jogabilidade.md` sobre o inventário. O resultado é o relatório de lacunas e o veredito do jogo (joga / joga com lacunas / não joga).

Se o veredito for **não joga** (status `unknown` ou regras sem os itens essenciais), não escreva "Como jogar?". Escreva só o resumo e, se a ficha permitir, "Do que você vai precisar?", e entregue o relatório.

### 3. Escrever

Siga o molde do `VOZ.md`:

- **Resumo** (`summary` no frontmatter): reescreva na voz, com uma ou duas frases, sem acrescentar fato.
- **`## Do que você vai precisar?`**: lista curta e dica de improviso. Se a `## História` registra o material tradicional (areia, sementes, folhas de palmeira), use-o na dica.
- **`## Como jogar?`**: de 4 a 10 passos, imperativo, um passo por ação, sempre fechando com o fim da partida. Itens "(a verificar)" mantêm a marca.
- **`## Para quem conduz`**: só se houver algo útil a dizer. Toda adaptação que não está na ficha começa com "**Sugestão do site:**".

Não mexa em `## Regras`, `## História`, `refs`, `status` nem nos outros campos de curadoria. Se achar um erro neles, registre no relatório.

Ordem das seções no arquivo: `## História`, `## Do que você vai precisar?`, `## Como jogar?`, `## Para quem conduz`, `## Regras`.

### 4. Autoconferência

Releia o "Como jogar?" frase por frase e responda, para cada uma: **em que linha da ficha isso está?** Se não houver resposta, apague a frase e registre a lacuna.

Confira também: todo número (peças, casas, sementes) bate com a ficha; nenhuma palavra da coluna "Evite" do `VOZ.md`; nenhuma comparação com outro jogo apresentada como parentesco histórico.

### 5. Validar

Rode `make data` e depois `make check`. Se a validação recusar as seções novas, a tarefa T-065 (schema) ainda não foi feita: pare e avise, sem contornar o schema.

## O que entregar

1. O arquivo `content/games/<id>.md` editado.
2. O relatório de lacunas no formato do checklist, para ir na descrição do PR.
3. Uma lista curta das divergências encontradas entre a ficha e qualquer outra versão que o usuário tenha mencionado (como a da oficina), para virar issue de curadoria.

Não faça commit, push nem abra PR sem autorização explícita. Commit de conteúdo é separado de commit de código.

## Em lote

Para vários jogos (por exemplo, um lote do T-074 ou a auditoria do T-068):

- Na **auditoria**, rode só os passos 1 e 2 em todos os jogos e monte `docs/relatorio-jogabilidade.md` com uma linha por jogo (id, status, veredito, lacunas) e um bloco por jogo com as lacunas detalhadas.
- Na **reescrita**, trate um jogo por vez, do passo 1 ao 5, e junte os relatórios no fim. Não deixe o texto de um jogo contaminar o de outro: cada jogo usa só a própria ficha.
