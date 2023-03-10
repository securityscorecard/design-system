/* eslint-disable no-console */
import type { DefaultTheme } from 'styled-components';
import type { RecursivePartial } from '../types/utils.types';

import { mergeDeepRight } from 'ramda';

import { colors as themeColors } from './colors';
import { createButtons } from './buttons';
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
    buttons: buttonsOverride = {},
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
  const buttons = mergeDeepRight(createButtons(colors), buttonsOverride);
  const typography = mergeDeepRight(
    createTypography(colors),
    typographyOverride,
  );
  const forms = mergeDeepRight(createForms(colors), formsOverride);
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
    buttons,
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
