# Fallback for shells without Node on PATH (macOS Homebrew); appended so version managers like fnm win
NODE_ENV = PATH="$$PATH:/opt/homebrew/bin"
NPX = $(NODE_ENV) npx

.PHONY: install dev data test test-watch format check build preview

install:
	$(NODE_ENV) npm ci

# Needs Node with native TypeScript support (22.18+)
data:
	$(NODE_ENV) node --disable-warning=ExperimentalWarning scripts/build-data.ts

dev: data
	$(NPX) vite

test:
	$(NPX) vitest run

test-watch:
	$(NPX) vitest

format:
	$(NPX) biome check --write .

check: data
	$(NPX) biome check .
	$(NPX) tsc --noEmit
	$(NPX) vitest run

build: data
	$(NPX) tsc --noEmit
	$(NPX) vite build

preview:
	$(NPX) vite preview
