import { esc } from "../lib/md.ts";
import type { Board, Shape } from "./geometry.ts";

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

function shapeSvg(s: Shape): string {
  const cls = `class="b-${s.role}"`;
  if (s.kind === "rect")
    return `<rect ${cls} x="${round(s.x)}" y="${round(s.y)}" width="${round(s.w)}" height="${round(s.h)}" rx="${round(s.r)}"/>`;
  if (s.kind === "circle")
    return `<circle ${cls} cx="${round(s.cx)}" cy="${round(s.cy)}" r="${round(s.r)}"/>`;
  return `<line ${cls} x1="${round(s.x1)}" y1="${round(s.y1)}" x2="${round(s.x2)}" y2="${round(s.y2)}"/>`;
}

/** Screen drawing: classes only, so the colors come from the theme tokens. */
export function boardSvg(board: Board, label: string): string {
  return `<svg class="board" viewBox="0 0 ${board.width} ${board.height}" role="img" aria-label="${esc(label)}">${board.shapes.map(shapeSvg).join("")}</svg>`;
}
