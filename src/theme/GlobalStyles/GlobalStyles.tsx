import { createGlobalStyle } from 'styled-components';
import resetStyles from 'styled-reset-advanced';

import { BASE_FONT_SIZE, BASE_LINE_HEIGHT } from '../constants';
import {
  getColor,
  getFontFamily,
  getFontWeight,
  pxToRem,
} from '../../utils/helpers';
import SpaceMonoRegularWoff2 from '../fonts/SpaceMono-Regular.woff2';
import SpaceMonoRegularWoff from '../fonts/SpaceMono-Regular.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'space-mono';
    src: url(${SpaceMonoRegularWoff2}), url(${SpaceMonoRegularWoff});
    font-style: normal;
    font-weight: 400;
  }

  ${resetStyles};

  body {
    background: ${getColor('graphite5H')};
    font-family: ${getFontFamily('base')};
    font-weight: ${getFontWeight('regular')};
    font-size: ${pxToRem(BASE_FONT_SIZE)};
    line-height: ${pxToRem(BASE_LINE_HEIGHT)};
    color: ${getColor('graphite4B')};
  }
`;
