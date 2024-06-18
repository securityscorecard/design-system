import { colors } from './colors';
import { createDepths } from './depths';
import { createForms } from './forms';
import { createLayout } from './layout';
import { createRadii } from './radii';
import { createSpace } from './space';
import { createTypography } from './typography';
import { createTokens } from './tokens';

export interface Theme {
  colors: typeof colors;
  typography: ReturnType<typeof createTypography>;
  forms: ReturnType<typeof createForms>;
  layout: ReturnType<typeof createLayout>;
  depths: ReturnType<typeof createDepths>;
  space: ReturnType<typeof createSpace>;
  radii: ReturnType<typeof createRadii>;
  tokens: ReturnType<typeof createTokens>;
}
