import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 448;
export const height = 512;
export const unicode = 'e015';
export const svgPathData =
  'M 9.143 272 C 4.091 272 0 267.909 0 262.858 L 0 249.143 C 0 244.092 4.091 240 9.143 240 L 390.516 240 L 303.251 152.731 C 299.681 149.161 299.681 143.374 303.251 139.803 L 312.947 130.103 C 316.518 126.532 322.305 126.532 325.875 130.103 L 429.14 233.367 L 429.149 233.358 L 445.309 249.523 C 446.026 250.24 446.603 251.05 447.032 251.913 C 448.751 255.337 448.18 259.621 445.323 262.478 L 429.158 278.643 L 429.14 278.624 L 325.866 381.898 C 322.296 385.468 316.504 385.468 312.934 381.898 L 303.237 372.197 C 299.667 368.627 299.667 362.839 303.237 359.269 L 390.507 272 L 9.143 272 Z';

export const longArrowRight = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'long-arrow-right' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
