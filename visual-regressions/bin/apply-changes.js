#!/usr/bin/env node
// reg-cli cannot reliably update snapshots, so we do it manually instead
const fs = require('fs');
const path = require('path');

const snapshotDir = process.env.SNAPSHOT_DIR;
const report = JSON.parse(
  fs.readFileSync(path.join(snapshotDir, 'report.json'), 'UTF-8'),
);
// deleted items are never actually deleted by reg-cli
report.deletedItems.forEach(item => {
  fs.unlinkSync(path.join(snapshotDir, 'expected', item));
});

// this two don't happen only if happen together, e.g. new things were added
// plus few snapshots failed to compare
report.newItems.forEach(item => {
  fs.renameSync(
    path.join(snapshotDir, 'actual', item),
    path.join(snapshotDir, 'expected', item),
  );
});
report.failedItems.forEach(item => {
  fs.renameSync(
    path.join(snapshotDir, 'actual', item),
    path.join(snapshotDir, 'expected', item),
  );
});
