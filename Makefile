install:
	npm install

docs:
	mkdir -p docs
	npm run documentation -- build index.js -f md > docs/README.md

test:
	npm test -s

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

publish:
	npm publish --access public

update-deps:
	npx ncu -u

.PHONY: test docs
