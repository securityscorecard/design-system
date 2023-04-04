FROM ubuntu:bionic

RUN apt update \
&& apt upgrade
RUN apt install -y curl

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash
RUN apt install -y nodejs
RUN apt install -y chromium-browser

RUN npm install -g yarn


WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn --immutable || (tail -30 yarn-error.log && exit 1)
COPY bin bin

ENV PATH="$PATH:/usr/src/app/node_modules/.bin/"
ENV STORYBOOK_URL="http://host.docker.internal:8008"
ENV SNAPSHOT_DIR="/usr/src/app/snapshots"
