#!/usr/bin/env sh

echo "building image";
localImage="$(docker build -q visual-regressions)"
echo "built image: ${localImage}"
docker run --rm --network host -v "$PWD/.storybook/image-snapshots/:/usr/src/app/snapshots" -it $localImage yarn take-and-update
