import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import QRCode from "qrcode";
import { boardShapes } from "../src/boards/geometry.ts";
import { buildCatalog } from "./build-data.ts";
import { kitData } from "./kit/data.ts";
import { ornatePage, simplePage } from "./kit/pages.ts";

// public/ is copied into dist/ by Vite, so the site links kits/<id>.pdf
const OUT = "public/kits";
// Typst only reads files under --root, so the inputs live inside the repo
const TMP = ".kits-tmp";
const TEMPLATE = "scripts/kit/kit.typ";

// System fonts are ignored so every machine sets the same pages with Typst's own fonts
function typstArgs(id: string): string[] {
  return [
    "--root",
    ".",
    "--ignore-system-fonts",
    "--input",
    `dir=/${TMP}/${id}`,
  ];
}

function rulesEndPage(args: string[]): number {
  const out = execFileSync(
    "typst",
    ["query", ...args, TEMPLATE, "<rules-end>", "--field", "value", "--one"],
    { encoding: "utf8" },
  );
  return Number(out.trim());
}

async function main(): Promise<void> {
  const shortened: string[] = [];
  const catalog = buildCatalog("content");
  rmSync(OUT, { recursive: true, force: true });
  rmSync(TMP, { recursive: true, force: true });
  mkdirSync(OUT, { recursive: true });

  const games = catalog.games.filter((g) => g.rules);
  for (const game of games) {
    const dir = join(TMP, game.id);
    mkdirSync(dir, { recursive: true });
    const data = kitData(catalog, game);
    writeFileSync(join(dir, "data.json"), JSON.stringify(data));
    writeFileSync(
      join(dir, "qr.svg"),
      await QRCode.toString(data.url, {
        type: "svg",
        margin: 0,
        errorCorrectionLevel: "M",
        color: { dark: "#23201bff", light: "#ffffffff" },
      }),
    );
    if (game.diagram) {
      const board = boardShapes(game.diagram);
      writeFileSync(join(dir, "ornate.svg"), ornatePage(board));
      writeFileSync(join(dir, "simple.svg"), simplePage(board));
    }
    // The rules are never cut: when the sheet runs past one page, the history (also on the site) goes first
    const args = typstArgs(game.id);
    const history = rulesEndPage(args) > 1 ? "no" : "yes";
    if (history === "no") shortened.push(game.id);
    execFileSync(
      "typst",
      [
        "compile",
        ...args,
        "--input",
        `history=${history}`,
        TEMPLATE,
        join(OUT, `${game.id}.pdf`),
      ],
      { stdio: "inherit" },
    );
  }
  rmSync(TMP, { recursive: true, force: true });
  console.log(`kits: ${games.length} PDFs in ${OUT}/`);
  if (shortened.length)
    console.log(`kits without history (too long): ${shortened.join(", ")}`);
}

main().catch((e: unknown) => {
  console.error((e as Error).message);
  process.exit(1);
});
