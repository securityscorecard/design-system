/*
 * !!! IMPORTANT !!!
 * DO NOT FORGET to add license comment if you are adding icon from FontAwesome
 */

import {
  IconDefinition,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export const width = 16; // defined width of SVG
export const height = 16; // defined height of SVG
/*
 * unicode character representation in Private Use Area (e000...f8ff)
 * check last icon exported from `index.ts` in this folder to find what is the next code
 */
export const unicode = 'e000';
export const svgPathData = // SVG path data
  'M11.2938 1C11.7967 1 12.2614 1.26377 12.5143 1.68986L15.8081 7.25507C16.064 7.68696 16.064 8.22319 15.8081 8.65797L12.5143 14.2232C12.2614 14.6493 11.7967 14.913 11.2938 14.913H4.70619C4.28711 14.913 3.89458 14.7299 3.62901 14.4222L7.61298 10.4951C8.79629 10.884 10.1503 10.6273 11.0923 9.69884C11.9675 8.83623 12.2657 7.6204 11.9874 6.51719C11.9345 6.30707 11.6677 6.23586 11.5123 6.38898L9.75673 8.1193L8.15411 7.85612L7.88708 6.27658L9.6427 4.54625C9.79899 4.39221 9.72368 4.12973 9.50907 4.07714C8.39044 3.80395 7.15873 4.09831 6.28447 4.95975C5.34858 5.88216 5.091 7.21923 5.48056 8.38504L2.03757 11.7777L0.191894 8.65797C-0.0639647 8.22609 -0.0639647 7.68986 0.191894 7.25507L3.48571 1.68986C3.73863 1.26377 4.20329 1 4.70619 1H11.2938Z';

export const iconName = {
  prefix: 'ssc' as IconPrefix, // custom icon prefix (default: 'ssc'), used as a icon type in components
  iconName: 'icon-name' as IconName, // icon name representation, used as a icon name in components
  icon: [width, height, [], unicode, svgPathData],
} as IconDefinition;
