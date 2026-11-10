# Relatório de jogabilidade

Auditoria do T-068, **Etapa 1**: o checklist da skill `escrever-jogo` (`.claude/skills/escrever-jogo/references/checklist-jogabilidade.md`) aplicado às 94 fichas de `content/games/`, em 05/11/2026.

**Etapa 2** (pesquisa de lacunas, lote a lote): feita no lote 2 (alquerque, ayo, bagh-chal, konane, mu-torere, oware, tablut, toguz-kumalak, trilha, weiqi), em 05/11/2026. Feita também no lote 3 (damas-brasileiras, xadrez, adugo, komikan, jogo-real-de-ur, yut-nori, mahjong, bao-la-kiswahili, muvalavala), em 06/11/2026, e reescrito em 10/11/2026. Feita também no lote 4 (shogi, xiangqi, puluc, e-sugoroku, hnefatafl, raposa-e-gansos, vela, pachisi, omweso), nas mesmas datas. Feita também no lote 5 (makruk, janggi, brandubh, ludus-latrunculorum, senet, raposa-e-galinhas, owela-benguela, domino-doble-nueve, adji-kui), nas mesmas datas. Feita também no lote 6 (sittuyin, shatranj, chaupar, nard, bao-ki-arabu, tchadji, warri-caribe, domino, ashta-kashte), nas mesmas datas. Os blocos dos jogos dos lotes 2 a 6 e as linhas deles na tabela-resumo mostram o estado depois da pesquisa e da reescrita, com o que foi resolvido e o que segue em aberto. Os outros blocos continuam como na Etapa 1.

A pergunta de fundo é: **alguém que nunca viu o jogo consegue jogar uma partida inteira só com o que a ficha diz?**

## Como foi feita

- **Só com o que está na ficha.** Sem pesquisa na web e sem o que se sabe dos jogos de memória. Cada jogo foi lido sozinho, um por vez.
- **Os 8 jogos do lote 1** (achi, shisima, yote, seega, fanorona, fanorona-telo, morabaraba, gulugufe) entram no estado atual, já com "Como jogar?" e com as regras pesquisadas no PR #22.
- **Nenhuma ficha foi alterada.** Os erros achados estão em [Erros nas fichas](#erros-nas-fichas).
- **Critério de veredito.** Um essencial (E1 a E6) só conta como respondido se dá para agir a partir dele. "Sim, mas ambíguo" (duas quantidades de peças, dois tamanhos de tabuleiro) conta como respondido e vira lacuna. "Parcial" (o tabuleiro tem um triângulo que não dá para desenhar, a posição inicial só existe em figura) conta como faltando. Foi o critério do lote 1 para o Gulugufe.

## Como ler

- **Lacunas:** itens do checklist (E1 a I6) que ficaram sem resposta ou ambíguos e foram listados no bloco do jogo. Notas que não são item do checklist, como a sensibilidade (`sens`), aparecem no bloco com "—" e não entram na conta.
- **Fonte:** quantas dessas lacunas são do tipo "fonte", isto é, podem estar nas `refs` da ficha ou em fontes comuns. Os outros tipos são "curadoria" (precisa de decisão humana) e "sem saída" (status `unknown` sem registro, ou jogo sem registro de regras).
- **"(a verificar)":** quantas vezes a expressão "a verificar" aparece no arquivo inteiro (frontmatter e corpo). É uma contagem simples, à mão, até existir o relatório do T-050.
- **"Como jogar?":** se a ficha já tem a seção.

## Números

- **94 jogos:** nenhum **joga**, 17 **jogam com lacunas** e 77 **não jogam** (Etapa 1). Depois da Etapa 2 do lote 2: **2 jogam** (Toguz kumalak e Weiqi), 15 jogam com lacunas e 77 não jogam. Depois do lote 3: **4 jogam** (mais Damas brasileiras e Xadrez), 20 jogam com lacunas e 70 não jogam. Depois do lote 4: **5 jogam** (mais o Xiangqi), 28 jogam com lacunas e 61 não jogam (o Fanorona, do lote 1, também passou a jogar com lacunas na pesquisa deste lote). Depois do lote 5: **5 jogam**, 34 jogam com lacunas e 55 não jogam. Depois do lote 6: **5 jogam**, 43 jogam com lacunas e 46 não jogam.
- **787 lacunas** no total, das quais **685 são do tipo "fonte"** (Etapa 1). O lote 2 passou de 38 lacunas (32 de fonte) para 19 (13 de fonte): depois dele eram 768 no catálogo, 666 de fonte. O lote 3 passou de 55 lacunas (54 de fonte) para 24 (17 de fonte): depois dele eram 737 no catálogo, 629 de fonte. O lote 4 passou de 62 lacunas (57 de fonte) para 26 (16 de fonte): depois dele eram 700 no catálogo, 587 de fonte. O lote 5 passou de 75 lacunas (68 de fonte) para 40 (23 de fonte): depois dele eram 665 no catálogo, 542 de fonte. O lote 6 passou de 80 lacunas (78 de fonte) para 27 (23 de fonte): hoje são 612 no catálogo, 487 de fonte.
- Dos 17 que jogavam com lacunas na Etapa 1, 7 são do lote 1 (o Fanorona saiu desse grupo, ver o bloco dele) e 10 são o lote 2, agora reescrito. Dos 9 jogos do lote 3, 7 saíram de "não joga": Damas brasileiras e Xadrez para "joga"; Adugo, Yut nori, Mahjong, Bao la kiswahili e Muvalavala para "joga com lacunas". O Komikan e o Jogo real de Ur seguem "não joga".
- Dos 9 jogos do lote 4, 8 saíram de "não joga": o Xiangqi para "joga" e Shogi, Puluc, Hnefatafl, Raposa e gansos, Vela, Pachisi e Omweso para "joga com lacunas". O E-sugoroku segue "não joga".
- Dos 9 jogos do lote 5, 6 saíram de "não joga" para "joga com lacunas": Makruk, Janggi, Brandubh, Dominó doble nueve e, só depois de escolhida uma reconstrução, Ludus latrunculorum e Senet. Raposa e galinhas, Owela benguela e Adji kui seguem "não jogam".
- Dos 9 jogos do lote 6, os 9 saíram de "não joga" para "joga com lacunas"; Nard e Dominó, só depois de escolhida uma forma (Nard) ou um jogo (Dominó), e por isso ficaram sem "Como jogar?".
- **7 jogos** ficam num grupo à parte, fora dos lotes: lacunas sem saída ou presas a uma decisão de curadoria.
- **24 fichas** têm algum erro registrado (campo "ver fonte", `ref` fraca ou quebrada, remissão a um trecho que não existe).

## Tabela-resumo

Ordenada do pior veredito para o melhor e, dentro de cada veredito, do maior número de lacunas para o menor.

| id | status | veredito | lacunas | fonte | "(a verificar)" | "Como jogar?" |
| --- | --- | --- | --- | --- | --- | --- |
| adji-boto | partial | Não joga | 12 | 12 | 1 | não |
| aiu | partial | Não joga | 12 | 12 | 0 | não |
| ayit | documented | Não joga | 12 | 12 | 1 | não |
| bul | documented | Não joga | 12 | 12 | 1 | não |
| casa-do-rei | unknown | Não joga | 12 | 0 | 0 | não |
| chunkana | partial | Não joga | 12 | 12 | 1 | não |
| dadu | unknown | Não joga | 12 | 12 | 4 | não |
| fidchell | unknown | Não joga | 12 | 0 | 2 | não |
| kay-haiti | documented | Não joga | 12 | 12 | 0 | não |
| kiela | partial | Não joga | 12 | 12 | 2 | não |
| mehen | unknown | Não joga | 12 | 0 | 0 | não |
| mulabalaba | documented | Não joga | 12 | 12 | 0 | não |
| nchayo | unknown | Não joga | 12 | 12 | 0 | não |
| ntxuva | partial | Não joga | 12 | 12 | 2 | não |
| ohvalhu | documented | Não joga | 12 | 12 | 0 | não |
| raazuvaa | unknown | Não joga | 12 | 12 | 2 | não |
| raja-pasu-mandiri | documented | Não joga | 12 | 12 | 1 | não |
| tab | unknown | Não joga | 12 | 12 | 3 | não |
| taikyoku-shogi | partial | Não joga | 12 | 0 | 2 | não |
| taptana | partial | Não joga | 12 | 0 | 0 | não |
| tchouba | documented | Não joga | 12 | 12 | 0 | não |
| tsuka | partial | Não joga | 12 | 12 | 0 | não |
| vinte-casas | reconstructed | Não joga | 12 | 12 | 1 | não |
| yole | partial | Não joga | 12 | 12 | 0 | não |
| awarkuden | documented | Não joga | 11 | 11 | 1 | não |
| ban-sugoroku | partial | Não joga | 11 | 11 | 0 | não |
| bao-la-kujifunza | partial | Não joga | 11 | 11 | 0 | não |
| coyote | partial | Não joga | 11 | 11 | 0 | não |
| hoyito | documented | Não joga | 11 | 11 | 0 | não |
| huayru | partial | Não joga | 11 | 11 | 0 | não |
| patolli | partial | Não joga | 11 | 9 | 1 | não |
| rifa-pareci | partial | Não joga | 11 | 11 | 0 | não |
| ashta-kashte | documented | Joga com lacunas | 3 | 3 | 3 | sim |
| chaupar | documented | Joga com lacunas | 5 | 5 | 3 | sim |
| domino | documented | Joga com lacunas | 1 | 0 | 2 | não |
| domino-chines | partial | Não joga | 10 | 10 | 2 | não |
| duodecim-scripta | reconstructed | Não joga | 10 | 0 | 3 | não |
| igisoro | partial | Não joga | 10 | 10 | 1 | não |
| kechukawe | partial | Não joga | 10 | 10 | 0 | não |
| nard | partial | Joga com lacunas | 3 | 2 | 3 | não |
| ouk-chatrang | partial | Não joga | 10 | 10 | 0 | não |
| ouril | partial | Não joga | 10 | 10 | 1 | não |
| adji-kui | partial | Não joga | 4 | 3 | 0 | não |
| bao-ki-arabu | documented | Joga com lacunas | 4 | 4 | 2 | sim |
| chaturanga | reconstructed | Não joga | 9 | 8 | 0 | não |
| domino-doble-nueve | partial | Joga com lacunas | 3 | 3 | 14 | sim |
| omweso | documented | Joga com lacunas | 2 | 2 | 6 | sim |
| owela-benguela | documented | Não joga | 6 | 5 | 0 | não |
| raposa-e-galinhas | documented | Não joga | 9 | 5 | 2 | não |
| tchadji | documented | Joga com lacunas | 5 | 5 | 2 | sim |
| warri-caribe | documented | Joga com lacunas | 3 | 2 | 2 | sim |
| bao-la-kiswahili | documented | Joga com lacunas | 3 | 2 | 4 | sim |
| brandubh | reconstructed | Joga com lacunas | 5 | 1 | 1 | sim |
| janggi | documented | Joga com lacunas | 2 | 0 | 10 | sim |
| ludus-latrunculorum | reconstructed | Joga com lacunas | 6 | 4 | 0 | não |
| muvalavala | documented | Joga com lacunas | 3 | 3 | 3 | sim |
| pachisi | documented | Joga com lacunas | 5 | 3 | 4 | sim |
| raposa-e-gansos | documented | Joga com lacunas | 5 | 2 | 2 | sim |
| senet | reconstructed | Joga com lacunas | 3 | 1 | 2 | não |
| vela | partial | Joga com lacunas | 4 | 4 | 3 | sim |
| hnefatafl | reconstructed | Joga com lacunas | 2 | 0 | 1 | sim |
| komikan | documented | Não joga | 6 | 4 | 0 | não |
| makruk | documented | Joga com lacunas | 2 | 1 | 3 | sim |
| sittuyin | documented | Joga com lacunas | 1 | 1 | 4 | sim |
| xiangqi | documented | Joga | 0 | 0 | 1 | sim |
| adugo | documented | Joga com lacunas | 5 | 2 | 3 | sim |
| jogo-real-de-ur | reconstructed | Não joga | 5 | 5 | 2 | não |
| puluc | documented | Joga com lacunas | 4 | 2 | 2 | sim |
| quebra-cabeca-kanela | unknown | Não joga | 6 | 0 | 0 | não |
| shatranj | documented | Joga com lacunas | 2 | 1 | 0 | sim |
| shogi | documented | Joga com lacunas | 1 | 1 | 0 | sim |
| yut-nori | documented | Joga com lacunas | 1 | 1 | 2 | sim |
| mahjong | documented | Joga com lacunas | 1 | 0 | 3 | sim |
| xadrez | documented | Joga | 0 | 0 | 1 | sim |
| damas-brasileiras | documented | Joga | 0 | 0 | 0 | sim |
| e-sugoroku | documented | Não joga | 3 | 2 | 0 | não |
| fanorona | documented | Joga com lacunas | 1 | 1 | 5 | sim |
| yote | documented | Joga com lacunas | 7 | 6 | 1 | sim |
| seega | documented | Joga com lacunas | 5 | 5 | 5 | sim |
| tablut | documented | Joga com lacunas | 5 | 4 | 0 | sim |
| fanorona-telo | documented | Joga com lacunas | 3 | 3 | 3 | sim |
| gulugufe | documented | Joga com lacunas | 3 | 3 | 3 | sim |
| mu-torere | documented | Joga com lacunas | 3 | 2 | 1 | sim |
| achi | documented | Joga com lacunas | 2 | 2 | 0 | sim |
| alquerque | documented | Joga com lacunas | 2 | 0 | 6 | sim |
| bagh-chal | documented | Joga com lacunas | 2 | 2 | 4 | sim |
| konane | documented | Joga com lacunas | 2 | 1 | 2 | sim |
| morabaraba | documented | Joga com lacunas | 2 | 1 | 9 | sim |
| oware | documented | Joga com lacunas | 2 | 1 | 8 | sim |
| shisima | documented | Joga com lacunas | 2 | 2 | 5 | sim |
| trilha | documented | Joga com lacunas | 2 | 2 | 2 | sim |
| ayo | documented | Joga com lacunas | 1 | 1 | 10 | sim |
| toguz-kumalak | documented | Joga | 0 | 0 | 4 | sim |
| weiqi | documented | Joga | 0 | 0 | 1 | sim |

## Padrões que se repetem

1. **Quem começa (I1) falta em quase tudo.** Sem resposta em 87 dos 94 jogos; responde em 4 (Adugo, Fanorona, Morabaraba, Weiqi) e em parte em 3 (Kōnane, Yoté, Raposa e gansos). Dos 17 que jogam com lacunas, falta em 13. No lote 1, o PR #22 procurou nas fontes de 5 jogos e não achou. É a lacuna que mais vai continuar aberta depois da pesquisa, e o lote 1 já a resolve em "Para quem conduz" como "**Sugestão do site:**".
2. **Empate (I5) e jogador travado (I4).** O empate falta em 83 jogos e o bloqueio em 70. Nos jogos que jogam com lacunas, são as lacunas mais comuns depois de I1.
3. **Regras que remetem a outro lugar.** A ficha precisa se sustentar sozinha, e muitas não se sustentam:
   - remetem à fonte: "Ver Ludii" (Bao ki arabu), "Detalhes na fonte" (Raja pasu mandiri, Owela), "ver Mancala World" (Hoyito, Igisoro), "ler o artigo completo" (Yole);
   - remetem a outro jogo: "como o gamão" (Ban-sugoroku), "como no oware" (Ouril, Warri do Caribe), "como o dominó de bloqueio" (Dominó doble nueve, e o Dominó também não o descreve), "como no pachisi" (Chaupar), "Detalhes em Jogo real de Ur" (Vinte casas), "como o fanorona" (Vela), "quase idêntico ao Makruk" (Ouk chatrang), e o Janggi, que só lista as diferenças em relação ao Xiangqi;
   - explicam o movimento pelo xadrez: "como a torre" (Brandubh, Hnefatafl, Tablut, Makruk, Shatranj, Xiangqi).
4. **Mancalas: classificação no lugar de regra.** São 26 jogos de semeadura, e só 3 jogam com lacunas (Ayò, Oware, Toguz kumalak). Muitos têm só a classificação do Mancala World ("duas fileiras, um ciclo, semeadura em várias voltas") e o tabuleiro sem o número de covas ("2 fileiras", "4 fileiras": Adji-boto, Ayit, Kay, Kiela, Mulabalaba, Nchayo, Ntxuva, Ohvalhu, Raja pasu mandiri, Tchouba). É a mesma falta que trava o desenho no T-057.
5. **Xadrez e jogos de guerra: nenhuma ficha dá a posição inicial.** Xadrez, Xiangqi, Shogi, Shatranj, Makruk, Sittuyin, Janggi, Chaturanga e Ouk chatrang. Quase todas também não dizem quem começa nem como as peças em geral capturam.
6. **Jogos de caça: falta como o caçador vence.** Raposa e galinhas, Coyote, Komikan e Raposa e gansos dizem como as presas vencem, não o caçador. O salto múltiplo quase nunca é dito. O triângulo do Adugo, do Komikan e do Taptana não dá para desenhar (liga com o T-054).
7. **Reconstruções sem escolha.** Brandubh, Hnefatafl, Chaturanga, Ludus latrunculorum, Senet, Patolli e Duodecim scripta citam várias reconstruções sem adotar uma. Para ter "Como jogar?", a curadoria precisa escolher uma e listá-la em `recon`.
8. **`unknown` por falta de leitura, não por falta de registro.** Dadu, Nchayo, Raazuvaa e Tab estão `unknown` porque a fonte ainda não foi aberta ("não lido nesta rodada"). Por isso as lacunas deles são do tipo "fonte", e não "sem saída".
9. **Sensibilidade antes da pesquisa.** Em vários jogos, `sens` traz ritual, restrição de gênero ou aposta (Adji-boto, Bul, Dadu, Huayru, Komikan, Owela, Tchadji, Warri do Caribe, Tsuka, Yole, Rifa pareci, Patolli, Senet). O `AGENTS.md` pede que se pergunte antes de publicar uma tradição viva sensível; nesses jogos, a decisão vem antes da Etapa 2.

## Erros nas fichas

Registrados aqui, sem mexer nas fichas na Etapa 1. Os corrigidos depois estão marcados.

- **Campo com "ver fonte" no lugar de "desconhecido"** (o `content/AGENTS.md` pede "desconhecido" quando não há fonte): Ashta-kashte (`pieces`, `players`), Bul (`board`, `pieces`), Chaturanga (`pieces`), Duodecim scripta (`pieces`), Quebra-cabeça Kanela (`pieces`), Rifa pareci (`players`), Taikyoku shogi (`board`), Tab (`board`), Tsuka (`board`), Yole (`pieces`).
- **`ref` fraca ou ausente:** Janggi (única `ref` é um blog), Mahjong (única `ref` é a bibliografia de Culin, sem regras), Trilha ("Blog (regras)"; corrigido no lote 2), Ouril (uma "implementação de software" sem nome citada nas Regras), Xadrez (nenhuma `ref` cobre as regras modernas), Bagh-chal (a História cita o Ludii, que não está nas `refs`; corrigido no lote 2).
- **`ref` provavelmente quebrada:** Hoyito, `https://Www.wikipedia.org/wiki/Hoyito`, sem o idioma no domínio.
- **Remissão a um trecho que não existe:** Mū tōrere (Regra 3: "ver divergências"; corrigido no lote 2) e Ntxuva (Regras: "ver acima").
- **Inconsistências:** Fanorona telo (`summary`: Murray 1952; Regras: Murray 1951); Bao la kiswahili (`names` traz "bao la kujifunza", que tem ficha própria); Muvalavala (`summary`: formas Luena e Quioco; Regras: Luena e Mbunda); Morabaraba (as diagonais do desenho e as da Regra 1, já conhecido).
- **Parentesco sem fonte no resumo:** Igisoro ("Parente do Omweso").

## Proposta de lotes para o T-074

Cada lote passa primeiro pela Etapa 2 (pesquisa de lacunas) e só depois é reescrito. Critérios, nesta ordem:

1. jogos que já jogam ou cujas lacunas são do tipo "fonte" (menos lacunas primeiro);
2. variedade de famílias em cada lote;
3. jogos da oficina *Jogos africanos* ainda fora do lote 1. **Não aplicado:** o repositório não tem a lista da oficina; os únicos jogos dela documentados são os 8 do lote 1 e os 4 do T-058, que ainda não estão no catálogo.

Os jogos de semeadura são 26 dos 94, e por isso aparecem em quase todo lote.

| Lote | Jogos | Famílias | Lacunas (fonte) | Por que juntos |
| --- | --- | --- | --- | --- |
| 1 | achi, shisima, yote, seega, fanorona, fanorona-telo, morabaraba, gulugufe | — | — | Feito (PRs #21 e #22). Pendências: posição inicial do Fanorona (ver lote 4) e quem começa em 5 jogos |
| 2 | alquerque, ayo, bagh-chal, konane, mu-torere, oware, tablut, toguz-kumalak, trilha, weiqi | damas, semeadura, caça, bloqueio, alinhamento, território | 38 (32) | Feito: Etapa 2 e reescrita. Ficaram 19 lacunas (13 de fonte), 6 de curadoria para decidir |
| 3 | damas-brasileiras, xadrez, adugo, komikan, jogo-real-de-ur, yut-nori, mahjong, bao-la-kiswahili, muvalavala | damas, xadrez, caça, corrida, peças, semeadura | 55 (54) | Etapa 2 e reescrita feitas (Komikan e Jogo real de Ur só ganharam resumo e \"Do que você vai precisar?\"). Ficaram 24 lacunas (17 de fonte). Damas brasileiras e Xadrez passaram a jogar; Adugo, Yut nori, Mahjong, Bao la kiswahili e Muvalavala jogam com lacunas; Komikan e Jogo real de Ur seguem sem jogar (triângulo, posição inicial e percurso só em figura). Erros corrigidos: FIDE nas `refs` do Xadrez, Mahjong com fontes de regras, "bao la kujifunza" fora dos `names` do Bao la kiswahili |
| 4 | shogi, xiangqi, puluc, e-sugoroku, hnefatafl, raposa-e-gansos, vela, pachisi, omweso | xadrez, corrida, caça, captura posicional, semeadura | 62 (57) | Etapa 2 e reescrita feitas (E-sugoroku só ganhou resumo e \"Do que você vai precisar?\"). Ficaram 26 lacunas (16 de fonte), 10 de curadoria para decidir. Corrigido: o `board` e o `pieces` da Vela remetiam ao Fanorona. Pesquisada junto, a pendência do Fanorona (lote 1): a posição inicial e a revanche foram resolvidas; segue aberto o jogador travado (I4) |
| 5 | makruk, janggi, brandubh, ludus-latrunculorum, senet, raposa-e-galinhas, owela-benguela, domino-doble-nueve, adji-kui | xadrez, caça, captura posicional, corrida, semeadura, peças | 75 (68) | Etapa 2 e reescrita feitas (cinco jogos só ganharam resumo, materiais e \"Para quem conduz\"). Ficaram 40 lacunas (23 de fonte), 17 de curadoria para decidir, entre elas a escolha das reconstruções do Brandubh, do Ludus e do Senet. Erros corrigidos: `ref` fraca do Janggi, "Demais regras na fonte" do Owela |
| 6 | sittuyin, shatranj, chaupar, nard, bao-ki-arabu, tchadji, warri-caribe, domino, ashta-kashte | xadrez, corrida, semeadura, peças | 80 (78) | Etapa 2 e reescrita feitas (Nard e Dominó só ganharam resumo, materiais e \"Para quem conduz\"): os 9 passaram a jogar com lacunas (Nard e Dominó, depois da decisão de curadoria). Ficaram 27 lacunas (23 de fonte) e 4 de curadoria para decidir: afogamento (Shatranj), forma do jogo (Nard), adversário sem sementes (Warri) e qual jogo é o Dominó; além do `sens` do Tchadji e do Warri. Erros corrigidos: "ver fonte" em `pieces` e `players` do Ashta-kashte e o ano de Blochmann no `ev` do Chaupar |
| 7 | chaturanga, ouk-chatrang, igisoro, ouril, kechukawe, domino-chines, coyote, aiu, ohvalhu | xadrez, semeadura, corrida, peças, caça | 94 (93) | Aiú (Querino, archive.org) e Ohvalhu (Culin 1894, Gutenberg) têm fonte primária em domínio público |
| 8 | nchayo, raazuvaa, tab, kiela, ntxuva, bao-la-kujifunza, ban-sugoroku, vinte-casas | semeadura, xadrez, corrida | 94 (94) | Fichas quase vazias cuja fonte já está identificada e só espera leitura |
| 9 | ayit, kay-haiti, mulabalaba, raja-pasu-mandiri, tchouba, hoyito, patolli, chunkana | semeadura, corrida | 94 (92) | Só a classificação do Mancala World ou de Depaulis 1998; o Hoyito e o Patolli pedem escolha de forma |
| 10 | adji-boto, bul, dadu, huayru, rifa-pareci, tsuka, yole, awarkuden | semeadura, corrida, desconhecida, adjacente | 93 (93) | **Decisão de curadoria antes da Etapa 2:** ritual, restrição de gênero ou de comunidade, ou aposta em `sens` |

### Grupo à parte (fora dos lotes)

Jogos que não jogam e cujas lacunas não têm saída na pesquisa. Ficam só com o resumo e, quando der, "Do que você vai precisar?".

| Jogo | Motivo |
| --- | --- |
| casa-do-rei | `unknown`: as regras foram explicadas em kadiwéu e não traduzidas; o informante morreu em 2006 |
| fidchell | `unknown`: "Qualquer regra atual é invenção moderna" |
| mehen | `unknown`: "Não há reconstrução aceita" |
| duodecim-scripta | Nenhuma regra antiga completa sobreviveu; só entraria com uma reconstrução moderna, que nem está listada em `recon` |
| taptana | Sem registro antigo das regras; as da ficha são inferidas do Komikan |
| quebra-cabeca-kanela | `unknown`, quebra-cabeça de uma pessoa: o checklist não serve |
| taikyoku-shogi | Mais de 200 tipos de peça: a curadoria decide se vale ter "Como jogar?" antes de qualquer pesquisa |

## Blocos por jogo

Em ordem alfabética. Cada bloco traz a tabela E1 a I6, as lacunas com o tipo e as `refs` que a Etapa 2 deve abrir primeiro.

### achi — Joga com lacunas

Status: documented · Família: alinhamento · "(a verificar)": 0 · "Como jogar?": sim (lote 1)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1; `board`; `diagram` |
| E2 Peças | sim | Regras 5 (4 é a versão padrão; 3 é variante) |
| E3 Preparação | sim | Regras 2 (colocação alternada: tabuleiro vazio) |
| E4 Ação da vez | sim | Regras 2 e 3 |
| E5 Movimento | sim | Regras 3 |
| E6 Fim e vitória | sim | Regras 4 e 6 |
| I1 Quem começa | não | — |
| I2 Captura | não se aplica | — |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim | Regras 4 (perde quem não puder mover) |
| I5 Empate | não | — |
| I6 Fases | sim | Regras 6 |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| I1 | Quem começa. Já procurada no PR #22, sem resposta. | fonte |
| I5 | Existe empate (por repetição, por exemplo)? | fonte |

**Divergências conhecidas:** oficina: jogador travado empata; ficha: perde (Wikipedia).

**Abrir primeiro (Etapa 2):** as fontes que o Ludii cita para o registro do início do séc. XX; GamesCrafters (não citada no texto das regras).

### adji-boto — Não joga

Status: partial · Família: semeadura · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "2 fileiras (a verificar)", sem número de covas |
| E2 Peças | não | `pieces`: "sementes", sem quantidade |
| E3 Preparação | não | — |
| E4 Ação da vez | não | — (a ficha não tem `## Regras`) |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A ficha não tem `## Regras` nem `## História`. Só há o registro de Herskovits (1929) em `ev`. | fonte |
| — | `sens`: "ritual (funerário); restrito". Antes de pesquisar regras, decidir se o jogo deve ganhar "Como jogar?". | curadoria |

**Abrir primeiro (Etapa 2):** Wikipedia (e, por ela, Herskovits 1929).

### adji-kui — Não joga

Passa a jogar com lacunas se a curadoria aceitar o fim da partida sem um vencedor dito pela fonte (ver E6).

Status: partial · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não (veredito "não joga": só resumo e "Do que você vai precisar?")

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board` 2×6; `diagram` |
| E2 Peças | sim | `pieces`: 48 sementes |
| E3 Preparação | sim | Regras (4 por cova) |
| E4 Ação da vez | sim | Regras 1 |
| E5 Movimento | sim | Regras 1 e 2 |
| E6 Fim e vitória | parcial | Regras 5 e 6: acaba com 8 sementes, cada um fica com as do seu lado; não diz com todas as letras quem vence |
| I1 Quem começa | não | Regras 7 |
| I2 Captura | sim | Regras 3 |
| I3 Obrigação | não | — |
| I4 Bloqueio | sim | Regras 4 |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Mancala World, a partir de Wilson Ferrer 1991):

- E4, E5: semeadura de uma cova com pelo menos duas sementes, no sentido anti-horário, em várias voltas até cair numa cova vazia.
- I2: a última semente de uma volta que deixa quatro sementes numa cova do adversário captura essas sementes, e a jogada acaba.
- I4: quem só tem covas vazias passa a vez.
- E6, em parte: a partida acaba com 8 sementes em jogo; segue-se outra partida, em que cada um enche as suas covas com o que ganhou e pode "comprar" covas do adversário.
- A ficha ganhou uma `## História` (Matanzas, famílias de origem arará), e os campos `cultures` (antes "afro-cubanos (a verificar)") e `place` foram preenchidos com o que o Mancala World diz.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E6 | Quem vence. O Mancala World não diz; o exemplo dele dá o placar "32:16" de uma partida, e a série continua com as sementes ganhas, sem dizer quando acaba. (Na outra forma, o Adji Kui I, ele diz que vence quem capturou mais.) | curadoria |
| I1, I3, I5 | Quem começa, obrigação, empate. | fonte |

**Pendência:** Wilson Ferrer 1991 (*El maravilloso mundo de las piedras y los agujeros*) não está acessível.

**Acesso ao Mancala World:** a página continua bloqueada (Cloudflare, e agora 402 no WebFetch), mas a API do MediaWiki do site (`mancala.fandom.com/api.php`) responde e devolve o texto da página. Foi assim que o Adji Kui II foi lido. Isso pode destravar os outros jogos de semeadura que dependem do Mancala World.

**Fontes novas:** nenhuma nas `refs` (o Mancala World já estava lá).

**Reescrita (lote 5):** só o resumo novo (saiu "o Mancala World o relaciona ao Hoyito", sem apoio no texto da ficha), "Do que você vai precisar?" e "Para quem conduz", que diz o que falta: quem vence (E6, curadoria), quem começa, obrigação e empate. Segue "não joga".

### adugo — Joga com lacunas

Status: documented · Família: caca-assimetrico · "(a verificar)": 3 · "Como jogar?": sim (lote 3)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim (a verificar) | Regras 5: o triângulo, pelo Ludii; o desenho de Vergara e Martínez (UFMG) é o mesmo |
| E2 Peças | sim, mas ambíguo | Regras 6: 14 cães em quatro fontes, 15 em Lima 2004 |
| E3 Preparação | sim, mas ambíguo | Regras 1 e 7: cães "na metade oposta ao triângulo", sem dizer quais pontos |
| E4 Ação da vez | sim | Regras 2 e 8 |
| E5 Movimento | sim | Regras 2 |
| E6 Fim e vitória | sim, com três versões | Regras 4 e 10 |
| I1 Quem começa | sim | Regras 2 e 8 (a onça; sorteia-se quem fica com ela) |
| I2 Captura | sim | Regras 3 e 9 |
| I3 Obrigação | sim | Regras 9 (não é obrigatória) |
| I4 Bloqueio | parcial | Regras 4 cobre a onça encurralada; os cães sem lance, não |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- E1: o Ludii descreve o triângulo em palavras: o vértice é o ponto do meio de um lado do quadrado, uma linha vai do vértice ao meio da base e outra corta essa linha no meio e liga os meios dos outros dois lados. Dá 6 pontos a mais, 31 no total. O Ludii cita Lima 2004, mas o trecho de Lima que ele transcreve não fala do tabuleiro, por isso a regra entrou "(a verificar)". A figura de Vergara e Martínez (Museu da Matemática UFMG, fig. 2.31) mostra o mesmo desenho.
- I1: sorteia-se quem fica com a onça, e a onça começa (Vergara e Martínez; Museu das Culturas Indígenas).
- I3: capturar não é obrigatório, e a onça pode capturar vários cães no mesmo lance (Vergara e Martínez).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E2 | 14 cães: Ludii, Vergara e Martínez, Wikipedia e Museu das Culturas Indígenas ("15 peças", com a onça). 15 cachorros: Lima 2004, entre os Bororo, citado por Vinha e pelo Ludii. | curadoria |
| E3 | Texto: "metade oposta ao triângulo" (Vergara e Martínez; Wikipedia). A figura de Vergara e Martínez (fig. 2.31b) mostra os 14 cães nas três fileiras mais longe do triângulo, menos o ponto central, onde fica a onça. Decidir se a figura basta. | curadoria |
| E6 | Vitória da onça: 5 cães (Museu das Culturas Indígenas; Vergara e Martínez; Wikipedia, que é a Regra 4 da ficha), todos os cães (Ludii), 6 cães (GamesCrafters, sem fonte). | curadoria |
| I4, I5 | Cães sem lance e empate. Nenhuma fonte diz. | fonte |

**Pendências:** a forma do triângulo do Komikan, que divide a pendência com o Adugo, segue só em figura (ver o bloco do Komikan). Ludopedia recusa o acesso automático (403).

**Fontes descartadas:** GamesCrafters como fonte de regra, porque não cita de onde tirou as regras; o que ele diz entrou só como nota "(a verificar)".

**Fontes novas:** Vergara e Martínez, *Jogos de Tabuleiro: uma proposta para sala de aula* (Museu da Matemática UFMG); Ludii, *Adugo*.

**Reescrita (lote 3):** resumo novo, "Do que você vai precisar?" com o triângulo desenhado em palavras e marcado "(a verificar)", como na Regra 5, "Como jogar?" (6 passos) e "Para quem conduz". O "Como jogar?" segue as Regras 4 e 6 (5 cães para a onça vencer e 14 cães); as outras leituras (15 cães, todos os cães) estão em "Para quem conduz", pedindo que se combine antes. Não entrou o que o GamesCrafters diz (onça não pode andar e saltar no mesmo lance), porque a própria Regra 9 o marca "a verificar" sem fonte. **Lacunas que o texto não fecha:** quais pontos exatos os 14 cães ocupam (a ficha diz "metade do quadrado oposta ao triângulo"), cães sem lance, empate.

### aiu — Não joga

Status: partial · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "tábua com doze partes côncavas", sem a disposição |
| E2 Peças | não | `pieces`: frutos *a-i-ús*, sem quantidade |
| E3 Preparação | não | — |
| E4 Ação da vez | não | Regras: "Parciais" |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A ficha diz que a regra moderna que circula "não deve ser tratada como regra do aiú até a leitura de Querino". | fonte |

**Abrir primeiro (Etapa 2):** Querino, ed. 1955, no archive.org (fonte primária); "Mancala World: A-i-ú". A "regra moderna" de África e Africanidades é a que a ficha manda não usar.

### alquerque — Joga com lacunas

Status: documented · Família: damas · "(a verificar)": 6 · "Como jogar?": sim (lote 2)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces`; Regras 1 |
| E3 Preparação | sim | Regras 1 e 9 (de que lado ficam as peças: Afonso X; a distribuição exata: Wikipedia, a verificar) |
| E4 Ação da vez | sim | Regras 2 e 3 |
| E5 Movimento | sim, mas ambíguo | Regras 2 e 8: as fontes divergem sobre andar para trás |
| E6 Fim e vitória | sim | Regras 4 e 6 |
| I1 Quem começa | sim | Regras 5 (tirado nos dados, Afonso X) |
| I2 Captura | sim | Regras 3 (salto, em cadeia) |
| I3 Obrigação | ambíguo | Regras 3 e 7: obrigatória em Covarrubias e Murray; o sopro só em Covarrubias |
| I4 Bloqueio | sim | Regras 4 |
| I5 Empate | sim | Regras 6 (Afonso X: "se os dois souberem jogar, a partida pode empatar") |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- I1: quem começa é tirado nos dados, e começar é desvantagem (Afonso X 1283, na tradução de Golladay).
- I5: a partida pode empatar se os dois souberem jogar (mesma fonte). A fonte não diz quando exatamente.
- E3, que não era lacuna: as peças de cada um ficam do seu lado (Afonso X); a distribuição em duas fileiras e dois pontos da fileira do meio vem da Wikipedia, sem fonte, e entrou "(a verificar)" (Regra 9).

**Segue em aberto (curadoria, para decidir):**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E5 | Afonso X e Covarrubias (1674): as peças andam e saltam "pelas linhas", sem falar de direção. Fernandes e Alberto (2009): qualquer das oito direções (sem fonte citada). Wikipedia: qualquer ponto vizinho ligado (sem fonte). A proibição de andar para trás é uma das regras que **R. C. Bell (1979) acrescentou** por achar as de Afonso X insuficientes, junto com não voltar a um ponto, a peça na última fileira só se mover para capturar e a vitória por bloqueio (Wikipedia). | curadoria |
| I3 | Covarrubias (1674: 41, citado em espanhol pelo Ludii): quem pode capturar e não captura perde a peça ("se la solpan", o sopro). Murray (1951: 65, pelo Ludii): captura obrigatória, sem sopro. Wikipedia: obrigatória, com sopro, sem fonte. Fernandes e Alberto (2009): obrigatória, sem sopro. | curadoria |

O texto didático não escolhe: "Como jogar?" não fala de direção nem de obrigação, e "Para quem conduz" explica as duas divergências e pede que se combine antes. **Atenção:** a Regra 4 (vitória por bloqueio) é, pela Wikipedia, uma das regras acrescentadas por Bell; a curadoria pode querer marcá-la.

**Fontes novas:** tradução de Golladay do *Libro de los juegos* (PDF da Ludicum, citado pelo Ludii); Ludii: Alquerque. Covarrubias 1674, Murray 1951 e Bell 1979 entram pelo intermediário.

**Pendência:** a tese de Golladay no repositório da Universidade do Arizona pede captcha; foi usada a tradução publicada pela Ludicum.

### ashta-kashte — Joga com lacunas

Status: documented · Família: corrida · "(a verificar)": 3 · "Como jogar?": sim (lote 6)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board` 7×7; Regras 1 (castelos) (sem desenho: casas marcadas, T-054) |
| E2 Peças | sim | `pieces`, `players`; Regras 2 |
| E3 Preparação | sim | Regras 2 (as peças entram pelo castelo à frente de cada um) |
| E4 Ação da vez | sim, mas ambíguo | Regras 3: quanto vale uma "graça" em casas |
| E5 Movimento | sim | Regras 4 (volta de fora contra o sol até a casa 24, depois as voltas de dentro até o centro) |
| E6 Fim e vitória | sim | Regras 8 (Ludii) |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 6 e 7 |
| I3 Obrigação | sim | Regras 3 (não é obrigado a jogar) |
| I4 Bloqueio | sim | Regras 3 (quem não quer ou não pode jogar, não joga) |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Falkener 1892: 265–266, lido no archive.org; Ludii):

- E2: 2 a 4 jogadores, 4 peças cada, 4 búzios como dados.
- E3, E5: entrada pelo castelo da borda; percurso pela numeração das casas no diagrama de Falkener; centro na casa 49.
- E4: os valores dos búzios (8 e uma graça; uma graça; o número de bocas para cima).
- I2: tomar uma peça dá novo lance; peças nos castelos não podem ser tomadas; duas peças juntas só por duas peças juntas.
- E6: vence quem leva todas as peças ao centro primeiro (Ludii; Falkener não diz com essas palavras).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E4 | Quanto vale uma "graça" em casas, e se é preciso uma graça para entrar e o número exato para o centro (o Ludii diz que sim; Falkener não diz). | fonte |
| I1, I5 | Quem começa; empate. | fonte |

**Erro corrigido:** `pieces` e `players` diziam "ver fonte"; agora dizem "4 por jogador; 4 búzios" e "2 a 4" (Falkener 1892: 265–266). As "varetas" da frase antiga das Regras não estão em Falkener; ficou a nota.

**Fontes novas:** Ludii: Ashta-kashte (Falkener 1892; Murray 1951: 131). Falkener já estava nas `refs`.

**Reescrita (lote 6):** resumo novo, "Do que você vai precisar?", "Como jogar?" (7 passos) e "Para quem conduz". O passo 4 (graça para entrar e número exato para o centro) leva "(a verificar)": é do Ludii, e Falkener não diz. Quanto vale uma graça em casas, quem começa e empate seguem sem fonte.

### awarkuden — Não joga

Status: documented · Família: adjacente · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`: sem tabuleiro (esteira ou chão sulcado) |
| E2 Peças | parcial | `pieces`: feijões pintados e fichas, sem quantidade |
| E3 Preparação | não | — (a ficha não tem `## Regras`) |
| E4 Ação da vez | não | `summary`: feijões usados como dados; não diz como se lê o lance |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2–E6, I1–I6 | A ficha não tem `## Regras`. | fonte |
| — | A ficha junta vários jogos (awarkuden, apaytalla); decidir qual descrever. `sens`: encantações e aposta "(a verificar)". | curadoria |

**Abrir primeiro (Etapa 2):** Depaulis 1998 (BGS 1, PDF).

### ayit — Não joga

Status: documented · Família: semeadura · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "2 fileiras", sem número de covas |
| E2 Peças | não | `pieces`: "sementes" |
| E3 Preparação | não | — (a ficha não tem `## Regras`) |
| E4 Ação da vez | não | `summary`: "semeadura em várias voltas", sem detalhe |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A ficha não tem `## Regras`. | fonte |

**Abrir primeiro (Etapa 2):** Mancala World (e, por ele, Pankhurst 1971).

### ayo — Joga com lacunas

Status: documented · Família: semeadura · "(a verificar)": 10 · "Como jogar?": sim (lote 2)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces`; Regras 1 |
| E3 Preparação | sim | Regras 1 |
| E4 Ação da vez | sim | Regras 2, 3 e 7 (a verificar) |
| E5 Movimento | sim | Regras 2 e 3 |
| E6 Fim e vitória | sim | Regras 6 e 10 (a verificar) |
| I1 Quem começa | sim | Regras 8 (a verificar) |
| I2 Captura | sim | Regras 4 |
| I3 Obrigação | sim | Regras 5 e 9 |
| I4 Bloqueio | sim | Regras 9 (a verificar) |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (todos de John P. Pratt, que não cita fonte, por isso "(a verificar)"):

- E4: semeia-se de uma das próprias seis cavidades que não esteja vazia.
- E6: a partida acaba quando um jogador, na sua vez, não pode jogar. A Wikipedia acrescenta, sem fonte, que o adversário fica com as sementes que restam.
- I1: uma semente escondida na mão; quem adivinha a mão começa. Pratt dá isso nas regras gerais das suas versões de mancala, não na página do Ayò.
- I4: sem jogada que alimente o adversário, quem tem sementes captura todas; mais a exceção (captura das últimas sementes) e a penalidade de quem podia alimentar e não alimentou.

**Segue em aberto:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| I5 | Existe empate (24 a 24)? Nenhuma fonte diz. | fonte |

**Achado:** Pratt diz que, com sementes para dar a volta inteira, a cavidade de origem fica vazia (é pulada). A ficha não registra isso; vale levar para a Regra 2 numa próxima rodada.

**Fontes novas:** John P. Pratt, regras gerais. O Ludii não tem página do Ayò. O Mancala World bloqueia o acesso automático (Cloudflare): pendência.

### bagh-chal — Joga com lacunas

Status: documented · Família: caca-assimetrico · "(a verificar)": 4 · "Como jogar?": sim (lote 2)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1; `diagram` |
| E2 Peças | sim | `pieces` |
| E3 Preparação | sim | Regras 1 e 2 |
| E4 Ação da vez | sim | Regras 2, 3 e 5 |
| E5 Movimento | sim | Regras 3 |
| E6 Fim e vitória | sim | Regras 4 e 9 |
| I1 Quem começa | sim | Regras 5 (as cabras) |
| I2 Captura | sim | Regras 3 e 6 (um salto por jogada) |
| I3 Obrigação | sim | Regras 7 (não obrigatória, a verificar) |
| I4 Bloqueio | parcial | Regras 4 cobre os tigres; não diz o que acontece se as cabras não puderem mover |
| I5 Empate | não | Regras 8 proíbe repetir posição (a verificar), mas não diz se há empate |
| I6 Fases | sim | Regras 2 e 5 |

**Resolvido na Etapa 2:**

- I1: as cabras começam (Parlett 1976: 4, pelo Ludii; Wikipedia).
- I2: só um salto por jogada (mesmas fontes).
- I3: capturar não é obrigatório (Wikipedia, sem fonte, a verificar).
- Nota da Regra 4: Hora (1933) e Parlett (1976) dizem que os tigres vencem capturando todas as cabras; Averbakh (1995, sobre o Nepal em 1986), mais de cinco; a Wikipedia, cinco (todos pelo Ludii, menos a Wikipedia). A ficha continua com "um número combinado (5 na regra mais difundida)".
- **Erro corrigido:** o Ludii, citado na História, entrou nas `refs`.

**Segue em aberto:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| I4 | E se as cabras não puderem mover? | fonte |
| I5 | Existe empate? A Wikipedia só proíbe repetir posição depois que todas as cabras entram. | fonte |

**Fontes novas:** Ludii: Baghchal (com as citações de Hora 1933, Parlett 1976 e Averbakh 1995); Wikipedia: Bagh-chal.

### ban-sugoroku — Não joga

Status: partial · Família: corrida · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: "2×12 casas em três faixas", sem dizer como as faixas se arrumam |
| E2 Peças | sim | `pieces`: 15 por jogador; 2 dados |
| E3 Preparação | não | Regras: "a mesma posição inicial" do gamão, que não está na ficha |
| E4 Ação da vez | não | Regras: "Como o gamão" |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1, E3–E6, I1–I6 | As regras remetem ao gamão, que não está no catálogo, e às diferenças "a detalhar". | fonte |

**Abrir primeiro (Etapa 2):** Wikipedia (Sugoroku); Japanese Wiki Corpus.

### bao-ki-arabu — Joga com lacunas

Status: documented · Família: semeadura · "(a verificar)": 2 · "Como jogar?": sim (lote 6)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board` 4×8; `diagram`; Regras 1 (as duas fileiras de cada um, a verificar) |
| E2 Peças | sim | `pieces`; Regras 2 |
| E3 Preparação | sim | Regras 2 (3 sementes em cada cova) |
| E4 Ação da vez | sim | Regras 3 |
| E5 Movimento | sim | Regras 3 e 4 (qualquer sentido, várias voltas) |
| E6 Fim e vitória | sim | Regras 6 |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 5 |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Ludii: Bao ki arabu (Zanzibar 1), a partir de Ingrams 1931: 256–257):

- E4, E5: semeadura a partir de qualquer cova, em qualquer sentido, continuando enquanto a última semente cai em cova ocupada.
- I2: a última semente numa cova vazia da fileira de dentro captura as duas covas do adversário em frente.
- E6: a partida acaba quando um jogador perde todas as sementes.
- A remissão "Ver Ludii. Detalhes na fonte" saiu: as regras estão escritas na ficha.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I1, I3, I4, I5 | Quem começa, se a captura é obrigatória, jogador sem jogada, empate. O resumo do Ludii não fala disso. | fonte |

**Fontes novas:** nenhuma URL nova (o Ludii já estava nas `refs`; o título da `ref` ficou "Ludii: Bao ki arabu (Zanzibar 1)"). Ingrams 1931 e Murray 1951: 208 entram pelo Ludii.

**Pendência:** *Zanzibar: its history and its people* (Ingrams) só existe no archive.org na reedição de 1967, de empréstimo controlado; o texto não pôde ser lido.

**Reescrita (lote 6):** resumo novo, "Do que você vai precisar?" (96 sementes é soma das 3 por cova), "Como jogar?" (6 passos) e "Para quem conduz". De quem é cada fileira segue "(a verificar)", como na Regra 1. As regras vêm do Ludii porque o livro de Ingrams não foi aberto; isso está dito em "Para quem conduz".

### bao-la-kiswahili — Joga com lacunas

Status: documented · Família: semeadura · "(a verificar)": 4 · "Como jogar?": sim (lote 3)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 6 (*nyumba*, *kichwa*, *kimbi*) |
| E2 Peças | sim | `pieces`; Regras 7 (32 por jogador) |
| E3 Preparação | sim | Regras 7 |
| E4 Ação da vez | sim | Regras 8, 10, 11 e 12 |
| E5 Movimento | sim | Regras 9 e 10 |
| E6 Fim e vitória | sim | Regras 5 |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 3, 8 a 10 |
| I3 Obrigação | sim | Regras 8 e 11 (capturar é obrigatório) |
| I4 Bloqueio | sim | Regras 5 (sem lances, perde) |
| I5 Empate | não | — |
| I6 Fases | sim | Regras 11 (o *mtaji* começa quando acabam as sementes da mão) |

**Resolvido na Etapa 2** (Wikipedia; Ludii, a partir de de Voogt 1995: 35-51):

- E1: a *nyumba* é a quarta cova da direita para a esquerda na fileira de dentro; *kichwa* são as pontas da fileira de dentro.
- E3: 6 sementes na *nyumba*, 2 em cada uma das duas covas à direita dela, 22 na mão.
- E4: as regras da *nyumba* (Wikipedia, a verificar: a Wikipedia não cita fonte nesse trecho).
- E5: o sentido sai do *kichwa* escolhido (direita: anti-horário; esquerda: horário).
- I3: capturar é obrigatório. I6: o *namua* acaba quando os dois ficam sem sementes na mão.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E4 | O Ludii (de Voogt 1995) tem restrições que a Wikipedia não tem: não semear covas de uma semente, limites para semear de um *kichwa* para trás e uma regra que impede o adversário de semear certa cova fora do *namua* (Regras 13). Decidir se entram no "Como jogar?" ou ficam para "Para quem conduz". | curadoria |
| I1, I5 | Quem começa, empate. Nenhuma das duas fontes diz. | fonte |

**Erro corrigido:** "bao la kujifunza" saiu dos `names`. A Wikipedia confirma que é outra forma do jogo, a simplificada "para principiantes", com outra preparação (2 sementes em cada cova), sem a fase *namua* e sem as regras da *nyumba*. A ficha `bao-la-kujifunza` não foi tocada.

**Pendências:** Mancala World recusa o acesso automático (Cloudflare). De Voogt 1995 (*Limits of the mind*) não foi aberto; as páginas de regras de de Voogt que a Wikipedia aponta estão só no archive.org.

**Fontes novas:** Ludii, *Bao* (a partir de de Voogt 1995).

**Reescrita (lote 3):** resumo novo, "Do que você vai precisar?", "Como jogar?" (8 passos, com a *nyumba* marcada "(a verificar)", como na Regra 12) e "Para quem conduz". As restrições do Ludii (Regra 13) e a *nyumba* do Malawi ficaram em "Para quem conduz", e não no passo a passo: é a decisão de curadoria que o bloco deixava em aberto, tomada aqui como sugestão e sujeita a revisão. Quem começa e empate seguem como "**Sugestão do site:**" (tirar na sorte, combinar). **Lacuna que o texto não fecha:** o que se faz numa vez *takata* no *namua* (a Regra 10 só diz que não há captura).

### bao-la-kujifunza — Não joga

Status: partial · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board` 4×8; `diagram` |
| E2 Peças | não | `pieces`: "sementes" |
| E3 Preparação | não | — (a ficha não tem `## Regras`) |
| E4 Ação da vez | não | — |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2–E6, I1–I6 | A ficha não tem `## Regras`. | fonte |

**Abrir primeiro (Etapa 2):** "Wikipedia: Bao".

### brandubh — Joga com lacunas

Status: reconstructed · Família: caca-assimetrico · "(a verificar)": 1 · "Como jogar?": sim (lote 5)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1 |
| E2 Peças | sim | Regras 2 |
| E3 Preparação | sim | Regras 2 |
| E4 Ação da vez | sim | Regras 3 e 4 |
| E5 Movimento | sim, com duas leituras | Regras 4, 5 e 10 |
| E6 Fim e vitória | sim, com duas leituras | Regras 8 e 11 |
| I1 Quem começa | sim | Regras 3 |
| I2 Captura | sim, com duas leituras | Regras 6, 7 e 10 |
| I3 Obrigação | não | — |
| I4 Bloqueio | sim, com duas leituras | Regras 9 e 11 |
| I5 Empate | sim, com duas leituras | Regras 9 e 11 |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- E3: posição inicial em cruz, com os atacantes dois a dois nas pontas (Ludii, regras de Nielsen pelo Cyningstan).
- E5: movimento escrito sem "como a torre" (Cyningstan; World Tafl Federation).
- I1: os atacantes começam (Cyningstan; WTF).
- I2: captura do rei, igual nas duas versões: quatro lados no centro, três ao lado do centro, dois no resto do tabuleiro (Cyningstan; WTF).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| — | Escolher uma reconstrução e listá-la em `recon` (hoje: "reconstruções modernas sem autor único"). Quadro no fim desta lista. | curadoria |
| E5, I2 | Casa central. Nielsen (Cyningstan): ninguém para no centro, nem o rei depois de sair; captura contra o centro vazio. WTF 2016: o rei pode voltar ao centro, todos passam pelo centro vazio, e o centro é sempre hostil aos atacantes e, vazio, também aos defensores. | curadoria |
| E6 | Como os atacantes vencem. Nas duas, capturando o rei; na WTF 2016, também cercando o rei e todos os defensores. | curadoria |
| I4, I5 | Sem lance e repetição. Nielsen (Cyningstan): empate. WTF 2016: quem não pode mover perde; na terceira repetição, perde quem a força. | curadoria |
| I3 | Capturar é obrigatório? Nenhuma fonte diz. | fonte |

**Quadro das reconstruções:**

| Reconstrução | Ano | Fontes antigas usadas | Onde diverge |
| --- | --- | --- | --- |
| Aage Nielsen, no Cyningstan (site de Damian Walker) | sem data no site | 5 contra 8 e o *branán* (*Acallam na Senórach*; poema *Abair riom a Éire ógh*); tabuleiros 7×7 de Ballinderry, Waterford e Downpatrick; regras do tablut de Linnaeus (1732) | centro proibido a todos, inclusive ao rei; empate por repetição, por falta de lance ou por acordo |
| World Tafl Federation (Nielsen), *Historical Hnefatafl Rules* | 2016 (data do PDF) | os mesmos, segundo a Wikipedia, mais testes de equilíbrio | rei pode voltar ao centro; todos passam pelo centro vazio; atacantes também vencem cercando todos; sem lance perde; repetição perde |
| Damian Walker, *Reconstructing Hnefatafl* (livro) | não consultado | não consultado | segundo o Cyningstan, favorece um pouco os atacantes |

**Pendência:** o livro de Walker (*Reconstructing Hnefatafl*) não está acessível; a página de regras do torneio de 2015 de Aage Nielsen (aagenielsen.dk) recusa o acesso automático, mas o PDF de regras da WTF abriu.

**Fontes novas:** Cyningstan (Brandub, regras de Nielsen), Ludii (Brandub, regras de Nielsen; cita Murray 1951: 35 e MacWhite 1945), World Tafl Federation (PDF de 2016).

**Reescrita (lote 5):** resumo novo, "Do que você vai precisar?", "Como jogar?" (9 passos) e "Para quem conduz". O passo a passo segue a versão de Nielsen/Cyningstan, que a própria ficha adota ("a versão abaixo"); as diferenças da WTF 2016 (casa central, fim da partida) estão em "Para quem conduz". A escolha de qual reconstrução listar em `recon` segue aberta. Capturar obrigatório segue sem fonte.

### bul — Não joga

Status: documented · Família: corrida · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "trilha de casas (ver Verbeeck 1998)" |
| E2 Peças | não | `pieces`: "ver fonte" |
| E3 Preparação | não | — |
| E4 Ação da vez | não | Regras: "grãos marcados (a verificar)", sem dizer como se lê o lance |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | Regras citam cinco subjogos, sem dizer como cada um acaba |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: as peças "capturam e podem ser empilhadas", sem dizer como |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | parcial | Regras: cinco subjogos, sem dizer o que muda entre eles |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | As regras só nomeiam os subjogos. | fonte |
| — | `sens`: "ritual; restrito" (Vigília do Milho; jogado por homens, segundo o Ludii). Decidir se o jogo ganha "Como jogar?". | curadoria |

**Erro na ficha:** `board` e `pieces` remetem à fonte ("ver Verbeeck 1998", "ver fonte").

**Abrir primeiro (Etapa 2):** Ludii; "Wikipedia: Bul"; Verbeeck 1998 (*Board Games Studies* 1).

### casa-do-rei — Não joga

Status: unknown · Família: alinhamento · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "circular, riscado na areia" |
| E2 Peças | não | `pieces`: desconhecido |
| E3 Preparação | não | — |
| E4 Ação da vez | não | Regras: "Desconhecidas" |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A pesquisadora não conseguiu traduzir as regras, e o informante morreu em 2006 (História). | sem saída |

**Abrir primeiro (Etapa 2):** nada a pesquisar para as regras. Vinha pode trazer o desenho do tabuleiro, que serviria só para "Do que você vai precisar?" ou para o T-056.

### chaturanga — Não joga

Status: reconstructed · Família: xadrez-e-guerra · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board` 8×8; Regras |
| E2 Peças | não | `pieces`: "ver reconstruções"; Regras nomeiam os tipos, sem quantidades |
| E3 Preparação | não | — |
| E4 Ação da vez | sim | Regras (mover uma peça) |
| E5 Movimento | não | só o elefante é descrito, e com duas versões |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E5 | O movimento do elefante muda "conforme a reconstrução"; escolher uma (Murray ou Falkener). | curadoria |
| E2, E3, E6, I1–I5 | Quantidade e posição das peças, movimentos, vitória. | fonte |

**Erro na ficha:** `pieces`: "ver reconstruções"; sem fonte, o campo fica "desconhecido".

**Abrir primeiro (Etapa 2):** Falkener 1892 (archive.org); Historical Chess Variants (PDF).

### chaupar — Joga com lacunas

Status: documented · Família: corrida · "(a verificar)": 3 · "Como jogar?": sim (lote 6)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1 (sem desenho: T-055) |
| E2 Peças | sim | Regras 2 e 3 (4 por jogador) |
| E3 Preparação | sim, mas ambíguo | Regras 5: não diz de que ponta se contam as casas |
| E4 Ação da vez | sim | Regras 4 e 8 |
| E5 Movimento | sim | Regras 6 |
| E6 Fim e vitória | sim | Regras 10 (Ludii) |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 7 (Ludii; duas peças juntas estão protegidas) |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Abu'l Fazl, *Ain-i-Akbari*, trad. Blochmann 1873: 303–304, lido no archive.org; Ludii):

- E2, E3, E4: 4 peças por jogador, em duplas; os valores 1, 2, 5 e 6 dos dados longos; as casas iniciais de cada peça.
- E5: o percurso escrito na ficha, sem depender do Pachisi: volta pela fileira de fora "sempre pela direita", fileira do meio, número exato para o centro.
- E6: vence quem leva todas as peças ao centro primeiro (Ludii; Blochmann não diz com essas palavras). Quem termina lança pelo parceiro (Blochmann).
- I2: duas peças juntas não podem ser derrubadas (Blochmann); a peça derrubada volta ao começo (Ludii).
- Lances especiais (duplos, *khām*, triplos) e as regras da corte de Akbar.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E3 | Blochmann não diz de que ponta do braço se contam a 6ª, a 7ª e a 8ª casa. | fonte |
| I1, I3, I4, I5 | Quem começa, se é obrigatório jogar, jogador sem lance possível, empate. Abu'l Fazl diz que há "muitas outras regras para casos particulares". | fonte |

**Nota:** o sentido anti-horário da frase antiga das Regras não está em Blochmann ("sempre pela direita") e ficou "(a verificar)". A Wikipedia descreve uma forma moderna, com sete búzios, casas seguras e a obrigação de derrubar uma peça antes de voltar para casa, sem citar fonte para as regras; ficou registrada como divergência, sem ser adotada.

**Erro corrigido:** o `ev` dizia "trad. Blochmann 1878"; o volume 1 da tradução é de 1873 (exemplar do archive.org).

**Fontes novas:** Abu'l Fazl, *Ain-i-Akbari*, vol. 1, trad. Blochmann 1873 (archive.org); Ludii: Chaupar (Abu'l Fazl 1590: 303–304; Murray 1951: 133–134); Wikipedia: Chaupar.

**Pendências:** Penn Museum (`ref` da ficha, artigo de W. Norman Brown em *Expedition* 6, 1964) dá 404; a busca no próprio site também não acha o texto. Indian Culture não respondeu (tempo esgotado).

**Reescrita (lote 6):** resumo novo (saíram "parente do Pachisi" e "tabuleiro de pano", que nada na ficha com fonte sustenta; ficou o que a História diz sobre Abu'l Fazl e a Índia rural), "Do que você vai precisar?", "Como jogar?" (8 passos) e "Para quem conduz". O sentido anti-horário segue "(a verificar)". Como os três dados se combinam num lance não está em nenhum trecho da ficha: o passo 3 diz só "ande conforme o lance", como a Regra 6. A forma moderna da Wikipedia segue como nota, não adotada.

### chunkana — Não joga

Status: partial · Família: corrida · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: "5 buracos"; `summary`: casas cavadas que valem de 10 a 50, sem a disposição |
| E2 Peças | parcial | `pieces`: feijões coloridos e um dado, sem quantidade |
| E3 Preparação | não | — (a ficha não tem `## Regras`) |
| E4 Ação da vez | não | `summary` cita o dado do Huayru, sem dizer como se usa |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A ficha não tem `## Regras`. | fonte |
| — | `sens`: aposta (a verificar). | curadoria |

**Abrir primeiro (Etapa 2):** Depaulis 1998 (BGS 1, PDF); "Arellano Hoffmann: tablero chimú".

### coyote — Não joga

Status: partial · Família: caca-assimetrico · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` (5×5, só as diagonais principais) |
| E2 Peças | não | `pieces`: "1 coiote contra várias peças" |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | Regras: o coiote captura saltando; o movimento comum não é dito |
| E5 Movimento | não | — |
| E6 Fim e vitória | parcial | Regras: as outras peças "tentam encurralá-lo"; não diz como o coiote vence |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: salto; não diz se pode saltar mais de uma vez |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2 | Quantas galinhas ou ovelhas. | fonte |
| E3 | Posição inicial. | fonte |
| E4, E5 | Como as peças andam. | fonte |
| E6 | Como o coiote vence. | fonte |
| I1–I6 | Quem começa, salto múltiplo, obrigação, bloqueio, empate, fases. | fonte |

**Abrir primeiro (Etapa 2):** Culin 1898 no archive.org (fonte primária do registro); "Wikipedia: Catch the hare".

### dadu — Não joga

Status: unknown · Família: desconhecida · "(a verificar)": 4 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1–E6 | não | `board`, `pieces` e `players`: desconhecido; sem corpo |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | Jogo "só nominal nesta rodada" (`summary`): o status é `unknown` porque o artigo de 2024 ainda não foi lido, não porque falte registro. | fonte |
| — | Jogado só dentro da comunidade Dawoodi Bohra (`summary`): decidir se cabe publicar regras antes de pesquisar. | curadoria |

**Abrir primeiro (Etapa 2):** Schmidt-Madsen 2024, "Discovering Dadu" (BGSJ 18), depois da decisão de curadoria.

### damas-brasileiras — Joga

Status: documented · Família: damas · "(a verificar)": 0 · "Como jogar?": sim (lote 3)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1; `diagram` |
| E2 Peças | sim | `pieces`; Regras 1 |
| E3 Preparação | sim | Regras 1 |
| E4 Ação da vez | sim | Regras 2 a 4 |
| E5 Movimento | sim | Regras 2 e 4 |
| E6 Fim e vitória | sim | Regras 8 |
| I1 Quem começa | sim | Regras 7 (as brancas) |
| I2 Captura | sim | Regras 3 a 5 |
| I3 Obrigação | sim | Regras 3 (obrigatória, maior número de peças) |
| I4 Bloqueio | sim | Regras 8 (peças bloqueadas: perde) |
| I5 Empate | sim | Regras 9 |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- E6 e I4: vence quem deixa o adversário sem peças ou com todas bloqueadas na vez dele (FMJD, *Official Rules of the game in draughts-64*, art. 7.1; Wikipedia, a partir dela).
- I1: as brancas começam (FMJD, art. 3.3).
- I5: acordo, nenhum dos dois pode vencer, posição repetida três vezes, 15 lances seguidos só de damas sem mover pedra nem capturar, três damas contra uma em 15 lances, e as contagens de finais com poucas peças (FMJD, arts. 7.2 e 8). As regras da FMJD valem para as damas de 64 casas e têm um artigo próprio para a versão brasileira (art. 5), que confirma as Regras 3 e 5 da ficha.

**Segue em aberto:** nada do checklist.

**Pendências:** os dois regulamentos das `refs` não abriram: o da FENAE recusa o acesso automático (403) e o do IFPE mudou de endereço (404). O resumo do buscador mostra que o da FENAE fala em **20 lances** de damas sem captura nem movimento de pedra, e não 15; como o texto não foi aberto, a regra não entrou. Vale conferir à mão se o Brasil usa 20 ou 15.

**Fontes novas:** FMJD, *Official Rules of the game in draughts-64* (PDF citado pela Wikipedia; o mesmo texto está em fmjd64.org); Wikipedia, *Brazilian draughts*.

**Reescrita (lote 3):** resumo novo, "Do que você vai precisar?", "Como jogar?" (8 passos) e "Para quem conduz". **Lacuna achada na escrita:** a ficha não dizia *como* se captura (pular por cima da peça, parar na casa vazia atrás). Entrou a Regra 10, com o FMJD, arts. 4.2, 4.3 e 4.5. Os 15 lances de dama sem captura ficam como na FMJD; o aviso sobre os 20 lances da FENAE (não aberto) foi para "Para quem conduz", sem número. "Marcar a dama empilhando duas peças" é "**Sugestão do site:**", não regra.

### domino-chines — Não joga

Status: partial · Família: pecas · "(a verificar)": 2 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não se aplica | `board`: sem tabuleiro |
| E2 Peças | sim | `pieces`: 32 peças (a verificar) |
| E3 Preparação | não | Regras: "Regras não abertas nesta rodada" |
| E4 Ação da vez | não | — |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| — | Regras: "Há muitos jogos com o mesmo conjunto (*tien gow*, *pai gow* e outros)". Escolher qual jogo a ficha descreve. | curadoria |
| E3–E6, I1–I6 | Regras do jogo escolhido. | fonte |
| — | `sens`: aposta (a verificar). | curadoria |

**Abrir primeiro (Etapa 2):** Culin 1893 (*Chinese Games with Dice and Dominoes*), pela bibliografia de Avedon; "Wikipedia: Dominoes".

### domino-doble-nueve — Joga com lacunas

Status: partial · Família: pecas · "(a verificar)": 14 · "Como jogar?": sim (lote 5)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não se aplica | `board`: sem tabuleiro |
| E2 Peças | sim | `pieces`; Regras 1 |
| E3 Preparação | sim | Regras 2 |
| E4 Ação da vez | sim (a verificar) | Regras 4 |
| E5 Movimento | sim (a verificar) | Regras 4 |
| E6 Fim e vitória | sim (a verificar) | Regras 6 a 8 |
| I1 Quem começa | não | Regras 10 |
| I2 Captura | não se aplica | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | sim (a verificar) | Regras 5 e 7 |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- E3: 10 peças para cada um e 15 "dormidas", embaralhadas de novo a cada mão (BBC Mundo 2014, a reportagem original que o thecubanhistory.com reproduz; Diario Las Américas).
- E4 a E6, I4: as regras do jogo escritas na ficha, sem remeter a outro dominó: sentido anti-horário, encaixar um número igual numa ponta livre, passar quando não dá, "*me pegué*" para quem acaba as peças, mão trancada ganha por quem soma menos, partida até 100 pontos (Wikipedia em espanhol, seção "Dominó cubano", a verificar: a seção cita a BBC Mundo, que não traz essas regras).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I1 | Quem faz a primeira jogada, e com que peça. | fonte |
| I3 | Quem tem peça que encaixa é obrigado a jogar? | fonte |
| I5 | Empate na mão trancada. | fonte |

**Pendência:** o livro de Migdonio Torres Romero (*El dominó del doble nueve*) não está acessível; é a fonte primária que confirmaria as regras marcadas "(a verificar)".

**Fontes novas:** BBC Mundo (2014), Wikipedia em espanhol (Dominó, seção "Dominó cubano").

**Reescrita (lote 5):** resumo novo, "Do que você vai precisar?", "Como jogar?" (7 passos) e "Para quem conduz". Como quase todas as regras vêm da Wikipedia em espanhol "(a verificar)", os passos 3 a 7 e o jogo individual levam a mesma marca. Quem começa e com que peça, obrigação de jogar e empate na mão trancada ficam ditos em "Para quem conduz". O ditado "o dominó foi inventado por um mudo" passou de regra para tradição, em "Para quem conduz".

### domino — Joga com lacunas, depois da decisão de curadoria

Status: documented · Família: pecas · "(a verificar)": 2 · "Como jogar?": não (veredito "joga com lacunas, depois da decisão": só resumo e "Do que você vai precisar?")

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não se aplica | `board`: sem tabuleiro |
| E2 Peças | sim | `pieces`; Regras (7 ou 5 por jogador no bloqueio; 7 em duplas) |
| E3 Preparação | sim, em cada forma | Regras |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim | Regras (encaixar numa das duas pontas) |
| E6 Fim e vitória | sim | Regras (rodada e partida, nas duas formas) |
| I1 Quem começa | sim | Regras (tirar peças, ou o duplo seis) |
| I2 Captura | não se aplica | — |
| I3 Obrigação | sim nas duplas; não dito no bloqueio | Regras |
| I4 Bloqueio | sim | Regras (quem não pode jogar passa; jogo trancado) |
| I5 Empate | sim | Regras (empate na menor soma) |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:** a ficha não tinha `## Regras`. Agora tem as regras completas de dois candidatos, lado a lado: o **dominó de bloqueio** (pagat.com, Joe Celko e John McLeod) e o **dominó em duplas** de Espanha e da América Latina (pagat.com, John McLeod). A Wikipedia (Dominoes) descreve os dois.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E3–E6 | Qual jogo a ficha ensina (a escolha decide preparação, vez e vitória). **Wikipedia:** "a maioria dos jogos de dominó são de bloqueio"; descreve o bloqueio para dois (7 peças cada, com monte; a própria Wikipedia marca como duvidoso o "compra até poder jogar", que é do jogo de compra), uma versão do Oriente Médio para quatro, a versão espanhola e latino-americana em duplas e o jogo de compra (*draw game*), que "muitas vezes é chamado só de dominó". **pagat.com:** o bloqueio é "o mais simples e provavelmente o mais comum"; o jogo em duplas, com as 28 peças distribuídas, é "talvez a forma mais direta" e "especialmente popular na Espanha e na América Latina". **Dominó doble nueve (lote 5):** "como o dominó de bloqueio em duplas". Os dois candidatos aqui são o bloqueio do pagat.com e o jogo em duplas, que é um jogo de bloqueio jogado em duplas: ele casa com a frase do doble nueve. | curadoria |

**Fontes novas:** pagat.com: Block Dominoes; pagat.com: Partnership Dominoes. A Wikipedia (Dominoes) já estava nas `refs`.

**Reescrita (lote 6):** só o resumo novo, "Do que você vai precisar?" e "Para quem conduz", que mostra as duas versões (bloqueio e duplas) e em que diferem. Sem "Como jogar?" porque a escolha do jogo (E3 a E6) segue aberta. Em "Para quem conduz", o `sens` ("aposta (a verificar)") vira um aviso para conferir antes de ensinar. O Dominó doble nueve (lote 5) segue com o próprio "Como jogar?".

### duodecim-scripta — Não joga

Status: reconstructed · Família: corrida · "(a verificar)": 3 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`: 3×12 casas (a verificar) |
| E2 Peças | parcial | Regras: 15 por jogador e três dados, como "leituras correntes (a verificar)"; `pieces`: "ver fonte" |
| E3 Preparação | não | — |
| E4 Ação da vez | não | — |
| E5 Movimento | não | Regras: "percurso pelas três fileiras", sem a ordem |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3–E6, I1–I6 | "Nenhuma regra antiga completa sobreviveu" (Regras). | sem saída |
| — | Só daria para jogar adotando uma reconstrução moderna, que ainda nem está listada (`recon`: "vários; a levantar"). | curadoria |

**Erro na ficha:** `pieces`: "ver fonte".

**Abrir primeiro (Etapa 2):** só se a curadoria decidir adotar uma reconstrução: BGSJ 19 (2025), e o levantamento dos autores para `recon`.

### e-sugoroku — Não joga

Status: documented · Família: corrida · "(a verificar)": 0 · "Como jogar?": não (veredito "não joga": só resumo e "Do que você vai precisar?")

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "folha de papel ilustrada com percurso"; Regras: as casas "variam por tabuleiro" |
| E2 Peças | sim | `pieces`: marcadores e 1 dado |
| E3 Preparação | sim | Regras (todos na casa da largada, *furidashi*) |
| E4 Ação da vez | sim | Regras (lançar o dado e avançar) |
| E5 Movimento | sim | Regras |
| E6 Fim e vitória | sim | Regras (quem chega primeiro à meta, *agari*) |
| I1 Quem começa | não | — |
| I2 Captura | não se aplica | — |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | não se aplica | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:** os nomes da largada (*furidashi*) e da meta (*agari*) (Harvard-Yenching) e os dois tipos de tabuleiro: o *mawari sugoroku*, de volta no percurso, e o *tobi sugoroku*, em que cada casa diz para onde ir (Biblioteca Nacional da Dieta). Não muda o veredito.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E1 | Cada folha é um tabuleiro diferente: a ficha precisa de uma folha concreta. Candidatas em domínio público, todas da Biblioteca Nacional da Dieta e no Wikimedia Commons com a marca "Public domain": (1) *Tōto meibutsu yūran sugoroku*, de Utagawa Fusatane, 1861 (NDL 1310564), um *mawari sugoroku* completo, com a largada em Nihonbashi, o percurso em espiral até a meta no centro e uma tabela de dado no meio; (2) *Kashima mōde dōchū sugoroku*, de Utagawa Yoshiiku (NDL 1310558), percurso de viagem com casas de pernoite, rasgado na borda direita; (3) *Setsugekka furiwake sugoroku*, de Utagawa Kunisada, c. 1850, um *tobi sugoroku*, com instruções em japonês em cada casa. A folha do *Tōkaidō gojūsan-tsugi sugoroku* de Hiroshige II no Commons é só o envelope, não o tabuleiro. Qualquer escolha pede transcrever e traduzir as casas. | curadoria |
| I1 | Quem começa. Nenhuma fonte diz. | fonte |
| I5 | Chegada exata à meta? Empate? Nenhuma fonte diz. | fonte |

**Pendência:** o woodblockprints.org (`ref` da ficha) recusa o acesso automático (403).

**Fontes novas:** nenhuma nas `refs`. As candidatas a tabuleiro estão no bloco para a decisão; entram na ficha quando a folha for escolhida (T-072).

**Reescrita (lote 4):** só o resumo novo, "Do que você vai precisar?" e "Para quem conduz", que explica por que não há "Como jogar?" (cada folha tem um percurso e a ficha não traz nenhuma). Saiu do resumo "Hoje, 'sugoroku' quase sempre significa e-sugoroku", que nada na ficha com fonte sustenta. A escolha da folha (T-072) continua pendente.

### fanorona-telo — Joga com lacunas

Status: documented · Família: alinhamento · "(a verificar)": 3 · "Como jogar?": sim (lote 1)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | Regras; `pieces` (a verificar) |
| E3 Preparação | sim | Regras (colocação alternada: tabuleiro vazio) |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim | Regras, 2º parágrafo (Ludii, a partir de Murray 1951) |
| E6 Fim e vitória | sim | Regras, inclusive na colocação |
| I1 Quem começa | não | — |
| I2 Captura | não se aplica | — |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | sim | Regras |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| I1 | Quem começa. Já procurada no PR #22, sem resposta. | fonte |
| I4 | E se um jogador não puder mover? | fonte |
| I5 | Existe empate? | fonte |

**Erro na ficha:** o `summary` diz "Murray (1952)" e as Regras, "Murray 1951: 42". Conferir qual ano está certo.

**Abrir primeiro (Etapa 2):** Ludii (e, por ele, Murray 1951/1952).

### fanorona — Joga com lacunas

Status: documented · Família: captura-posicional, damas · "(a verificar)": 5 · "Como jogar?": sim (lote 1)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1; `board` (a verificar); `diagram` |
| E2 Peças | sim | Regras 1; `pieces` (a verificar) |
| E3 Preparação | sim | Regras 1 e 10 |
| E4 Ação da vez | sim | Regras 2 e 6 |
| E5 Movimento | sim | Regras 2 |
| E6 Fim e vitória | sim | Regras 5 e 9 |
| I1 Quem começa | sim | Regras 6 (as brancas) |
| I2 Captura | sim | Regras 3, 4, 7 e 8 |
| I3 Obrigação | sim | Regras 6 |
| I4 Bloqueio | não | — |
| I5 Empate | sim | Regras 9 |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2 (lote 4, junto com a Vela):**

- E3: cada jogador ocupa as duas fileiras do seu lado e as cores se alternam na fileira do meio, com o centro vazio (Ludii, a partir de Montgomery 1896: 151–155); a ordem exata da fileira do meio foi descrita a partir da figura do boardspace (Regra 10).
- Revanche (*vela*): as regras do Ludii, a partir de Montgomery (1896: 155), estão na Regra 11, com a mesma lacuna da ficha da Vela (quem faz cada papel).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I4 | E se um jogador não puder mover? Nem o Ludii, nem a Wikipedia, nem o boardspace dizem. | fonte |

**Mudança de veredito:** volta a "joga com lacunas", porque a posição inicial agora se monta só com a ficha. O "Como jogar?" do lote 1 ainda diz que a ficha não descreve a posição inicial e a revanche; reescrever ou não é decisão do lote 4.

**Pendência:** Montgomery (1896), como na Vela.

**Fontes novas:** nenhuma nas `refs` (Ludii e boardspace já estavam lá).

### fidchell — Não joga

Status: unknown · Família: xadrez-e-guerra · "(a verificar)": 2 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1–E6 | não | `board` e `pieces`: desconhecido; Regras: "Desconhecidas" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | "Qualquer regra atual é invenção moderna" (Regras). | sem saída |

**Abrir primeiro (Etapa 2):** nada.

### gulugufe — Joga com lacunas

Status: documented · Família: damas · "(a verificar)": 3 · "Como jogar?": sim (lote 1)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras, 2º parágrafo (Wikipedia) |
| E2 Peças | sim | `pieces`; Regras |
| E3 Preparação | sim | Regras, 2º parágrafo (a verificar) |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim | Regras |
| E6 Fim e vitória | sim | Regras |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras (salto; sequência, LoboGames/UFRGS) |
| I3 Obrigação | sim | Regras, 3º parágrafo |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| I1 | Quem começa. Já procurada no PR #22, sem resposta. | fonte |
| I4 | E se um jogador não puder mover? | fonte |
| I5 | Existe empate? | fonte |

**Pendências do PR #22:** o PDF da Universidade dos Açores bloqueou o acesso automático; a língua do nome (*tonga* na ficha, chichewa na UFRGS) é decisão de curadoria.

**Abrir primeiro (Etapa 2):** Universidade dos Açores (PDF, ler à mão); LoboGames UFRGS.

### hnefatafl — Joga com lacunas

Status: reconstructed · Família: caca-assimetrico · "(a verificar)": 1 · "Como jogar?": sim (lote 4)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; Regras 6 (trono e cantos; sem desenho: T-054) |
| E2 Peças | sim | Regras 1 e 2 (rei, 12 defensores, 24 atacantes) |
| E3 Preparação | sim | Regras 2 |
| E4 Ação da vez | sim | Regras 3 e 4 |
| E5 Movimento | sim | Regras 4 |
| E6 Fim e vitória | sim, com diferenças entre os conjuntos | Regras 7, 8, 10 e 12 |
| I1 Quem começa | sim | Regras 3 (os atacantes) |
| I2 Captura | sim | Regras 5, 6 e 12 |
| I3 Obrigação | não se aplica | Regras 5: a peça presa é capturada, não há escolha |
| I4 Bloqueio | sim | Regras 9 (perde) |
| I5 Empate | sim, com diferenças entre os conjuntos | Regras 9 e 11 |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:** as regras dos dois conjuntos modernos citados na ficha, no site de Aage Nielsen, que é um dos autores do de Copenhagen: o de **Fetlar** (Fetlar Hnefatafl Panel, 2007) e o de **Copenhagen** (Aage Nielsen, Adam Bartley e Tim Millar, 2012). Os dois têm a mesma posição inicial, o mesmo movimento, a mesma captura, as mesmas casas restritas e a mesma vitória do rei nos cantos; a ficha registra o que é comum (Regras 1 a 9) e o que muda (Regras 10 a 12), sem adotar um.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E6, I5 | **Qual conjunto a ficha adota**, e com que autor em `recon`. Copenhagen: o rei não é capturado na borda; a repetição sem fim dá a derrota aos defensores; há a muralha de escudos e o forte de saída. Fetlar: o rei só é capturado na borda se for a última peça do seu lado; a repetição empata; sem muralha nem forte. | curadoria |

**Nota:** a Wikipedia diz que as regras antigas nunca foram registradas e que o jogo pode ter sido de 13×13 ou de 11×11; os dois conjuntos são de 11×11, como o `board`.

**Fontes novas:** as páginas de regras de Copenhagen e de Fetlar no site de Aage Nielsen.

**Reescrita (lote 4):** resumo novo (saiu "o mais conhecido dos jogos tafl", sem fonte na ficha), "Do que você vai precisar?", "Como jogar?" (9 passos) e "Para quem conduz". O passo a passo usa só o que os conjuntos de Copenhagen e Fetlar têm em comum (Regras 1 a 9); rei na borda, repetição, muralha de escudos e forte de saída (Regras 10 a 12) ficam em "Para quem conduz". A decisão sobre qual conjunto a ficha adota segue aberta.

### hoyito — Não joga

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board` 2×6; `diagram` |
| E2 Peças | não | `pieces`: "sementes" |
| E3 Preparação | não | Regras: "Várias formas; ver Mancala World" |
| E4 Ação da vez | não | — |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| — | O nome cobre "vários jogos" (`summary`); escolher qual forma a ficha descreve (Hoyito I ou II). | curadoria |
| E2–E6, I1–I6 | Regras da forma escolhida. | fonte |

**Erro na ficha:** a `ref` "Wikipedia" aponta para `https://Www.wikipedia.org/wiki/Hoyito`, sem o idioma no domínio. Provavelmente quebrada (o T-063 deve pegar).

**Abrir primeiro (Etapa 2):** "Mancala World: Hoyito dictionary" (Hoyito I e II); "Ludii: evidência".

### huayru — Não joga

Status: partial · Família: corrida · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board` e História: 29 buracos em circuito triangular com uma linha central, em Sigsig; não dá para desenhar |
| E2 Peças | parcial | `pieces`: pedrinhas, grãos ou espigas, sem quantidade; dado piramidal |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | História: faces de 1 a 5 e o fundo valendo 20 (Murúa 1590) |
| E5 Movimento | parcial | História: percursos de 10 e 20 casas, sem o traçado |
| E6 Fim e vitória | sim | História: vence quem chega ao centro |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E5, I1–I6 | Regras: "Parciais (descrição de Hartmann e Oberem incompleta)". Pode acabar sem saída. | fonte |
| — | `sens`: ritual (funerário). | curadoria |

**Abrir primeiro (Etapa 2):** Depaulis 1998 (BGS 1, PDF), que resume Hartmann e Oberem.

### igisoro — Não joga

Status: partial · Família: semeadura · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board` 4×8 (a verificar); `diagram` |
| E2 Peças | sim | `pieces`; Regras (64, "fonte de implementação moderna") |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | Regras: "semeadura em várias voltas" |
| E5 Movimento | parcial | Regras: "dois ciclos", sem o sentido |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | Regras: no *kubuguza* "se pode capturar a qualquer momento", sem dizer como |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3–E6, I1–I6 | "Detalhes nas fontes do Mancala World" (Regras). | fonte |

**Erro na ficha:** o `summary` diz "Parente do Omweso" sem fonte, e o número de sementes vem de uma "implementação moderna".

**Abrir primeiro (Etapa 2):** Mancala World (e, por ele, van der Burgt 1903 e Kimenyi 1953).

### janggi — Joga com lacunas

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 10 · "Como jogar?": sim (lote 5)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1 e 2 |
| E2 Peças | sim | Regras 3 |
| E3 Preparação | sim | Regras 4 e 5 |
| E4 Ação da vez | sim | Regras 7 |
| E5 Movimento | sim | Regras 8 a 13 |
| E6 Fim e vitória | sim | Regras 14 |
| I1 Quem começa | sim (a verificar) | Regras 6 |
| I2 Captura | sim | Regras 7 e 12 |
| I3 Obrigação | não se aplica | Regras 15 (passar a vez) |
| I4 Bloqueio | sim, com duas leituras | Regras 15 |
| I5 Empate | sim, com duas leituras | Regras 16 a 18 |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- E1 a E3, E5: o jogo inteiro escrito na ficha, sem remeter ao Xiangqi: tabuleiro e palácios, composição, posição inicial, troca de cavalo e elefante, movimento de cada peça (Culin 1895: 82–89, texto de W. H. Wilkinson, fonte primária em domínio público; Wikipedia; Ludii).
- E6, I2: xeque-mate vence; toda peça captura com o próprio movimento (Culin 1895; Wikipedia; ancientchess.com).
- I1: Cho começa (Wikipedia, a verificar); o ancientchess.com diz que começa quem arrumou as peças por último, em geral o verde; Culin registra que o primeiro lance costuma ser dado ao mais fraco.
- I5: a contagem de pontos da Associação Coreana de Janggi (Wikipedia).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I4 | Passar a vez. Wikipedia (sem fonte citada): pode-se passar sempre que não se está em xeque; quem não tem lance é obrigado a passar; os dois passando, empata. ancientchess.com: passa quem não tem lance seguro ou desejável. Culin 1895 (Wilkinson): só o general que ficou sozinho, e em perigo se mover, pode ser virado no lugar como lance. | curadoria |
| I5 | *Bikjang*. Wikipedia (sem fonte citada): generais frente a frente e o jogador da vez não desfaz, empata; a regra é combinada antes. Culin 1895 e ancientchess.com: só o lado mais fraco pode encarar o general adversário, e quem faz isso no máximo empata. | curadoria |

**Erro corrigido:** a única `ref` era um blog (Substack). Entraram Wikipedia, Ludii, Culin 1895 (archive.org) e ancientchess.com; o blog ficou, porque não está errado e fala dos nomes Han e Cho.

**Fontes novas:** Wikipedia, Ludii (que cita Culin 1895: 82–88 e Murray 1913: 134–137), Culin 1895 (*Korean Games*, archive.org), ancientchess.com (How to Play Janggi).

**Reescrita (lote 5):** resumo novo (saiu "parente do Xiangqi", sem fonte na ficha), "Do que você vai precisar?", "Como jogar?" (6 passos) e "Para quem conduz". Passar a vez, *bikjang*, empate e contagem de pontos dos torneios (I4, I5, curadoria) estão em "Para quem conduz", sem escolher uma versão. Cho começar e a ordem de arrumação nos torneios levam "(a verificar)", como nas Regras.

### jogo-real-de-ur — Não joga

Status: reconstructed · Família: corrida · "(a verificar)": 2 · "Como jogar?": não (veredito "não joga": só resumo e "Do que você vai precisar?")

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`; Regras 7: roseta no meio da fileira do meio e "nos quatro cantos", sem dizer quais |
| E2 Peças | sim | `pieces`; Regras 1 (7, de Finkel) |
| E3 Preparação | sim | Regras 1 e 8 (as peças entram de fora) |
| E4 Ação da vez | sim | Regras 2 e 8 |
| E5 Movimento | parcial | Regras 6: o percurso do Ludii, que fala em cantos "de cima" sem dizer qual é o alto |
| E6 Fim e vitória | sim | Regras 5 e 9 |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 3 e 6 |
| I3 Obrigação | sim | Regras 8 (mover é obrigatório; capturar, não) |
| I4 Bloqueio | não | lance 0 ou sem lance possível não é dito |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (dentro da reconstrução de Finkel):

- I3: mover é obrigatório sempre que possível; capturar, não. Duas peças nunca ficam na mesma casa (Wikipedia, na seção das regras de Finkel, a partir de Botermans 2008).
- As 6 casas laterais de cada um são seguras; as 8 do meio são de combate (Wikipedia, a partir de Botermans 2008).
- Sair exige o número de casas que faltam mais um (Ludii, regras de Finkel, a partir de Finkel 2007; Wikipedia).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E1, E5 | Ludii (regras de Finkel, a partir de Finkel 2007): começa-se num canto "de cima" do bloco de 3×4, segue-se a própria fileira, sobe-se pela do meio e volta-se pelo próprio lado no bloco de 3×2; roseta protetora no meio da fileira do meio e rosetas de nova jogada "nos quatro cantos". A Wikipedia (a partir de Becker 2007) diz que as cinco rosetas dão nova jogada. As duas figuras da Wikipedia mostram o percurso, mas só em imagem. Decidir se a figura basta; senão, falta abrir Finkel 2007. | fonte |
| I1, I4, I5 | Quem começa, lance 0 ou sem lance, empate. Nenhuma fonte de Finkel diz. | fonte |

**Notas de divergência registradas** (outras reconstruções): Murray e Masters propõem percursos com roseta a cada quatro casas (Wikipedia). O `pieces` da ficha já fala em 5 peças em "outras regras", e o Ludii, no conjunto "Historical Information", também usa 5.

**Pendências:** Finkel 2007, "On the rules for the Royal Game of Ur" (em *Ancient Board Games in Perspective*, British Museum Press), não tem cópia legítima aberta; as cópias achadas na web não são do editor e não foram usadas. A página do British Museum recusa o acesso automático (403). A página de regras de James Masters também (403). **Correção no relatório:** o bloco da Etapa 1 dizia que as regras de Finkel vêm da "tábua CDLI P498293"; o CDLI P498293 é o próprio tabuleiro (BM 120834), e a tábua das regras é a BM 33333B (Wikipedia).

**Fontes descartadas:** instruções do Kelsey Museum (University of Michigan), que misturam as regras de Masters e de Finkel sem dizer de quem é cada uma.

**Fontes novas:** Ludii, conjunto de regras de Finkel.

**Reescrita (lote 3):** só o resumo novo, "Do que você vai precisar?" (20 casas em 3×4, 1×2 e 3×2; 7 peças de Finkel ou 5 de outras reconstruções; 4 dados tetraédricos) e "Para quem conduz", que explica por que não há "Como jogar?" (percurso só em figura, sem quem começa, lance 0 nem empate). O resumo agora diz que as regras são uma reconstrução.

### kay-haiti — Não joga

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "2 fileiras", sem número de covas |
| E2 Peças | não | `pieces`: "sementes" |
| E3 Preparação | não | — (a ficha não tem `## Regras`) |
| E4 Ação da vez | não | `summary`: "semeadura em várias voltas" |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A ficha não tem `## Regras`. As duas `refs` são de jogos com outros nomes (Warri, Voleur): a curadoria precisa confirmar qual descreve o *kay*. | fonte |

**Abrir primeiro (Etapa 2):** "Mancala World: Warri (Haiti)"; "Mancala World: Voleur"; por eles, Comhaire-Sylvain 1952.

### kechukawe — Não joga

Status: partial · Família: corrida · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "semicircular com segmentos de cinco casas"; não dá para desenhar |
| E2 Peças | parcial | `pieces`: pedrinhas, sem quantidade; dado piramidal |
| E3 Preparação | não | — |
| E4 Ação da vez | sim | Regras (lançar o dado: 1, 2, 3, 5 e 0, segundo Olivares) |
| E5 Movimento | parcial | Regras: "avança-se pelo circuito", sem o percurso |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras (cair sobre a peça adversária) |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E3, E5, E6 | Tabuleiro, peças, saída, percurso e vitória. | fonte |
| I1, I3–I6 | Quem começa, obrigação, bloqueio, empate, fases. | fonte |

**Abrir primeiro (Etapa 2):** Depaulis 1998 (BGS 1, PDF), e por ele Olivares.

### kiela — Não joga

Status: partial · Família: semeadura · "(a verificar)": 2 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "4 fileiras (a verificar)", sem número de covas |
| E2 Peças | não | `pieces`: "pedras ou sementes" |
| E3 Preparação | parcial | Regras: jogadores experientes podem rearrumar as pedras na primeira jogada |
| E4 Ação da vez | não | — |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A própria ficha aponta a "fonte principal a ler": E. Romariz Santos Silva (1995). | fonte |

**Abrir primeiro (Etapa 2):** Wikipedia; Silva 1995. A descrição do Wikimanqala vem "citada num índice", de segunda mão.

### komikan — Não joga

Status: documented · Família: caca-assimetrico · "(a verificar)": 0 · "Como jogar?": não (veredito "não joga": só resumo e "Do que você vai precisar?")

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | Regras 1 e 11: alquerque 5×5 + triângulo de 13 pontos; o triângulo só existe em figura |
| E2 Peças | sim | Regras 2 |
| E3 Preparação | não | Regras 11: só em figura (Mátus, fig. 51) |
| E4 Ação da vez | sim | Regras 3, 4, 7 a 9 |
| E5 Movimento | sim | Regras 8 (Mátus) |
| E6 Fim e vitória | parcial | Regras 10: os cães vencem deixando o leão sem movimento; a vitória do leão só no Ludii (Regras 12) |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 4 e 9 |
| I3 Obrigação | não | os cães são obrigados a avançar (Regras 8); a captura, não dito |
| I4 Bloqueio | sim | Regras 10 (leão sem movimento: perde) |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- Fonte primária aberta: Mátus (1918-19), "Juegos i ejercicios de los antiguos araucanos", *Boletín del Museo Nacional de Chile*, pp. 168-169, no site do boletim. É o texto que Depaulis (1998) e o Ludii resumem.
- E5: os cães são obrigados a sempre avançar; o leão pode avançar ou recuar, sempre e em qualquer sentido (Mátus). O Ludii acrescenta "uma casa por vez".
- Captura, em mais detalhe: o leão come um cão sozinho, sem outro que o proteja, saltando por cima; com um lugar livre entre dois cães, come os dois (Mátus).
- Vitória dos cães: deixar o leão sem movimento (Mátus; Ludii).

**Achado importante para a sensibilidade:** Mátus diz que viu o jogo entre os indígenas do interior de Valdivia, que se recusaram a explicar as regras, e por isso descreve o *leoncito*, "o jogo que os meninos conhecem" no Chile. As regras que ele dá são do jogo das crianças chilenas, não dos informantes mapuche. Isso vai para a parada.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E1 | O triângulo só aparece em figura: Mátus fig. 51, reproduzida por Depaulis 1998, fig. 13. A Wikipedia descreve em palavras o desenho de Mátus (duas linhas transversais, uma longitudinal e duas verticais curtas), mas não diz quais pontos se ligam nem chega aos 13 pontos. Pendência do T-054. | fonte |
| E3 | Posição inicial só em figura (Mátus fig. 51; Depaulis fig. 13): os 12 cães na base oposta ao triângulo e o leão dentro do triângulo. Decidir se a figura basta. | curadoria |
| E6 | Vitória do leão: só o Ludii diz (capturar todos os cães); Mátus, que ele cita, não diz. Papel do triângulo: só no BGG, moderno. Ficaram como notas, não como regra. | curadoria |
| I1, I3, I5 | Quem começa, obrigação de capturar, empate. Mátus e Depaulis não dizem. | fonte |

**Pendências:** BGG recusa o acesso automático (403), e a regra moderna do triângulo, que a ficha atribui a ele, não pôde ser conferida. Manquilef 1914 (citado por Depaulis) não foi aberto.

**Fontes novas:** Mátus 1918-19, no *Boletín del Museo Nacional de Historia Natural*.

**Reescrita (lote 3):** só o resumo novo, "Do que você vai precisar?" (sem desenho do triângulo, que a ficha não descreve) e "Para quem conduz", que explica por que não há "Como jogar?". Saiu do resumo "Equivalente ao Taptana / komina inca e próximo do Adugo": a ficha só tem o nome cognato (Depaulis) na História, e não uma equivalência de jogo. O resumo diz que o jogo foi registrado entre os mapuche, mas as Regras vêm do *leoncito* chileno (Mátus), e isso foi dito em "Para quem conduz".

### konane — Joga com lacunas

Status: documented · Família: damas · "(a verificar)": 2 · "Como jogar?": sim (lote 2)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, mas ambíguo | `board`; Regras 7: os registros vão de 6×6 a 15×15 e 13×20 |
| E2 Peças | sim | `pieces`; Regras 1 e 5 |
| E3 Preparação | sim | Regras 1 e 5 |
| E4 Ação da vez | sim | Regras 2, 3 e 5 |
| E5 Movimento | sim | Regras 3 e 6 |
| E6 Fim e vitória | sim | Regras 4 |
| I1 Quem começa | parcial | Regras 5: quem tira a primeira pedra joga com a cor dela; como se decide quem tira, a fonte não diz |
| I2 Captura | sim | Regras 3 e 6 |
| I3 Obrigação | sim | Regras 3 |
| I4 Bloqueio | sim | Regras 4 |
| I5 Empate | não se aplica | Regras 4 |
| I6 Fases | sim | Regras 2, 3 e 5 |

**Resolvido na Etapa 2** (Emory 1924, pelo Ludii, que transcreve o trecho):

- I1, em parte: a cor de cada um é a da primeira pedra que ele tira. Emory escreve "decide-se quem tira a primeira pedra", sem dizer como. O conjunto de regras do Ludii faz as pretas começarem.
- A abertura (centro, ao lado do centro ou canto, e qual pedra o segundo tira) e as direções do salto (nunca na diagonal, nunca duas direções na mesma jogada).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E1 | Kaahaaina Naihe, a informante de Emory, preferia 100 casas (50 de cada cor); o Ludii joga em 10×10. King (1784) viu um tabuleiro de 14 casas por fileira e 238 casas. Emory registra tabuleiros em pedra em Lanai de 8×8 a 15×15 e 13×20. "Do que você vai precisar?" dá a faixa de 6×6 a mais de 14×14, como o `board`, e "Para quem conduz" cita a preferência de Kaahaaina. | curadoria |
| I1 | Como se decide quem tira a primeira pedra. | fonte |

**Achado:** o Ludii data o trecho de Emory de "1897: 84–85" na evidência e de "1924: 85" no conjunto de regras; 1897 é o ano de nascimento de Emory e parece erro de digitação. A ficha segue com 1924. O livro (*The Island of Lanai*, Bishop Museum Bulletin 12) não foi achado em PDF: pendência.

**Fontes novas:** Ludii: Konane (página do jogo, com as evidências).

### ludus-latrunculorum — Joga com lacunas (depois da escolha)

Status: reconstructed · Família: captura-posicional, xadrez-e-guerra · "(a verificar)": 0 · "Como jogar?": não (veredito "não joga": só resumo e "Do que você vai precisar?")

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, um por reconstrução | Regras 1 a 3 |
| E2 Peças | sim, um número por reconstrução | Regras 1 a 3 |
| E3 Preparação | sim | Regras 1 a 3 (tabuleiro vazio, colocação) |
| E4 Ação da vez | sim | Regras 1 a 3 |
| E5 Movimento | sim | Regras 1 a 3 |
| E6 Fim e vitória | sim, nas três | Regras 1 a 3 |
| I1 Quem começa | não | Regras 5 |
| I2 Captura | sim | Regras 1 a 3 |
| I3 Obrigação | não | — |
| I4 Bloqueio | só no Locus Ludi | Regras 2 |
| I5 Empate | só no Bell (30 lances sem captura) | Regras 3 |
| I6 Fases | sim | Regras 1 a 3 (move-se quando todas as peças estão no tabuleiro) |

**Resolvido na Etapa 2:**

- E6: como se vence em cada uma. Schädler: perde quem fica com uma peça (Schädler 2001, fonte primária). Locus Ludi: acaba quando alguém fica com uma peça ou sem lance, e vence quem capturou mais (Ludii). Bell: perde quem perde todas; 30 lances sem captura, vence quem tem mais peças (Wikipedia, a partir de Bell 1979: 86; Ludii).
- I6: nas três, a fase de movimento começa quando todas as peças foram colocadas.
- A regra de Bell, que era só "regras próprias", foi escrita por inteiro, com o *dux*.
- **Correção pela fonte primária:** em Schädler (2001), a captura não é imediata: a peça cercada fica presa e só é retirada na vez seguinte, em vez de mover, e se solta se uma das que a cercam for presa; os saltos podem ser vários na mesma vez. A ficha dizia só "captura por cerco".
- O Locus Ludi tem duas versões no Ludii, "Seneca" e "Piso"; a ficha descrevia a "Piso" (a `ref` aponta para ela). As duas estão agora na ficha.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E1, E2 | Escolher uma reconstrução para "Como jogar?". Quadro no fim desta lista. | curadoria |
| I1 | Quem começa. Nenhuma das três diz (só Kowalski: as pretas começam). | fonte |
| I3 | Capturar é obrigatório? Em Schädler, retirar a peça presa é opcional ("pode"); nas outras, não se diz. | fonte |
| I4 | Sem lance, em Schädler e Bell. | fonte |
| I5 | Empate, em Schädler e no Locus Ludi. | fonte |

**Quadro das reconstruções:**

| Reconstrução | Ano | Tabuleiro e peças | Movimento | Captura | Fim | Fontes antigas |
| --- | --- | --- | --- | --- | --- | --- |
| Ulrich Schädler | 1994 e 2001 | 8×8; 16 a 24 cada | uma casa, ortogonal; pula uma peça de qualquer cor, vários pulos | a peça cercada fica presa e é retirada na vez seguinte | perde quem fica com uma peça | Varrão, Ovídio, Marcial, Sêneca, *Laus Pisonis*, Isidoro de Sevilha; tabuleiros de 7×7 a 9×10 |
| Locus Ludi, "Piso" | sem data no Ludii | 8×8; 20 cada | uma casa, ortogonal; sem vaivém | imediata; também no canto | uma peça ou sem lance; vence quem capturou mais | "análise das fontes romanas" (Ludii) |
| Locus Ludi, "Seneca" | sem data no Ludii | 8×8; 20 cada | uma casa; pula peça sua ou inimiga presa | presa, retirada na vez seguinte | igual à "Piso" | "análise das fontes romanas" (Ludii) |
| R. C. Bell | 1960–1969 (Wikipedia) | 8×8 (ou 8×7); 16 + 1 *dux* cada, colocadas duas a duas | uma casa, ortogonal; o *dux* pula uma inimiga sem capturar | imediata, também contra o canto; quem captura joga de novo | perde quem perde todas; 30 lances sem captura, vence quem tem mais | o *dux* vem da hipótese de parentesco com o hnefatafl e de um achado ambíguo (Ludii) |
| Falkener | 1892 | 12×12; cinco fileiras de peças | todas as direções; pula sem capturar | por cerco | perde quem está perdido ou se tranca | tabuleiro egípcio de "Tau" que ele identifica com o latrunculi |
| W. J. Kowalski | sem data | 8×12 com 12 peças, ou 10×11 com 10, mais um *dux* | como a torre | por cerco; *dux* não é capturado | imobilizar o *dux* (depois: quem não pode mover perde) | jogo de Stanway (achado de 1996) |
| Museu Quintana (Künzing) | sem data | 16 cada em duas fileiras | como a torre | por cerco | capturar mais ou imobilizar | — |

**Pendência:** o site do Locus Ludi não mostra as regras sem JavaScript; as duas versões do projeto foram lidas no Ludii. Bell 1979 foi lido pela Wikipedia e pelo Ludii.

**Fontes novas:** Schädler 2001 (*Abstract Games* 7: 10–11, PDF digitalizado, lido por OCR), Ludii (Locus Ludi Seneca, Bell 8×8), Falkener 1892 (archive.org).

**Reescrita (lote 5):** só o resumo novo, "Do que você vai precisar?" (com as quantidades de cada reconstrução) e "Para quem conduz". Sem "Como jogar?": é a escolha de reconstrução que o bloco deixava aberta (E1, E2), e ela não foi tomada aqui. Quem começa, empate e obrigação de capturar seguem sem fonte.

### mahjong — Joga com lacunas

Status: documented · Família: pecas · "(a verificar)": 3 · "Como jogar?": sim (lote 3)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não se aplica | `board`: sem tabuleiro |
| E2 Peças | sim | Regras 1 (144; 136 no *riichi*) |
| E3 Preparação | sim | Regras 2 a 4 |
| E4 Ação da vez | sim | Regras 5 |
| E5 Movimento | sim | Regras 6 e 7 |
| E6 Fim e vitória | sim, com variantes | Regras 8 e 9: a mão completa vence, mas o mínimo para valer muda com a variante |
| I1 Quem começa | sim | Regras 2 (leste) |
| I2 Captura | sim | Regras 6 (tomar o descarte) |
| I3 Obrigação | sim | Regras 6 (prioridade sobre o descarte) |
| I4 Bloqueio | não se aplica | — |
| I5 Empate | sim | Regras 8 (a muralha acaba: mão sem vencedor) |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:** o que as regras chinesas oficiais (MCR, edição em inglês de 2006), as regras de *riichi* da Associação Europeia de Mahjong (2025) e o *old Hong Kong mahjong* da Wikipedia têm em comum entrou nas Regras 1 a 8, com o artigo de cada uma: composição das peças (E2), lugares, muralha e distribuição de 13 peças, 14 para leste (E3), leste começa (I1), prioridade do descarte (I3) e muralha esgotada sem vencedor (I5).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E6 | O mínimo para uma mão valer e a contagem mudam com a variante: MCR, pelo menos 8 pontos (Organização Mundial de Mahjong); *riichi*, pelo menos um *yaku* (EMA, que segue de perto as regras do Campeonato Mundial de Riichi); Hong Kong, mínimo combinado na mesa, em geral 3 *faan* (Wikipedia, sem federação achada); Taiwan, mãos de 16 peças; Singapura, quatro peças de bicho a mais (Wikipedia). Escolher uma variante ou ensinar só a mão completa. | curadoria |

**Erro corrigido:** a ficha deixa de ter como única `ref` a bibliografia de Culin.

**Pendências:** sem federação aberta para o Hong Kong, Taiwan e Singapura. A edição atual do MCR na página da EMA não abriu (certificado inválido do site); a edição de 2006 está no site da federação dinamarquesa.

**Fontes novas:** Wikipedia, *Mahjong*; *Mahjong Competition Rules* (MCR, 2006); EMA, *Riichi: rules for Japanese mahjong* (2025).

**Reescrita (lote 3):** resumo novo, "Do que você vai precisar?", "Como jogar?" (9 passos) e "Para quem conduz". **Lacuna achada na escrita:** a ficha usava sequência, trinca, quadra e par sem dizer o que são. Entrou a Regra 10, com a Wikipedia (*Mahjong*). O "Como jogar?" ensina o que as três variantes têm em comum (Regras 1 a 8) e deixa o mínimo para a mão valer (Regra 9) como o que muda entre elas; "Para quem conduz" aponta Taiwan e Singapura e sugere combinar a variante antes. O número de dados não está em nenhuma das fontes citadas e o texto só diz "dados".

### makruk — Joga com lacunas

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 3 · "Como jogar?": sim (lote 5)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras; `diagram` |
| E2 Peças | sim | Regras (composição) |
| E3 Preparação | sim | Regras (posição inicial) |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim, com uma divergência | Regras (movimentos; primeiro lance) |
| E6 Fim e vitória | sim | Regras (xeque-mate) |
| I1 Quem começa | não | Regras: as fontes não dizem |
| I2 Captura | sim | Regras (captura) |
| I3 Obrigação | sim | Regras (sair do xeque) |
| I4 Bloqueio | sim | Regras (afogamento empata) |
| I5 Empate | sim (a verificar) | Regras (afogamento; contagem) |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- E3: composição e posição inicial, com o *met* à direita do rei (Wikipedia; ancientchess.com; Falkener 1892: 192, carta do príncipe Devawongse de 1889) e as casas de cada peça (GNU XBoard).
- E5: os movimentos escritos na ficha, sem "como no xadrez" (Wikipedia; ancientchess.com).
- E6, I2, I4: xeque-mate vence, toda peça captura com o próprio movimento, afogamento empata (ancientchess.com; Wikipedia).
- I5: a contagem (64 lances; 8, 16, 22, 32, 44 ou 64 conforme as peças do lado mais forte), a verificar, porque nem a Wikipedia nem o ancientchess.com citam fonte.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E5 | Primeiro lance. Falkener (1892: 192), pela carta de 1889: o rei pode andar como o cavalo no primeiro lance, e o *met* pode andar duas casas. Wikipedia: esses lances são *sutras*, regras informais fora do jogo formal, e regras do *ouk* cambojano. A ficha registra os dois. | curadoria |
| I1 | Quem começa. Nenhuma fonte consultada diz. | fonte |

**Pendência:** Chess Variant Pages (`ref` da ficha) recusa o acesso automático (Cloudflare), e o web.archive.org não abre neste ambiente.

**Fontes novas:** ancientchess.com (How to Play Makruk), GNU XBoard (Makruk), Falkener 1892 (archive.org, já usado em outras fichas).

**Reescrita (lote 5):** resumo novo (saiu "próximo do xadrez antigo pela fraqueza da rainha"), "Do que você vai precisar?", "Como jogar?" (7 passos) e "Para quem conduz". A contagem para empate (Regra "Contagem") segue "(a verificar)". Os lances especiais do primeiro lance (Falkener, *sutras*) ficaram em "Para quem conduz", pedindo que se combine. Quem começa segue em aberto. A dica de usar peça com dois lados para os peões vem da História (peões de búzios) e do passo da promoção.

### mehen — Não joga

Status: unknown · Família: corrida · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1–E6 | não | `board`: espiral; `pieces`: desconhecido; Regras: "Desconhecidas" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | "Não há reconstrução aceita" (Regras). | sem saída |

**Abrir primeiro (Etapa 2):** nada.

### morabaraba — Joga com lacunas

Status: documented · Família: alinhamento · "(a verificar)": 9 · "Como jogar?": sim (lote 1)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, com divergência | Regras 1 (diagonais só entre os dois quadrados de fora); o `diagram` as leva até o de dentro, com nota |
| E2 Peças | sim | `pieces` |
| E3 Preparação | sim | Regras 2 |
| E4 Ação da vez | sim | Regras 2 e 3 |
| E5 Movimento | sim | Regras 3 e 4 |
| E6 Fim e vitória | sim | Regras 5 |
| I1 Quem começa | sim | Regras 6 (a verificar) |
| I2 Captura | sim | Regras 2 e 7 |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | não | — |
| I5 Empate | sim | Regras 10 (a verificar) |
| I6 Fases | sim | Regras 8 (a verificar) |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1 | Diagonais até o quadrado de dentro ou só entre os de fora? Regra 1 e Coertze 2002 dizem só os de fora; o desenho diz até dentro. | curadoria |
| I4 | E se um jogador não puder mover? | fonte |

**Abrir primeiro (Etapa 2):** "Ludii: evidência do Lesoto"; Ludii (Coertze 2002). As cinco regras novas do PR #22 vêm da Wikipedia sem fonte citada e seguem "(a verificar)": procurar a fonte delas (MSSA).

### mu-torere — Joga com lacunas

Status: documented · Família: bloqueio · "(a verificar)": 1 · "Como jogar?": sim (lote 2)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; Regras 2 |
| E2 Peças | sim | `pieces` |
| E3 Preparação | sim | Regras 1 |
| E4 Ação da vez | sim | Regras 2 |
| E5 Movimento | sim, mas ambíguo | Regras 3 e 6: a regra do *pūtahi* tem quatro leituras |
| E6 Fim e vitória | sim | Regras 4 |
| I1 Quem começa | não | — |
| I2 Captura | não se aplica | Regras 5 |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim | Regras 4 |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- Não se pula e não há captura (Best 1925: 60–61, pelo Ludii).
- **Erro corrigido:** a Regra 3 remetia a "divergências" que não existiam; a Regra 6 agora as registra.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E5 | A regra de Ascher vale sempre ou só na abertura? **Best (1925: 60–61)**, no trecho que o Ludii transcreve, só mostra a abertura: as duas peças do meio de quem abre são *tapu* "por enquanto". **Ludii, conjunto observado (Best 1917: 15; Murray 1951: 93):** nenhuma restrição, só a de que o primeiro lance deixe o outro mover. **Ludii, conjunto sugerido a partir de Best 1925:** a restrição vale nas duas primeiras jogadas, e o Ludii diz que ela foi mal entendida. **Jellis (1973, pelo Ludii) e Wikipedia (sem fonte):** vale a partida toda. **Ascher (1987)** não foi lida; Browne (2020) resume que ela apontou a omissão de "uma regra de abertura aparentemente trivial". O texto didático mantém a Regra 3 da ficha e avisa em "Para quem conduz" que as fontes divergem. | curadoria |
| I1 | Quem começa. Best (1925) diz que um dos lados "não pode abrir" com as peças do meio, mas não diz qual lado abre. | fonte |
| I5 | Empate. A Wikipedia diz que a posição inicial é empate com jogo perfeito (análise do GamesCrafters), o que não é uma regra. | fonte |

**Pendências:** Ascher (1987, *Mathematics Magazine* 60(2), JSTOR) e Browne (2023, "Which Rules for Mu Torere?", Springer) estão atrás de *paywall*.

**Fontes novas:** Wikipedia; Browne 2020 (arXiv).

### mulabalaba — Não joga

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "4 fileiras", sem número de covas |
| E2 Peças | não | `pieces`: "sementes" |
| E3 Preparação | não | — (a ficha não tem `## Regras`) |
| E4 Ação da vez | não | `summary`: "dois ciclos e semeadura em várias voltas" |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A ficha não tem `## Regras`. | fonte |

**Abrir primeiro (Etapa 2):** Mancala World (e, por ele, Chaplin 1956).

### muvalavala — Joga com lacunas

Status: documented · Família: semeadura · "(a verificar)": 3 · "Como jogar?": sim (lote 3)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, mas ambíguo | `board`: 4×6 ou 4×16 (sem desenho pela faixa) |
| E2 Peças | sim | `pieces`: 48 sementes (4×6) |
| E3 Preparação | sim | Regras (2 em cada cova) |
| E4 Ação da vez | sim | Regras 1 a 3 (cada um com as duas fileiras do seu lado, a verificar; primeiro lance da fileira de dentro) |
| E5 Movimento | sim | Regras 3 (sentido horário, em várias voltas) |
| E6 Fim e vitória | sim (a verificar) | Regras 5: acaba quando um jogador não pode mover; quem vence só no Ondjango Asili |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 4 |
| I3 Obrigação | não se aplica | a captura acontece sozinha, quando a semeadura termina do jeito certo |
| I4 Bloqueio | sim | Regras 5 (sem lance, a partida acaba) |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Ludii, *Muvalavala (Luena)*, a partir de Santos Silva 1995: 87):

- E4: as duas fileiras de cada um (inferido das "fileiras de dentro e de fora" do Ludii, por isso a verificar) e o primeiro lance da fileira de dentro.
- E6 e I4: a partida acaba quando um jogador não pode mover.
- I2: captura quando a última semente cai numa cova vazia da fileira de dentro, levando a cova do adversário em frente e a de trás dela.
- Semeadura em várias voltas.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E6 | Quem vence: "quem capturar mais sementes" só no Ondjango Asili, que não cita outra fonte além do Ludii; o Ludii não diz. | fonte |
| I1, I5 | Quem começa, empate. | fonte |
| — | Formas: o Ludii tem duas, Muvalavala (Luena), "sobretudo entre os Luena e os Mbunda" (Silva 1995: 87), e Muvalavala (Quioco) (Silva 1995: 83-85), com outra preparação, sentido anti-horário e outra captura. O `summary` cita Luena e Quioco; as Regras e o Ondjango, Luena e Mbunda. As Regras da ficha são da forma Luena; a forma Quioco entrou como nota. | curadoria |

**Pendências:** Santos Silva 1995 não foi aberto. Os materiais para baixar do Ondjango Asili ("Regras e Tabuleiro") não têm link acessível na página. Mancala World recusa o acesso automático (Cloudflare).

**Fontes novas:** Ludii, *Muvalavala (Luena)* e *Muvalavala (Quioco)*.

**Reescrita (lote 3):** resumo novo, "Do que você vai precisar?", "Como jogar?" (7 passos, forma Luena) e "Para quem conduz", que descreve a forma Quioco. Marcados "(a verificar)": de quem é cada fileira (Regra 1) e a vitória por mais sementes capturadas (Regra 5, só no Ondjango Asili). O resumo agora diz "registrado", e não "jogado", porque `living` é "desconhecido".

### nard — Joga com lacunas, depois da decisão de curadoria

Status: partial · Família: corrida · "(a verificar)": 3 · "Como jogar?": não (veredito "joga com lacunas, depois da decisão": só resumo e "Do que você vai precisar?")

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; Regras (formas A e B) |
| E2 Peças | sim | `pieces`; Regras |
| E3 Preparação | sim, em cada forma | Regras: A (5-3-5-2, Ludii) ou B (todas na "cabeça", bkgm.com) |
| E4 Ação da vez | sim | Regras A 3 e B 3–4 |
| E5 Movimento | sim, mas a forma depende da curadoria | Regras: A em sentidos opostos; B no mesmo sentido |
| E6 Fim e vitória | sim | Regras A 6 e B 8 |
| I1 Quem começa | sim (a verificar na forma A) | Regras B 2 (bkgm.com); nas formas antigas, Wikipedia sem fonte |
| I2 Captura | sim | Regras A 4; B 6 (não há captura) |
| I3 Obrigação | sim | Regras A 3 e B 4 |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- As duas formas que a ficha citava estão escritas por inteiro nas Regras, lado a lado: **A**, em sentidos opostos, do Ludii a partir de Himly (1879: 679–681); **B**, o nardy longo, do bkgm.com (a partir do manual do MegaGammon, de Igor Sheyn e do *Backgammon FAQ* de Zweije), com a Wikipedia descrevendo o mesmo a partir de Akhundov (2012).
- Em cada forma: posição inicial, uso dos dados, captura (ou não), retirada das peças e vitória.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E5 | Que forma a ficha ensina. **Texto sassânida (DLP, já na ficha):** sentidos opostos, sem regras completas. **Ludii (Himly 1879):** sentidos opostos, disposição 5-3-5-2, captura da peça sozinha, que reentra. **Wikipedia, a partir de uma reconstrução moderna publicada no ancientgames.org:** o *nardshir* do livro atribuído a Bozorgmehr, em sentidos opostos e com outra disposição. **Wikipedia, a partir de Botermans 2008:** um nard moderno do Oriente Próximo, em sentidos opostos e todas as peças num ponto. **bkgm.com e Wikipedia (Akhundov 2012):** nardy longo, mesmo sentido, sem captura. | curadoria |
| I4, I5 | Jogador sem jogada possível (na forma A) e empate. Na forma B, a Wikipedia cita um empate das regras da Federação de Nardy, sem fonte aberta. | fonte |

**Fontes novas:** Ludii: Nard (Himly 1879; Murray 1951: 113–115); Wikipedia: Nard (game); bkgm.com: Narde.

**Pendências:** o ancientgames.org (reconstrução do *nardshir*) não responde, e a cópia citada pela Wikipedia está no web.archive.org, que não abre deste ambiente. A página de evidências do DLP no Ludii (`data.php?gameId=303`) carrega por script e não pôde ser lida.

**Fonte descartada:** nenhuma.

**Reescrita (lote 6):** só o resumo novo, "Do que você vai precisar?" e "Para quem conduz", que lista as formas (A, B e a reconstrução do *nardshir*). Sem "Como jogar?": é a escolha da forma (E5) que o bloco deixava aberta, e ela não foi tomada aqui. O `sens` segue "desconhecido".

### nchayo — Não joga

Status: unknown · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "4 fileiras (Ludii)", sem número de covas |
| E2 Peças | não | `pieces`: sementes ou pedras |
| E3–E6 | não | Regras: "Não abertas nesta rodada" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | O status é `unknown` porque o registro (Viegas Guerreiro 1966) ainda não foi aberto, não porque ele não exista. | fonte |

**Abrir primeiro (Etapa 2):** "Ludii: biblioteca"; "BN Portugal: Viegas Guerreiro"; UNL.

### ntxuva — Não joga

Status: partial · Família: semeadura · "(a verificar)": 2 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "4 fileiras (a verificar)", sem número de covas |
| E2 Peças | não | `pieces`: sementes ou pedrinhas |
| E3–E6 | não | Regras: "Parciais (ver acima)" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A própria ficha pede "descrição completa de fonte moçambicana". | fonte |

**Erro na ficha:** as Regras dizem "ver acima", mas não há nada acima (a ficha não tem `## História`). Duas `refs` são de outros jogos do catálogo (Tchadji e Tchouba): a relação entre os três precisa ser explicada.

**Abrir primeiro (Etapa 2):** REIN/UEPB (Nampula); UFFS (oficina, que não é fonte de regra sozinha).

### ohvalhu — Não joga

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "2 fileiras"; o `summary` fala em "oito [casas]", sem dizer se é por fileira |
| E2 Peças | não | `pieces`: "sementes" |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | Regras: "um ciclo, semeadura em várias voltas" |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | "Detalhes a extrair de Culin 1894 e do Mancala World" (Regras). | fonte |

**Abrir primeiro (Etapa 2):** Culin 1894 no Project Gutenberg (fonte primária em domínio público); Mancala World.

### omweso — Joga com lacunas

Status: documented · Família: semeadura · "(a verificar)": 6 · "Como jogar?": sim (lote 4)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1; `diagram` |
| E2 Peças | sim | Regras 1 (32 por jogador) |
| E3 Preparação | sim | Regras 2 (cada um arruma as suas sementes) |
| E4 Ação da vez | sim | Regras 3 |
| E5 Movimento | sim | Regras 3, 4 e 6 |
| E6 Fim e vitória | sim | Regras 7 |
| I1 Quem começa | sim (a verificar) | Regras 2 (sorteio) |
| I2 Captura | sim | Regras 5 |
| I3 Obrigação | não | — |
| I4 Bloqueio | sim | Regras 7 (quem não joga perde) |
| I5 Empate | não | — |
| I6 Fases | sim | Regras 2 (arrumar e depois semear) |

**Resolvido na Etapa 2:**

- Regras do Ludii (página "Mweso"), a partir de Shackell (1934: 14–19): arrumação livre, semeadura anti-horária nas duas fileiras próprias, semeadura em revezamento, captura das duas covas opostas, semeadura horária só para capturar, proibição de semear uma semente só e derrota de quem não joga.
- Arrumação inicial e quem começa, de Isabirye (2024, Kawowo Sports, a verificar), a reportagem que a Wikipedia cita.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I3 | Capturar é obrigatório quando possível? | fonte |
| I5 | Existe empate? | fonte |
| — | A Regra original pede "fontes especializadas (Wernham, sociedades de omweso) antes de publicar". Shackell (pelo Ludii) e Isabirye bastam? | curadoria |
| — | Sensibilidade: a Wikipedia registra que tabus culturais afastavam as mulheres do jogo, e o Discover Society (2020) traz o ditado ganda "as mulheres não podem jogar omweso", hoje contestado por artistas e jogadoras; o reino de Buganda organiza campeonatos e o jogo faz parte da coroação do *kabaka* (Isabirye 2024). O `sens` está "desconhecido". | curadoria |

**Pendência:** o Monitor (2021), que a Wikipedia cita para a captura em sentido inverso, recusa o acesso (403); o Independent Uganda e a página de Driedger no Wayback Machine não responderam. O Mancala World (Cloudflare) e o BGG wiki (403) continuam bloqueados. Wernham e Shackell (1934) não foram achados em acesso aberto.

**Fontes novas:** Ludii: Mweso, Isabirye 2024 (Kawowo Sports) e Wikipedia: Omweso.

**Reescrita (lote 4):** resumo novo, "Do que você vai precisar?", "Como jogar?" (7 passos) e "Para quem conduz". Passos "(a verificar)": a arrumação antes da primeira semeadura (Regra 2) e a vitória por captura nas duas pontas (Regra 7). Capturar obrigatório e empate seguem em aberto e estão ditos no texto. **Sensibilidade não resolvida:** o `sens` continua "desconhecido"; os tabus que afastavam as mulheres do jogo (Wikipedia, Discover Society) não entraram na ficha nem no texto novo. Fica para a decisão de curadoria do lote.

### ouk-chatrang — Não joga

Status: partial · Família: xadrez-e-guerra · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces`: 16 por jogador |
| E3–E6 | não | a ficha não tem `## Regras`; o `summary` só diz "quase idêntico ao Makruk" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3–E6, I1–I6 | Regras próprias, ou as diferenças em relação ao Makruk escritas na ficha. | fonte |

**Abrir primeiro (Etapa 2):** "Wikipedia: Makruk" (única `ref`).

### ouril — Não joga

Status: partial · Família: semeadura · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces`: 48 sementes |
| E3 Preparação | não | — |
| E4 Ação da vez | não | Regras: "Semelhantes às do oware" |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: "captura de 2 ou 3", sem dizer quando |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3–E6, I1–I6 | As regras remetem ao Oware e a "diferenças locais". A ficha manda detalhar a partir de Graça 1998. | fonte |

**Erro na ficha:** uma das fontes das Regras é "uma implementação de software", sem nome; fonte fraca.

**Abrir primeiro (Etapa 2):** "Braz Dias: uril (UNEB)"; Resumo ICEM-3; Graça 1998.

### oware — Joga com lacunas

Status: documented · Família: semeadura · "(a verificar)": 8 · "Como jogar?": sim (lote 2)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces` |
| E3 Preparação | sim | Regras 1 |
| E4 Ação da vez | sim | Regras 2 |
| E5 Movimento | sim | Regras 2 |
| E6 Fim e vitória | sim | Regras 5, 7 e 8 (a verificar) |
| I1 Quem começa | não | — |
| I2 Captura | sim, mas ambíguo | Regras 3; o *grand slam* tem várias leituras (Regras 9) |
| I3 Obrigação | sim | Regras 4 e 6 |
| I4 Bloqueio | sim | Regras 6 |
| I5 Empate | sim | Regras 7 (24 a 24, a verificar) |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- E6: a partida acaba quando alguém chega a 25 (Wikipedia, regras do *abapa*, sem fonte, a verificar); ciclo sem fim: combinam parar e cada um fica com as do seu lado (Wikipedia; Bennett 1927, pelo Ludii).
- I4: sem jogada que alimente o adversário, o jogador captura as do seu lado, e a partida acaba (Wikipedia; Bennett 1927, pelo Ludii).
- I5: 24 a 24 é empate (Wikipedia, a verificar).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I2 | *Grand slam*. Wikipedia (*abapa*): a jogada vale, mas não captura. Chamberlin (2017, pela Wikipedia): quatro variações (proibida; vale sem capturar, a regra das competições internacionais; captura e as que restam vão para o adversário; captura menos a última ou a primeira cavidade). Ludii: no resumo das regras de Bennett (1927), a jogada é proibida, **mas o trecho de Bennett que o próprio Ludii transcreve** diz que, se o adversário fica sem sementes logo depois da captura, quem capturou fica com as do seu lado, o que supõe que a captura vale. "Para quem conduz" lista as leituras e pede que se combine antes. | curadoria |
| I1 | Quem começa. Nenhuma fonte diz. | fonte |

**Pendência:** o BGG wiki (`ref` da ficha) recusa o acesso automático (403), e a página de regras do Aualé, citada pela Wikipedia, mudou de endereço e dá 404.

**Fontes novas:** nenhuma nas `refs` (Wikipedia e Ludii já estavam lá). Bennett 1927 e Chamberlin 2017 entram pelo intermediário.

### owela-benguela — Não joga

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não (veredito "não joga": só resumo e "Do que você vai precisar?")

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, mas ambíguo | Regras: de 4×12 a 4×20, de preferência par |
| E2 Peças | sim, mas ambíguo | Regras (fórmula; 2 por cova) |
| E3 Preparação | sim | Regras 2 |
| E4 Ação da vez | sim | Regras 3 |
| E5 Movimento | sim | Regras 3, 4 e 6 |
| E6 Fim e vitória | parcial | Regras 7: acaba quando um jogador não pode jogar; não diz quem vence |
| I1 Quem começa | não | Regras 7 |
| I2 Captura | sim | Regras 5 |
| I3 Obrigação | não | — |
| I4 Bloqueio | sim | Regras 7 (a partida acaba) |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Ludii, a partir de Santos Silva 1995: 75–82):

- E3: duas sementes por cova, a partir da cova mais à esquerda da fileira de fora, no sentido anti-horário.
- E5, I2: semeadura em várias voltas; captura na fileira de dentro, levando a cova da frente do adversário e a de fora na mesma coluna; as sementes capturadas são semeadas de novo; semente sozinha não se semeia.
- I4: a partida acaba quando um jogador não pode jogar.
- **Erro corrigido:** "Demais regras na fonte" saiu; as regras estão na ficha.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E1 | Que tamanho recomendar (4×12 a 4×20, "de preferência par"). | curadoria |
| — | `sens`: "restrito (homens e meninos)". O Ludii diz só que o jogo "é jogado por homens e meninos, e pode ser jogado por dois jogadores ou em equipes", em covas feitas no chão, entre os povos de língua umbundu do sudoeste da África. Não diz se a restrição é proibição, costume ou observação do registro, nem se ainda vale. | curadoria |
| E2 | A fórmula das sementes (três vezes as covas de uma fileira, menos 2 ou 1) é por jogador ou do tabuleiro? | fonte |
| E6 | Quem vence. | fonte |
| I1, I3, I5 | Quem começa, obrigação, empate. | fonte |

**Pendência:** Santos Silva 1995 (*Jogos de quadrícula do tipo mancala com especial incidência nos praticados em Angola*) não está acessível on-line. O Mancala World não tem página do owela de Benguela (a página "Owela" é a da Namíbia).

**Fonte descartada:** Ondjango Asili (`ref` da ficha) é uma tradução automática do texto do Ludii, sem fonte própria.

**Fontes novas:** nenhuma nas `refs`.

**Reescrita (lote 5):** só o resumo novo, "Do que você vai precisar?" e "Para quem conduz". **Sensibilidade:** o `sens` é "restrito (homens e meninos)"; "Para quem conduz" diz que o registro afirma isso e que a ficha não sabe se é proibição, costume ou observação, e recomenda conferir antes de ensinar. A decisão sobre o tamanho do tabuleiro e a fórmula das sementes segue aberta. O Ondjango Asili segue descartado como fonte.

### pachisi — Joga com lacunas

Status: documented · Família: corrida · "(a verificar)": 4 · "Como jogar?": sim (lote 4)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; Regras 6 (casas-castelo, a partir da prancha de Herklots) |
| E2 Peças | sim | `pieces`; Regras 7 e 9 (em geral 6 búzios) |
| E3 Preparação | sim, menos a entrada | Regras 8 |
| E4 Ação da vez | sim, com duas tabelas | Regras 9, 10 e 12 |
| E5 Movimento | sim | Regras 3 e 8 |
| E6 Fim e vitória | sim, com duas leituras | Regras 5, 7 e 11 |
| I1 Quem começa | sim (a verificar) | Regras 13 |
| I2 Captura | sim | Regras 4 e 6 |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não se aplica | corrida: a vitória é de quem chega primeiro |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- Fonte primária aberta: Herklots (1832), *Qanoon-e-Islam*, apêndice (pp. lviii–lix) e prancha VII, fig. 2, no archive.org. É a fonte que o Ludii cita para as duas formas observadas no Decão.
- E1: as 12 casas com cruz, descritas a partir da prancha; a Wikipedia dá as mesmas 12, sem fonte.
- E2: em geral 6 búzios; às vezes 7 (Herklots 1832).
- E3 e E5: as peças entram pela coluna do meio, a partir da casa vizinha ao centro, e dão a volta contra o sol (Herklots 1832).
- E4: a tabela de Herklots; joga-se de novo até tirar 2, 3 ou 4; três números iguais seguidos não valem.
- E6: chegada exata ao centro (Herklots 1832).
- I1: quem tira mais começa (Wikipedia, sem fonte, a verificar).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E4 | **Tabela de lances.** Herklots (1832), com 6 búzios: nenhum, 6; 1, 10; 2, 2; 3, 3; 4, 4; 5, 25; 6, 12 (com 7, o 6 vale 30 e o 7 vale 12); 25 e 30 dão um passo a mais. A Wikipedia, sem fonte, traz outras tabelas: com 6, nenhum vale 25 e o 5 e o 6 valem 5 e 6; com 7, nenhum vale 7, o 6 vale 35 e o 7 vale 14, com nova jogada nos lances altos. | curadoria |
| E6 | **Duplas ou cada um por si.** A Regra 1 fala em duplas (amarelo e preto contra vermelho e verde), como a Wikipedia. Herklots descreve quatro jogadores, cada um por si, e a partida continuando até três tirarem as suas peças. | curadoria |
| E3 | Como uma peça entra no tabuleiro: com qualquer lance ou só com um lance especial? Herklots não diz; o Ludii lê o "passo a mais" do 25 e do 30 como entrada, e a Wikipedia fala em lances de "graça" (6, 10 e 25), sem fonte. | fonte |
| I3, I4 | Mover é obrigatório? E se o lance não puder ser usado? | fonte |

**Nota de sensibilidade:** Herklots (1832) anota que, no Decão, "nunca jogam a dinheiro". O `sens` está "desconhecido"; o dado vai para a decisão do lote.

**Fontes novas:** Herklots 1832 (archive.org) e Wikipedia: Pachisi.

**Reescrita (lote 4):** resumo novo (saíram "um dos mais jogados na história do Sul da Ásia" e "ancestral", que não têm fonte própria na ficha; ficou o que a História diz sobre o Ludo e o Parcheesi), "Do que você vai precisar?", "Como jogar?" (8 passos) e "Para quem conduz". Decisão de curadoria não tomada: o passo a passo usa a tabela de 6 búzios de Herklots lida pelo Ludii e as duplas da Regra 1; a tabela de 7 búzios, as tabelas da Wikipedia e o jogo de cada um por si estão em "Para quem conduz". Quem começa (Regra 13) vai "(a verificar)". Não entrou: como uma peça entra, se mover é obrigatório e lance sem uso.

### patolli — Não joga

Status: partial · Família: corrida · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: em cruz, braços de "2×9-10" casas |
| E2 Peças | sim, mas ambíguo | `pieces`: 6 por jogador; "4–10 feijões" |
| E3 Preparação | não | — |
| E4 Ação da vez | sim | Regras (valor do lance) |
| E5 Movimento | parcial | Regras: "percorrem o circuito" |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | não | Regras: "varia entre reconstruções" |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E6, I2 | Captura, casas especiais e apostas "variam entre reconstruções"; o Ludii marca "Reconstruction, Pending". Escolher uma reconstrução e listá-la em `recon`. | curadoria |
| E1–E3, E5, I1, I3–I6 | Tamanho exato, feijões, saída, percurso e o resto. | fonte |
| — | `sens`: aposta; ritual (a verificar). | curadoria |

**Abrir primeiro (Etapa 2):** "Ludii: evidências"; Ludii.

### puluc — Joga com lacunas

Status: documented · Família: corrida, xadrez-e-guerra · "(a verificar)": 2 · "Como jogar?": sim (lote 4)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, com duas medidas | Regras 1 e 6 (10 grãos, Sapper); Regras 11 (15 grãos, Culin) |
| E2 Peças | sim | Regras 2, 3 e 6 |
| E3 Preparação | sim | Regras 6 (cada um entra pelo seu lado) |
| E4 Ação da vez | sim, com duas leituras | Regras 3 e 10 |
| E5 Movimento | sim, com duas leituras na saída | Regras 4 e 7 |
| E6 Fim e vitória | sim | Regras 9 |
| I1 Quem começa | sim (a verificar) | Regras 12 (cyningstan, a partir de Bell) |
| I2 Captura | sim | Regras 5 e 8 |
| I3 Obrigação | não | — |
| I4 Bloqueio | sim | Regras 12 (passa a vez, Bell pela Wikipedia) |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- Fonte primária aberta: Sapper (1906: 284), em alemão, no *Boas Anniversary Volume* (archive.org), que é a fonte que o Ludii cita. A tabela de lances da Regra 2 é a dele.
- E3: os jogadores sentam frente a frente e cada um entra pelo seu lado (Sapper 1906).
- E6: a partida acaba quando um jogador perde os cinco pauzinhos (Sapper 1906), ou quando um lado não tem mais peças para entrar (Culin 1907).
- I2: o captor arrasta o prisioneiro para trás até tirá-lo do caminho (Sapper 1906); a recaptura e a libertação vêm de Culin (1907: 142), a partir do relato de T. J. Collins.
- I1 e I4, de segunda mão: quem tira mais começa (cyningstan, a verificar); sem lance possível, passa a vez (Wikipedia, a partir de Bell 1979).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E4 | **Um ou dois lances por vez.** Sapper (1906): os jogadores lançam alternadamente, um lance cada. Culin (1907, relato de Collins): dois lances por vez, e só uma peça em jogo por jogador até ela ser perdida, em duplas. A Regra 3 ("dois lances por vez") segue Culin e o Ludii. Bell, pelo cyningstan: um lance, e o jogador escolhe qual peça mover. | curadoria |
| E5 | **Saída do caminho.** Sapper: sair com a conta exata salva o pauzinho; se a conta passa, ele recomeça com o resto. Culin: a peça entra de novo pela sua ponta, como se o caminho fosse contínuo (Regra 4). | curadoria |
| I3 | Mover é obrigatório quando possível? | fonte |
| I5 | Existe empate? | fonte |

**Nota:** os relatos também divergem no tamanho do caminho (10 grãos em Sapper, 15 em Culin; o `board` diz "9 a 11 casas", que inclui as 11 de Bell) e no valor dos lances (Culin conta os grãos com a marca, de 1 a 5). As duas notas acima resumem a escolha: adotar um relato para o "Como jogar?".

**Fontes descartadas:** nenhuma. O cyningstan entra só com "(a verificar)", porque diz que as suas regras se baseiam "em grande parte" em Bell, sem dizer o que mudou.

**Pendência:** Bell (1979) e Verbeeck (1998) não estão em domínio público e foram lidos só pela Wikipedia.

**Fontes novas:** Sapper 1906 e Culin 1907, ambos no archive.org.

**Reescrita (lote 4):** resumo novo, "Do que você vai precisar?", "Como jogar?" (6 passos) e "Para quem conduz". Decisão de curadoria não tomada: o "Como jogar?" segue o que a ficha já adota (dois lances por vez, de Culin e do Ludii; valores dos lances e caminho de 10 grãos, de Sapper), e "Para quem conduz" mostra as outras versões e diz que a ficha mistura os dois relatos. Isso precisa de revisão. Não entrou: quantas peças podem estar em jogo ao mesmo tempo (Culin diz uma até ser perdida), se mover é obrigatório e empate.

### quebra-cabeca-kanela — Não joga

Status: unknown · Família: adjacente · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1–E6 | não | `pieces`: "ver fonte"; a ficha não tem corpo |
| I1–I6 | não se aplica | quebra-cabeça para 1 pessoa |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6 | Como é o objeto e qual é o desafio. O checklist foi feito para jogos de dois lados e serve mal aqui. | sem saída |

**Erro na ficha:** `pieces`: "ver fonte".

**Abrir primeiro (Etapa 2):** CEV, só se a curadoria quiser descrever o objeto.

### raazuvaa — Não joga

Status: unknown · Família: xadrez-e-guerra · "(a verificar)": 2 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1–E6 | não | `board` e `pieces`: "a verificar"; Regras: "Artigo não lido nesta rodada" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | O status é `unknown` porque o artigo de Markov (2023) ainda não foi lido. | fonte |

**Abrir primeiro (Etapa 2):** BGSJ 17 (2023).

### raja-pasu-mandiri — Não joga

Status: documented · Família: semeadura · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "2 fileiras", sem número de covas |
| E2 Peças | não | `pieces`: "sementes" |
| E3–E6 | não | Regras: "Semeadura do tipo *pussa kanawa*. Detalhes na fonte." |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | As regras remetem ao Mancala World. | fonte |

**Abrir primeiro (Etapa 2):** Mancala World (e, por ele, de Voogt 2000, BGS 3).

### raposa-e-galinhas — Não joga

Status: documented · Família: caca-assimetrico · "(a verificar)": 2 · "Como jogar?": não (veredito "não joga": só resumo e "Do que você vai precisar?")

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces`: 1 raposa e 12 galinhas |
| E3 Preparação | não | Regras: o texto não diz |
| E4 Ação da vez | só pelo alquerque (a verificar) | Regras |
| E5 Movimento | só pelo alquerque (a verificar) | Regras |
| E6 Fim e vitória | parcial | Regras: as galinhas vencem encurralando a raposa; não diz como a raposa vence |
| I1 Quem começa | não | — |
| I2 Captura | só pelo alquerque (a verificar) | Regras |
| I3 Obrigação | só pelo alquerque (a verificar) | Regras |
| I4 Bloqueio | parcial | Regras (raposa encurralada) |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Resolvido na Etapa 2:** nada, de forma direta. A única fonte, Fernandes e Alberto (2009: 25–26), apresenta o jogo como "um outro modo de jogar" o alquerque dos doze que descreve logo antes, "num tabuleiro com as mesmas características". A ficha agora registra as regras desse alquerque (movimento pelas linhas em oito direções, captura por salto obrigatória, várias capturas numa jogada), marcadas "(a verificar)", porque o texto não diz que elas valem para a raposa e as galinhas.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E4, E5, I2, I3 | Aplicar ou não ao jogo as regras do alquerque descritas no mesmo artigo. | curadoria |
| E3 | Posição inicial da raposa e das galinhas. | fonte |
| E6 | Como a raposa vence. | fonte |
| I1, I5, I6 | Quem começa, empate, se há fase de colocação. | fonte |

**Pendência:** nenhuma outra fonte do jogo português foi encontrada; a busca trouxe só a raposa e os gansos e o alquerque.

**Fontes novas:** nenhuma nas `refs`.

**Reescrita (lote 5):** só o resumo novo, "Do que você vai precisar?" e "Para quem conduz", que explica o que falta (posição inicial, quem começa, como a raposa vence) e o que fica "(a verificar)" (as regras do alquerque do mesmo artigo). Segue "não joga".

### raposa-e-gansos — Joga com lacunas

Status: documented · Família: caca-assimetrico · "(a verificar)": 2 · "Como jogar?": sim (lote 4)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 5 (sem desenho: T-054) |
| E2 Peças | sim, com duas quantidades | `pieces`; Regras 6 |
| E3 Preparação | sim, com duas leituras | Regras 6 e 7 |
| E4 Ação da vez | sim | Regras 3 e 8 |
| E5 Movimento | sim | Regras 8 |
| E6 Fim e vitória | sim, com duas leituras | Regras 4 e 10 |
| I1 Quem começa | não | Regras 2 e 7: a raposa é posta "no primeiro lance" de quem a joga, sem dizer quem joga primeiro |
| I2 Captura | sim | Regras 8 e 9 (salto múltiplo, a verificar) |
| I3 Obrigação | sim (a verificar) | Regras 9 |
| I4 Bloqueio | sim | Regras 4 e 10 |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- Fonte primária aberta: Strutt (1845), no Project Gutenberg, com o texto e a gravura (fig. 107). O Ludii cita a mesma página de Strutt para a versão de 17 gansos.
- E1: a forma da cruz, com braços de 3 pontos e diagonais alternadas (Strutt 1845, fig. 107; Ludii).
- E3: a posição dos 13 gansos (Murray 1951, pelo Ludii) e dos 17 (Strutt 1845, fig. 107).
- I2: a raposa pula um ganso vizinho se o ponto de trás estiver vazio, e os gansos não capturam (Strutt 1845); salto múltiplo e captura não obrigatória, só pela Wikipedia, sem fonte (a verificar).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E2 | **13 ou 17 gansos.** Murray (1951, pelo Ludii): 13. Strutt (1845): 17. A Wikipedia diz que o jogo com 13 favorece a raposa e cita variantes com 15, 17 e 18, sem fonte. | curadoria |
| E3 | **Onde começa a raposa.** Murray (pelo Ludii): quem joga com ela a põe em qualquer ponto livre como primeiro lance. Strutt: no ponto do meio. | curadoria |
| E6 | **Quando a raposa vence.** Murray (pelo Ludii): capturando todos os gansos. Strutt: também quando eles ficam tão poucos que não conseguem mais prendê-la (a leitura da Regra 4). | curadoria |
| I1 | Quem joga primeiro. | fonte |
| I5 | Existe empate? | fonte |

**Nota:** o resumo que o Ludii faz das regras de Strutt diz que os gansos só andam para a frente ou para os lados e a raposa só na horizontal e na vertical, mas isso não está no texto de Strutt da edição de 1845 (Regra 8). Pode vir de outra edição; fica registrado como divergência, sem entrar nas regras.

**Pendência:** Murray (1951) não está em domínio público e foi lido só pelo Ludii.

**Fontes novas:** Strutt 1845, no Project Gutenberg.

**Reescrita (lote 4):** resumo novo (saiu "derivado do Alquerque", só na ficha como forma do tabuleiro), "Do que você vai precisar?", "Como jogar?" (6 passos) e "Para quem conduz". O texto segue Murray (13 gansos, raposa em qualquer ponto, vitória da raposa por captura de todos); as versões de Strutt (17 gansos, raposa no meio, vitória por falta de gansos) estão em "Para quem conduz". A Regra 9 continua "(a verificar)". Decisão de curadoria não tomada.

### rifa-pareci — Não joga

Status: partial · Família: adjacente · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não se aplica | `board`: sem tabuleiro |
| E2 Peças | parcial | `pieces`: dado em forma de pião |
| E3–E6 | não | a ficha não tem `## Regras` |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2–E6, I1–I6 | Como se lança o pião, o que vale cada face, como se ganha. | fonte |
| — | `sens`: aposta (de objetos do cotidiano). | curadoria |

**Erro na ficha:** `players`: "ver fonte".

**Abrir primeiro (Etapa 2):** Vinha.

### seega — Joga com lacunas

Status: documented · Família: captura-posicional · "(a verificar)": 5 · "Como jogar?": sim (lote 1)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, mas ambíguo | `board`: 5×5, 7×7 ou 9×9; `diagram` 5×5 |
| E2 Peças | parcial | Regras 1: 12 por jogador no 5×5; nos outros tamanhos, não dito |
| E3 Preparação | sim, mas incompleto | Regras 1: as duas primeiras peças de cada um vão em casas marcadas "(a verificar quais)" |
| E4 Ação da vez | sim | Regras 1 a 3 |
| E5 Movimento | sim | Regras 3 |
| E6 Fim e vitória | sim | Regras 7 (a verificar) |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 4 e 5 |
| I3 Obrigação | não | Regras 4 diz que o jogador continua capturando, não se é obrigado a capturar |
| I4 Bloqueio | sim | Regras 6 (Lane 1836) |
| I5 Empate | parcial | Regras 7: "quando o jogo trava", sem dizer o que é travar nem o que acontece com número igual de peças |
| I6 Fases | sim | Regras 2 |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2 | Peças em 7×7 e 9×9. | fonte |
| E3 | Quais são as casas marcadas. | fonte |
| I1 | Quem começa. Já procurada no PR #22, sem resposta. | fonte |
| I3 | Capturar é obrigatório? | fonte |
| I5 | O que é "o jogo trava" e o empate em número de peças. | fonte |

**Divergências conhecidas:** com a oficina (T-074). Centro protegido e vitória por mais peças não estão em Lane (seguem "(a verificar)").

**Abrir primeiro (Etapa 2):** "Ludii: Seega"; Wikipedia. Lane 1836 já foi lido no PR #22.

### senet — Joga com lacunas (depois da escolha)

Status: reconstructed · Família: corrida · "(a verificar)": 2 · "Como jogar?": não (veredito "não joga": só resumo e "Do que você vai precisar?")

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; Regras (numeração das casas) |
| E2 Peças | sim, um número por reconstrução | Regras 1 a 5 |
| E3 Preparação | sim, uma por reconstrução | Regras 1 a 5 |
| E4 Ação da vez | sim | Regras 1 a 5 (valores das varetas ou do dado) |
| E5 Movimento | sim | Regras 1 a 5 (casas especiais) |
| E6 Fim e vitória | sim | Regras 1 a 5 |
| I1 Quem começa | sim | Kendall e Jéquier: quem tira 1 primeiro; Bell: o número mais alto |
| I2 Captura | sim | Regras 1 a 5 |
| I3 Obrigação | sim | Kendall: voltar se não pode avançar; Bell: capturar é obrigatório (Wikipedia) |
| I4 Bloqueio | sim | Kendall: a vez acaba |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- E2 a E5, I1 a I4: as reconstruções escritas por inteiro, cada uma com a fonte: Kendall (Ludii, a partir do livro de regras de Kendall 1979), Kendall pela Wikipedia (a verificar, porque diverge do Ludii e não cita fonte), Bell (Ludii; Wikipedia, a partir de Bell 1979), Jéquier (Ludii, a partir de Jéquier 1930) e Santos, Neto e Silva.
- **Correção:** o livro de Falkener (1892) não traz uma reconstrução do senet de 3×10. O "Senat" dele é o *seega*, em tabuleiro quadrado; o 3×10 é uma variedade longa do "Caminho Sagrado", com 10 peças, sem regras próprias. A nota está na Regra 6 da ficha; Falkener continua em `recon` até a decisão.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E2, E3 | Escolher uma reconstrução e corrigir `recon`. Quadro no fim desta lista. | curadoria |
| — | `sens`: ritual. Wikipedia: pelo menos no Novo Império, o jogo representava a passagem do *ka* pelo *duat*, o mundo dos mortos; o capítulo 17 do Livro dos Mortos mostra o morto jogando contra um adversário invisível. Ludii: o tabuleiro representava a viagem pela vida após a morte. Santos, Neto e Silva: o jogo simboliza a viagem ao mundo dos mortos. `living: não`. | curadoria |
| I5 | Empate. Nenhuma reconstrução fala. | fonte |

**Quadro das reconstruções:**

| Reconstrução | Ano | Peças e começo | Lances | Ataque | Casas especiais | Vitória |
| --- | --- | --- | --- | --- | --- | --- |
| Gustave Jéquier | 1930 | 5 cada, alternadas na 1ª fileira; começa quem tira 1 (pretas) | 4 varetas: 1 a 4, e 6; 1, 4 e 6 jogam de novo | troca: a atacada volta à casa vazia mais distante do fim; 2 seguidas protegidas, 3 bloqueiam | 27 manda para trás; 26, 28, 29 e 30 seguras; só sai com todas na última fileira | tirar todas primeiro, com pontos pelas peças do outro |
| Timothy Kendall (Ludii) | 1978–1979 | 7 cada, alternadas no percurso; começa quem tira 1 (brancas) | 4 varetas: 1 a 5; 1, 4 e 5 jogam de novo | a atacada vai para a casa de onde veio a atacante; 2 seguidas protegidas | 26 com lance exato; 27: volta à 15 ou espera o 4; 28 sai com 3, 29 com 2, 30 com qualquer | tirar todas primeiro |
| Kendall (Wikipedia, sem fonte) | 1979 | 5 cada (até 10), entram pela casa 1 | 4 varetas: 1 a 5 | troca opcional; a atacada volta à primeira casa vazia; 3 seguidas bloqueiam | parada obrigatória na 26; 27 volta à 15; 28 sai com 3, 29 com 2, 30 com 1 | tirar todas primeiro |
| R. C. Bell | 1979 (*Board and Table Games*; *The Boardgame Book*) | 10 cada, alternadas nas duas primeiras fileiras; começa quem tira mais | 1 dado de 4 lados | captura: a peça sai do jogo; obrigatória (Wikipedia) | casas marcadas seguras; sai delas com lance exato | quem tirar mais peças |
| Santos, Neto e Silva (sem autor da reconstrução) | sem data | 5 cada, alternadas nas casas 1 a 10; começa quem tira 1 | 4 varetas: 1 a 4, e 6; 1, 4 e 6 jogam de novo | troca; 2 seguidas protegidas, 3 bloqueiam | 27 manda para a 15; 26, 28 e 29 seguras; só sai com a 1ª fileira vazia | tirar todas primeiro |
| Edward Falkener | 1892 | não reconstrói o senet de 3×10 (ver Correção) | — | — | — | — |

Fontes antigas: nenhuma regra antiga sobreviveu. As reconstruções partem dos tabuleiros (as casas 15, 26 a 30 marcadas), das varetas e astrágalos achados, das pinturas de tumbas e de textos religiosos; o Ludii e a Wikipedia não dizem qual fonte antiga cada autor usou para cada regra.

**Pendência:** Kendall 1978 e 1979, Bell 1979 e Jéquier 1930 não foram consultados diretamente; foram lidos pelo Ludii e pela Wikipedia. As fichas de evidência do Ludii (a `ref` "Ludii: evidências de Senet") não trazem regras.

**Fontes novas:** Wikipedia; Ludii (Kendall, Bell, Jéquier); Santos, Neto e Silva, *Jogos de Tabuleiro Tradicionais* (PDF de J. P. Neto); Falkener 1892 lido no archive.org.

**Reescrita (lote 5):** só o resumo novo, "Do que você vai precisar?" e "Para quem conduz". Sem "Como jogar?" pelo mesmo motivo do Ludus: falta escolher a reconstrução (E2, E3). **Sensibilidade não resolvida:** `sens` é "ritual"; o texto novo não fala do significado do jogo, porque nada na ficha (História ou Regras) o diz. O que a Wikipedia, o Ludii e Santos, Neto e Silva dizem sobre o *ka* e o *duat* fica para a decisão de curadoria. A nota de correção sobre Falkener (Regra 6) segue como estava.

### shatranj — Joga com lacunas

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 0 · "Como jogar?": sim (lote 6)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces`; Regras (tipos) |
| E3 Preparação | sim | Regras (posição inicial, Murray 1913: 224) |
| E4 Ação da vez | sim | Regras (jogadas alternadas) |
| E5 Movimento | sim | Regras (cada peça por extenso, Murray 1913: 224–226) |
| E6 Fim e vitória | sim | Regras (xeque-mate; rei despido por extenso) |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras (cada peça captura como anda; o *baidaq* em diagonal) |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim, com duas versões | Regras: nota de divergência sobre o afogamento |
| I5 Empate | sim | Regras (Murray 1913: 229) |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Murray 1913, lido no archive.org; o diagrama da p. 224 conferido na imagem da página):

- E3: torre, cavalo e elefante dos cantos para o meio; *shāh* e *firzān* nas casas do meio, rei diante de rei; peões na 2ª fileira. Murray (p. 230) nota que a casa do *shāh* e do *firzān* não era totalmente fixa.
- E5: os movimentos foram escritos por extenso. Para o *faras* e o *rukh*, Murray só diz "os mesmos movimentos do cavalo e da torre europeus"; o salto do cavalo vem da Wikipedia (Knight (chess)) e o da torre do Ludii.
- I2: todas as peças capturam como andam; o *baidaq* não tem passo duplo nem *en passant* e vira *firzān* sem limite de número.
- I5: empate por igualdade ou falta de material, trocas impossíveis, xeque perpétuo ou repetição (Murray 1913: 229).
- E6, por extenso: o rei despido perde, mas, se puder tomar a última peça do adversário na jogada seguinte, a partida empata; em Medina, perdia na hora.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I4 | Afogamento. **Murray (1913: 229), a partir das soluções de problemas dos manuscritos:** no mundo islâmico, o jogador afogado **perde**. O Ludii e a Wikipedia dizem o mesmo, a partir de Murray. **Al-ʿAdlī (por Murray 1913: 60–61):** na Índia, o afogado **vence**; Murray diz que essa regra reapareceu na Inglaterra de 1600 a 1800. Nenhuma fonte lida diz que o afogamento empata. | curadoria |
| I1 | Murray só diz que as jogadas se alternam. A menor vantagem dada a um adversário mais fraco era "deixá-lo fazer o primeiro lance" (Murray 1913, citando o manuscrito RAS), o que não diz quem começa numa partida comum. | fonte |

**Fontes novas:** Ludii: Shatranj (Murray 1913: 220–227); Wikipedia: Shatranj; Wikipedia: Knight (chess).

**Pendência:** Chess Variant Pages (`ref` da ficha) responde 403 ao acesso automático.

**Reescrita (lote 6):** resumo novo (saiu "intermediário entre o Chaturanga indiano e o xadrez europeu", que a História não afirma com essas palavras), "Do que você vai precisar?", "Como jogar?" (9 passos) e "Para quem conduz". Decisão de curadoria não tomada: o passo a passo segue a regra do mundo islâmico (afogado perde, Murray), e a regra indiana (Al-ʿAdlī: afogado vence) está em "Para quem conduz", pedindo que se combine. Quem começa segue sem fonte.

### shisima — Joga com lacunas

Status: documented · Família: alinhamento · "(a verificar)": 5 · "Como jogar?": sim (lote 1)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras, 2º parágrafo (Wikipedia, a verificar) |
| E2 Peças | sim | Regras; `pieces` (a verificar) |
| E3 Preparação | sim | Regras, 2º parágrafo (três cantos seguidos); o LoboGames registra outro começo, por colocação |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim | Regras (pelas linhas, até um ponto vizinho vazio) |
| E6 Fim e vitória | sim | Regras (três em linha passando pelo centro) |
| I1 Quem começa | não | — |
| I2 Captura | não se aplica | — |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | não | — |
| I5 Empate | sim | Regras (três repetições, a verificar) |
| I6 Fases | não se aplica | (só no começo por colocação do LoboGames) |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| I1 | Quem começa. Já procurada no PR #22, sem resposta. | fonte |
| I4 | E se um jogador não puder mover? | fonte |

**Abrir primeiro (Etapa 2):** "Ludii (trecho)" e as fontes que ele cita, para tirar o "(a verificar)" das regras da Wikipedia.

### shogi — Joga com lacunas

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 0 · "Como jogar?": sim (lote 4)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | Regras 1 |
| E3 Preparação | sim | Regras 7 |
| E4 Ação da vez | sim | Regras 3 |
| E5 Movimento | sim | Regras 9 e 11 |
| E6 Fim e vitória | sim | Regras 6 e 13 |
| I1 Quem começa | sim | Regras 8 (sorteio com 5 peões) |
| I2 Captura | sim | Regras 3 e 10 |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | não | — |
| I5 Empate | sim | Regras 14 e 15 |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- E3: posição inicial, pela regra de memória da Associação Japonesa de Shogi ("torre à direita, bispo à esquerda"; "na primeira fileira, de dentro para fora: ouro, prata, cavalo, lanceiro"), pela FESA (2017, art. 2.3) e pela Wikipedia.
- E5: movimento de cada peça e das peças promovidas, zona de promoção e promoção obrigatória (Associação Japonesa de Shogi; FESA 2017, art. 3).
- I1: *sente* começa; o sorteio com 5 peões (*furigoma*) está nas duas federações.
- I2: captura por ocupação, com a peça capturada voltando ao lado não promovido (FESA 2017, art. 3.1 e 3.2); lançamentos proibidos em casa sem saída.
- I5: repetição quatro vezes é empate (*sennichite*, FESA 2017, art. 5.2), com a exceção do xeque contínuo (Associação Japonesa de Shogi); impasse (*jishōgi*) com a contagem de pontos.
- Lances ilegais fazem perder na hora (Associação Japonesa de Shogi), o que não era lacuna mas fecha dúvidas comuns.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I4 | O que acontece se um jogador, sem estar em xeque, não tem lance possível. Nem a Associação Japonesa de Shogi nem a FESA tratam do caso, e a Wikipedia diz que não o aborda. | fonte |

**Nota:** o impasse tem duas formas oficiais, a profissional (24 pontos, empate) e a amadora (27 pontos ou declaração, adotada pela FESA). A Regra 15 registra as duas; não pede decisão para o "Como jogar?", porque é um caso raro entre iniciantes, como a própria Associação Japonesa de Shogi diz.

**Pendência:** a Associação Japonesa de Shogi não tem página de regras em inglês (os endereços `/english/` e `/en/` dão 404); as regras foram lidas nas páginas em japonês.

**Fontes novas:** Associação Japonesa de Shogi (noções básicas e perguntas sobre as regras), FESA (regras oficiais de 2017) e Wikipedia: Shogi.

**Reescrita (lote 4):** resumo novo, "Do que você vai precisar?", "Como jogar?" (10 passos, com o andar de cada peça em sub-itens) e "Para quem conduz". O impasse (Regra 15) ficou fora do passo a passo, só citado em "Para quem conduz". A lacuna I4 (jogador sem lance e sem xeque) segue aberta e está dita no texto. Para as peças, a ficha só diz "fichas em forma de cunha"; recortar em papel-cartão é dica de improviso.

### sittuyin — Joga com lacunas

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 4 · "Como jogar?": sim (lote 6)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; Regras (marcas das diagonais, Murray 1913: 109–110) (sem desenho: T-054) |
| E2 Peças | sim | `pieces`; Regras |
| E3 Preparação | sim | Regras (peões fixos; colocação alternada; rearranjo até o primeiro peão andar) |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim | Regras (movimentos de todas as peças, Murray 1913: 111) |
| E6 Fim e vitória | sim | Regras (xeque-mate) |
| I1 Quem começa | sim (a verificar) | Regras: o vermelho começa a colocação (Wikipedia, sem fonte) |
| I2 Captura | sim | Regras (captura do jeito que anda; peão em diagonal) |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim | Regras (é proibido afogar o adversário, Murray 1913: 113) |
| I5 Empate | não | Murray não registra empate |
| I6 Fases | sim | Regras (colocação, rearranjo, jogo normal) |

**Resolvido na Etapa 2** (Murray 1913: 109–113, lido no archive.org, com os diagramas das pp. 110 e 111 conferidos na imagem da página):

- E1: o tabuleiro comum tem as duas diagonais de canto a canto e um X em cada bloco de 2×2 dos cantos; as marcas decidem a promoção.
- E3 e I6: os peões da metade esquerda na 3ª fileira e os da direita na 4ª; colocação alternada das outras peças na própria metade; rearranjo livre, uma peça por vez, até alguém avançar o primeiro peão.
- E5: movimentos de rei, general, elefante, cavalo, carro e peão.
- I2: toda peça captura como anda; o peão, uma casa em diagonal para a frente.
- I4: não existe afogamento; é proibido deixar o adversário sem jogada.
- Promoção: em casa marcada, só sem outro general no tabuleiro, com a escolha da casa do novo general e a promoção sem mover.
- I1: o vermelho começa a colocação (Wikipedia, sem fonte citada, a verificar).

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I5 | Murray não fala de empate; a Wikipedia e o Ludii também não. | fonte |

**Notas (não são lacunas do checklist):**

- O Ludii diz que só valem as casas marcadas do lado do adversário; Murray fala só em "casa marcada". A Wikipedia acrescenta, sem fonte, que o peão que passa da casa de promoção não pode mais ser promovido (a verificar).
- O Ludii trata como regra pôr o rei na segunda casa da direita da 2ª fileira com um elefante ao lado; Murray diz que é o costume ("as a rule"). A ficha registra as duas leituras.

**Fontes novas:** Ludii: Sittuyin (que cita Murray 1913: 109–113, Cox 1803 e Symes 1800); Wikipedia: Sittuyin (que cita Pritchard 1994 e Maung Maung Aye 1971).

**Pendências:** Chess Variant Pages (`ref` da ficha) responde 403 ao acesso automático, e a URL da ficha (`chessvariants.org/link/ludiiportal`) não parece ser a página do Sittuyin; a página do jogo é `chessvariants.org/oriental.dir/burmese.html`, também com 403. A cópia no web.archive.org não abre deste ambiente.

**Reescrita (lote 6):** resumo novo, "Do que você vai precisar?", "Como jogar?" (8 passos) e "Para quem conduz". Quem começa a colocação (vermelho) segue "(a verificar)", como nas Regras. As duas leituras da posição do rei e das casas de promoção (Murray, Ludii, Wikipedia) estão em "Para quem conduz". Não entrou a regra de que a Wikipedia diz que o peão que passa da casa de promoção não pode mais ser promovido (sem fonte). Empate segue sem fonte.

### tab — Não joga

Status: unknown · Família: corrida · "(a verificar)": 3 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1–E6 | não | `board`: "ver Depaulis 2024"; Regras: "Não abertas nesta rodada" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | O status é `unknown` porque o artigo de Depaulis (2024) ainda não foi aberto. É uma "família de jogos" (`summary`): a curadoria vai precisar escolher uma forma. | fonte |

**Erro na ficha:** `board`: "ver Depaulis 2024".

**Abrir primeiro (Etapa 2):** BGSJ 18 (2024), Depaulis.

### tablut — Joga com lacunas

Status: documented · Família: caca-assimetrico · "(a verificar)": 0 · "Como jogar?": sim (lote 2)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`: 9×9 com castelo central (sem desenho: T-054) |
| E2 Peças | sim | `pieces` |
| E3 Preparação | sim | Regras 1 e 5 |
| E4 Ação da vez | sim | Regras 2 e 6 |
| E5 Movimento | sim | Regras 2 |
| E6 Fim e vitória | sim, com duas leituras | Regras 4 e 8 |
| I1 Quem começa | não | Regras 6 só diz que se alternam |
| I2 Captura | sim | Regras 3 e 7 |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2:**

- E3: cada grupo de atacantes tem três peças nas três casas do meio da borda e a quarta logo à frente da do meio (Ludii, a partir de Linnaeus 1732, cujo texto latino o Ludii transcreve).
- O castelo vazio é hostil (Ludii; Wikipedia), o que não era lacuna mas muda as capturas.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E6 | Captura do rei. **Ludii (a partir do latim de Linnaeus) e Wikipedia (a partir das traduções de Ashton 2007, Cartier 2011 e Salmi 2013) concordam:** no castelo, cercado pelos quatro lados; vizinho ao castelo, pelos três lados que sobram; em qualquer outra casa, entre duas peças. A exigência de quatro atacantes em todo lugar vem da tradução de 1811, que a Wikipedia chama de erro central. A Regra 4 da ficha ("quatro lados, ou três e o castelo") fica como estava, com a nota na Regra 8; o texto didático pede que se combine antes. | curadoria |
| I1, I3, I4, I5 | Quem começa, obrigação de capturar, sem lances, empate. Linnaeus só diz que os lados se alternam. | fonte |

**Fontes novas:** nenhuma nas `refs` (Ludii e Wikipedia já estavam lá).

### taikyoku-shogi — Não joga

Status: partial · Família: xadrez-e-guerra · "(a verificar)": 2 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: "ver fonte (a verificar 36×36)" |
| E2 Peças | parcial | `pieces`: 804 no total; "mais de 200 tipos" (a verificar) |
| E3–E6 | não | Regras: "Parciais. Princípio igual ao Shogi" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | Mais de 200 tipos de peça. Antes de pesquisar, decidir se vale ter "Como jogar?" para este jogo. | curadoria |

**Erro na ficha:** `board`: "ver fonte".

**Abrir primeiro (Etapa 2):** só se a curadoria decidir seguir: Ludii; Chess Variant Pages.

### taptana — Não joga

Status: partial · Família: caca-assimetrico · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: alquerque 5×5 com triângulo acrescentado, sem a forma do triângulo |
| E2 Peças | não | `pieces`: "1 leão/puma contra várias peças (inferido)" |
| E3–E6 | não | Regras: "Não há descrição antiga das regras" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | Sem registro antigo de regras; as da ficha são inferidas do Komikan. | sem saída |
| — | O *el león y las ovejas*, citado como forma viva, poderia ter regras registradas, mas seria outro jogo: decisão de curadoria. | curadoria |

**Abrir primeiro (Etapa 2):** só para o tabuleiro: Depaulis 1998; Tacconi 2026.

### tchadji — Joga com lacunas

Status: documented · Família: semeadura · "(a verificar)": 2 · "Como jogar?": sim (lote 6)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras; `diagram` 4×8 (também 4×12) |
| E2 Peças | sim | `pieces`; Regras (2 por cova) |
| E3 Preparação | sim | Regras |
| E4 Ação da vez | sim | Regras 1 (cova com pelo menos 2 sementes) |
| E5 Movimento | sim | Regras 1–3 (anti-horário, só do seu lado, várias voltas) |
| E6 Fim e vitória | sim | Regras 6 |
| I1 Quem começa | não | — |
| I2 Captura | sim, mas ambíguo | Regras 4: a fonte não diz qual é a terceira cova capturada |
| I3 Obrigação | não | — |
| I4 Bloqueio | parcial | Regras 5 (*ompwechá*: só sementes soltas, que andam para covas vazias); não diz o que acontece sem nenhuma jogada |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Mancala World, a partir de Ismael 2001 e 2006). O Mancala World bloqueia a página no navegador, mas a API do MediaWiki do site (`mancala.fandom.com/api.php?action=parse&page=...&prop=wikitext`) devolve o texto:

- E4, E5: semeadura de uma cova com pelo menos 2 sementes, no sentido anti-horário, só do seu lado, continuando enquanto a última semente cai em cova ocupada.
- I2: captura (*odjá*) da cova em frente, da cova de fora atrás dela e de mais uma cova; a variante *m'palé* (Climent Tondo) captura só as duas.
- E6: vence quem capturar todas as sementes do adversário.
- *Ompwechá*: com só sementes soltas, elas andam apenas para covas vazias.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I2 | Qual é a terceira cova capturada ("o conteúdo de mais uma cova do adversário"). | fonte |
| I1, I3, I4, I5 | Quem começa, obrigação, jogador sem jogada, empate. | fonte |
| — | `sens`: "restrito (sobretudo homens)". O Mancala World diz: "o jogo é jogado sobretudo por homens"; "é considerado um esporte, e há torneios com árbitros"; e liga para uma foto de "crianças jogando Tchadji" na Ilha de Moçambique. Nenhuma fonte lida fala de proibição para mulheres nem de ritual. | curadoria |

**Fontes novas:** nenhuma nas `refs` (o Mancala World já estava lá).

**Pendência:** a tese de Ismael (*An ethnomathematical study of Tchadji*, 2001) está no repositório WIReDSpace da Universidade do Witwatersrand (`wiredspace.wits.ac.za/items/6fce4d42-cac3-4ec4-b414-098e1174d181`), em PDF digitalizado de 37 MB; foi baixada, mas não há neste ambiente ferramenta para ler PDF, e por isso não entrou nas `refs`. É a fonte primária que pode fechar as lacunas e a questão do `sens`.

**Reescrita (lote 6):** resumo novo, "Do que você vai precisar?", "Como jogar?" (7 passos) e "Para quem conduz". A terceira cova capturada (I2) segue "(a verificar)" no passo 5. **Sensibilidade não resolvida:** `sens` é "restrito (sobretudo homens)"; "Para quem conduz" diz só que o registro afirma que é jogado sobretudo por homens. O que o Mancala World diz sobre torneios e crianças jogando não entrou, porque não está na ficha.

### tchouba — Não joga

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "4 fileiras, até 4×40" |
| E2 Peças | não | `pieces`: "até 320 sementes" |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | Regras: "dois ciclos, semeadura em várias voltas" |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | As regras são uma classificação, não uma descrição. | fonte |

**Abrir primeiro (Etapa 2):** "Mancala World: Tchouba"; "Mancala World: Chuba".

### toguz-kumalak — Joga

Status: documented · Família: semeadura · "(a verificar)": 4 · "Como jogar?": sim (lote 2)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`: 2×9 + 2 *kazan* (sem desenho: T-054) |
| E2 Peças | sim | `pieces`: 162 bolas |
| E3 Preparação | sim | Regras 1 |
| E4 Ação da vez | sim | Regras 2 |
| E5 Movimento | sim | Regras 2 |
| E6 Fim e vitória | sim | Regras 5 |
| I1 Quem começa | sim | Regras 6 (o lado branco, a verificar) |
| I2 Captura | sim | Regras 3 e 4 |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim | Regras 7 (a verificar) |
| I5 Empate | sim | Regras 5 (81 a 81) |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Wikipedia, sem fonte para essas regras, por isso "(a verificar)"):

- I1: os lados se chamam branco e preto, e o branco começa.
- I4: no fim, as bolas que restam ficam para o jogador de cujo lado estão. O Ludii dá a mesma regra e cita Pantusov (1906), mas o trecho de Pantusov que ele transcreve (em russo) não fala do fim do jogo.

**Segue em aberto:** nada do checklist. As duas regras novas ainda pedem uma fonte primária.

**Fontes novas:** Wikipedia: Toguz korgool. O Mancala World (`ref` da ficha) bloqueia o acesso automático: pendência.

### trilha — Joga com lacunas

Status: documented · Família: alinhamento · "(a verificar)": 2 · "Como jogar?": sim (lote 2)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1; `diagram` |
| E2 Peças | sim | Regras 1 |
| E3 Preparação | sim | Regras 2 |
| E4 Ação da vez | sim | Regras 2 e 3 |
| E5 Movimento | sim | Regras 3 e 4 |
| E6 Fim e vitória | sim | Regras 5 |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 2 e 6 (a verificar) |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim | Regras 5 |
| I5 Empate | não | — |
| I6 Fases | sim | Regras 2 e 3 |

**Resolvido na Etapa 2:**

- I2: com todas as peças do adversário em moinho, qualquer uma pode sair (Wikipedia e Ludicum, as duas sem fonte, a verificar).
- **Erro corrigido:** o "Blog (regras)" saiu das `refs` como fonte fraca (copia as regras de um site de jogos online). Fernandes e Alberto (2009, Açafa) cobrem as Regras 1, 2, 3 e 5, que agora citam a fonte. O voo (Regra 4) não está na Açafa: vem da Wikipedia, que registra que umas fontes o dão como regra e outras como variação, e da Ludicum, que o dá como variação.

**Segue em aberto:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| I1 | Quem começa. A Wikipedia só diz que os jogadores decidem. | fonte |
| I5 | Existe empate? O empate do blog (10 jogadas com três peças cada) foi descartado com ele. | fonte |

**Pendência:** a Ludopedia (`ref` da ficha) recusa o acesso automático (403).

**Fontes descartadas:** o blog do Prof. Deivid Lottin.

**Fontes novas:** Wikipedia: Nine men's morris; Ludicum: Nine Men Morris.

### tsuka — Não joga

Status: partial · Família: corrida · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "ver Tacconi 2026" |
| E2 Peças | parcial | `pieces`: varetas de arremesso, sem quantidade |
| E3–E6 | não | Regras: "Não abertas nesta rodada" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A tese de Tacconi (2026) traz o diagrama do tabuleiro; as regras ainda não foram abertas. | fonte |
| — | `sens`: "restrito (masculino)". | curadoria |

**Erro na ficha:** `board`: "ver Tacconi 2026".

**Abrir primeiro (Etapa 2):** Tacconi 2026; "Juegos mocovíes (Etnobiológica)".

### vela — Joga com lacunas

Status: partial · Família: captura-posicional, damas · "(a verificar)": 3 · "Como jogar?": sim (lote 4)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram`; Regras 2 |
| E2 Peças | sim | `pieces`; Regras 2 |
| E3 Preparação | sim | Regras 2 |
| E4 Ação da vez | sim, mas sem dizer quem faz cada papel | Regras 3 e 4 |
| E5 Movimento | sim | Regras 3 |
| E6 Fim e vitória | sim | Regras 5 e 6 |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 4 e 5 |
| I3 Obrigação | sim, na segunda fase | Regras 5 |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | sim | Regras 4 e 5 (a primeira fase acaba quando um jogador fica com 5 peças) |

**Resolvido na Etapa 2:**

- Regras da *vela* no Ludii, a partir de Montgomery (1896: 155): quando se joga, tabuleiro, peças, posição inicial, as duas fases e a vitória.
- `board` e `pieces` deixaram de remeter ao Fanorona ("como o fanorona") e trazem os números do Ludii.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| E4 | **Quem faz cada papel.** O Ludii diz que um jogador não captura até ficar com 5 peças e o outro captura uma peça por lance, mas não diz qual é o vencedor e qual é o perdedor da partida anterior. A descrição geral que já estava na ficha (a verificar) diz que o vencedor anterior captura uma por lance "até ter perdido um certo número" de peças, o que não bate inteiro com o Ludii. Só Montgomery (1896) resolve. | fonte |
| I1, I4, I5 | Quem começa, sem lances, empate. | fonte |
| — | A *vela* é uma ficha própria ou uma seção do Fanorona? O Ludii a trata como jogo próprio, a partir da mesma página de Montgomery que descreve o Fanorona. | curadoria |

**Pendência:** Montgomery (1896), no *Antananarivo Annual*, não foi achado: os volumes do archive.org abertos (`antananarvioann03unkngoog`, de 1896, `antananarivoann00unkngoog` e `antananarvioann04unkngoog`) não têm o artigo, e o HathiTrust recusa o acesso automático (403).

**Fontes novas:** Ludii: Vela.

**Reescrita (lote 4):** resumo novo (saiu "Forma de revanche… quem venceu joga com restrições", que a própria ficha marca "a verificar"), "Do que você vai precisar?", "Como jogar?" (6 passos) e "Para quem conduz". O papel de cada jogador na primeira fase (E4) fica marcado "(a verificar)" no passo 4. Quem começa, jogador sem lance e empate seguem em aberto e estão ditos no texto. A questão "ficha própria ou seção do Fanorona" não foi tocada.

### vinte-casas — Não joga

Status: reconstructed · Família: corrida · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: "20 casas", sem a disposição |
| E2 Peças | parcial | `pieces`: "peças cônicas e em carretel", sem quantidade |
| E3–E6 | não | Regras: "Detalhes em Jogo real de Ur" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A ficha remete ao Jogo real de Ur. | fonte |
| — | Vale ter regras próprias ou basta apontar para o Ur? | curadoria |

**Abrir primeiro (Etapa 2):** "Ludii: Royal Game of Ur"; Met 16.10.475a (para a disposição das casas).

### warri-caribe — Joga com lacunas

Status: documented · Família: semeadura · "(a verificar)": 2 · "Como jogar?": sim (lote 6)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram`; Regras 1 |
| E2 Peças | sim | `pieces`; Regras 2 |
| E3 Preparação | sim | Regras 2 (quatro por casa) |
| E4 Ação da vez | sim | Regras 4 |
| E5 Movimento | sim | Regras 4 e 5 (anti-horário; mais de 11 sementes pula a casa de saída) |
| E6 Fim e vitória | sim | Regras 8 e 9 (25 sementes) |
| I1 Quem começa | não | Regras 3: "depois que se decide quem abre", sem dizer como |
| I2 Captura | sim | Regras 6 (2 ou 3, em sequência; a contagem das casas anteriores a verificar) |
| I3 Obrigação | não | — |
| I4 Bloqueio | sim, com duas versões | Regras 7 e 10 |
| I5 Empate | sim | Regras 9 (24 a 24) |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (regras de Marie Kinsella, publicadas em *The Citizen* e reproduzidas pelo BajanThings, `ref` da ficha; Mancala World pela API):

- A remissão "captura como no oware, com diferenças locais a documentar" deu lugar às regras escritas na ficha: semeadura, volta com mais de 11 sementes, captura em sequência, vitória com 25, empate com 24, fim combinado com 3 ou 4 sementes circulando.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I4 | Adversário sem sementes. **Kinsella (pelo BajanThings):** se, na vez de um jogador, o lado dele está vazio, o outro perde para ele todas as sementes que restam. **Mancala World (warri de Antígua):** quem esvazia o lado do adversário com uma captura tem de jogar de novo para lhe dar sementes, se puder. As duas regras podem conviver, mas nenhuma fonte diz isso. | curadoria |
| I1, I3 | Como se decide quem começa; se a captura é obrigatória. | fonte |
| — | `sens`: "restrito (sobretudo homens)". **BajanThings (Peter Burton, 2022):** "no Caribe, o warri é jogado sobretudo por homens"; em Barbados, "já foi jogado com muito gosto por pessoas de todas as idades"; era popular nas plantações e entre estivadores e pescadores; foi reprimido pelos senhores de engenho e está "perto da extinção" em Barbados. Cita Stoffle et al.: quando os homens jogavam warri, "afirmavam coletivamente suas culturas africanas e se organizavam contra o sistema da plantação e o colonial". **Mancala World:** há torneios em Antígua, entre eles um "Campeonato Internacional Feminino de Warri" e um torneio de taxistas; o jogo é o jogo nacional de mancala de Antígua e Barbuda. Nenhuma fonte lida fala de proibição para mulheres nem de ritual. | curadoria |

**Fontes novas:** nenhuma URL nova; o BajanThings e o Mancala World já estavam nas `refs`. Kinsella (*The Citizen*) entra pelo BajanThings.

**Pendências:** Stoffle et al. no Academia (403); Barbados Advocate (sem resposta); o Mancala World cita Herskovits 1932 (*Man* 42), não lido. A página da Universidade de Waterloo que o Mancala World cita hoje redireciona para a página inicial da faculdade.

**Reescrita (lote 6):** resumo novo, "Do que você vai precisar?", "Como jogar?" (7 passos) e "Para quem conduz". Decisão de curadoria não tomada: o passo 5 segue Kinsella (pelo BajanThings), e a regra do Mancala World para o adversário sem sementes está em "Para quem conduz". O passo 5 usa as palavras da fonte ("perde para ele todas as sementes que restam"), que são ambíguas; vale conferir com a fonte. **Sensibilidade:** `sens` é "restrito (sobretudo homens)"; "Para quem conduz" só registra isso. O que o BajanThings diz sobre repressão e resistência nas plantações não está na ficha e não entrou.

### weiqi — Joga

Status: documented · Família: territorio · "(a verificar)": 1 · "Como jogar?": sim (lote 2)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces` |
| E3 Preparação | sim | Regras 1 |
| E4 Ação da vez | sim | Regras 1 |
| E5 Movimento | não se aplica | as pedras não andam |
| E6 Fim e vitória | sim | Regras 5, 7 e 8 |
| I1 Quem começa | sim | Regras 1 e 9 |
| I2 Captura | sim | Regras 2, 3 e 6 |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim | Regras 5 (passar) |
| I5 Empate | sim | Regras 8 |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (regras de 2002 da Associação Chinesa de Weiqi, versão oficial em inglês):

- E6: pedras mortas combinadas e retiradas; cada um conta pedras vivas mais pontos vazios cercados por elas; pontos entre os dois lados divididos ao meio.
- I2: ponto proibido (sem suicídio, a não ser que capture).
- I5: sem compensação, 180,5 é empate; nas competições, as pretas descontam 3¾ pedras.
- E, a mais: como se decide quem fica com as pretas (par ou ímpar).

**Segue em aberto:** nada do checklist.

**Fontes novas:** Associação Chinesa de Weiqi, regras de 2002 (PDF publicado por Robert Jasiek). As regras de 1988, na versão de James Davies publicada pela CMU, dizem o mesmo sobre o ponto proibido e a contagem, com compensação de 2¾ pedras.

### xadrez — Joga

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 1 · "Como jogar?": sim (lote 3)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram`; Regras 6 |
| E2 Peças | sim | Regras 5 |
| E3 Preparação | sim | Regras 6 |
| E4 Ação da vez | sim | Regras 1, 2, 7 e 8 |
| E5 Movimento | sim | Regras 1 a 3, 10 e 11 |
| E6 Fim e vitória | sim | Regras 4 e 9 |
| I1 Quem começa | sim | Regras 7 (as brancas) |
| I2 Captura | sim | Regras 8 e 10 |
| I3 Obrigação | sim | Regras 9 (sair do xeque) |
| I4 Bloqueio | sim | Regras 4 e 12 (afogamento empata) |
| I5 Empate | sim | Regras 4 e 12 |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Leis do Xadrez da FIDE, em vigor desde 2023):

- E2: composição das 16 peças (art. 2.2).
- E3: casa branca à direita e posição inicial (art. 2.1; o art. 2.3 dá a posição num diagrama, descrito em palavras pela Wikipedia).
- E5: condições do roque (art. 3.8.2), *en passant* e promoção (art. 3.7.3).
- I1: as brancas começam (art. 1.2).
- I2: como todas as peças capturam (art. 3.1) e que só o cavalo salta (art. 3.5; Wikipedia).
- Acrescentados o xeque e o xeque-mate (arts. 1.4, 3.9 e 5.1.1) e os empates em detalhe (arts. 5.2 e 9), que não eram lacuna mas faltavam para jogar.

**Segue em aberto:** nada do checklist.

**Erro corrigido:** as `refs` agora cobrem as regras modernas (FIDE e Wikipedia).

**Fontes novas:** FIDE, *Laws of Chess* (2023); Wikipedia, *Rules of chess*.

**Reescrita (lote 3):** resumo novo (saiu "descendente do Shatranj… principal ramo ocidental da família que começa no Chaturanga" e ficou o que a História diz sobre o shatranj e o *Libro de los juegos*), "Do que você vai precisar?", "Como jogar?" (9 passos, com o andar de cada peça em sub-itens) e "Para quem conduz". **Lacuna achada na escrita:** a ficha só dizia que o cavalo anda "em L". Entrou a Regra 13, com a Wikipedia (*Rules of chess*): duas casas numa direção e uma na outra, sem ser bloqueado.

### xiangqi — Joga

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 1 · "Como jogar?": sim (lote 4)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 9 (palácio e rio; sem desenho: T-054) |
| E2 Peças | sim | Regras 10 |
| E3 Preparação | sim | Regras 11 |
| E4 Ação da vez | sim | Regras 12 e 13 |
| E5 Movimento | sim | Regras 13 |
| E6 Fim e vitória | sim | Regras 15 |
| I1 Quem começa | sim | Regras 12 (o vermelho) |
| I2 Captura | sim | Regras 14 |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim | Regras 15 (perde) |
| I5 Empate | sim | Regras 16 |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2,** todo com as regras mundiais da Federação Mundial de Xiangqi (2018, em inglês), lidas como imagem, porque o PDF não tem texto:

- E1: rio entre as quintas linhas horizontais; palácio entre a primeira e a terceira linhas horizontais e a quarta e a sexta verticais (art. 1.1).
- E2 e E3: composição e posição inicial, descrita a partir da figura A (art. 1.2 e 1.4).
- E5: movimento de todas as peças sem depender da torre do xadrez (art. 2.1 a 2.7).
- I1: o vermelho começa (art. 4.1).
- I2: captura por ocupação, e a do canhão com a "base" (art. 2.6 e 2.8).
- I5: empate por acordo, por impossibilidade de vencer, por repetição quatro vezes e por 50 lances sem captura (art. 3.2).

**Nota:** o art. 3.2.D fala em "50 lances dos dois jogadores" sem dizer se são 50 de cada um; a Regra 16 registra isso.

**Fontes novas:** Federação Mundial de Xiangqi, regras mundiais de 2018.

**Reescrita (lote 4):** resumo novo (saiu "Membro da família do Chaturanga" da História, que continua lá), "Do que você vai precisar?", "Como jogar?" (8 passos) e "Para quem conduz". A dúvida dos 50 lances (Regra 16) aparece em "Para quem conduz". O texto segue o art. 2.1 a 2.7, 2.6, 2.8 e 3.2 das regras mundiais, como as Regras.

### yole — Não joga

Status: partial · Família: corrida, captura-posicional · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: círculo de ~50 cm com linha central e seis paralelas; não diz onde ficam as peças |
| E2 Peças | não | `pieces`: "ver fonte" |
| E3–E6 | não | Regras: "Parciais; ler o artigo completo" |
| I1–I6 | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E6, I1–I6 | A ficha manda ler o artigo completo. | fonte |
| — | `sens`: "restrito (feminino)". | curadoria |

**Erro na ficha:** `pieces`: "ver fonte".

**Abrir primeiro (Etapa 2):** "Juegos mocovíes".

### yote — Joga com lacunas

Status: documented · Família: captura-posicional, damas · "(a verificar)": 1 · "Como jogar?": sim (lote 1)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, com duas versões | `board`: 5×5 (Béart 1955) ou 5×6; `diagram` 5×5; as regras de Grunfeld (Regras 6) são para 5×6 |
| E2 Peças | sim | `pieces` |
| E3 Preparação | sim | Regras 1 |
| E4 Ação da vez | sim | Regras 1 |
| E5 Movimento | sim | Regras 2 |
| E6 Fim e vitória | sim, mas ambíguo | Regras 5: "capturar todas" inclui as da reserva? |
| I1 Quem começa | parcial | Regras 6: as brancas, só nas regras de Grunfeld para 5×6 |
| I2 Captura | sim, mas incompleto | Regras 3 e 4; não diz se vale captura múltipla nem se a peça "à escolha" pode sair da reserva |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | parcial | Regras 6: só para 5×6 |
| I6 Fases | não se aplica | colocar e mover se misturam (Regras 1) |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1 | O desenho é 5×5 e as regras de quem começa e de empate são do 5×6: deixar claro qual tabuleiro o "Como jogar?" ensina. | curadoria |
| E6 | As peças da reserva contam? | fonte |
| I1 | Quem começa no 5×5. | fonte |
| I2 | Captura múltipla; retirada da reserva. | fonte |
| I3 | Capturar é obrigatório? | fonte |
| I4 | E se um jogador não puder jogar? | fonte |
| I5 | Empate no 5×5. | fonte |

**Abrir primeiro (Etapa 2):** "Ludii: evidência (Béart 1955)"; mindsports.nl (duas versões); boardandpieces (J. P. Neto).

### yut-nori — Joga com lacunas

Status: documented · Família: corrida · "(a verificar)": 2 · "Como jogar?": sim (lote 3)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 6 (Culin 1895: 66) (sem desenho: T-055) |
| E2 Peças | sim | `pieces`; Regras 12 (1 ou 4 por jogador, como combinarem, em dois) |
| E3 Preparação | sim | Regras 9 (as peças entram ao lado da marca do alto) |
| E4 Ação da vez | sim | Regras 1, 2, 7 e 11 |
| E5 Movimento | sim | Regras 9 e 10 |
| E6 Fim e vitória | sim | Regras 5, 9 e 12 |
| I1 Quem começa | sim | Regras 8 |
| I2 Captura | sim | Regras 3 |
| I3 Obrigação | sim | Regras 10 e 11 (empilhar e o atalho de baixo são opcionais) |
| I4 Bloqueio | não se aplica | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Resolvido na Etapa 2** (Culin 1895, *Korean Games*, pp. 66-69, no archive.org; o Ludii resume o mesmo trecho):

- E1: 29 marcas, 20 em círculo e uma cruz de 9 dentro; as dos quatro quartos e a do centro são maiores; a do alto é a saída.
- E3 e E5: entra-se ao lado da marca do alto e anda-se no sentido anti-horário; para sair, um a mais do que basta; os atalhos pelas marcas grandes.
- I1: quem tira o lance mais alto começa.
- I3: empilhar é opcional, e o atalho pela marca de baixo também ("pode").
- Acrescentados: vareta em pé vale lado preto; dividir lances entre peças; número de peças por número de jogadores, e as duplas em quatro.

**Segue em aberto:**

| Item | O que as fontes dizem | Tipo |
| --- | --- | --- |
| I5 | Empate. Culin não diz. | fonte |
| — | Sensibilidade: Culin conta que o *nyout* era jogado a dinheiro nas cidades, e que pais e professores tiravam os blocos das crianças. O `sens` está "desconhecido". | — |

**Fontes novas:** Culin 1895, *Korean Games* (archive.org); Ludii, *Nyout*.

**Reescrita (lote 3):** resumo novo, "Do que você vai precisar?", "Como jogar?" (9 passos) e "Para quem conduz". **Saiu do resumo:** "jogado sobretudo no Ano Novo lunar", que nenhum trecho da ficha (Regras ou História) sustenta. Se a curadoria achar fonte, volta. O texto diz "lado plano" e "lado preto" para as duas faces da vareta, ligando as Regras 1 e 7; a ficha não descreve a vareta além disso. Não há passo sobre o que acontece com a peça capturada, sobre empate no lance que decide quem começa nem sobre empate da partida: a fonte não diz, e "Para quem conduz" pede que se combine.

