#!/usr/bin/env sh
docker run --rm -v "$PWD/.storybook/image-snapshots/:/usr/src/app/snapshots" -v "$PWD/storybook-static:/usr/src/app/storybook" --platform=linux/amd64 abykovssc/visual-regressions:multi-arch yarn serve-take-and-check
