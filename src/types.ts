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
}

export interface Evidence {
  kind: EvidenceKind;
  date: string;
  ref: string;
}

export interface Game {
  id: string;
  title: string;
  names: string[];
  fam: string[];
  countries: string[];
  cultures: string[];
  board: string;
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
  rules: string;
}

/** Family id → label in pt-BR. */
export type Families = Record<string, string>;

export interface Country {
  /** Name in pt-BR. */
  pt: string;
  /** Numeric code used by the TopoJSON ids. */
  num: string;
}

/** ISO 3166-1 alpha-2 → country. */
export type Countries = Record<string, Country>;

export interface Catalog {
  games: Game[];
  families: Families;
  countries: Countries;
}
