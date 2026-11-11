// Writes docs/relatorio-verificar.md (T-050). Run with: make report
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { buildCatalog } from "./build-data.ts";
import { buildReport } from "./report.ts";

function main(): void {
  try {
    const { games } = buildCatalog("content");
    writeFileSync("docs/relatorio-verificar.md", buildReport(games));
    console.log("report: docs/relatorio-verificar.md");
  } catch (e) {
    console.error((e as Error).message);
    process.exit(1);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
