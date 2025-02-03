import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 512;
export const height = 512;
export const unicode = 'e007';
export const svgPathData =
  'M 219.538 64.092 L 248.672 35.017 C 252.654 30.975 259.14 31.004 263.182 35.046 L 448.544 220.349 C 453.341 225.205 453.369 232.968 448.543 237.794 L 429.643 256.694 C 424.816 261.521 416.995 261.492 412.198 256.694 L 281.587 126.142 L 281.616 467.644 C 281.587 474.476 276.091 479.971 269.259 480 L 242.537 479.971 C 235.704 480 230.21 474.505 230.21 467.643 L 230.209 126.579 L 99.801 256.927 C 95.004 261.724 87.181 261.754 82.355 256.928 L 63.456 238.027 C 58.629 233.201 58.659 225.378 63.456 220.582 L 219.77 64.325 L 219.538 64.092 Z';

export const arrowUp = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'arrow-up' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
