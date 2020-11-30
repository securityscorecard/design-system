#!/usr/bin/env sh
export PATH="$PATH:../node_modules/.bin/"
rm -rf "$SNAPSHOT_DIR/diff"
rm "$SNAPSHOT_DIR/report.html"
rm "$SNAPSHOT_DIR/report.json"
reg-cli "$SNAPSHOT_DIR"/actual "$SNAPSHOT_DIR"/expected "$SNAPSHOT_DIR"/diff -M 0.01 -A -E -U -R "$SNAPSHOT_DIR"/report.html -J "$SNAPSHOT_DIR"/report.json
# reg-cli update is buggy as hell, so we manually try to copy as many files as possible to prevent any errors
./bin/apply-changes.js
