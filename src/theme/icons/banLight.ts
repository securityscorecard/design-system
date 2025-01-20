import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 512;
export const height = 512;
export const unicode = 'e034';
export const svgPathData =
  'M 260.043 85.037 C 205.161 85.037 154.94 104.992 116.239 138.041 L 428.595 450.398 C 461.645 411.697 481.6 361.476 481.6 306.594 C 481.6 184.231 382.406 85.037 260.043 85.037 Z M 38.486 306.594 C 38.486 428.957 137.68 528.151 260.043 528.151 C 314.925 528.151 365.146 508.196 403.847 475.146 L 91.49 162.79 C 58.441 201.491 38.486 251.712 38.486 306.594 Z M 516.043 306.594 C 516.043 447.979 401.428 562.594 260.043 562.594 C 118.658 562.594 4.043 447.979 4.043 306.594 C 4.043 165.209 118.658 50.594 260.043 50.594 C 401.428 50.594 516.043 165.209 516.043 306.594 Z';

export const banLight = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'ban-light' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
