install:
	npm install
	npm run flow-typed install

build:
	rm -rf dist
	mkdir dist
	npm run build

docs:
	npm run documentation -- build src/index.js -f md > docs/README.md

test:
	npm run test

lint:
	npm run eslint .

publish:
	npm publish

.PHONY: test docs
