install:
	npm install

docs:
	mkdir -p docs
	npm run documentation -s > docs/README.md

test:
	npm test -s

lint:
	npm run typecheck -s
	npm run lint -s

lint-fix:
	npm run lint:fix

publish:
	npm publish --access public

update-deps:
	npx ncu -u

.PHONY: test docs
