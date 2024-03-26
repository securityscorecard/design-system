import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 512;
export const height = 512;
export const unicode = 'e01e';
export const svgPathData =
  'M 498.285 338.616 C 434.665 525.065 192.995 572.748 63.28 424.447 C 3.078 355.62 -15.818 259.915 13.708 173.384 C 77.327 -13.065 318.997 -60.749 448.713 87.553 C 508.914 156.38 527.811 252.085 498.285 338.616 Z M 217.925 63.183 C 187.791 69.13 161.257 81.241 138.935 97.723 L 414.224 372.916 C 465.596 302.843 468.961 200.899 404.003 126.633 C 357.768 73.774 286.835 49.587 217.925 63.183 Z M 107.99 385.367 C 154.224 438.226 225.157 462.413 294.068 448.817 C 324.202 442.87 350.736 430.76 373.057 414.277 L 97.768 139.084 C 46.397 209.157 43.031 311.101 107.99 385.367 Z';

export const ban = {
  prefix: 'ssc' as IconPrefix,
  iconName: 'ban' as IconName,
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
