import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 512;
export const height = 512;
export const unicode = 'e032';
export const svgPathData =
  'M 477.557 256 C 477.557 378.363 378.363 477.557 256 477.557 C 133.637 477.557 34.443 378.363 34.443 256 C 34.443 133.637 133.637 34.443 256 34.443 C 378.363 34.443 477.557 133.637 477.557 256 Z M 256 0 C 114.615 0 0 114.615 0 256 C 0 397.385 114.615 512 256 512 C 397.385 512 512 397.385 512 256 C 512 114.615 397.385 0 256 0 Z M 280.749 355.885 C 280.749 369.553 269.668 380.634 256 380.634 C 242.332 380.634 231.251 369.553 231.251 355.885 C 231.251 342.217 242.332 331.136 256 331.136 C 269.668 331.136 280.749 342.217 280.749 355.885 Z M 256 131.365 C 264.548 131.365 271.477 138.305 271.477 146.865 L 271.477 277.682 C 271.477 286.242 264.548 293.182 256 293.182 C 247.452 293.182 240.523 286.242 240.523 277.682 L 240.523 146.865 C 240.523 138.305 247.452 131.365 256 131.365 Z';

export const exclCircleLight = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'excl-circle-light' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
