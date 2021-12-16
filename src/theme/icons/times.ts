import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 500;
export const height = 500;
export const unicode = 'e005';
export const svgPathData =
  'M 140.396 95.477 L 404.524 359.603 C 408.492 363.573 408.492 370.008 404.524 373.978 L 373.979 404.523 C 370.009 408.492 363.573 408.492 359.603 404.523 L 95.477 140.396 C 91.508 136.427 91.508 129.992 95.477 126.022 L 126.023 95.477 C 129.992 91.508 136.427 91.508 140.396 95.477 Z M 404.524 140.396 L 140.396 404.523 C 136.427 408.492 129.992 408.492 126.022 404.523 L 95.477 373.978 C 91.508 370.008 91.508 363.573 95.477 359.603 L 359.603 95.477 C 363.573 91.508 370.009 91.508 373.979 95.477 L 404.524 126.023 C 408.492 129.992 408.492 136.427 404.524 140.396 Z';

export const times = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'times' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
