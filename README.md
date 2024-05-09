# Algorithm Exercises (NodeJS ES6)

[![Node.js CI](https://github.com/sir-gon/algorithm-exercises-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/sir-gon/algorithm-exercises-js/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/sir-gon/algorithm-exercises-js/graph/badge.svg?token=TBP53GERMA)](https://codecov.io/gh/sir-gon/algorithm-exercises-js)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsir-gon%2Fprojecteuler-js.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsir-gon%2Fprojecteuler-js?ref=badge_shield)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/6198/badge)](https://bestpractices.coreinfrastructure.org/projects/6198)
[![Markdown Lint](https://github.com/sir-gon/algorithm-exercises-js/actions/workflows/markdown-lint.yml/badge.svg)](https://github.com/sir-gon/algorithm-exercises-js/actions/workflows/markdown-lint.yml)

![GitHub](https://img.shields.io/github/license/sir-gon/algorithm-exercises-js)
![GitHub language count](https://img.shields.io/github/languages/count/sir-gon/algorithm-exercises-js)
![GitHub top language](https://img.shields.io/github/languages/top/sir-gon/algorithm-exercises-js)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sir-gon_algorithm-exercises-js&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=sir-gon_algorithm-exercises-js)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=sir-gon_algorithm-exercises-js&metric=coverage)](https://sonarcloud.io/summary/new_code?id=sir-gon_algorithm-exercises-js)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sir-gon_algorithm-exercises-js&metric=bugs)](https://sonarcloud.io/summary/new_code?id=sir-gon_algorithm-exercises-js)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sir-gon_algorithm-exercises-js&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=sir-gon_algorithm-exercises-js)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=sir-gon_algorithm-exercises-js&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=sir-gon_algorithm-exercises-js)

## What is this?

[Project Euler](https://projecteuler.net/) provide some algorithms and mathematical
 problems to solve to be used as experience tests.

Use this answers to learn some tip and tricks for algorithms tests.

## Why I publish solutions?

As Project Euler says:

<https://projecteuler.net/about#publish>

```text
I learned so much solving problem XXX, so is it okay to publish my solution elsewhere?
It appears that you have answered your own question. There is nothing quite like that "Aha!" moment when you finally beat a problem which you have been working on for some time. It is often through the best of intentions in wishing to share our insights so that others can enjoy that moment too. Sadly, that will rarely be the case for your readers. Real learning is an active process and seeing how it is done is a long way from experiencing that epiphany of discovery. Please do not deny others what you have so richly valued yourself.

However, the rule about sharing solutions outside of Project Euler does not apply to the first one-hundred problems, as long as any discussion clearly aims to instruct methods, not just provide answers, and does not directly threaten to undermine the enjoyment of solving later problems. Problems 1 to 100 provide a wealth of helpful introductory teaching material and if you are able to respect our requirements, then we give permission for those problems and their solutions to be discussed elsewhere.
```

If you have better answers or optimal solutions, fork and PR-me

Enjoy 😁 !

## Using NodeJS runtime

### Requirements

You must install dependencies:

```text
npm install
```

Or using make

```text
make dependencies
```

### Testing silently

Every problem is a function with unit test.
Unit test has test cases and input data to solve the problem.

Run all tests:

```text
npm run test
```

### Testing with full logs

Run all tests with debug outputs:

```text
LOG_LEVEL=debug npm run test
```

Use one of following values: debug, warning, error, info.

### Testing using make

```text
make test
```

#### Enable all large BRUTEFORCE tests

Direct in host using a make:

```text
make test -e BRUTEFORCE=true
```

#### Enable all DEBUG outputs

```text
make test -e LOG_LEVEL=debug
```

#### Enable all large BRUTEFORCE tests and all DEBUG outputs

```text
make test -e LOG_LEVEL=debug -e BRUTEFORCE=true
```

## Running with Docker 🐳

## Build a complete image with and run all tests

Running container with testing (final) target.

Designed to store all application files and dependencies as a complete runnable image.
Coverage results will be stored in host **/coverage** directory (mounted as volume).

```text
# Build a complete image
docker-compose build algorithm-exercises-js
docker-compose run --rm algorithm-exercises-js npm run test
```

### Enable BRUTEFORCE tests with full DEBUG output

With docker-compose:

```text
docker-compose --profile testing run --rm algorithm-exercises-js make test -e LOG_LEVEL=DEBUG -e BRUTEFORCE=true
```

Using make:

```text
make docker/compose-run -e LOG_LEVEL=DEBUG -e BRUTEFORCE=true
```

### Build and run a development image

Running container with development target.
Designed to develop on top of this image. All source application is mounted as
 a volume in **/app** directory.
Dependencies should be installed to run (not present in this target) so, you
 must install dependencies before run (or after a dependency add/change).

```text
# install node_modules dependencies using docker runtime and store them in host directory
docker-compose build --compress algorithm-exercises-js-dev
docker-compose run --rm algorithm-exercises-js-dev npm install --verbose
docker-compose run --rm algorithm-exercises-js-dev npm run test
```

## About development

Developed with runtime:

```text
node --version
v22.1.0
```

### License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsir-gon%2Fprojecteuler-js.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsir-gon%2Fprojecteuler-js?ref=badge_large)

### Coverage

[![FOSSA Status](https://codecov.io/gh/sir-gon/algorithm-exercises-js/branch/main/graphs/tree.svg?token=TBP53GERMA)](https://codecov.io/gh/sir-gon/algorithm-exercises-js)
