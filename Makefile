.PHONY: all
all: test

.PHONY: build
build: node_modules
	NODE_ENV=production yarn babel src --out-dir lib --copy-files
	yarn flow-copy-source src lib

.PHONY: test
test: venv node_modules
	venv/bin/pre-commit install -f --install-hooks
	venv/bin/pre-commit run --all-files
	yarn typecheck
	yarn test

venv: Makefile requirements-dev.txt
	rm -rf venv
	virtualenv venv --python=python3.6
	venv/bin/pip install -r requirements-dev.txt

node_modules: package.json
	yarn

.PHONY: gen
gen: node_modules
	curl https://meyerweb.com/eric/tools/css/reset/reset.css | \
		python patch_meyer_reset.py > \
		src/components/LemonReset/LemonReset.css

.PHONY: clean
clean:
	rm -rf coverage
	rm -rf lib
	rm -rf node_modules
	rm -rf venv
