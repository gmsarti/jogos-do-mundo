import { z } from "zod";
import type { Countries, Families, Game } from "../src/types.ts";

const KEBAB_ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const text = z.string().min(1);

export const familiesSchema = z.record(z.string().regex(KEBAB_ID), text);

export const countriesSchema = z.record(
  z.string().regex(/^[A-Z]{2}$/),
  z.strictObject({ pt: text, num: z.string().regex(/^\d{3}$/) }),
);

// ISO 639 code, optionally tagged with a script (ko-Hani) or a region (pt-MZ)
export const languagesSchema = z.record(
  z.string().regex(/^[a-z]{2,3}(-[A-Z][a-z]{3}|-[A-Z]{2})?$/),
  text,
);

interface GameContext {
  /** File name without extension; the game id must match it. */
  fileId: string;
  families: Families;
  countries: Countries;
}

export function gameSchema({
  fileId,
  families,
  countries,
}: GameContext): z.ZodType<Game> {
  return z.strictObject({
    id: z
      .string()
      .regex(KEBAB_ID)
      .refine((id) => id === fileId, {
        message: `must match the file name "${fileId}"`,
      }),
    title: text,
    names: z.array(text),
    fam: z
      .array(text)
      .min(1)
      .refine((ids) => ids.every((id) => id in families), {
        message: "unknown family",
      }),
    countries: z
      .array(text)
      .refine((isos) => isos.every((c) => c in countries), {
        message: "unknown country",
      }),
    cultures: z.array(text),
    board: text,
    pieces: text,
    players: text,
    period: text,
    status: z.enum(["documented", "partial", "reconstructed", "unknown"]),
    living: text,
    sens: text,
    ev: z.strictObject({
      kind: z.enum([
        "ethnography",
        "text",
        "iconography",
        "artifact",
        "oral",
        "unknown",
      ]),
      date: z.string(),
      ref: z.string(),
    }),
    recon: z.array(text),
    refs: z
      .array(
        z.strictObject({
          title: text,
          url: z.url({ protocol: /^https?$/ }),
        }),
      )
      .min(1),
    place: z.string(),
    summary: text,
    history: z.string(),
    rules: z.string(),
  });
}
