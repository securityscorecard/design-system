import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 102;
export const height = 512;
export const unicode = 'e022';
export const svgPathData =
  'M 102 113.485 C 102 141.595 79.212 164.383 51.102 164.383 C 22.992 164.383 0.204 141.595 0.204 113.485 C 0.204 85.375 22.992 62.587 51.102 62.587 C 79.212 62.587 102 85.375 102 113.485 Z M 102 256 C 102 284.11 79.212 306.898 51.102 306.898 C 22.992 306.898 0.204 284.11 0.204 256 C 0.204 227.89 22.992 205.102 51.102 205.102 C 79.212 205.102 102 227.89 102 256 Z M 101.796 398.515 C 101.796 426.625 79.008 449.413 50.898 449.413 C 22.788 449.413 0 426.625 0 398.515 C 0 370.405 22.788 347.617 50.898 347.617 C 79.008 347.617 101.796 370.405 101.796 398.515 Z';

export const ellipsisV = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'ellipsis-v' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
