import { Space } from './space.types';

const spacingScale = [0, 2, 4, 8, 16, 24, 32, 48, 64, 96, 128];

const space: Space = {
  none: spacingScale[0],
  xxs: spacingScale[1],
  xs: spacingScale[2],
  sm: spacingScale[3],
  md: spacingScale[4],
  mdPlus: spacingScale[5],
  lg: spacingScale[6],
  lgPlus: spacingScale[7],
  xl: spacingScale[8],
  xlPlus: spacingScale[9],
  xxl: spacingScale[10],
};

export default space;
