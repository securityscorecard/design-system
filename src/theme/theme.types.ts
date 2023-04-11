import type { colors } from './colors';
import type { createButtons } from './buttons';
import type { createDepths } from './depths';
import type { createForms } from './forms';
import type { createLayout } from './layout';
import type { createRadii } from './radii';
import type { createSpace } from './space';
import type { createTypography } from './typography';
import type { createTokens } from './tokens';

export interface Theme {
  colors: typeof colors;
  typography: ReturnType<typeof createTypography>;
  buttons: ReturnType<typeof createButtons>;
  forms: ReturnType<typeof createForms>;
  layout: ReturnType<typeof createLayout>;
  depths: ReturnType<typeof createDepths>;
  space: ReturnType<typeof createSpace>;
  radii: ReturnType<typeof createRadii>;
  tokens: ReturnType<typeof createTokens>;
  breakpoints: string[];
  breakpointsKeys: string[];
}
