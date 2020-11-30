#!/usr/bin/env sh
export PATH="$PATH:../node_modules/.bin/"
rm -rf "$SNAPSHOT_DIR/diff"
rm "$SNAPSHOT_DIR/report.html"
rm "$SNAPSHOT_DIR/report.json"
echo "Working in $SNAPSHOT_DIR"
reg-cli "$SNAPSHOT_DIR/actual" "$SNAPSHOT_DIR/expected" "$SNAPSHOT_DIR/diff" -M 0.01 -A -E -R "$SNAPSHOT_DIR/report.html" -J "$SNAPSHOT_DIR"/report.json
