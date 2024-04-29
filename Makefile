.PHONY: all
all: test

.PHONY: build
build: es lib dist

es: export NODE_ENV = production
es: export BABEL_ENV = module
es: node_modules src src/components/LemonReset/LemonReset.css
	yarn babel src --out-dir es
	cp src/components/LemonReset/LemonReset.css es/components/LemonReset/
	yarn flow-copy-source src es

lib: export NODE_ENV = production
lib: node_modules src src/components/LemonReset/LemonReset.css
	yarn babel src --out-dir lib
	cp src/components/LemonReset/LemonReset.css lib/components/LemonReset/
	yarn flow-copy-source src lib

dist: export NODE_ENV = production
dist: node_modules src src/components/LemonReset/LemonReset.css webpack.config.js
	yarn webpack --mode=production
	cp src/components/LemonReset/LemonReset.js dist/lemon-reset.js.flow

.PHONY: test
test: build venv node_modules
	venv/bin/pre-commit install -f --install-hooks
	venv/bin/pre-commit run --all-files
	yarn typecheck
	yarn test

venv: Makefile requirements-dev.txt
	rm -rf venv
	virtualenv venv --python=python3.10
	venv/bin/pip install -r requirements-dev.txt

src/components/LemonReset/LemonReset.css: node_modules patch-meyer-reset.js
	./patch-meyer-reset.js

node_modules: package.json
	yarn install

.PHONY: clean
clean:
	git clean -fdX
