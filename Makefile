.PHONY: install dev data test test-watch format check build preview

install:
	npm ci

# TODO(T-021): generate src/generated/catalog.json from content/
data:
	@echo "data: nothing to generate yet (T-021)"

dev: data
	npx vite

test:
	npx vitest run

test-watch:
	npx vitest

format:
	npx biome check --write .

check: data
	npx biome check .
	npx tsc --noEmit
	npx vitest run

build: data
	npx tsc --noEmit
	npx vite build

preview:
	npx vite preview
