/* eslint-disable no-console */
import { DefaultTheme } from 'styled-components';
import { mergeDeepRight } from 'ramda';

import { colors as themeColors } from './colors';
import { createTypography } from './typography';
import { createForms } from './forms';
import { createLayout } from './layout';
import { createDepths } from './depths';
import { createSpace } from './space';
import { createRadii } from './radii';
import { createTokens } from './tokens';
import { Subset } from '../types/utils.types';

export const createTheme = (
  overrides: Subset<DefaultTheme> = {},
): DefaultTheme => {
  const {
    colors: colorsOverride = {},
    typography: typographyOverride = {},
    forms: formsOverride = {},
    layout: layoutOverride = {},
    depths: depthsOverride = {},
    space: spaceOverride = {},
    radii: radiiOverride = {},
    tokens: tokensOverride = {},
    ...rest
  } = overrides;

  const colors = mergeDeepRight(themeColors, colorsOverride);
  const typography = mergeDeepRight(createTypography(), typographyOverride);
  const forms = mergeDeepRight(createForms(), formsOverride);
  const layout = mergeDeepRight(createLayout(), layoutOverride);
  const depths = mergeDeepRight(createDepths(), depthsOverride);
  const space = mergeDeepRight(createSpace(), spaceOverride);
  const radii = mergeDeepRight(createRadii(), radiiOverride);
  const tokens = mergeDeepRight(
    createTokens(colors, typography),
    tokensOverride,
  );

  return {
    colors,
    typography,
    forms,
    layout,
    depths,
    space,
    radii,
    tokens,
    ...rest,
  };
};

export const theme = createTheme();
