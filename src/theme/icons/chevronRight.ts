import type {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 500;
export const height = 500;
export const unicode = 'e001';
export const svgPathData =
  'M 116.935 15.879 L 130.456 2.358 C 133.601 -0.786 138.7 -0.786 141.844 2.358 L 383.096 243.611 C 384.846 245.36 385.424 247.706 385.424 250 C 385.424 252.446 384.846 254.639 383.096 256.388 L 141.844 497.641 C 138.699 500.787 133.601 500.787 130.456 497.641 L 116.935 484.12 C 113.791 480.976 113.791 475.878 116.935 472.733 L 339.67 250.001 L 116.935 27.267 C 113.791 24.123 113.791 19.024 116.935 15.879 Z';

export const chevronRight = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'chevron-right' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
