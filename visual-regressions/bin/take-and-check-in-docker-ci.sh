#!/usr/bin/env sh
docker run --rm -v "$PWD/.storybook/image-snapshots/:/usr/src/app/snapshots" -v "$PWD/storybook-static:/usr/src/app/storybook" --platform=linux/amd64 radekpodrazky/visual-regressions:node18.20.0-chrome-123.0.6312.86-002 yarn serve-take-and-check
