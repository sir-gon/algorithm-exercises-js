NPM=npm
NPM_PKG_LIST=$(npm list)
NPM_UPDATABLE_MODULES = $(shell npm outdated | cut -d' ' -f 1 | sed '1d' | xargs -I '$$' echo '$$@latest' | xargs echo )

.MAIN: test
.PHONY: all clean dependencies help list test outdated

help: list

list:
	@LC_ALL=C $(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'

clean:
	rm -vfr ./node_modules
	rm -vfr ./coverage
	mkdir -p ./coverage
	touch ./coverage/.gitkeep

dependencies:
	npm install --verbose

test/static: dependencies
	npm run lint

test: dependencies test/static
	npm run test

test/bruteforce: dependencies test/static
	npm run jest:bruteforce

outdated:
	-npm outdated

update: dependencies outdated
	npm install $(NPM_UPDATABLE_MODULES)

all: test
