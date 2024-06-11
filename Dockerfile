###############################################################################
FROM node:22.2.0-alpine3.20 AS base

RUN apk add --update --no-cache make

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

###############################################################################
FROM base AS lint

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

RUN apk add --update --no-cache make nodejs npm
RUN apk add --update --no-cache yamllint

RUN npm install -g --ignore-scripts markdownlint-cli

# [!TIP] Use a bind-mount to "/app" to override following "copys"
# for lint and test against "current" sources in this stage

# YAML sources
COPY ./.github ${WORKDIR}/
COPY ./compose.yaml ${WORKDIR}/

# Markdown sources
COPY ./docs ${WORKDIR}/
COPY ./README.md ${WORKDIR}/
COPY ./LICENSE.md ${WORKDIR}/
COPY ./CODE_OF_CONDUCT.md ${WORKDIR}/

# Code source
COPY ./src ${WORKDIR}/src
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json
COPY ./Makefile ${WORKDIR}/

# code linting conf
COPY ./.prettierrc ${WORKDIR}/
COPY ./.prettierignore ${WORKDIR}/
COPY ./.eslintrc ${WORKDIR}/
COPY ./.babelrc ${WORKDIR}/

# markdownlint conf
COPY ./.markdownlint.yaml ${WORKDIR}/

# yamllint conf
COPY ./.yamllint ${WORKDIR}/
COPY ./.yamlignore ${WORKDIR}/

CMD ["make", "lint"]
###############################################################################
FROM base AS development

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

COPY ./src ${WORKDIR}/src
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json
COPY ./Makefile ${WORKDIR}/

RUN npm ci --verbose
RUN ls -alh

# CMD []
WORKDIR ${WORKDIR}
###############################################################################
FROM base AS builder

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

COPY ./src ${WORKDIR}/src
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json
COPY ./Makefile ${WORKDIR}/

RUN rm -vfr node_modules && npm ci --verbose --omit=dev
RUN npm run build

CMD ["ls", "-alh"]

###############################################################################
### In testing stage, can't use USER, due permissions issue
## in github actions environment:
##
## https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions
##
FROM development AS testing

ENV LOG_LEVEL=info
ENV BRUTEFORCE=false
ENV WORKDIR=/app
WORKDIR ${WORKDIR}

COPY ./.babelrc /app/.babelrc
COPY ./jest.config.js /app/jest.config.js
RUN ls -alh

CMD ["make", "test"]

###############################################################################
### In production stage
## in the production phase, "good practices" such as
## WORKSPACE and USER are maintained
##
FROM base AS production

ENV LOG_LEVEL=info
ENV BRUTEFORCE=false
ENV WORKDIR=/app
WORKDIR ${WORKDIR}

COPY --from=builder /app/dist ${WORKDIR}/dist
COPY --from=builder /app/node_modules ${WORKDIR}/node_modules

COPY ./Makefile ${WORKDIR}/
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json
COPY ./Makefile ${WORKDIR}/

RUN ls -alh

USER node
CMD ["ls", "-alh"]
