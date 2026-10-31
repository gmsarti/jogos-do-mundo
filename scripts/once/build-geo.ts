// Builds public/geo/countries.json (T-023): the 110m world map plus, from the
// 50m map, the countries 110m lacks that have games (they show up as dots).
// The maps are quantized differently in y, so the 50m arcs are re-quantized first.
// Run with: node scripts/once/build-geo.ts
import { readFileSync, writeFileSync } from "node:fs";

type Arcs = number | Arcs[];

interface Geometry {
  type: string;
  id: string;
  arcs: Arcs;
  properties: { name: string };
}

interface Topology {
  type: "Topology";
  transform: { scale: [number, number]; translate: [number, number] };
  objects: { countries: { type: string; geometries: Geometry[] } };
  arcs: number[][][];
}

const readTopology = (resolution: string): Topology =>
  JSON.parse(
    readFileSync(
      `node_modules/world-atlas/countries-${resolution}.json`,
      "utf8",
    ),
  );

const countriesNeeded = (): string[] =>
  Object.values(
    JSON.parse(readFileSync("content/countries.json", "utf8")) as Record<
      string,
      { num: string }
    >,
  ).map((c) => c.num);

/** Re-quantizes a delta-encoded arc from the `from` grid to the `to` grid (x is identical). */
function requantizeArc(
  arc: number[][],
  from: Topology["transform"],
  to: Topology["transform"],
): number[][] {
  let y = 0;
  let prevNewY = 0;
  return arc.map(([dx, dy]) => {
    y += dy as number;
    const newY = Math.round(
      (y * from.scale[1] + from.translate[1] - to.translate[1]) / to.scale[1],
    );
    const delta = newY - prevNewY; // the first point is absolute, so prevNewY starts at 0
    prevNewY = newY;
    return [dx as number, delta];
  });
}

/** Re-indexes arc references (negative = reversed) after appending to the arc list. */
function remapArcs(arcs: Arcs, map: (index: number) => number): Arcs {
  if (Array.isArray(arcs)) return arcs.map((a) => remapArcs(a, map));
  return arcs >= 0 ? map(arcs) : ~map(~arcs);
}

function main(): void {
  const base = readTopology("110m");
  const detailed = readTopology("50m");
  const have = new Set(base.objects.countries.geometries.map((g) => g.id));
  const missing = detailed.objects.countries.geometries.filter(
    (g) => countriesNeeded().includes(g.id) && !have.has(g.id),
  );

  const remapped = new Map<number, number>();
  const addArc = (index: number): number => {
    if (!remapped.has(index)) {
      remapped.set(index, base.arcs.length);
      base.arcs.push(
        requantizeArc(
          detailed.arcs[index] as number[][],
          detailed.transform,
          base.transform,
        ),
      );
    }
    return remapped.get(index) as number;
  };
  for (const geometry of missing) {
    base.objects.countries.geometries.push({
      ...geometry,
      arcs: remapArcs(geometry.arcs, addArc),
    });
  }

  writeFileSync(
    "public/geo/countries.json",
    JSON.stringify({ ...base, objects: { countries: base.objects.countries } }),
  );
  console.log(
    `geo: ${base.objects.countries.geometries.length} countries (+${missing.length} from 50m: ${missing.map((g) => g.properties.name).join(", ")})`,
  );
}

main();
