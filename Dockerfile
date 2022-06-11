FROM node:18.3.0-alpine3.15 as base


FROM base as development

FROM development as builder

COPY ./src /app/src
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install

FROM builder as testing

WORKDIR /app

COPY ./jest.config.js /app/jest.config.js
COPY ./.eslintrc /app/.eslintrc
COPY ./.prettierrc /app/.prettierrc

RUN ls -alh

CMD ["npm", "run", "test"]
