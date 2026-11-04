import type { Status } from "../types.ts";

export const STATUS_LABEL: Record<Status, string> = {
  documented: "Regras registradas",
  partial: "Regras incompletas",
  reconstructed: "Regras reconstruídas",
  unknown: "Regras desconhecidas",
};

// Plain-language take on the status table in content/AGENTS.md
export const STATUS_HELP: Record<Status, string> = {
  documented: "Alguém registrou como se joga, e a fonte foi conferida.",
  partial:
    "Dá para jogar em boa parte, mas algum detalhe não foi registrado. A ficha avisa onde está a lacuna.",
  reconstructed:
    "Ninguém registrou as regras antigas. Estas são uma proposta moderna de como o jogo pode ter sido; a ficha lista os autores.",
  unknown:
    "Ainda não sabemos como se jogava. A ficha conta o que se sabe do jogo.",
};

export function statusDot(status: Status): string {
  return `<i class="st st-${status}" aria-hidden="true"></i>`;
}

/** Collapsible explanation of the four levels (native <details>, no script). */
export function statusHelp(): string {
  const levels = (Object.keys(STATUS_LABEL) as Status[])
    .map(
      (s) =>
        `<dt>${statusDot(s)}${STATUS_LABEL[s]}</dt><dd>${STATUS_HELP[s]}</dd>`,
    )
    .join("");
  return `<details class="status-help"><summary>O que significa?</summary><dl>${levels}</dl><p>Na dúvida, o catálogo fica com o nível menos confiável.</p></details>`;
}
