---
id: adji-boto
title: Adji-boto
names:
  - adji-boto · srm
fam:
  - semeadura
countries:
  - SR
cultures:
  - saramacas (maroons)
board: 2 fileiras de 5 covas (Ludii, a partir de Herskovits 1929)
pieces: sementes, 10 em cada cova (Ludii, a verificar)
players: "2"
period: registrado em 1929
status: partial
living: desconhecido
sens: ritual (funerário); restrito
ev:
  kind: ethnography
  date: "1929"
  ref: Herskovits 1929
recon: []
summary: "Jogo de semeadura dos saramacas, quilombolas (*maroons*) do rio Saramacca, no Suriname, ligado aos ritos funerários: joga-se nos dez dias antes do enterro, e o tabuleiro fica ao relento à noite para os espíritos dos mortos jogarem. A Wikipedia o compara a mancalas do Benin."
refs:
  - title: Wikipedia
    url: https://en.wikipedia.org/wiki/Adji-boto
  - title: Ludii, arquivo de regras Adjiboto.lud (a partir de Herskovits 1929)
    url: https://github.com/Ludeme/Ludii/blob/master/Common/res/lud/board/sow/two_rows/Adjiboto.lud
place: ""
---

## História

Segundo a Wikipedia, o jogo tem um papel importante na vida social dos saramacas e está ligado aos rituais funerários. Depois da morte de alguém, joga-se nos dez dias antes do enterro; à noite, o tabuleiro é deixado ao relento, para que os *yorkas* (espíritos dos mortos) joguem com ele. A intenção é atrair os espíritos para a aldeia, para que acabem aceitando o espírito do morto na comunidade deles. O tabuleiro só pode ser feito por viúvas. A Wikipedia diz que o jogo é parecido com alguns mancalas da África Ocidental, sobretudo do Benin, e que poderia ser visto como uma variação do *wari*, o mancala mais comum nas Américas. A fonte primária é M. J. Herskovits, "Adjiboto, an African Game of the Bush-Negroes of Dutch Guiana" (*Man*, 1929, 29 (90): 122–127), que a Wikipedia cita, mas que não foi aberto. O Ludii descreve o jogo como observado no começo do séc. XX na aldeia de Beidotti, no Suriname, onde viviam os saamaka, com o tabuleiro guardado numa construção aberta, usada como lugar de encontro do conselho da aldeia, casa de luto e abrigo de viajantes (Ludii, a partir de Herskovits 1929).

## Do que você vai precisar?

- Um tabuleiro de 2 fileiras de 5 covas (a verificar), com cada jogador de um lado
- 100 sementes: 10 em cada cova (a verificar)

O tabuleiro pode ser desenhado no papel, com um círculo para cada cova, ou feito em copinhos de ovos. As sementes podem ser feijões, grãos de milho ou pedrinhas.

## Como jogar?

Todos os passos vêm do Ludii, que cita Herskovits 1929 (pp. 123–124), e por isso levam "(a verificar)".

1. Dois jogadores, frente a frente, cada um com a fileira de 5 covas do seu lado (a verificar). Ponha 10 sementes em cada cova.
2. Os jogadores se alternam; a fonte não diz quem começa.
3. Na sua vez, escolha uma das suas covas, tire todas as sementes e semeie uma a uma, no sentido anti-horário, começando pela própria cova de onde elas saíram (a verificar). Você não pode começar por uma cova com uma só semente.
4. Nas dez primeiras jogadas, cada jogador tem de jogar uma vez com cada uma das suas 5 covas, e na primeira jogada ninguém captura (a verificar; veja "Para quem conduz").
5. Depois, capture assim: se a última semente cair numa cova que vem logo antes, no sentido da semeadura, de uma cova com 1, 3 ou 5 sementes, você leva as sementes dessa cova seguinte. Se a cova depois dela também tiver 1, 3 ou 5, leve-a também, e assim por diante, até chegar a uma cova com outra quantidade (a verificar).
6. Vence quem deixar o adversário sem poder jogar.
7. Se um jogador não puder mais jogar, pode redistribuir nas suas covas as sementes que capturou; se conseguir encher as 5 covas com 10 sementes cada uma, o jogo termina empatado (a verificar).

## Para quem conduz

O jogo é ligado aos funerais dos saramacas, tem tabuleiro feito só por viúvas e é jogado nos dias antes do enterro (Wikipedia). O texto aqui só registra o que as fontes dizem; antes de ensiná-lo, vale conferir como apresentá-lo.

As fontes abertas não dizem quem começa. O Ludii escreve o empate na descrição em prosa (encher as 5 covas com 10 sementes) e, no código, como 50 sementes ou mais capturadas por quem ficou sem jogadas, o que dá o mesmo número (5×10). Herskovits 1929 não foi aberto.

Divergência dentro do Ludii: a descrição em prosa diz que só a primeira jogada não captura; o código do Ludii não faz nenhuma captura em toda a fase de abertura (as dez primeiras jogadas). O passo 4 segue a prosa.

**Sugestão do site:** combinem antes da partida quem começa.

## Regras

Fonte: Ludii, arquivo de regras `Adjiboto.lud` (crédito Eric Piette; fonte citada: Herskovits 1929, pp. 123–124). O artigo de Herskovits (*Man* 29 (90): 122–127) não foi aberto, então tudo abaixo é de segunda mão e leva "(a verificar)".

1. Dois jogadores. O tabuleiro tem 2 fileiras de 5 covas (2×5), e cada jogador joga com a fileira do seu lado (a verificar).
2. Cada cova começa com 10 sementes (a verificar).
3. A semeadura vai no sentido anti-horário, primeiro na própria cova de onde as sementes saíram (a verificar). Não se pode começar por uma cova com uma só semente (a verificar).
4. Fase de abertura: nas dez primeiras jogadas, cada jogador tem de jogar uma vez de cada uma das suas 5 covas; na primeira jogada não se captura (a verificar). O código do Ludii não captura em toda a fase de abertura; a descrição em prosa diz só a primeira jogada.
5. Fase principal: capturas são feitas quando a última semente da semeadura cai numa cova que vem logo antes de uma cova com 1, 3 ou 5 sementes; as sementes dessa cova (a cova seguinte, no sentido da semeadura, leitura do código do Ludii) são tiradas. As covas depois dela que também tiverem 1, 3 ou 5 sementes são capturadas, até chegar a uma cova que não tenha uma dessas quantidades (a verificar).
6. Vence o jogador cujo adversário não pode mais semear. Se um jogador não puder mais jogar, pode redistribuir nas suas covas as sementes capturadas; se conseguir encher as 5 com 10 sementes cada uma, o jogo é empate (a verificar). (No código do Ludii, a mesma regra aparece como 50 sementes ou mais capturadas por quem ficou sem jogadas.)

**Não dito pelas fontes abertas:** quem começa.

