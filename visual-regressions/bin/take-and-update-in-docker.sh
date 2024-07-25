#!/usr/bin/env sh
docker run --rm --network host -v "$PWD/.storybook/image-snapshots/:/usr/src/app/snapshots" -it radekpodrazky/visual-regressions:node22.4.1-chrome-126.0.6478.126-001 yarn take-and-update
