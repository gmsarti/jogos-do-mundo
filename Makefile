# Fallback for shells without Node on PATH (macOS Homebrew); appended so version managers like fnm win
NODE_ENV = PATH="$$PATH:/opt/homebrew/bin"
NPX = $(NODE_ENV) npx

.PHONY: install dev data kits report test test-watch format check build preview

install:
	$(NODE_ENV) npm ci

# Needs Node with native TypeScript support (22.18+)
data:
	$(NODE_ENV) node --disable-warning=ExperimentalWarning scripts/build-data.ts

# Print kits (PDF) for every game with rules; needs Typst on PATH
kits: data
	$(NODE_ENV) node --disable-warning=ExperimentalWarning scripts/build-kits.ts

# Lists every "(a verificar)" and every `unknown` game in docs/relatorio-verificar.md (commit it)
report:
	$(NODE_ENV) node --disable-warning=ExperimentalWarning scripts/build-report.ts

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

build: kits
	$(NPX) tsc --noEmit
	$(NPX) vite build

preview:
	$(NPX) vite preview
