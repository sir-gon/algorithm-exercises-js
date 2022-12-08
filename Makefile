## REFERENCES:
## (1) Passing environment variable with fallback value to Makefile:
##    https://stackoverflow.com/a/70772707/6366150
##

LOG_LEVEL := "info" ## (1) ## INFO | DEBUG
BRUTEFORCE := "false" # true | false

NPM=npm
NPM_PKG_LIST=$(npm list)
NPM_UPDATABLE_MODULES = $(shell npm outdated | cut -d' ' -f 1 | sed '1d' | xargs -I '$$' echo '$$@latest' | xargs echo )

.MAIN: test
.PHONY: all clean dependencies help list test outdated

help: list

list:
	@LC_ALL=C $(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'

env:
	@echo "################################################################################"
	@echo "## Environment: ################################################################"
	@echo "################################################################################"
	@printenv
	@echo "################################################################################"

clean:
	rm -vfr ./node_modules
	rm -vfr ./coverage
	mkdir -p ./coverage
	touch ./coverage/.gitkeep

dependencies:
	@echo "################################################################################"
	@echo "## Dependencies: ###############################################################"
	@echo "################################################################################"
	npm install --verbose
	@echo "################################################################################"

test/static: dependencies
	npm run lint

test: env dependencies test/static
	npm run test

test/bruteforce: dependencies test/static
	npm run jest:bruteforce

outdated:
	-npm outdated

update: dependencies outdated
	npm install $(NPM_UPDATABLE_MODULES)

docker/build:
	BUILDKIT_PROGRESS=plain docker-compose --profile testing build

docker/rebuild:
	BUILDKIT_PROGRESS=plain docker-compose --profile testing build --no-cache

docker/compose-run: docker/build
	docker-compose --profile testing run --rm projecteuler-js make test -e DEBUG=$(DEBUG) -e BRUTEFORCE=$(BRUTEFORCE)

all: test
