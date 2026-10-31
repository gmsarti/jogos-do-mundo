import type { Status } from "../types.ts";

export const STATUS_LABEL: Record<Status, string> = {
  documented: "regra documentada",
  partial: "regra parcial",
  reconstructed: "regra reconstruída",
  unknown: "regra desconhecida",
};

// Same meaning as the status table in content/AGENTS.md
const STATUS_HELP: Record<Status, string> = {
  documented:
    "As regras vêm de registro etnográfico, texto histórico ou outra fonte confiável.",
  partial: "Há registro, mas as regras estão incompletas ou têm lacunas.",
  reconstructed:
    "As regras são uma reconstrução moderna; a ficha lista os autores.",
  unknown: "Não há regras confiáveis.",
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
