#!/usr/bin/env sh
export PATH="$PATH:../node_modules/.bin/"
actual="$SNAPSHOT_DIR/actual"
rm -rf "$actual"
storycap "$STORYBOOK_URL" -f -o "$actual" --disableCssAnimation --captureTimeout 10000 --puppeteerLaunchConfig "{\"headless\":true,\"args\":[\"--no-sandbox\",\"--disable-setuid-sandbox\",\"--disable-dev-shm-usage\", \"--disable-gpu\"]}"
cd "$actual" || exit 1
