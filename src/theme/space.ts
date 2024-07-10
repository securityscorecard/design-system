const spacingScale = [0, 2, 4, 8, 16, 24, 32, 48, 64, 96, 128];
const baseSpaceUnit = '0.25rem';

export const createSpace = () => ({
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

  /* new tokens */
  none: 0,
  'half-x': `calc(${baseSpaceUnit} / 2)`,
  '1x': baseSpaceUnit,
  '2x': `calc(${baseSpaceUnit} * 2)`,
  '3x': `calc(${baseSpaceUnit} * 3)`,
  '4x': `calc(${baseSpaceUnit} * 4)`,
  '6x': `calc(${baseSpaceUnit} * 6)`,
  '8x': `calc(${baseSpaceUnit} * 8)`,
  '12x': `calc(${baseSpaceUnit} * 12)`,
  '16x': `calc(${baseSpaceUnit} * 16)`,
  '24x': `calc(${baseSpaceUnit} * 24)`,
  '32x': `calc(${baseSpaceUnit} * 32)`,
});
