import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 500;
export const height = 500;
export const unicode = 'e001';
export const svgPathData =
  'M 117.771 17.378 L 131.206 3.943 C 134.33 0.819 139.396 0.819 142.52 3.943 L 382.229 243.652 C 385.353 246.777 385.353 251.842 382.229 254.966 L 363.137 274.058 L 117.771 28.692 C 114.647 25.568 114.647 20.502 117.771 17.378 Z M 363.137 225.943 L 382.229 245.035 C 385.353 248.159 385.353 253.224 382.229 256.348 L 142.52 496.057 C 139.395 499.182 134.33 499.182 131.206 496.057 L 117.771 482.622 C 114.647 479.498 114.647 474.433 117.771 471.309 L 363.137 225.943 Z';

export const chevronRight = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'chevron-right' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
