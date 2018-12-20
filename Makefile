.PHONY: all
all: test

.PHONY: build
build: es lib dist

es: node_modules src src/components/LemonReset/LemonReset.css
	NODE_ENV=production yarn babel src --out-dir es
	cp src/components/LemonReset/LemonReset.css es/components/LemonReset/
	yarn flow-copy-source src es

lib: node_modules src src/components/LemonReset/LemonReset.css
	NODE_ENV=production yarn babel src --plugins=transform-es2015-modules-commonjs --out-dir lib
	cp src/components/LemonReset/LemonReset.css lib/components/LemonReset/
	yarn flow-copy-source src lib

dist: node_modules src src/components/LemonReset/LemonReset.css webpack.config.js
	NODE_ENV=production yarn webpack --mode=production
	cp src/components/LemonReset/LemonReset.js dist/lemon-reset.js.flow

.PHONY: test
test: build venv node_modules
	venv/bin/pre-commit install -f --install-hooks
	venv/bin/pre-commit run --all-files
	yarn typecheck
	yarn test

venv: Makefile requirements-dev.txt
	rm -rf venv
	virtualenv venv --python=python3.6
	venv/bin/pip install -r requirements-dev.txt

src/components/LemonReset/LemonReset.css: node_modules patch-meyer-reset.js
	./patch-meyer-reset.js

node_modules: package.json
	yarn

.PHONY: clean
clean:
	git clean -fdX
