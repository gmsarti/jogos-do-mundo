# Relatório de jogabilidade

Auditoria do T-068, **Etapa 1**: o checklist da skill `escrever-jogo` (`.claude/skills/escrever-jogo/references/checklist-jogabilidade.md`) aplicado às 94 fichas de `content/games/`, em 05/11/2026.

**Etapa 2** (pesquisa de lacunas, lote a lote): feita no lote 2 (alquerque, ayo, bagh-chal, konane, mu-torere, oware, tablut, toguz-kumalak, trilha, weiqi), em 05/11/2026. Os blocos desses jogos e as linhas deles na tabela-resumo mostram o estado depois da pesquisa e da reescrita, com o que foi resolvido e o que segue em aberto. Os outros blocos continuam como na Etapa 1.

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

- **94 jogos:** nenhum **joga**, 17 **jogam com lacunas** e 77 **não jogam** (Etapa 1). Depois da Etapa 2 do lote 2: **2 jogam** (Toguz kumalak e Weiqi), 15 jogam com lacunas e 77 não jogam.
- **787 lacunas** no total, das quais **685 são do tipo "fonte"** (Etapa 1). O lote 2 passou de 38 lacunas (32 de fonte) para 19 (13 de fonte): hoje são 768 no catálogo, 666 de fonte.
- Dos 17 que jogavam com lacunas na Etapa 1, 7 são do lote 1 (o Fanorona saiu desse grupo, ver o bloco dele) e 10 são o lote 2, agora reescrito.
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
| ashta-kashte | documented | Não joga | 10 | 10 | 1 | não |
| chaupar | documented | Não joga | 10 | 10 | 1 | não |
| domino | documented | Não joga | 10 | 10 | 1 | não |
| domino-chines | partial | Não joga | 10 | 10 | 2 | não |
| duodecim-scripta | reconstructed | Não joga | 10 | 0 | 3 | não |
| igisoro | partial | Não joga | 10 | 10 | 1 | não |
| kechukawe | partial | Não joga | 10 | 10 | 0 | não |
| nard | partial | Não joga | 10 | 9 | 1 | não |
| ouk-chatrang | partial | Não joga | 10 | 10 | 0 | não |
| ouril | partial | Não joga | 10 | 10 | 1 | não |
| adji-kui | partial | Não joga | 9 | 9 | 1 | não |
| bao-ki-arabu | documented | Não joga | 9 | 9 | 0 | não |
| chaturanga | reconstructed | Não joga | 9 | 8 | 0 | não |
| domino-doble-nueve | partial | Não joga | 9 | 9 | 1 | não |
| omweso | documented | Não joga | 9 | 9 | 1 | não |
| owela-benguela | documented | Não joga | 9 | 8 | 0 | não |
| raposa-e-galinhas | documented | Não joga | 9 | 9 | 0 | não |
| tchadji | documented | Não joga | 9 | 9 | 0 | não |
| warri-caribe | documented | Não joga | 9 | 9 | 0 | não |
| bao-la-kiswahili | documented | Não joga | 8 | 8 | 1 | não |
| brandubh | reconstructed | Não joga | 8 | 6 | 1 | não |
| janggi | documented | Não joga | 8 | 8 | 1 | não |
| ludus-latrunculorum | reconstructed | Não joga | 8 | 6 | 0 | não |
| muvalavala | documented | Não joga | 8 | 8 | 0 | não |
| pachisi | documented | Não joga | 8 | 7 | 2 | não |
| raposa-e-gansos | documented | Não joga | 8 | 7 | 0 | não |
| senet | reconstructed | Não joga | 8 | 6 | 1 | não |
| vela | partial | Não joga | 8 | 8 | 1 | não |
| hnefatafl | reconstructed | Não joga | 7 | 5 | 1 | não |
| komikan | documented | Não joga | 7 | 6 | 0 | não |
| makruk | documented | Não joga | 7 | 7 | 1 | não |
| sittuyin | documented | Não joga | 7 | 7 | 0 | não |
| xiangqi | documented | Não joga | 7 | 7 | 1 | não |
| adugo | documented | Não joga | 6 | 6 | 0 | não |
| jogo-real-de-ur | reconstructed | Não joga | 6 | 6 | 0 | não |
| puluc | documented | Não joga | 6 | 6 | 1 | não |
| quebra-cabeca-kanela | unknown | Não joga | 6 | 0 | 0 | não |
| shatranj | documented | Não joga | 6 | 5 | 0 | não |
| shogi | documented | Não joga | 6 | 6 | 0 | não |
| yut-nori | documented | Não joga | 6 | 6 | 2 | não |
| mahjong | documented | Não joga | 5 | 5 | 3 | não |
| xadrez | documented | Não joga | 5 | 5 | 1 | não |
| damas-brasileiras | documented | Não joga | 4 | 4 | 0 | não |
| e-sugoroku | documented | Não joga | 3 | 2 | 0 | não |
| fanorona | documented | Não joga | 2 | 2 | 5 | sim |
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
| 3 | damas-brasileiras, xadrez, adugo, komikan, jogo-real-de-ur, yut-nori, mahjong, bao-la-kiswahili, muvalavala | damas, xadrez, caça, corrida, peças, semeadura | 55 (54) | Não jogam, mas com poucas lacunas, quase todas de fonte. Adugo e Komikan dividem a pendência do triângulo |
| 4 | shogi, xiangqi, puluc, e-sugoroku, hnefatafl, raposa-e-gansos, vela, pachisi, omweso | xadrez, corrida, caça, captura posicional, semeadura | 62 (57) | Poucas lacunas. A Vela vai com a pendência do Fanorona (posição inicial e revanche), que tem as mesmas fontes |
| 5 | makruk, janggi, brandubh, ludus-latrunculorum, senet, raposa-e-galinhas, owela-benguela, domino-doble-nueve, adji-kui | xadrez, caça, captura posicional, corrida, semeadura, peças | 75 (68) | Três reconstruções (Brandubh, Ludus, Senet) pedem decisão de curadoria logo no começo do lote |
| 6 | sittuyin, shatranj, chaupar, nard, bao-ki-arabu, tchadji, warri-caribe, domino, ashta-kashte | xadrez, corrida, semeadura, peças | 80 (78) | Regras parciais. Sittuyin e Shatranj dividem fontes (Murray 1913, Chess Variant Pages) |
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

Status: partial · Família: semeadura · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board` 2×6; `diagram` |
| E2 Peças | sim | `pieces`: 48 sementes |
| E3 Preparação | sim | Regras (4 por cova; cada um controla uma fileira) |
| E4 Ação da vez | não | `summary` fala em "semeadura em várias voltas", sem dizer de que cova nem como |
| E5 Movimento | não | sentido da semeadura não dito |
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
| E4–E6, I1–I6 | As regras param na preparação. | fonte |

**Abrir primeiro (Etapa 2):** Mancala World (Adji Kui II), e por ele Wilson Ferrer 1991.

### adugo — Não joga

Status: documented · Família: caca-assimetrico · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "alquerque 5×5 + triângulo (31 pontos)"; não diz onde o triângulo encosta nem como as linhas dele ligam os 6 pontos a mais |
| E2 Peças | sim, mas ambíguo | `pieces`: "14 ou 15 cães", sem dizer quando cada um |
| E3 Preparação | sim, mas ambíguo | Regras 1: cães "nos pontos da base oposta ao triângulo", sem dizer quantas fileiras |
| E4 Ação da vez | sim | Regras 2 |
| E5 Movimento | sim | Regras 2 |
| E6 Fim e vitória | sim | Regras 4 |
| I1 Quem começa | sim | Regras 2 (a onça) |
| I2 Captura | sim | Regras 3 (salto, encadeado) |
| I3 Obrigação | não | — |
| I4 Bloqueio | parcial | Regras 4 cobre a onça encurralada; não diz o que acontece se os cães não puderem mover |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1 | Forma e ligações do triângulo. | fonte |
| E2 | 14 ou 15 cães: quando cada um? | fonte |
| E3 | Quais pontos os cães ocupam no começo. | fonte |
| I3 | A onça é obrigada a capturar? | fonte |
| I4 | E se os cães não puderem mover? | fonte |
| I5 | Existe empate? | fonte |

**Abrir primeiro (Etapa 2):** MCI: Caderno Brincadeiras; Vinha (PDF); Wikipedia; GamesCrafters.

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

### ashta-kashte — Não joga

Status: documented · Família: corrida · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board` 7×7 (sem desenho: casas marcadas, T-054) |
| E2 Peças | não | `pieces` e `players`: "ver fonte" |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | Regras: lançar conchas ou varetas; não diz quantas nem como se lê o lance |
| E5 Movimento | não | Regras: percurso "de fora para o centro (a verificar)" |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: capturar dá novo lance; não diz como se captura |
| I3 Obrigação | sim | Regras (não é obrigado a usar o lance) |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2–E6, I1, I2, I4–I6 | Quantas peças e jogadores, onde começam, valores do lance, percurso, como se captura e como se vence. | fonte |

**Erro na ficha:** `pieces` e `players` dizem "ver fonte"; pelo `content/AGENTS.md`, sem fonte o campo fica "desconhecido".

**Abrir primeiro (Etapa 2):** Falkener 1892 no archive.org (pp. 265–266, a fonte do `ev`); Ludii.

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

### bao-ki-arabu — Não joga

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board` 4×8; `diagram` |
| E2 Peças | sim | `pieces`: 3 sementes por cavidade |
| E3 Preparação | sim, mas ambíguo | `pieces`; não diz se todas as 32 covas começam cheias |
| E4 Ação da vez | não | Regras: "Ver Ludii (variante 1)" |
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
| E4–E6, I1–I6 | As regras remetem ao Ludii. | fonte |

**Abrir primeiro (Etapa 2):** Ludii (Zanzibar 1), e por ele Ingrams 1931.

### bao-la-kiswahili — Não joga

Status: documented · Família: semeadura · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: "4×8 com nyumba", sem dizer qual cova é a *nyumba* |
| E2 Peças | sim | `pieces`: 64 sementes (a verificar) |
| E3 Preparação | não | Regras 2 diz que "parte das sementes fica na mão", sem quantas nem onde ficam as outras |
| E4 Ação da vez | parcial | Regras 1 e 2 |
| E5 Movimento | não | sentido da semeadura não dito; *kichwa* sem explicação de qual ponta |
| E6 Fim e vitória | sim | Regras 5 |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 3 |
| I3 Obrigação | não | — |
| I4 Bloqueio | sim | Regras 5 (sem lances, perde) |
| I5 Empate | não | — |
| I6 Fases | parcial | Regras 2 nomeia *namua* e *mtaji*, sem dizer quando uma acaba |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1 | Onde fica a *nyumba*. | fonte |
| E3 | Quantas sementes começam na mão e quantas no tabuleiro, e onde. | fonte |
| E4 | As "regras especiais" da *nyumba* (Regras 4) não estão descritas. | fonte |
| E5 | Sentido da semeadura e qual ponta é o *kichwa*. | fonte |
| I1 | Quem começa. | fonte |
| I3 | Capturar é obrigatório? | fonte |
| I5 | Existe empate? | fonte |
| I6 | Quando se passa do *namua* para o *mtaji*. | fonte |

**Erro na ficha:** `names` traz "bao la kujifunza", que tem ficha própria e é outro jogo (forma simplificada, segundo a ficha `bao-la-kujifunza`).

**Abrir primeiro (Etapa 2):** Wikipedia (Bao).

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

### brandubh — Não joga

Status: reconstructed · Família: caca-assimetrico · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras; `board` 7×7 |
| E2 Peças | sim | `pieces`; Regras |
| E3 Preparação | parcial | Regras: rei no centro; não diz onde ficam os 4 defensores e os 8 atacantes |
| E4 Ação da vez | sim | Regras (mover uma peça) |
| E5 Movimento | sim, mas por comparação | Regras: "movimento como a torre", sem explicar |
| E6 Fim e vitória | parcial | Regras: o rei vence nos cantos; não diz como os atacantes vencem |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: "captura por cerco"; não diz como se captura o rei |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3 | Posição inicial dos defensores e atacantes. | fonte |
| E5 | Explicar o movimento sem depender da torre do xadrez. | fonte |
| E6 | Como os atacantes vencem. Regras: "variantes modernas mudam a força do rei". | curadoria |
| I2 | Captura do rei e papel da casa central, que mudam entre variantes. | curadoria |
| I1 | Quem começa. | fonte |
| I3 | Capturar é obrigatório? | fonte |
| I4 | E se um lado não puder mover? | fonte |
| I5 | Existe empate? | fonte |

**Abrir primeiro (Etapa 2):** "Wikipedia: Tafl games". Como é reconstrução "sem autor único", a curadoria precisa escolher uma e listá-la em `recon`.

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

### chaupar — Não joga

Status: documented · Família: corrida · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`: em cruz, braços de 3×8 casas (sem desenho: T-055) |
| E2 Peças | sim, mas ambíguo | `pieces`: 16 peças e 3 dados longos; não diz quantas por jogador com 2, 3 ou 4 |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | lançar os dados; não diz o valor de cada face |
| E5 Movimento | parcial | Regras: "como no pachisi", anti-horário pela trilha externa e de volta ao centro |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: "capturas mandam peças de volta", sem dizer como se captura |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2 | Peças por jogador. | fonte |
| E3 | Onde as peças começam. | fonte |
| E4 | Valores das faces dos dados longos. | fonte |
| E5 | Percurso escrito na própria ficha, sem depender do Pachisi. | fonte |
| E6 | Como se vence. | fonte |
| I1–I5 | Quem começa, captura, obrigação, bloqueio, empate. | fonte |

**Abrir primeiro (Etapa 2):** "Ludii: evidência"; Penn Museum; Indian Culture. A fonte do `ev` é o *Ain-i-Akbari* na tradução de Blochmann (1878).

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

### damas-brasileiras — Não joga

Status: documented · Família: damas · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1; `diagram` |
| E2 Peças | sim | `pieces`; Regras 1 |
| E3 Preparação | sim | Regras 1 |
| E4 Ação da vez | sim | Regras 2 a 4 |
| E5 Movimento | sim | Regras 2 e 4 |
| E6 Fim e vitória | não | nenhuma regra diz como se vence |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 3 a 5 |
| I3 Obrigação | sim | Regras 3 (obrigatória, maior número de peças) |
| I4 Bloqueio | não | — |
| I5 Empate | parcial | Regras 6: "limitam lances de dama sem captura", sem o número |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E6 | Como se vence. | fonte |
| I1 | Quem começa. | fonte |
| I4 | E se um jogador não puder mover? | fonte |
| I5 | Quantos lances de dama sem captura levam ao empate. | fonte |

**Abrir primeiro (Etapa 2):** Regulamento FENAE; Regulamento IFPE. É o jogo mais perto de "joga": as lacunas devem estar todas nos regulamentos.

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

### domino-doble-nueve — Não joga

Status: partial · Família: pecas · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não se aplica | `board`: sem tabuleiro |
| E2 Peças | sim | `pieces`: 55 peças |
| E3 Preparação | sim | Regras: 10 por jogador, 15 "dormidas" (a verificar) |
| E4 Ação da vez | não | Regras: "Como o dominó de bloqueio em duplas", que não está descrito no catálogo |
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
| E4–E6, I1–I6 | As regras remetem ao dominó de bloqueio, que a ficha `domino` também não descreve. | fonte |

**Abrir primeiro (Etapa 2):** thecubanhistory.com (e, por ele, Torres Romero, *El dominó del doble nueve*); Diario Las Américas.

### domino — Não joga

Status: documented · Família: pecas · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não se aplica | `board`: sem tabuleiro |
| E2 Peças | sim | `pieces`: 28 peças (duplo seis) |
| E3 Preparação | não | — (a ficha não tem `## Regras`) |
| E4 Ação da vez | parcial | `summary`: "se encaixam peças pelos números iguais" |
| E5 Movimento | parcial | idem |
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
| — | Há vários jogos com as 28 peças; escolher qual a ficha descreve (o `domino-doble-nueve` fala em "dominó de bloqueio"). | curadoria |
| E3–E6, I1–I6 | Peças por jogador, a vez, como se vence. | fonte |

**Abrir primeiro (Etapa 2):** "Wikipedia: Dominoes"; pagat.com (que tem também regras).

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

Status: documented · Família: corrida · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "folha de papel ilustrada com percurso"; Regras: as casas "variam por tabuleiro" |
| E2 Peças | sim | `pieces`: marcadores e 1 dado |
| E3 Preparação | sim | Regras (todos partem do começo do percurso) |
| E4 Ação da vez | sim | Regras (lançar o dado e avançar) |
| E5 Movimento | sim | Regras |
| E6 Fim e vitória | sim | Regras ("até a meta") |
| I1 Quem começa | não | — |
| I2 Captura | não se aplica | — |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | não se aplica | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1 | Cada folha é um tabuleiro diferente. Para jogar, a ficha precisa de uma folha concreta (por exemplo, uma xilogravura em domínio público, pelo T-072 ou T-056). | curadoria |
| I1 | Quem começa. | fonte |
| I5 | Chegada exata à meta? Empate? | fonte |

**Abrir primeiro (Etapa 2):** Biblioteca Nacional da Dieta; woodblockprints.org; Harvard-Yenching.

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

### fanorona — Não joga

Status: documented · Família: captura-posicional, damas · "(a verificar)": 5 · "Como jogar?": sim (lote 1)

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1; `board` (a verificar); `diagram` |
| E2 Peças | sim | Regras 1; `pieces` (a verificar) |
| E3 Preparação | parcial | Regras 1: as peças ocupam tudo menos o centro; não diz quais pontos são de cada cor, e a fileira do meio não se deduz |
| E4 Ação da vez | sim | Regras 2 e 6 |
| E5 Movimento | sim | Regras 2 |
| E6 Fim e vitória | sim | Regras 5 e 9 |
| I1 Quem começa | sim | Regras 6 (as brancas) |
| I2 Captura | sim | Regras 3, 4, 7 e 8 |
| I3 Obrigação | sim | Regras 6 |
| I4 Bloqueio | não | — |
| I5 Empate | sim | Regras 9 |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3 | Disposição inicial das peças. As fontes a mostram só em figura (PR #22); descrever a figura em texto, citando-a, é trabalho de fonte. | fonte |
| I4 | E se um jogador não puder mover? | fonte |
| — | Regras da revanche (*vela*), citadas em Regras 5 e não descritas. Não impede uma partida. | fonte |

**Mudança de veredito:** o lote 1 classificou o Fanorona como "joga com lacunas". Com o critério desta auditoria, a posição inicial que não dá para montar só com a ficha é um essencial faltando.

**Abrir primeiro (Etapa 2):** boardspace (regras, com a figura); Wikipedia; "Ludii: fontes" (Montgomery 1896).

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

### hnefatafl — Não joga

Status: reconstructed · Família: caca-assimetrico · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, mas ambíguo | `board`: 11×11 (variável); os cantos e o centro, que têm papel nas regras, não são descritos como casas especiais |
| E2 Peças | não | `pieces`: "rei com defensores contra atacantes em dobro", sem números |
| E3 Preparação | não | — |
| E4 Ação da vez | sim | Regras (mover uma peça) |
| E5 Movimento | sim, mas por comparação | Regras: "como a torre do xadrez" |
| E6 Fim e vitória | sim | Regras (rei no canto; rei cercado pelos quatro lados) |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras (cerco entre duas peças) |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2, E3 | Número e posição das peças. Dependem de qual conjunto moderno a ficha adota (Copenhagen, Fetlar, que são "obras de autor"). | curadoria |
| E5 | Explicar o movimento sem depender da torre do xadrez. | fonte |
| I1 | Quem começa. | fonte |
| I3 | Capturar é obrigatório? | fonte |
| I4 | E se um lado não puder mover? | fonte |
| I5 | Existe empate? | fonte |

**Abrir primeiro (Etapa 2):** "Wikipedia: Tafl games". O `recon` diz só "regras modernas derivadas do tablut", sem autor; o conjunto adotado precisa entrar lá.

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

### janggi — Não joga

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: 9×10 interseções com palácios, sem dizer onde ficam nem o tamanho dos palácios |
| E2 Peças | parcial | `pieces`: 16 por jogador, sem a composição |
| E3 Preparação | parcial | Regras: só o general (centro do palácio) |
| E4 Ação da vez | sim | Regras (mover uma peça; passar a vez é permitido) |
| E5 Movimento | parcial | Regras: elefante, canhão e diagonais do palácio; as outras peças, não |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | Regras nomeiam os lados (Han e Cho), sem dizer qual começa |
| I2 Captura | parcial | Regras: só a restrição do canhão |
| I3 Obrigação | não se aplica | Regras (passar a vez é permitido) |
| I4 Bloqueio | sim | Regras (passar a vez) |
| I5 Empate | parcial | Regras: *bikjang* e contagem de pontos "(a verificar)" |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1–E3, E5 | As regras listam só as diferenças em relação ao Xiangqi; falta o jogo inteiro na própria ficha. | fonte |
| E6 | Como se vence. | fonte |
| I1 | Qual lado começa. | fonte |
| I2 | Como se captura (em geral). | fonte |
| I5 | Como funcionam o *bikjang* e a contagem de pontos. | fonte |

**Erro na ficha:** a única `ref` é um blog (Substack). Fonte fraca para um jogo `documented`.

**Abrir primeiro (Etapa 2):** o blog da `ref`; depois Wikipedia e Ludii.

### jogo-real-de-ur — Não joga

Status: reconstructed · Família: corrida · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: 3×4 + ponte 1×2 + 3×2; não diz onde ficam as rosetas, que as Regras 4 usam |
| E2 Peças | sim | `pieces`; Regras 1 (7, de Finkel) |
| E3 Preparação | sim | Regras 1 (as peças entram de fora) |
| E4 Ação da vez | sim | Regras 2 |
| E5 Movimento | parcial | Regras 1: entra pelo seu lado, passa pela faixa central, sai pelo seu lado; o caminho casa a casa não é dito |
| E6 Fim e vitória | sim | Regras 5 |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 3 |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | Regras 2 admite lance 0, sem dizer o que acontece |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1 | Posição das rosetas. | fonte |
| E5 | Percurso casa a casa. | fonte |
| I1 | Quem começa. | fonte |
| I3 | Mover é obrigatório se possível? | fonte |
| I4 | Lance 0 ou sem jogada possível: passa a vez? | fonte |
| I5 | Existe empate? | fonte |

**Abrir primeiro (Etapa 2):** Ludii; Wikipedia; British Museum. As regras de Finkel (listado em `recon`) vêm da tábua CDLI P498293.

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

Status: documented · Família: caca-assimetrico · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | Regras 1 e `board`: alquerque 5×5 + triângulo de 13 pontos; a forma e as ligações do triângulo não são descritas |
| E2 Peças | sim | Regras 2 |
| E3 Preparação | não | — |
| E4 Ação da vez | sim | Regras 3 e 4 |
| E5 Movimento | parcial | Regras 3: cães, um passo para a frente; o leão, não dito |
| E6 Fim e vitória | parcial | Regras 3: os cães tentam cercar o leão; não diz como o leão vence |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 4 |
| I3 Obrigação | não | — |
| I4 Bloqueio | parcial | Regras 3 (cercar o leão) |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1 | Forma e ligações do triângulo. | fonte |
| E3 | Posição inicial. | fonte |
| E5 | Como o leão anda. | fonte |
| E6 | Vitória do leão; e o papel do triângulo, que "não está registrado nas fontes antigas" (só no BGG, moderno). | curadoria |
| I1 | Quem começa. | fonte |
| I3 | O leão é obrigado a capturar? | fonte |
| I5 | Existe empate? | fonte |

**Sensibilidade:** `sens`: "restrito (informantes recusaram detalhes a Mátus, 1918-19)". Vale conversar antes de completar as regras com fontes modernas.

**Abrir primeiro (Etapa 2):** Depaulis 1998 (BGS 1); "Ludii: biblioteca"; Wikipedia.

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

### ludus-latrunculorum — Não joga

Status: reconstructed · Família: captura-posicional, xadrez-e-guerra · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, mas ambíguo | `board`: variável; 8×8 em várias reconstruções; `diagram` 8×8 |
| E2 Peças | sim, mas ambíguo | Regras: 16 a 24 (Schädler) ou 20 (Locus Ludi) |
| E3 Preparação | sim | Regras (tabuleiro vazio, colocação sem captura) |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim | Regras (ortogonal, uma casa; salto em Schädler) |
| E6 Fim e vitória | não | nenhuma das três reconstruções diz como se vence |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras (cerco entre duas peças) |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | parcial | Regras: há colocação e movimento, sem dizer quando se passa de uma para a outra |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1, E2 | Três reconstruções lado a lado (Schädler, Locus Ludi, Bell). Para "Como jogar?", escolher uma. | curadoria |
| E6 | Como se vence, na reconstrução escolhida. | fonte |
| I1, I3–I6 | Quem começa, obrigação, bloqueio, empate, troca de fase. | fonte |

**Abrir primeiro (Etapa 2):** "Ruleset Schädler 2001" e "Ruleset Locus Ludi" (Ludii); Wikipedia.

### mahjong — Não joga

Status: documented · Família: pecas · "(a verificar)": 3 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não se aplica | `board`: sem tabuleiro |
| E2 Peças | parcial | `pieces`: 144 (variável); a composição (naipes, honras) não é descrita |
| E3 Preparação | parcial | Regras: "Monta-se uma muralha"; não diz quantas peças cada um recebe |
| E4 Ação da vez | sim | Regras (comprar e descartar) |
| E5 Movimento | sim | Regras (*chow*, *pung*, *kong* com o descarte alheio) |
| E6 Fim e vitória | sim | Regras (quatro combinações e um par) |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras (tomar o descarte) |
| I3 Obrigação | não | quem tem prioridade quando dois querem o mesmo descarte |
| I4 Bloqueio | não se aplica | — |
| I5 Empate | não | o que acontece se a muralha acabar |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| — | A pontuação "varia muito entre regiões"; escolher uma variante. | curadoria |
| E2 | Composição das peças. | fonte |
| E3 | Mão inicial e montagem da muralha. | fonte |
| I1 | Quem começa. | fonte |
| I3 | Prioridade sobre o descarte. | fonte |
| I5 | Muralha esgotada. | fonte |

**Erro na ficha:** a única `ref` é a bibliografia de Culin (Avedon), sem regras de mahjong.

**Abrir primeiro (Etapa 2):** a bibliografia de Culin; depois Wikipedia e uma federação da variante escolhida.

### makruk — Não joga

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras; `diagram` |
| E2 Peças | sim | `pieces`; Regras (tipos) |
| E3 Preparação | parcial | Regras: só os peões (3ª fileira) |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim, mas por comparação | Regras: rei, cavalo e peão "como no xadrez"; barco "como a torre" |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: só a do peão |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | parcial | Regras: contagem em finais (a verificar detalhes) |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3 | Posição das outras peças. | fonte |
| E5 | Movimentos escritos na própria ficha, sem depender do xadrez. | fonte |
| E6 | Como se vence. | fonte |
| I1, I2, I4 | Quem começa, captura das outras peças, rei sem lance. | fonte |
| I5 | Regra de contagem. | fonte |

**Abrir primeiro (Etapa 2):** Wikipedia; Chess Variant Pages.

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

### muvalavala — Não joga

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, mas ambíguo | `board`: 4×6 ou 4×16 (sem desenho pela faixa) |
| E2 Peças | sim | `pieces`: 48 sementes (4×6) |
| E3 Preparação | sim | Regras (2 em cada cova) |
| E4 Ação da vez | parcial | Regras: semeadura no sentido horário; não diz que fileiras são de cada jogador nem de que covas se começa |
| E5 Movimento | sim | Regras (sentido horário) |
| E6 Fim e vitória | parcial | Regras: "vence quem capturar mais sementes", sem dizer quando acaba |
| I1 Quem começa | não | — |
| I2 Captura | não | a captura é citada na vitória, mas não descrita |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E4 | Fileiras de cada jogador e covas de partida. | fonte |
| E6 | Quando a partida acaba. | fonte |
| I1–I6 | Quem começa, como se captura, obrigação, bloqueio, empate, fases. | fonte |
| — | O `summary` cita duas formas no Ludii (Luena e Quioco); as Regras falam em Luena e Mbunda. Decidir que forma a ficha descreve. | curadoria |

**Abrir primeiro (Etapa 2):** "Ludii: biblioteca"; Ondjango Asili; Santos Silva 1995, que a ficha manda comparar.

### nard — Não joga

Status: partial · Família: corrida · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`: 24 pontos em quatro quadrantes |
| E2 Peças | sim | `pieces`: 15 por jogador; 2 dados |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | lançar os dois dados; não diz como se usa o resultado |
| E5 Movimento | ambíguo | Regras: sentidos opostos (texto sassânida) ou o mesmo sentido (nardy longo); "Não harmonizar" |
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
| E5 | Que forma a ficha ensina: a do texto sassânida ou o nardy longo moderno? | curadoria |
| E3, E4, E6, I1–I6 | Posição inicial, uso dos dados, vitória e o resto, na forma escolhida. | fonte |

**Abrir primeiro (Etapa 2):** Ludii (e o DLP).

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

### omweso — Não joga

Status: documented · Família: semeadura · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras; `diagram` |
| E2 Peças | sim | Regras (64, a verificar em `pieces`) |
| E3 Preparação | não | Regras: "aberturas próprias", sem dizer como as sementes começam |
| E4 Ação da vez | parcial | Regras: cada um controla duas fileiras; semeaduras em várias voltas |
| E5 Movimento | não | sentido da semeadura não dito |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | "aberturas próprias" não explicadas |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3–E6, I1, I3–I6 | A ficha pede "fontes especializadas (Wernham, sociedades de omweso) antes de publicar". | fonte |

**Abrir primeiro (Etapa 2):** "Ludii: biblioteca"; Wernham.

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

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, mas ambíguo | Regras: de 4×12 a 4×20, de preferência par |
| E2 Peças | sim | Regras (fórmula pelo número de covas) |
| E3 Preparação | não | a fórmula dá o total, mas não diz como as peças começam distribuídas |
| E4 Ação da vez | sim | Regras (de qualquer cova própria) |
| E5 Movimento | sim | Regras (anti-horário) |
| E6 Fim e vitória | não | Regras: "Demais regras na fonte" |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1 | Que tamanho recomendar. | curadoria |
| E3, E6, I1–I6 | Distribuição inicial, captura, vitória e o resto. | fonte |
| — | `sens`: "restrito (homens e meninos)"; jogado em duplas ou equipes. Decidir como apresentar. | curadoria |

**Abrir primeiro (Etapa 2):** Ludii (a partir de Santos Silva 1995); Ondjango Asili; "Wikipedia: Owela (Namíbia)".

### pachisi — Não joga

Status: documented · Família: corrida · "(a verificar)": 2 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | `board`: em cruz, braços de 3×8; não diz onde ficam as casas-castelo das Regras 4 |
| E2 Peças | sim, mas ambíguo | `pieces`: 4 por jogador; "6–7 búzios" |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | Regras 2: "a tabela varia entre fontes" e não está na ficha |
| E5 Movimento | sim | Regras 3 |
| E6 Fim e vitória | sim | Regras 5 |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 4 |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E4 | Tabela de lances, que "varia entre fontes": escolher uma ou registrar as versões. | curadoria |
| E1 | Posição das casas-castelo. | fonte |
| E2 | 6 ou 7 búzios? | fonte |
| E3 | De onde as peças partem. | fonte |
| I1, I3–I5 | Quem começa, obrigação, bloqueio, empate. | fonte |

**Abrir primeiro (Etapa 2):** Ludii; tradgames.org.uk (secundário).

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

### puluc — Não joga

Status: documented · Família: corrida, xadrez-e-guerra · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1 |
| E2 Peças | sim | Regras 2 e 3 |
| E3 Preparação | não | onde as peças estão antes de entrar |
| E4 Ação da vez | sim, mas ambíguo | Regras 3: "dois lances por vez", sem explicar |
| E5 Movimento | sim | Regras 4 |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 5 |
| I3 Obrigação | não | — |
| I4 Bloqueio | não se aplica | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3 | De onde as peças partem. | fonte |
| E4 | O que são os "dois lances por vez". | fonte |
| E6 | Como se vence. | fonte |
| I1, I3, I5 | Quem começa, obrigação, empate. | fonte |

**Abrir primeiro (Etapa 2):** "cyningstan (regras de Bell)"; Ludii.

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

Status: documented · Família: caca-assimetrico · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces`: 1 raposa e 12 galinhas |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | Regras: a raposa salta; o movimento comum não é dito |
| E5 Movimento | não | — |
| E6 Fim e vitória | parcial | Regras: as galinhas vencem encurralando a raposa; não diz como a raposa vence |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: salto; não diz se vale salto múltiplo |
| I3 Obrigação | não | — |
| I4 Bloqueio | parcial | Regras (raposa encurralada) |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3, E4, E5 | Posição inicial e como as peças andam (as galinhas andam para trás?). | fonte |
| E6 | Como a raposa vence. | fonte |
| I1–I3, I5, I6 | Quem começa, salto múltiplo, obrigação, empate, fases. | fonte |

**Abrir primeiro (Etapa 2):** Fernandes e Alberto 2009 (Açafa), única `ref` e registro do jogo em uso.

### raposa-e-gansos — Não joga

Status: documented · Família: caca-assimetrico · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | parcial | Regras 1: "cruz de 33 pontos com ligações de alquerque", sem a largura dos braços (sem desenho: T-054) |
| E2 Peças | ambíguo | `pieces`: 13 gansos (Murray) ou 17 (Strutt); Regras 2 usa 13 |
| E3 Preparação | parcial | Regras 2: "posição fixa", sem dizer qual |
| E4 Ação da vez | sim | Regras 3 |
| E5 Movimento | sim | Regras 3 |
| E6 Fim e vitória | sim, mas vago | Regras 4: a raposa vence "até eles não conseguirem cercá-la" |
| I1 Quem começa | ambíguo | Regras 2: a raposa entra "no primeiro lance", sem dizer de quem |
| I2 Captura | parcial | Regras 3; não diz se vale salto múltiplo |
| I3 Obrigação | não | — |
| I4 Bloqueio | sim | Regras 4 |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2 | 13 (Murray) ou 17 (Strutt): escolher ou registrar as duas. | curadoria |
| E1 | Forma da cruz. | fonte |
| E3 | Posição dos gansos. | fonte |
| E6 | Quantos gansos a raposa precisa capturar. | fonte |
| I1, I2, I3, I5 | Quem começa, salto múltiplo, obrigação, empate. | fonte |

**Abrir primeiro (Etapa 2):** "Wikipedia: Fox games"; Ludii; e, por eles, Murray e Strutt.

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

### senet — Não joga

Status: reconstructed · Família: corrida · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`: 3×10, percurso em S |
| E2 Peças | ambíguo | `pieces`: 5 a 7 por jogador, "varia por achado e reconstrução" |
| E3 Preparação | não | — |
| E4 Ação da vez | parcial | Regras 1: "conforme o valor das varetas", sem os valores |
| E5 Movimento | parcial | Regras 1 a 3; só a casa de água tem efeito descrito |
| E6 Fim e vitória | sim | Regras 4 |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 2 (troca de lugar) |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2–E5 | O "esqueleto comum" está "(a verificar em cada autor)". Escolher uma reconstrução (Falkener, Kendall ou Bell) e escrevê-la inteira. | curadoria |
| E4 | Valores das varetas. | fonte |
| E5 | Efeitos das casas 15, 26 e 27. | fonte |
| I1, I3–I5 | Quem começa, obrigação, bloqueio, empate. | fonte |
| — | `sens`: ritual. | curadoria |

**Abrir primeiro (Etapa 2):** Falkener 1892 (archive.org); "Ludii: evidências de Senet".

### shatranj — Não joga

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces`; Regras (tipos) |
| E3 Preparação | não | — |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim, mas por comparação | Regras: "como o rei", "como o cavalo", "como a torre" |
| E6 Fim e vitória | sim | Regras (xeque-mate ou rei despido) |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | ambíguo | Regras: "o afogamento é tratado de modo diferente nas fontes" |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| I4 | Afogamento: escolher uma fonte ou registrar as versões. | curadoria |
| E3 | Posição inicial. | fonte |
| E5 | Movimentos escritos sem depender do xadrez. | fonte |
| I1, I2, I5 | Quem começa, como se captura, empate. | fonte |

**Abrir primeiro (Etapa 2):** Murray 1913; Chess Variant Pages.

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

### shogi — Não joga

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | Regras 1 (composição) |
| E3 Preparação | não | — |
| E4 Ação da vez | sim | Regras 3 (mover ou lançar uma peça da mão) |
| E5 Movimento | não | o movimento de cada peça não é descrito |
| E6 Fim e vitória | sim | Regras 6 |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras 3 diz para onde vai a peça capturada, não como se captura |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3 | Posição inicial. | fonte |
| E5 | Movimento de cada peça, e em que cada uma vira quando é promovida. | fonte |
| I1, I2, I4, I5 | Quem começa, como se captura, sem lances, empate. | fonte |

**Abrir primeiro (Etapa 2):** "Ludii: biblioteca" (única `ref`); depois Wikipedia e a federação japonesa.

### sittuyin — Não joga

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; Regras (sem desenho: T-054) |
| E2 Peças | sim | `pieces`; Regras 2 |
| E3 Preparação | parcial | Regras 1 e 2: peões "escalonados entre a 3ª e a 4ª fileira", sem as casas; as outras peças, livres |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | parcial | Regras 2: general e elefante; rei, cavalo, carro e peão, não |
| E6 Fim e vitória | sim | Regras 4 |
| I1 Quem começa | não | — |
| I2 Captura | não | — |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | parcial | Regras 2: a colocação vem "antes do início", sem dizer se é alternada nem quando acaba |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3 | Casas exatas dos peões e onde se pode pôr as outras peças. | fonte |
| E5 | Movimentos que faltam; casas de promoção ("diagonais específicas"). | fonte |
| I1, I2, I4, I5, I6 | Quem começa, captura, sem lances, empate, como funciona a colocação. | fonte |

**Abrir primeiro (Etapa 2):** Murray 1913 (archive.org); Chess Variant Pages.

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

### tchadji — Não joga

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras; `diagram` 4×8 (também 4×12) |
| E2 Peças | sim | `pieces`; Regras (2 por cova) |
| E3 Preparação | sim | Regras |
| E4 Ação da vez | parcial | Regras: cada um usa as duas fileiras do seu lado; a semeadura não é descrita |
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
| E4–E6, I1–I6 | Semeadura, captura e vitória. | fonte |
| — | `sens`: "restrito (sobretudo homens)". | curadoria |

**Abrir primeiro (Etapa 2):** Mancala World (e, por ele, o estudo de Abdulcarimo Ismael).

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

### vela — Não joga

Status: partial · Família: captura-posicional, damas · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`: "como o fanorona"; `diagram` |
| E2 Peças | sim | `pieces`: "como o fanorona" |
| E3 Preparação | não | depende da posição inicial do Fanorona, que também falta |
| E4 Ação da vez | sim | como no Fanorona |
| E5 Movimento | sim | como no Fanorona |
| E6 Fim e vitória | não | não diz quando a *vela* acaba |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: o vencedor anterior captura só uma peça por lance "até ter perdido um certo número" (a verificar) |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E3, E6, I1–I6 | Regras: "Não abertas nesta rodada". Pesquisar junto com o Fanorona, que tem a mesma pendência (PR #22). | fonte |
| — | A *vela* é uma ficha própria ou uma seção do Fanorona? | curadoria |

**Abrir primeiro (Etapa 2):** "Ludii: fontes" (Montgomery 1896).

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

### warri-caribe — Não joga

Status: documented · Família: semeadura · "(a verificar)": 0 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | sim | `pieces` |
| E3 Preparação | sim | Regras (quatro por cova) |
| E4 Ação da vez | não | — |
| E5 Movimento | não | — |
| E6 Fim e vitória | não | — |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: "como no oware, com diferenças locais a documentar" |
| I3 Obrigação | não | — |
| I4 Bloqueio | não | — |
| I5 Empate | não | — |
| I6 Fases | não | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E4–E6, I1–I6 | As regras remetem ao Oware e a "diferenças locais a documentar". | fonte |
| — | `sens`: "restrito (sobretudo homens)". | curadoria |

**Abrir primeiro (Etapa 2):** "Mancala World: Warri (Antigua)"; Stoffle et al.; BajanThings.

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

### xadrez — Não joga

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | `board`; `diagram` |
| E2 Peças | parcial | `pieces`: 16 por jogador; Regras nomeiam os tipos, sem quantas de cada |
| E3 Preparação | não | — |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim, mas incompleto | Regras 1 a 3; o roque é "sob condições", sem dizer quais |
| E6 Fim e vitória | sim | Regras 4 |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras 2: só a do peão |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim | Regras 4 (afogamento empata) |
| I5 Empate | sim | Regras 4 |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E2, E3 | Composição e posição inicial. | fonte |
| E5 | Condições do roque. | fonte |
| I1 | Quem começa. | fonte |
| I2 | Como as outras peças capturam. | fonte |

**Erro na ficha:** as `refs` são históricas (Murray 1913, *Libro de los juegos*); nenhuma cobre as regras modernas (*en passant*, roque).

**Abrir primeiro (Etapa 2):** uma fonte das regras modernas (FIDE), a acrescentar às `refs`.

### xiangqi — Não joga

Status: documented · Família: xadrez-e-guerra · "(a verificar)": 1 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim, mas incompleto | `board` e Regras: palácio de 3×3, sem dizer onde fica; rio, sem dizer onde passa (sem desenho: T-054) |
| E2 Peças | parcial | `pieces`: 16 por jogador; sem quantas de cada tipo |
| E3 Preparação | não | — |
| E4 Ação da vez | sim | Regras |
| E5 Movimento | sim, mas por comparação | Regras (carro e canhão "como a torre") |
| E6 Fim e vitória | sim | Regras (xeque-mate; sem lances perde) |
| I1 Quem começa | não | — |
| I2 Captura | parcial | Regras: só a do canhão |
| I3 Obrigação | não se aplica | — |
| I4 Bloqueio | sim | Regras |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1 | Posição do palácio e do rio. | fonte |
| E2, E3 | Composição e posição inicial. | fonte |
| E5 | Movimento sem depender da torre do xadrez. | fonte |
| I1, I2, I5 | Quem começa, captura em geral, empate. | fonte |

**Abrir primeiro (Etapa 2):** Wikipedia (única `ref`).

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

### yut-nori — Não joga

Status: documented · Família: corrida · "(a verificar)": 2 · "Como jogar?": não

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | não | `board`: "29 estações (a verificar)"; Regras 4 cita cantos, centro e atalho diagonal, sem a forma (sem desenho: T-055) |
| E2 Peças | sim | `pieces` |
| E3 Preparação | não | de onde as peças partem |
| E4 Ação da vez | sim | Regras 1 e 2 |
| E5 Movimento | parcial | Regras 4; não diz o sentido nem o caminho |
| E6 Fim e vitória | sim | Regras 5 |
| I1 Quem começa | não | — |
| I2 Captura | sim | Regras 3 |
| I3 Obrigação | não | o atalho e o empilhamento são opcionais? |
| I4 Bloqueio | não se aplica | — |
| I5 Empate | não | — |
| I6 Fases | não se aplica | — |

**Lacunas:**

| Item | Lacuna | Tipo |
| --- | --- | --- |
| E1 | Forma do tabuleiro de 29 estações. | fonte |
| E3, E5 | Saída, sentido e caminho. | fonte |
| I1, I3, I5 | Quem começa, opções obrigatórias ou não, empate. | fonte |

**Abrir primeiro (Etapa 2):** "Ludii: biblioteca"; Culin, pela bibliografia de Avedon.
