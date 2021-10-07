import { transparentize } from 'polished';

import { Forms } from './forms.types';
import colors from './colors';
import { pxToRem } from '../utils';

const forms: Forms = {
  fieldHeight: pxToRem(32),
  fieldLineHeight: pxToRem(14),
  toggleSize: 20,
  color: colors.graphite4B,
  bgColor: colors.graphite5H,
  disabledColor: colors.graphiteB,
  borderColor: colors.graphiteB,
  borderWidth: '1px',
  statefulBorderWidth: '2px',
  focusBgColor: transparentize(0.9, colors.radiantBlueberry),
  focusBorderColor: colors.radiantBlueberry,
  invalidBgColor: transparentize(0.9, colors.strawberry),
  invalidBorderColor: colors.strawberry,
  activeColor: colors.graphite5H,
  activeBgColor: colors.blueberry0,
  activeBorderColor: colors.blueberryClassic,
  disabledBgColor: colors.graphite2H,
  disabledBorderColor: colors.graphiteHB,
  disabledActiveColor: colors.graphite2B,
  placeholderColor: colors.graphite2B,
  selectIndicatorColor: colors.graphite2B,
  switchColor: colors.graphite2B,
  switchBgColor: colors.graphite3H,
  switchKnobBgColor: colors.graphite3B,
} as const;

export default forms;
