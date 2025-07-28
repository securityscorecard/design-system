FROM node:22.4.1

RUN apt-get update -q -y \
  && apt-get install -q -y --no-install-recommends \
    apt-utils \
    ca-certificates \
    apt-transport-https \
    chromium \
  && apt-get upgrade -q -y \
  && apt-get clean

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
COPY .yarn ./.yarn
RUN yarn --immutable || (tail -30 yarn-error.log && exit 1)
COPY bin bin

ENV PATH="$PATH:/usr/src/app/node_modules/.bin/"
ENV STORYBOOK_URL="http://host.docker.internal:8008"
ENV SNAPSHOT_DIR="/usr/src/app/snapshots"
