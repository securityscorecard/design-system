import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 512;
export const height = 512;
export const unicode = 'e031';
export const svgPathData =
  'M 477.557 256 C 477.557 378.363 378.363 477.557 256 477.557 C 133.637 477.557 34.443 378.363 34.443 256 C 34.443 133.637 133.637 34.443 256 34.443 C 378.363 34.443 477.557 133.637 477.557 256 Z M 256 0 C 114.615 0 0 114.615 0 256 C 0 397.385 114.615 512 256 512 C 397.385 512 512 397.385 512 256 C 512 114.615 397.385 0 256 0 Z M 363.044 180.872 C 369.278 187.106 369.278 197.229 363.044 203.463 L 235.379 331.128 C 229.146 337.361 219.022 337.361 212.788 331.128 L 148.956 267.295 C 142.722 261.062 142.722 250.938 148.956 244.705 C 155.19 238.471 165.313 238.471 171.547 244.705 L 224.109 297.217 L 340.503 180.872 C 346.737 174.639 356.86 174.639 363.094 180.872 L 363.044 180.872 Z';

export const checkCircleLight = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'check-circle-light' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
