import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 500;
export const height = 500;
export const unicode = 'e027';
export const svgPathData =
  'M 109.302 31.046 L 136.566 3.41 C 138.735 1.462 142.121 0 144.888 0 C 147.658 0 151.112 1.527 153.276 3.474 C 153.276 3.474 390.819 241.023 390.819 241.023 C 392.999 243.557 394.173 247.209 394.173 250 C 394.173 252.974 392.9 256.569 390.728 259.07 L 153.21 496.588 C 151.042 498.537 147.655 500 144.888 500 C 142.118 500 138.665 498.472 136.5 496.524 L 109.346 469 C 107.346 466.8 105.846 463.3 105.846 460.6 C 105.846 457.8 107.246 454.4 109.246 452.2 L 310.601 250 L 109.238 47.756 C 107.29 45.589 105.828 42.201 105.828 39.434 C 105.828 36.665 107.355 33.211 109.302 31.046 Z';

export const chevronRightRegular = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'chevron-right-regular' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
