import { geoNaturalEarth1, geoPath } from "d3-geo";
import { select } from "d3-selection";
import "d3-transition";
import { zoom, zoomIdentity } from "d3-zoom";
import type { Feature, Geometry } from "geojson";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { Countries } from "../types.ts";
import {
  countryClass,
  dotClass,
  isoByNum,
  SMALL_COUNTRIES,
  tooltipText,
  visibleDots,
} from "./model.ts";

const ANTARCTICA = "010";
const DOT_RADIUS = 4;
const ZOOM_STEP = 1.6;

export type GeoTopology = Topology<{ countries: GeometryCollection }>;

export interface MapView {
  /** Applies counts per country and the selected country to the SVG. */
  paint(counts: Record<string, number>, selected: string | null): void;
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

  function pick(_event: MouseEvent, d: CountryFeature): void {
    const iso = isoOf(d);
    if (iso && counts[iso]) onSelect(iso);
  }

  root
    .selectAll<SVGElement, CountryFeature>(".country, .dot")
    .on("mousemove", showTip)
    .on("mouseleave", () => tip.style("opacity", 0))
    .on("click", pick);

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

  new ResizeObserver(resize).observe(box);
  resize();

  return {
    paint(next, selected) {
      counts = next;
      shapes.attr("class", (d) => {
        const iso = isoOf(d);
        return countryClass(counts[iso] ?? 0, iso !== "" && iso === selected);
      });
      const shown = visibleDots(SMALL_COUNTRIES, counts);
      dots
        .style("display", (d) => (shown.has(isoOf(d)) ? null : "none"))
        .attr("class", (d) => dotClass(isoOf(d) === selected));
    },
  };
}
