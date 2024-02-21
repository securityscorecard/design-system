#!/usr/bin/env sh
docker run --rm -v "$PWD/.storybook/image-snapshots/:/usr/src/app/snapshots" -v "$PWD/storybook-static:/usr/src/app/storybook" --platform=linux/amd64 radekpodrazky/visual-regressions:node20.11.1-chrome-121.0.6167.160-001 yarn serve-take-and-check