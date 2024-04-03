#!/usr/bin/env sh
docker run --rm --network host -v "$PWD/.storybook/image-snapshots/:/usr/src/app/snapshots" -it radekpodrazky/visual-regressions:node18.20.0-chrome-123.0.6312.86-001 yarn take-and-check
