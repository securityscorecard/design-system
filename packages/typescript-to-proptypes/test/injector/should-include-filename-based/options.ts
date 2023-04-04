import type { TestOptions } from '../../types';

import * as path from 'path';

const options: TestOptions = {
  injector: {
    includeUnusedProps: true,
    shouldInclude: ({ prop }) => {
      let isLocallyTyped = false;
      prop.filenames.forEach((filename) => {
        if (!path.relative(__dirname, filename).startsWith('..')) {
          isLocallyTyped = true;
        }
      });
      return isLocallyTyped;
    },
  },
};

export default options;
