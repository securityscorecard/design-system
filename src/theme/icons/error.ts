import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 512;
export const height = 512;
export const unicode = 'e01c';
export const svgPathData =
  'M 361.001 15 L 497.001 150.999 C 506 160 512 172 512 185.001 L 512 328 C 512 341.001 506.999 353.001 498 362 L 361.001 498 C 352 506.999 340 512 326.999 512 L 184 512 C 170.999 512 158.999 506.999 150 498 L 14 362 C 5 353.001 0 341.001 0 328 L 0 185.001 C 0 172 5 160 14 150.999 L 150 15 C 158.999 6 170.999 0 184 0 L 326.999 0 C 340 0 352 6 361.001 15 Z M 326.999 464 L 464 328 L 464 185.001 L 326.999 48 L 184 48 L 48 185.001 L 48 328 L 184 464 L 326.999 464 Z M 256 405.333 C 232.474 405.333 213.333 385.894 213.333 362 C 213.333 338.106 232.474 318.667 256 318.667 C 279.526 318.667 298.667 338.106 298.667 362 C 298.667 385.894 279.526 405.333 256 405.333 Z M 286.475 288.982 L 293.728 141.649 C 294.094 134.224 288.265 128 280.944 128 L 231.056 128 C 223.735 128 217.906 134.224 218.272 141.649 L 225.525 288.982 C 225.866 295.902 231.488 301.333 238.309 301.333 L 273.691 301.333 C 280.512 301.333 286.134 295.902 286.475 288.982 Z';

export const error = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'error' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
