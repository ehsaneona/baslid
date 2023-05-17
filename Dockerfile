FROM hub.hamdocker.ir/node:14.17.0 AS base

WORKDIR /app

ARG NODE_OPTIONS
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_WEBSITE_URL


COPY package.json ./
COPY . ./
RUN npm i
RUN npm run build

CMD yarn start
