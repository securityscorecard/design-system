FROM node:20.11.1

RUN apt-get update -qq \
  && apt-get install -qq --no-install-recommends \
    apt-utils \
    ca-certificates \
    apt-transport-https \
    chromium \
  && apt-get upgrade -qq


WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn --immutable || (tail -30 yarn-error.log && exit 1)
COPY bin bin

ENV PATH="$PATH:/usr/src/app/node_modules/.bin/"
ENV STORYBOOK_URL="http://host.docker.internal:8008"
ENV SNAPSHOT_DIR="/usr/src/app/snapshots"
