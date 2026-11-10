// Mirrors the schema in scripts/schema.ts; the content lives in content/.

export type Status = "documented" | "partial" | "reconstructed" | "unknown";

export type EvidenceKind =
  | "ethnography"
  | "text"
  | "iconography"
  | "artifact"
  | "oral"
  | "unknown";

export interface Reference {
  title: string;
  url: string;
  /** Language code from `languages.json`; absent when not checked. */
  lang?: string;
}

/** A photo or drawing of the game, always with its author and license. */
export interface GameImage {
  /** Path under `public/`, e.g. `img/games/achi.webp`. */
  src: string;
  alt: string;
  credit: string;
  license: string;
  /** Page where the image and its license are published. */
  url: string;
}

export interface Evidence {
  kind: EvidenceKind;
  date: string;
  ref: string;
}

/**
 * How to draw the board. Sizes count what the sources count: cells for `grid`,
 * intersections for `lines` and `points`, pits per row for `pits`.
 * `note` says which variant is drawn when the sources disagree.
 */
export type Diagram =
  | {
      type: "grid";
      rows: number;
      cols: number;
      checkered?: boolean;
      note?: string;
    }
  | { type: "lines"; rows: number; cols: number; note?: string }
  | {
      type: "points";
      rows: number;
      cols: number;
      diagonals: "alternate" | "main" | "none";
      note?: string;
    }
  | { type: "pits"; rows: number; cols: number; stores: 0 | 2; note?: string }
  | { type: "mill"; diagonals: boolean; note?: string };

export interface Game {
  id: string;
  title: string;
  names: string[];
  fam: string[];
  countries: string[];
  cultures: string[];
  board: string;
  diagram?: Diagram;
  image?: GameImage;
  pieces: string;
  players: string;
  period: string;
  status: Status;
  living: string;
  sens: string;
  ev: Evidence;
  recon: string[];
  refs: Reference[];
  place: string;
  summary: string;
  history: string;
  /** "Do que você vai precisar?": board, pieces and what to improvise them with. */
  needs?: string;
  /** "Como jogar?": step by step for beginners, rewritten from `rules` (content/VOZ.md). */
  howto?: string;
  /** "Para quem conduz": notes for whoever teaches the game. */
  guide?: string;
  rules: string;
}

export interface Family {
  /** Name in pt-BR. */
  label: string;
  /** One sentence on how games of this family are played (content/VOZ.md). */
  desc: string;
}

/** Family id → family. */
export type Families = Record<string, Family>;

export interface Country {
  /** Name in pt-BR. */
  pt: string;
  /** Numeric code used by the TopoJSON ids. */
  num: string;
}

/** ISO 3166-1 alpha-2 → country. */
export type Countries = Record<string, Country>;

/** ISO 639 code (optionally with a region or script tag) → language name in pt-BR. */
export type Languages = Record<string, string>;

export interface GlossaryEntry {
  termo: string;
  def: string;
  /** Other forms found in the texts (plural, verb, synonym). */
  variantes: string[];
}

/** Term id → entry; the words a beginner may not know. */
export type Glossary = Record<string, GlossaryEntry>;

export interface Catalog {
  games: Game[];
  families: Families;
  countries: Countries;
  languages: Languages;
  glossary: Glossary;
}
