import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 9;
export const height = 13;
export const unicode = 'e007';
export const svgPathData =
  'M 3.616 1.866 L 4.324 1.159 C 4.421 1.061 4.579 1.061 4.677 1.159 L 8.053 4.534 C 8.17 4.652 8.17 4.841 8.053 4.959 L 7.593 5.418 C 7.476 5.535 7.286 5.535 7.169 5.418 L 5.125 3.375 L 5.125 11.68 C 5.125 11.846 4.991 11.98 4.825 11.98 L 4.175 11.98 C 4.009 11.98 3.875 11.846 3.875 11.68 L 3.875 3.385 L 1.831 5.428 C 1.714 5.545 1.524 5.545 1.407 5.428 L 0.947 4.968 C 0.83 4.851 0.83 4.661 0.947 4.544 L 3.621 1.871 Z';

export const arrowUp = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'arrow-up' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
