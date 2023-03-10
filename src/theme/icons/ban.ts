import type {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 512;
export const height = 512;
export const unicode = 'e01e';
export const svgPathData =
  'M 486.614 330.709 C 424.484 512.854 188.475 559.437 61.798 414.559 C 3.006 347.321 -15.448 253.825 13.387 169.291 C 75.516 -12.854 311.525 -59.438 438.203 85.441 C 496.994 152.679 515.448 246.175 486.614 330.709 Z M 212.821 61.634 C 183.392 67.443 157.48 79.275 135.681 95.376 L 404.522 364.217 C 454.691 295.762 457.977 196.171 394.54 123.619 C 349.388 71.98 280.117 48.351 212.821 61.634 Z M 105.461 376.381 C 150.612 428.02 219.883 451.649 287.18 438.366 C 316.608 432.557 342.521 420.726 364.319 404.624 L 95.478 135.783 C 45.31 204.238 42.023 303.829 105.461 376.381 Z';

export const ban = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'ban' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
