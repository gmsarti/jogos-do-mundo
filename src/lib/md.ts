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

function listItem(line: string): { type: ListType; text: string } | null {
  const ul = line.match(/^\s*-\s+(.*)/);
  if (ul) return { type: "ul", text: ul[1] ?? "" };
  const ol = line.match(/^\s*\d+\.\s+(.*)/);
  if (ol) return { type: "ol", text: ol[1] ?? "" };
  return null;
}

/** Mini-Markdown: bold, italic, `-` and `1.` lists, paragraphs. Escapes everything else. */
export function md(text: string): string {
  const lines = esc(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .split("\n");

  let out = "";
  let open: ListType | null = null;
  for (const line of lines) {
    const item = listItem(line);
    const type = item?.type ?? null;
    if (open !== type) {
      if (open) out += `</${open}>`;
      if (type) out += `<${type}>`;
      open = type;
    }
    if (item) out += `<li>${item.text}</li>`;
    else if (line.trim()) out += `<p>${line}</p>`;
  }
  if (open) out += `</${open}>`;
  return out;
}
