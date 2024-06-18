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

## TL;DR

[Install and run](#install-and-run)

## What is this?

This repository is part of a series that share and solve the same [objectives](#objetives),
with the difference that each one is based on a different software ecosystem,
depending on the chosen programming language:

- [Modern Javascript: algorithm-exercises-js](https://github.com/sir-gon/algorithm-exercises-js)
- [Python 3.x: algorithm-exercises-py](https://github.com/sir-gon/algorithm-exercises-py)
- [Typescript: algorithm-exercises-ts](https://github.com/sir-gon/algorithm-exercises-ts)
- [Go / Golang: algorithm-exercises-go](https://github.com/sir-gon/algorithm-exercises-go)
- [Java: algorithm-exercises-java](https://github.com/sir-gon/algorithm-exercises-java)
- [.NET / C#: algorithm-exercises-csharp](https://github.com/sir-gon/algorithm-exercises-csharp)

## Objetives

### Functional

- For academic purposes, it is an backup of some algorithm exercises
(with their solutions), proposed by various sources:
[leetcode, hackerrank, projecteuler](#algorithm-excersices-sources), ...

- The solutions must be written on "vanilla code", that is,
avoiding as much as possible the use of external libraries (in runtime).

- Adoption of methodology and good practices.
Each exercise is implemented as a unit test set,
using TDD (Test-driven Development) and Clean Code ideas.

### Technical

Foundation of a project that supports:

- Explicit **typing** when the language supports it, even when it is not mandatory.
- Static Code Analysis (**Lint**) of code, scripts and documentation.
- Uniform **Code Styling**.
- **Unit Test** framework.
- **Coverge** collection. High coverage percentage. Equal or close to 100%.
- **Pipeline** (Github Actions). Each command must take care of its
return status code.
- **Docker**-based workflow to replicate behavior in any environment.
- Other tools to support the reinforcement of software development **good practices**.

## Install and Run

You can run tests in the following ways:

- [Install and run directly](#install-and-run-directly) require runtime tools
installed in your SO.
- [Install and run with make](#install-and-run-using-make) require runtime tools
and "make" installed in your SO.
- [Install and in Docker](#install-and-running-with-docker-) require Docker and
docker-compose installed.
- (⭐️)
[Install and in Docker with make](#install-and-running-with-docker--using-make)
require docker-compose and make installed.

⭐️: Prefered way.

### Install and Run directly

Using a NodeJS runtime in your SO. You must install dependencies:

```bash
npm install
```

Every problem is a function with unit test.

Unit test has test cases and input data to solve the problem.

Run all tests:

```bash
npm run test
```

#### Test run with alternative behaviors

You can change test running behaviour using some environment variables as follows:

| Variable | Values | Default |
| ------ | ------ | ------ |
| LOG_LEVEL  | `debug`, `warning`, `error`, `info` | `info` |
| BRUTEFORCE | `true`, `false`| `false` |

- `LOG_LEVEL`: change verbosity level in outputs.
- `BRUTEFORCE`: enable or disable running large tests.
(long time, large amount of data, high memory consumition).

#### Examples running tests with alternative behaviors

Run tests with debug outputs:

```bash
LOG_LEVEL=debug npm run test
```

Run brute-force tests with debug outputs:

```bash
BRUTEFORCE=true LOG_LEVEL=debug npm run test
```

### Install and Run using make

`make` tool is used to standardizes the commands for the same tasks
across each sibling repository.

Run tests (libraries are installed as dependency task in make):

```bash
make test
```

Run tests with debug outputs:

```bash
make test -e LOG_LEVEL=debug
```

Run brute-force tests with debug outputs:

```bash
make test -e BRUTEFORCE=true -e LOG_LEVEL=debug
```

Alternative way, use environment variables as prefix:

```bash
BRUTEFORCE=true LOG_LEVEL=debug make test
```

### Install and Running with Docker 🐳

Build an image of the test stage.
Then creates and ephemeral container an run tests.

BRUTEFORCE and LOG_LEVEL environment variables are passing from current
environment using docker-compose.

```bash
docker-compose --profile testing run --rm algorithm-exercises-js-test
```

To change behavior using environment variables, you can pass to containers
in the following ways:

From host using docker-compose (compose.yaml) mechanism:

```bash
BRUTEFORCE=true LOG_LEVEL=debug docker-compose --profile testing run --rm algorithm-exercises-js-test
```

Overriding docker CMD, as parameter of make "-e":

```bash
docker-compose --profile testing run --rm algorithm-exercises-js-test make test -e LOG_LEVEL=DEBUG -e BRUTEFORCE=true
```

### Install and Running with Docker 🐳 using make

```bash
make compose/build
make compose/test
```

To pass environment variables you can use docker-compose
or overriding CMD and passing to make as "-e" argument.

Passing environment variables using docker-compose (compose.yaml mechanism):

```bash
BRUTEFORCE=true LOG_LEVEL=debug make compose/test
```

## Development workflow using Docker / docker-compose

Running container with development target.
Designed for development workflow on top of this image.
All source application is mounted as a volume in **/app** directory.
Dependencies should be installed to run so, you must
install dependencies before run (or after a dependency add/change).

```bash
# Build development target image
docker-compose build --compress algorithm-exercises-js-dev
# run ephemeral container to install dependencies using docker runtime
# and store them in host directory (by bind-mount volume)
docker-compose run --rm algorithm-exercises-js-dev npm install --verbose
# Run ephemeral container and override command to run test
docker-compose run --rm algorithm-exercises-js-dev npm run test
```

## Run complete workflow (Docker + make)

Following command simulates a standarized pipeline across environments,
using docker-compose and make.

```bash
make compose/build && make compose/lint && make compose/test && make compose/run
```

- Build all Docker stages and tag relevant images.
- Run static analysis (lint) checks
- Run unit tests
- Run a "final" production ready image as a final container.
Final "production" image just shows a minimal "production ready"
build (with no tests).

## About development

Developed with runtime:

```text
node --version
v22.2.0
```

## Algorithm excersices sources

- [Leetcode](https://leetcode.com/) online platform for
coding interview preparation.
- [HackerRank](https://www.hackerrank.com/) competitive programming challenges
for both consumers and businesses.
- [Project Euler](https://projecteuler.net/) a series of computational problems
intended to be solved with computer programs.

Use these answers to learn some tip and tricks for algorithms tests.

### Disclaimer. Why I publish solutions?

As Project Euler says:

<https://projecteuler.net/about#publish>

```text
I learned so much solving problem XXX, so is it okay to publish my solution elsewhere?
It appears that you have answered your own question. There is nothing quite like that "Aha!" moment when you finally beat a problem which you have been working on for some time. It is often through the best of intentions in wishing to share our insights so that others can enjoy that moment too. Sadly, that will rarely be the case for your readers. Real learning is an active process and seeing how it is done is a long way from experiencing that epiphany of discovery. Please do not deny others what you have so richly valued yourself.

However, the rule about sharing solutions outside of Project Euler does not apply to the first one-hundred problems, as long as any discussion clearly aims to instruct methods, not just provide answers, and does not directly threaten to undermine the enjoyment of solving later problems. Problems 1 to 100 provide a wealth of helpful introductory teaching material and if you are able to respect our requirements, then we give permission for those problems and their solutions to be discussed elsewhere.
```

If you have better answers or optimal solutions, fork and PR-me

Enjoy 😁 !

## Status

### License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsir-gon%2Fprojecteuler-js.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsir-gon%2Fprojecteuler-js?ref=badge_large)

### Coverage

[![Codecov](https://codecov.io/gh/sir-gon/algorithm-exercises-js/branch/main/graphs/tree.svg?token=TBP53GERMA)](https://codecov.io/gh/sir-gon/algorithm-exercises-js)
