import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 315;
export const height = 500;
export const unicode = 'e005';
export const svgPathData =
  'M 47.896 95.477 L 312.024 359.603 C 315.992 363.573 315.992 370.008 312.024 373.978 L 281.479 404.523 C 277.509 408.492 271.073 408.492 267.103 404.523 L 2.977 140.396 C -0.992 136.427 -0.992 129.992 2.977 126.022 L 33.523 95.477 C 37.492 91.508 43.927 91.508 47.896 95.477 Z M 312.024 140.396 L 47.896 404.523 C 43.927 408.492 37.492 408.492 33.522 404.523 L 2.977 373.978 C -0.992 370.008 -0.992 363.573 2.977 359.603 L 267.103 95.477 C 271.073 91.508 277.509 91.508 281.479 95.477 L 312.024 126.023 C 315.992 129.992 315.992 136.427 312.024 140.396 Z';

export const times = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'times' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
