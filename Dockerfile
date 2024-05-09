FROM node:22.1.0-alpine3.19 AS base

RUN apk add --update --no-cache make

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

FROM node:22.1.0-alpine3.19 AS lint

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

COPY ./src ${WORKDIR}/src
RUN apk add --update --no-cache make
RUN npm install -g markdownlint-cli

FROM base AS development

FROM development AS builder

COPY ./src ${WORKDIR}/src
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json
COPY ./Makefile ${WORKDIR}/

RUN npm ci --verbose

### In testing stage, can't use USER, due permissions issue
## in github actions environment:
##
## https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions
##
FROM builder AS testing

ENV LOG_LEVEL=info
ENV BRUTEFORCE=false

WORKDIR /app

COPY ./.babelrc /app/.babelrc
COPY ./.eslintrc /app/.eslintrc
COPY ./.prettierrc /app/.prettierrc
COPY ./jest.config.js /app/jest.config.js
COPY --from=builder /app/node_modules /app/node_modules
RUN ls -alh

CMD ["npm", "run", "test"]

### In production stage
## in the production phase, "good practices" such as
## WORKSPACE and USER are maintained
##
FROM builder AS production

ENV LOG_LEVEL=info
ENV BRUTEFORCE=false

WORKDIR /app

COPY ./.babelrc /app/.babelrc
COPY ./.eslintrc /app/.eslintrc
COPY ./.prettierrc /app/.prettierrc
COPY ./jest.config.js /app/jest.config.js
COPY --from=builder /app/node_modules /app/node_modules
RUN ls -alh

USER node
CMD ["npm", "run", "test"]
