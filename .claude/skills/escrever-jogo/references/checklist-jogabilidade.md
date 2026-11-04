# Checklist de jogabilidade

Pergunta de fundo: **alguém que nunca viu o jogo consegue jogar uma partida inteira só com o que a ficha diz?**

Para cada item, marque **sim**, **não** ou **(a verificar)** e anote em que trecho da ficha está a resposta. "Não se aplica" vale quando o jogo não tem aquele elemento (um jogo sem captura, por exemplo).

## Itens

### Essenciais (sem eles, não dá para jogar)

| # | Item | Pergunta |
| --- | --- | --- |
| E1 | Tabuleiro | Dá para desenhar o tabuleiro só com a descrição? |
| E2 | Peças | Quantas peças cada jogador tem (ou quantas sementes, dados, varetas)? |
| E3 | Preparação | Como o tabuleiro está no começo: vazio, cheio, em que posições? |
| E4 | Ação da vez | O que um jogador faz na sua vez? |
| E5 | Movimento | Para onde e quanto uma peça anda? |
| E6 | Fim e vitória | Quando a partida acaba e quem vence? |

### Importantes (sem eles, a partida trava ou gera discussão)

| # | Item | Pergunta |
| --- | --- | --- |
| I1 | Quem começa | Quem faz a primeira jogada? |
| I2 | Captura | Como se captura, e se captura múltipla é permitida? |
| I3 | Obrigação | Capturar ou mover é obrigatório quando possível? |
| I4 | Bloqueio | O que acontece se um jogador não puder jogar? |
| I5 | Empate | Existe empate? Quando? |
| I6 | Fases | Se o jogo tem fases (colocar e mover), quando se passa de uma para a outra? |

### Veredito

- **Joga:** todos os essenciais e importantes respondidos (ou "não se aplica")
- **Joga com lacunas:** todos os essenciais respondidos, algum importante faltando
- **Não joga:** algum essencial faltando

## Formato do relatório

```markdown
### achi — Joga com lacunas

Status: documented

| Item | Resposta | Onde |
| --- | --- | --- |
| E1 Tabuleiro | sim | Regras 1; board |
| … | … | … |
| I1 Quem começa | não | — |

**Lacunas:**
- I1: a ficha não diz quem começa.

**Divergências conhecidas:**
- Oficina: jogador travado empata. Ficha: perde (Wikipedia).
```

Para a auditoria do catálogo inteiro, comece o relatório com uma tabela-resumo (id, status, veredito, número de lacunas), ordenada do veredito pior para o melhor.

## Lembretes

- Responda só com o que está na ficha. Saber como o jogo "costuma" ser jogado não conta.
- Uma lacuna aqui não é um defeito do texto: é uma tarefa de curadoria. O relatório existe para que alguém vá até a fonte.
