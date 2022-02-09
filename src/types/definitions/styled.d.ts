import 'styled-components';

import { colors } from '../../theme/colors';
import { createButtons } from '../../theme/buttons';
import { createDepths } from '../../theme/depths';
import { createForms } from '../../theme/forms';
import { createLayout } from '../../theme/layout';
import { createRadii } from '../../theme/radii';
import { createSpace } from '../../theme/space';
import { createTypography } from '../../theme/typography';

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
  }
}
