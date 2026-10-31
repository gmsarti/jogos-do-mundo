import { geoNaturalEarth1, geoPath } from "d3-geo";
import { type Selection, select } from "d3-selection";
import "d3-transition";
import { zoom, zoomIdentity } from "d3-zoom";
import type { Feature, Geometry } from "geojson";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { Countries } from "../types.ts";
import {
  countryClass,
  dotClass,
  focusTransform,
  isoByNum,
  isTabStop,
  SMALL_COUNTRIES,
  tooltipText,
  visibleDots,
} from "./model.ts";

const ANTARCTICA = "010";
const DOT_RADIUS = 4;
const ZOOM_STEP = 1.6;

export type GeoTopology = Topology<{ countries: GeometryCollection }>;

export interface MapView {
  /** Applies counts per country, the selected country and the open game's countries to the SVG. */
  paint(
    counts: Record<string, number>,
    selected: string | null,
    inGame: string[],
  ): void;
  /** Zooms to the given countries, or back to the whole world when empty. */
  focus(isos: string[]): void;
}

type CountryFeature = Feature<Geometry>;

/** Draws the map once; `paint` only swaps classes afterwards. */
export function createMap(
  box: HTMLElement,
  geo: GeoTopology,
  countries: Countries,
  onSelect: (iso: string) => void,
): MapView {
  const toIso = isoByNum(countries);
  const isoOf = (d: CountryFeature) => toIso[String(d.id)] ?? "";
  const features = feature(geo, geo.objects.countries).features.filter(
    (f) => f.id !== ANTARCTICA,
  );

  const svg = select<SVGSVGElement, unknown>("#map");
  const tip = select<HTMLElement, unknown>("#tip");
  const root = svg.append("g");
  const projection = geoNaturalEarth1();
  const path = geoPath(projection);

  const shapes = root
    .selectAll<SVGPathElement, CountryFeature>("path")
    .data(features)
    .join("path")
    .attr("class", "country");
  const dots = root
    .selectAll<SVGCircleElement, CountryFeature>("circle")
    .data(features.filter((f) => SMALL_COUNTRIES.includes(isoOf(f))))
    .join("circle")
    .attr("class", "dot")
    .attr("r", DOT_RADIUS);

  let counts: Record<string, number> = {};

  function resize(): void {
    const { clientWidth: w, clientHeight: h } = box;
    projection.fitExtent(
      [
        [8, 8],
        [w - 8, h - 8],
      ],
      { type: "Sphere" },
    );
    svg.attr("viewBox", `0 0 ${w} ${h}`);
    shapes.attr("d", path);
    dots
      .attr("cx", (d) => path.centroid(d)[0])
      .attr("cy", (d) => path.centroid(d)[1]);
  }

  function showTip(event: MouseEvent, d: CountryFeature): void {
    const iso = isoOf(d);
    const count = counts[iso] ?? 0;
    if (!count) {
      tip.style("opacity", 0);
      return;
    }
    const rect = box.getBoundingClientRect();
    tip
      .text(tooltipText(countries[iso]?.pt ?? iso, count))
      .style("left", `${event.clientX - rect.left + 12}px`)
      .style("top", `${event.clientY - rect.top + 12}px`)
      .style("opacity", 1);
  }

  function pick(_event: Event, d: CountryFeature): void {
    const iso = isoOf(d);
    if (iso && counts[iso]) onSelect(iso);
  }

  root
    .selectAll<SVGElement, CountryFeature>(".country, .dot")
    .on("mousemove", showTip)
    .on("mouseleave", () => tip.style("opacity", 0))
    .on("click", pick)
    .on("keydown", (event: KeyboardEvent, d) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      pick(event, d);
    });

  const behavior = zoom<SVGSVGElement, unknown>()
    .scaleExtent([1, 12])
    .on("zoom", (event) => {
      root.attr("transform", event.transform.toString());
      dots.attr("r", DOT_RADIUS / event.transform.k);
    });
  svg.call(behavior);
  select("#zin").on("click", () =>
    svg.transition().call(behavior.scaleBy, ZOOM_STEP),
  );
  select("#zout").on("click", () =>
    svg.transition().call(behavior.scaleBy, 1 / ZOOM_STEP),
  );
  select("#zreset").on("click", () =>
    svg.transition().call(behavior.transform, zoomIdentity),
  );

  function focus(isos: string[]): void {
    const wanted = shapes.filter((d) => isos.includes(isoOf(d))).data();
    let bounds: [[number, number], [number, number]] | null = null;
    for (const d of wanted) {
      const [[x0, y0], [x1, y1]] = path.bounds(d);
      bounds = bounds
        ? [
            [Math.min(bounds[0][0], x0), Math.min(bounds[0][1], y0)],
            [Math.max(bounds[1][0], x1), Math.max(bounds[1][1], y1)],
          ]
        : [
            [x0, y0],
            [x1, y1],
          ];
    }
    const { k, x, y } = focusTransform(
      bounds,
      box.clientWidth,
      box.clientHeight,
    );
    const target = zoomIdentity.translate(x, y).scale(k);
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    svg
      .transition()
      .duration(still ? 0 : 600)
      .call(behavior.transform, target);
  }

  new ResizeObserver(resize).observe(box);
  resize();

  // Countries with games become keyboard buttons named like the tooltip
  function reachable<E extends SVGElement, D extends CountryFeature>(
    selection: Selection<E, D, SVGGElement, unknown>,
    kind: "shape" | "dot",
  ): void {
    const stop = (d: CountryFeature) =>
      isTabStop(kind, isoOf(d), counts[isoOf(d)] ?? 0);
    selection
      .attr("tabindex", (d) => (stop(d) ? 0 : null))
      .attr("role", (d) => (stop(d) ? "button" : null))
      .attr("aria-label", (d) =>
        stop(d)
          ? tooltipText(
              countries[isoOf(d)]?.pt ?? isoOf(d),
              counts[isoOf(d)] ?? 0,
            )
          : null,
      );
  }

  return {
    focus,
    paint(next, selected, inGame) {
      counts = next;
      shapes.attr("class", (d) => {
        const iso = isoOf(d);
        return countryClass(
          counts[iso] ?? 0,
          iso !== "" && iso === selected,
          inGame.includes(iso),
        );
      });
      reachable(shapes, "shape");
      reachable(dots, "dot");
      const shown = visibleDots(SMALL_COUNTRIES, counts);
      dots
        .style("display", (d) => (shown.has(isoOf(d)) ? null : "none"))
        .attr("class", (d) =>
          dotClass(isoOf(d) === selected, inGame.includes(isoOf(d))),
        );
    },
  };
}
