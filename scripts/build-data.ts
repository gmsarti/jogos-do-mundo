import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import type { z } from "zod";
import type { Catalog, Countries, Families, Game } from "../src/types.ts";
import {
  countriesSchema,
  familiesSchema,
  gameSchema,
  languagesSchema,
} from "./schema.ts";

type Section = "history" | "rules";

const SECTION_HEADINGS: Record<string, Section> = {
  História: "history",
  Regras: "rules",
};

const FRONTMATTER = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/;

function formatIssues(file: string, error: z.ZodError): string[] {
  return error.issues.map((issue) => {
    const field = issue.path.join(".") || "(root)";
    return `${file}: ${field}: ${issue.message}`;
  });
}

function readJson(path: string): unknown {
  return JSON.parse(readFileSync(path, "utf8"));
}

/** Splits the body into the `## História` / `## Regras` sections. */
function parseBody(body: string): {
  sections: Partial<Record<Section, string>>;
  errors: string[];
} {
  const sections: Partial<Record<Section, string>> = {};
  const errors: string[] = [];
  const parts = body.split(/^## (.*)$/m);

  if (parts[0]?.trim()) errors.push("text before the first section heading");

  for (let i = 1; i < parts.length; i += 2) {
    const heading = (parts[i] ?? "").trim();
    const key = SECTION_HEADINGS[heading];
    if (!key) errors.push(`unknown section "## ${heading}"`);
    else if (key in sections) errors.push(`duplicate section "## ${heading}"`);
    else sections[key] = (parts[i + 1] ?? "").trim();
  }
  return { sections, errors };
}

function parseGameFile(
  file: string,
  text: string,
  families: Families,
  countries: Countries,
): { game?: Game; errors: string[] } {
  const match = FRONTMATTER.exec(text);
  if (!match) return { errors: [`${file}: missing frontmatter (--- block)`] };

  let frontmatter: unknown;
  try {
    frontmatter = parse(match[1] ?? "");
  } catch (e) {
    return { errors: [`${file}: invalid YAML: ${(e as Error).message}`] };
  }

  const { sections, errors } = parseBody(match[2] ?? "");
  if (errors.length) return { errors: errors.map((m) => `${file}: ${m}`) };

  const fileId = basename(file, ".md");
  const result = gameSchema({ fileId, families, countries }).safeParse({
    ...(frontmatter as object),
    history: sections.history ?? "",
    rules: sections.rules ?? "",
  });
  if (!result.success) return { errors: formatIssues(file, result.error) };
  return { game: result.data, errors: [] };
}

function parseJsonFile<T>(
  path: string,
  file: string,
  schema: z.ZodType<T>,
  errors: string[],
): T {
  const result = schema.safeParse(readJson(path));
  if (result.success) return result.data;
  errors.push(...formatIssues(file, result.error));
  return {} as T;
}

/** Reads and validates `contentDir`; throws one error listing every problem found. */
export function buildCatalog(contentDir: string): Catalog {
  const errors: string[] = [];
  const families = parseJsonFile(
    join(contentDir, "families.json"),
    "families.json",
    familiesSchema,
    errors,
  );
  const countries = parseJsonFile(
    join(contentDir, "countries.json"),
    "countries.json",
    countriesSchema,
    errors,
  );

  const languages = parseJsonFile(
    join(contentDir, "languages.json"),
    "languages.json",
    languagesSchema,
    errors,
  );

  const games: Game[] = [];
  const gamesDir = join(contentDir, "games");
  const files = readdirSync(gamesDir)
    .filter((f) => f.endsWith(".md"))
    .sort();
  for (const name of files) {
    const text = readFileSync(join(gamesDir, name), "utf8");
    const result = parseGameFile(`games/${name}`, text, families, countries);
    errors.push(...result.errors);
    if (result.game) games.push(result.game);
  }

  if (errors.length) throw new Error(errors.join("\n"));
  return { games, families, countries, languages };
}

function main(): void {
  try {
    const catalog = buildCatalog("content");
    mkdirSync("src/generated", { recursive: true });
    writeFileSync("src/generated/catalog.json", JSON.stringify(catalog));
    console.log(
      `catalog: ${catalog.games.length} games, ${Object.keys(catalog.families).length} families, ${Object.keys(catalog.countries).length} countries`,
    );
  } catch (e) {
    console.error((e as Error).message);
    process.exit(1);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
