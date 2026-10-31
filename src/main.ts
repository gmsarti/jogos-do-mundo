// All subsets: unicode-range makes the browser fetch only the ones the page uses
import "@fontsource/gloock/400.css";
import "@fontsource/commissioner/400.css";
import "@fontsource/commissioner/500.css";
import "@fontsource/commissioner/600.css";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/map.css";
import "./styles/panel.css";
import { countByCountry, searchGames, visibleGames } from "./lib/selectors.ts";
import {
  nextTheme,
  parseTheme,
  THEME_KEY,
  type Theme,
  themeIcon,
  themeLabel,
} from "./lib/theme.ts";
import { focusIsos } from "./map/model.ts";
import { createMap, type GeoTopology } from "./map/render.ts";
import { chipsView } from "./panel/chips.ts";
import { countryView } from "./panel/country-view.ts";
import { gameView } from "./panel/game-view.ts";
import { homeView } from "./panel/home-view.ts";
import { searchView } from "./panel/search-view.ts";
import {
  normalizeState,
  parseHash,
  type State,
  serializeState,
} from "./state.ts";
import type { Catalog } from "./types.ts";

function element(id: string): HTMLElement {
  const found = document.getElementById(id);
  if (!found) throw new Error(`#${id} missing from index.html`);
  return found;
}

// Without a saved choice data-theme stays unset and prefers-color-scheme decides (see tokens.css)
function initTheme(): void {
  const button = element("theme");
  let saved: Theme | null = null;
  try {
    saved = parseTheme(localStorage.getItem(THEME_KEY));
  } catch {
    // storage blocked: follow the system
  }
  const systemDark = matchMedia("(prefers-color-scheme: dark)").matches;
  let theme: Theme = saved ?? (systemDark ? "dark" : "light");

  function apply(): void {
    button.innerHTML = themeIcon(theme);
    button.setAttribute("aria-label", themeLabel(theme));
    button.title = themeLabel(theme);
  }

  button.addEventListener("click", () => {
    theme = nextTheme(theme);
    document.documentElement.dataset.theme = theme;
    apply();
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // storage blocked: the choice lasts until reload
    }
  });
  if (saved) document.documentElement.dataset.theme = saved;
  apply();
}

async function boot(): Promise<void> {
  const geoUrl = `${import.meta.env.BASE_URL}geo/countries.json`;
  const [{ default: catalog }, geo] = await Promise.all([
    import("./generated/catalog.json") as Promise<{ default: Catalog }>,
    fetch(geoUrl).then((r) => r.json() as Promise<GeoTopology>),
  ]);

  const chips = element("chips");
  const panel = element("panel");
  let state = parseHash(location.hash, catalog);

  const map = createMap(element("mapbox"), geo, catalog.countries, (iso) =>
    go({ ...state, country: iso, game: null }),
  );

  let focused = "";
  const search = element("search") as HTMLInputElement;
  const legendGame = element("legend-game");

  function render(): void {
    search.value = "";
    const { fam, country, game } = state;
    const found = catalog.games.find((g) => g.id === game);
    chips.innerHTML = chipsView(catalog, fam);
    map.paint(
      countByCountry(visibleGames(catalog.games, fam)),
      country,
      found?.countries ?? [],
    );
    legendGame.hidden = !found;
    // Zoom only when the target changes, so picking a chip keeps the user's own zoom
    const isos = focusIsos(catalog.games, game, country);
    if (isos.join() !== focused) {
      focused = isos.join();
      map.focus(isos);
    }
    if (found) panel.innerHTML = gameView(catalog, found, country);
    else if (country) panel.innerHTML = countryView(catalog, fam, country);
    else panel.innerHTML = homeView(catalog, fam);
    panel.scrollTop = 0;
  }

  // Changing the state only touches the URL; hashchange renders (back/forward work the same way)
  function go(next: State): void {
    const hash = serializeState(normalizeState(next, catalog));
    if (hash === location.hash || (hash === "#/" && !location.hash)) return;
    location.hash = hash;
  }

  addEventListener("hashchange", () => {
    state = parseHash(location.hash, catalog);
    render();
  });

  search.addEventListener("input", () => {
    if (!search.value.trim()) return render();
    const results = searchGames(
      visibleGames(catalog.games, state.fam),
      search.value,
    );
    panel.innerHTML = searchView(catalog, results);
    panel.scrollTop = 0;
  });

  chips.addEventListener("click", (event) => {
    const chip = (event.target as Element).closest<HTMLElement>("[data-fam]");
    if (chip) go({ ...state, fam: chip.dataset.fam || null, game: null });
  });

  panel.addEventListener("click", (event) => {
    const target = event.target as Element;
    const gameButton = target.closest<HTMLElement>("[data-id]");
    const countryButton = target.closest<HTMLElement>("[data-iso]");
    if (gameButton) go({ ...state, game: gameButton.dataset.id ?? null });
    else if (countryButton)
      go({ ...state, country: countryButton.dataset.iso ?? null, game: null });
    else if (target.closest("[data-home]"))
      go({ ...state, country: null, game: null });
    else if (target.closest("[data-back]")) go({ ...state, game: null });
  });

  render();
}

initTheme();
boot();
