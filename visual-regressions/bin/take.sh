#!/usr/bin/env sh
export PATH="$PATH:../node_modules/.bin/"
actual="$SNAPSHOT_DIR/actual"
rm -rf "$actual"
storycap "$STORYBOOK_URL" -f -o "$actual" --disableCssAnimation
cd "$actual" || exit 1
