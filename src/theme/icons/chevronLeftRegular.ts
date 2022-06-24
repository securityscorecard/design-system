import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 500;
export const height = 500;
export const unicode = 'e028';
export const svgPathData =
  'M 390.677 29.375 C 392.623 31.557 394.15 35.037 394.15 37.827 C 394.15 40.615 392.688 44.029 390.74 46.212 L 189.409 250 L 390.732 453.742 C 392.732 455.959 394.132 459.385 394.132 462.206 C 394.132 464.927 392.633 468.454 390.632 470.67 L 363.483 498.404 C 361.318 500.367 357.865 501.907 355.096 501.907 C 352.329 501.907 348.943 500.433 346.775 498.469 L 109.294 259.139 C 107.123 256.619 105.85 252.996 105.85 250 C 105.85 247.187 107.024 243.507 109.203 240.954 C 109.203 240.954 346.71 1.593 346.71 1.593 C 348.873 -0.369 352.326 -1.908 355.096 -1.908 C 357.862 -1.908 361.248 -0.435 363.416 1.528 L 390.677 29.375 Z';

export const chevronLeftRegular = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'chevron-left-regular' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
