export type Theme = "light" | "dark";

export const THEME_KEY = "theme";

/** Saved choice, or null when the user never picked one (the system decides). */
export function parseTheme(value: unknown): Theme | null {
  return value === "light" || value === "dark" ? value : null;
}

export function nextTheme(theme: Theme): Theme {
  return theme === "light" ? "dark" : "light";
}

/** Accessible name of the button: what a click will do. */
export function themeLabel(theme: Theme): string {
  return `Mudar para o tema ${nextTheme(theme) === "dark" ? "escuro" : "claro"}`;
}

const SVG_OPEN =
  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';

const SUN = `${SVG_OPEN}<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
const MOON = `${SVG_OPEN}<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`;

/** Icon of the current theme: sun for light, moon for dark. */
export function themeIcon(theme: Theme): string {
  return theme === "light" ? SUN : MOON;
}
