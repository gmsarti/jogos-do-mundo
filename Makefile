# Fallback for shells without Node on PATH (macOS Homebrew); appended so version managers like fnm win
NODE_ENV = PATH="$$PATH:/opt/homebrew/bin"
NPX = $(NODE_ENV) npx

.PHONY: install dev data test test-watch format check build preview

install:
	$(NODE_ENV) npm ci

# TODO(T-021): generate src/generated/catalog.json from content/
data:
	@echo "data: nothing to generate yet (T-021)"

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
