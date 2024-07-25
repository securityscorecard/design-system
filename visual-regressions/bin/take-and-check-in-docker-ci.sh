#!/usr/bin/env sh
docker run --rm -v "$PWD/.storybook/image-snapshots/:/usr/src/app/snapshots" -v "$PWD/storybook-static:/usr/src/app/storybook" --platform=linux/amd64 radekpodrazky/visual-regressions:node22.4.1-chrome-126.0.6478.126-001 yarn serve-take-and-check
