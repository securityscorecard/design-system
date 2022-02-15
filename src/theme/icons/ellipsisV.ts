import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 100;
export const height = 500;
export const unicode = 'e022';
export const svgPathData =
  'M 100 110 C 100 137.614 77.614 160 50 160 C 22.386 160 0 137.614 0 110 C 0 82.386 22.386 60 50 60 C 77.614 60 100 82.386 100 110 Z M 100 250 C 100 277.614 77.614 300 50 300 C 22.386 300 0 277.614 0 250 C 0 222.386 22.386 200 50 200 C 77.614 200 100 222.386 100 250 Z M 99.8 390 C 99.8 417.614 77.414 440 49.8 440 C 22.186 440 -0.2 417.614 -0.2 390 C -0.2 362.386 22.186 340 49.8 340 C 77.414 340 99.8 362.386 99.8 390 Z';

export const ellipsisV = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'ellipsis-v' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
