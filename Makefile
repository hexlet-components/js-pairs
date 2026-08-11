# Флаг тишины у pnpm ставится ПЕРЕД именем скрипта: `pnpm --silent run <name>`.
# В форме `pnpm run <name> -s` (так было с npm) pnpm пробрасывает `-s` в саму
# команду, и она падает: `tsc --noEmit -s`, `vitest run -s`. У цели docs это
# ещё и портит результат, потому что баннер pnpm уехал бы прямо в README.
install:
	pnpm install

docs:
	mkdir -p docs
	pnpm --silent run documentation > docs/README.md

test:
	pnpm --silent test

lint:
	pnpm --silent run typecheck
	pnpm --silent run lint
	pnpm --silent run format:check

lint-fix:
	pnpm run lint:fix

publish:
	pnpm publish --access public --no-git-checks

.PHONY: test docs
