import { listItem } from "../../src/lib/md.ts";

export interface Run {
  text: string;
  bold: boolean;
  italic: boolean;
}

type List = { type: "ol" | "ul"; items: Run[][] };

/** The mini-Markdown of src/lib/md.ts as data, so Typst sets the text without parsing it as markup. */
export type Block = { type: "p"; runs: Run[] } | List;

const EMPHASIS = /\*\*(.+?)\*\*|\*(.+?)\*/g;

function plain(text: string): Run {
  return { text, bold: false, italic: false };
}

function runs(line: string): Run[] {
  const out: Run[] = [];
  let last = 0;
  for (const m of line.matchAll(EMPHASIS)) {
    if (m.index > last) out.push(plain(line.slice(last, m.index)));
    const bold = m[1] !== undefined;
    out.push({ text: m[1] ?? m[2] ?? "", bold, italic: !bold });
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push(plain(line.slice(last)));
  return out;
}

/** Same reading as md(): each line is a paragraph, a blank line ends a list. */
export function mdBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  let open: List | null = null;
  for (const line of text.split("\n")) {
    const item = listItem(line);
    if (item && open?.type === item.type) {
      open.items.push(runs(item.text));
    } else if (item) {
      open = { type: item.type, items: [runs(item.text)] };
      blocks.push(open);
    } else {
      open = null;
      if (line.trim()) blocks.push({ type: "p", runs: runs(line.trim()) });
    }
  }
  return blocks;
}
