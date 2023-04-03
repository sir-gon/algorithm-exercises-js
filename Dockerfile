FROM node:19.8.1-alpine3.16 as base

RUN apk add --update --no-cache make

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

FROM base as development

FROM development as builder

COPY ./src ${WORKDIR}/src
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json
COPY ./Makefile ${WORKDIR}/

RUN npm ci --verbose

FROM builder as testing

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
