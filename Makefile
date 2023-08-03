## REFERENCES:
## (1) Passing environment variable with fallback value to Makefile:
##    https://stackoverflow.com/a/70772707/6366150
## (2) Export environment variables inside "make environment"
##		https://stackoverflow.com/a/49524393/6366150
## (3) Uppercase to lowercase and vice versa
##		https://community.unix.com/t/uppercase-to-lowercase-and-vice-versa/285278/6
## (4) How do I trim leading and trailing whitespace from each line of some output?
## 		https://unix.stackexchange.com/a/279222/233927
############################################################################

## (1) ## Allowed values: info | warn | error | debug
LOG_LEVEL ?= info
## (3) (4)
LOG_LEVEL :=$(shell echo '${LOG_LEVEL}'| tr '[:lower:]' '[:upper:]'| tr -d '[:blank:]')

## (1) ## Allowed values: true | false
BRUTEFORCE ?= false
## (3) (4)
BRUTEFORCE :=$(shell echo '${BRUTEFORCE}'| tr '[:lower:]' '[:upper:]'| tr -d '[:blank:]')

# Package Manager
NPM=npm
NPM_PKG_LIST=$(npm list)
NPM_UPDATABLE_MODULES = $(shell npm outdated | cut -d' ' -f 1 | sed '1d' | xargs -I '$$' echo '$$@latest' | xargs echo )

# DOCKER
BUILDKIT_PROGRESS=plain

.MAIN: test
.PHONY: all clean dependencies help list test outdated
.EXPORT_ALL_VARIABLES: # (2)

help: list

list:
	@LC_ALL=C $(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'

env:
	@echo "################################################################################"
	@echo "## Environment: ################################################################"
	@echo "################################################################################"
	@printenv | grep -E "LOG_LEVEL|BRUTEFORCE|BUILDKIT_PROGRESS"
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
	test -x ./node_modules ||  npm install --verbose
	@echo "################################################################################"

mdlint:
	markdownlint '**/*.md' --ignore node_modules && echo '✔  Your code looks good.'

lint: test/static mdlint

test/static: dependencies
	npm run lint

test: env dependencies test/static
	npm run test

coverage: test

coverage/html: coverage

outdated:
	-npm outdated

update: dependencies outdated
	npm install $(NPM_UPDATABLE_MODULES)

upgrade: update

compose/build: env
	docker-compose --profile testing build

compose/rebuild: env
	docker-compose --profile testing build --no-cache

compose/mdlint: env
	docker-compose --profile lint build
	docker-compose --profile lint run --rm algorithm-exercises-js-mdlint make mdlint

compose/test/static: compose/build
	docker-compose --profile testing run --rm algorithm-exercises-js make test/static

compose/lint: compose/test/static compose/mdlint

compose/run: compose/build
	docker-compose --profile testing run --rm algorithm-exercises-js make test

all: env dependencies test
