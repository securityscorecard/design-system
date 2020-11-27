FROM node:12.13.1

# install Chromebrowser - https://github.com/cypress-io/cypress-docker-images/blob/master/browsers/node12.0.0-chrome75/Dockerfile
RUN \
  wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
  apt-get update && \
  apt-get install --no-install-recommends -y \
  make \
  gcc \
  google-chrome-stable \
  g++ \
  python \
  curl \
  ca-certificates \
  libc6 \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile || (tail -30 yarn-error.log && exit 1)
COPY bin bin
ENV PATH="$PATH:/usr/src/app/node_modules/.bin/"
ENV STORYBOOK_URL="http://host.docker.internal:8008"
ENV SNAPSHOT_DIR="/usr/src/app/snapshots"
