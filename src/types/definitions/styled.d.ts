import 'styled-components';

import type { colors } from '../../theme/colors';
import type { createButtons } from '../../theme/buttons';
import type { createDepths } from '../../theme/depths';
import type { createForms } from '../../theme/forms';
import type { createLayout } from '../../theme/layout';
import type { createRadii } from '../../theme/radii';
import type { createSpace } from '../../theme/space';
import type { createTypography } from '../../theme/typography';
import type { tokens } from '../../theme/tokens';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    typography: ReturnType<typeof createTypography>;
    buttons: ReturnType<typeof createButtons>;
    forms: ReturnType<typeof createForms>;
    layout: ReturnType<typeof createLayout>;
    depths: ReturnType<typeof createDepths>;
    space: ReturnType<typeof createSpace>;
    radii: ReturnType<typeof createRadii>;
    breakpoints: string[];
    breakpointsKeys: string[];
    tokens: typeof tokens;
  }
}
