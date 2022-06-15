/* eslint-disable no-console */
import { DefaultTheme } from 'styled-components';
import { mergeDeepRight } from 'ramda';

import { colors as themeColors } from './colors';
import { createButtons } from './buttons';
import { createTypography } from './typography';
import { createForms } from './forms';
import { createLayout } from './layout';
import { createDepths } from './depths';
import { createSpace } from './space';
import { createRadii } from './radii';
import { RecursivePartial } from '../types/utils.types';
import { tokens as themeTokens } from './tokens';

export const createTheme = (
  overrides: RecursivePartial<DefaultTheme> = {},
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
  const tokens = mergeDeepRight(themeTokens, tokensOverride);
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
