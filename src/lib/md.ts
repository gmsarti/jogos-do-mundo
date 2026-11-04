const HTML_ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function esc(text: string): string {
  return text.replace(/[&<>"']/g, (c) => HTML_ENTITIES[c] ?? c);
}

type ListType = "ul" | "ol";

export function listItem(
  line: string,
): { type: ListType; text: string } | null {
  const ul = line.match(/^\s*-\s+(.*)/);
  if (ul) return { type: "ul", text: ul[1] ?? "" };
  const ol = line.match(/^\s*\d+\.\s+(.*)/);
  if (ol) return { type: "ol", text: ol[1] ?? "" };
  return null;
}

const SUB_ITEM = /^\s{3,}-\s+(.*)/;

type Item = { text: string; sub: string[] };
type List = { type: ListType; items: Item[] };
type Block = { type: "p"; text: string } | List;

/** Adds `line` to the last numbered item when it is a sub-item of it. */
function addSubItem(list: List | null, line: string): boolean {
  const last = list?.type === "ol" ? list.items.at(-1) : undefined;
  const sub = SUB_ITEM.exec(line);
  if (!last || !sub) return false;
  last.sub.push(sub[1] ?? "");
  return true;
}

/** Groups lines into paragraphs and lists; a blank line ends a list. */
function blocks(lines: string[]): Block[] {
  const out: Block[] = [];
  let list: List | null = null;
  for (const line of lines) {
    if (addSubItem(list, line)) continue;
    const item = listItem(line);
    if (item && list?.type === item.type) {
      list.items.push({ text: item.text, sub: [] });
      continue;
    }
    list = item
      ? { type: item.type, items: [{ text: item.text, sub: [] }] }
      : null;
    if (list) out.push(list);
    else if (line.trim()) out.push({ type: "p", text: line });
  }
  return out;
}

function renderBlock(block: Block): string {
  if (block.type === "p") return `<p>${block.text}</p>`;
  const items = block.items.map(({ text, sub }) => {
    const nested = sub.length
      ? `<ul>${sub.map((s) => `<li>${s}</li>`).join("")}</ul>`
      : "";
    return `<li>${text}${nested}</li>`;
  });
  return `<${block.type}>${items.join("")}</${block.type}>`;
}

/**
 * Mini-Markdown: bold, italic, `-` and `1.` lists, paragraphs. Escapes everything else.
 * A `-` indented by 3 spaces right under a numbered item is a sub-item of it.
 */
export function md(text: string): string {
  const lines = esc(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .split("\n");
  return blocks(lines).map(renderBlock).join("");
}
