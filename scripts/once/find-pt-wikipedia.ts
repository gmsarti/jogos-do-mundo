// Finds the Portuguese Wikipedia article for each English Wikipedia ref (T-073),
// using the inter-language links. It only prints candidates: open each one and
// check it is the same game before adding it to the game's refs with `lang: pt`.
// Run with: node scripts/once/find-pt-wikipedia.ts
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const EN_WIKI = /url: (https:\/\/en\.wikipedia\.org\/wiki\/(\S+))/;

interface Answer {
  query: {
    normalized?: { from: string; to: string }[];
    redirects?: { from: string; to: string }[];
    pages: Record<string, { title: string; langlinks?: { "*": string }[] }>;
  };
}

/** Maps each English title to its Portuguese one (or null); one request per batch. */
async function ptTitles(titles: string[]): Promise<Map<string, string | null>> {
  const api = new URL("https://en.wikipedia.org/w/api.php");
  api.search = new URLSearchParams({
    action: "query",
    prop: "langlinks",
    lllang: "pt",
    titles: titles.join("|"),
    redirects: "1",
    format: "json",
  }).toString();
  const res = await fetch(api, { headers: { "user-agent": "jogos-do-mundo" } });
  const { query } = (await res.json()) as Answer;
  const follow = (title: string): string => {
    const hops = [...(query.normalized ?? []), ...(query.redirects ?? [])];
    return hops.reduce((t, hop) => (hop.from === t ? hop.to : t), title);
  };
  const byTitle = new Map(
    Object.values(query.pages).map((p) => [p.title, p.langlinks?.[0]?.["*"]]),
  );
  return new Map(titles.map((t) => [t, byTitle.get(follow(t)) ?? null]));
}

const dir = "content/games";
const found: { id: string; url: string; title: string }[] = [];
for (const file of readdirSync(dir).sort()) {
  const match = EN_WIKI.exec(readFileSync(join(dir, file), "utf8"));
  if (match?.[1] && match[2]) {
    found.push({
      id: file.replace(".md", ""),
      url: match[1],
      title: decodeURIComponent(match[2]).replaceAll("_", " "),
    });
  }
}

const BATCH = 50;
for (let i = 0; i < found.length; i += BATCH) {
  const batch = found.slice(i, i + BATCH);
  const pt = await ptTitles(batch.map((g) => g.title));
  for (const g of batch) {
    const title = pt.get(g.title);
    const url = title
      ? `https://pt.wikipedia.org/wiki/${encodeURIComponent(title.replaceAll(" ", "_"))}`
      : "-";
    console.log(`${g.id}\t${g.url}\t${url}`);
  }
}
