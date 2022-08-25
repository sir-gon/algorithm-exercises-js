FROM node:18.8.0-alpine3.16 as base

RUN apk add --update --no-cache make

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

FROM base as development

FROM development as builder

COPY ./src ${WORKDIR}/src
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json

RUN npm ci --verbose

FROM builder as testing

WORKDIR /app

COPY ./jest.config.js /app/jest.config.js
COPY ./.eslintrc /app/.eslintrc
COPY ./.prettierrc /app/.prettierrc

RUN ls -alh

USER node
CMD ["npm", "run", "test"]
