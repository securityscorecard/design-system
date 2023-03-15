#!/usr/bin/env sh
docker run --rm --network host -v "$PWD/.storybook/image-snapshots/:/usr/src/app/snapshots" -it abykovssc/visual-regressions:multi-arch-ubuntu yarn take-and-update
