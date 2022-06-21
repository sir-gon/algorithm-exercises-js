[![Node.js CI](https://github.com/sir-gon/projecteuler-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/sir-gon/projecteuler-js/actions/workflows/node.js.yml) [![codecov](https://codecov.io/gh/sir-gon/projecteuler-js/branch/main/graph/badge.svg?token=TBP53GERMA)](https://codecov.io/gh/sir-gon/projecteuler-js)

![GitHub](https://img.shields.io/github/license/sir-gon/projecteuler-js) ![GitHub language count](https://img.shields.io/github/languages/count/sir-gon/projecteuler-js) ![GitHub top language](https://img.shields.io/github/languages/top/sir-gon/projecteuler-js)

# What is this?

[Project Euler](https://projecteuler.net/) provide some algorithms and mathematical problems to solve to be used as experience tests.

Use this answers to learn some tip and tricks for algorithms tests.

# Using NodeJS runtime

## Requirements

You must install dependencies:

```
npm install
```

## Testing silently

Every problem is a function with unit test.
Unit test has test cases and input data to solve the problem.

Run all tests:

```
npm run jest
```

## Testing with full logs

Logs are conditioned to _DEBUG environment variable set to 1.

Run all tests with debug outputs:

```
_DEBUG=0 npm run test
```
# Running with Docker 🐳

## Build a complete image with and run all tests
Running container with testing (final) target.

Designed to store all application files and dependencies as a complete runnable image.
Coverage results will be stored in host **/coverage** directory (mounted as volume).

```
# Build a complete image
docker-compose build --compress projecteuler-js
docker-compose run --rm projecteuler-js npm run test
```


## Build and run a development image

Running container with development target.
Designed to develop on top of this image. All source application is mounted as a volume in **/app** directory.
Dependencies should be installed to run (not present in this target) so, you must install dependencies before run (or after a dependency add/change).

```
# install node_modules dependencies using docker runtime and store them in host directory
docker-compose build --compress projecteuler-js-dev
docker-compose run --rm projecteuler-js-dev npm install --verbose
docker-compose run --rm projecteuler-js-dev npm run test
```

# About development

Developed with runtime:

```
node --version
v18.2.0
```

# Why I publish solutions?

As Project Euler says:

https://projecteuler.net/about#publish


```
I learned so much solving problem XXX, so is it okay to publish my solution elsewhere?
It appears that you have answered your own question. There is nothing quite like that "Aha!" moment when you finally beat a problem which you have been working on for some time. It is often through the best of intentions in wishing to share our insights so that others can enjoy that moment too. Sadly, that will rarely be the case for your readers. Real learning is an active process and seeing how it is done is a long way from experiencing that epiphany of discovery. Please do not deny others what you have so richly valued yourself.

However, the rule about sharing solutions outside of Project Euler does not apply to the first one-hundred problems, as long as any discussion clearly aims to instruct methods, not just provide answers, and does not directly threaten to undermine the enjoyment of solving later problems. Problems 1 to 100 provide a wealth of helpful introductory teaching material and if you are able to respect our requirements, then we give permission for those problems and their solutions to be discussed elsewhere.
```


If you have better answers or optimal solutions, fork and PR-me

Enjoy 😁 !
