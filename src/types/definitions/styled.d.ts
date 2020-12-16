import 'styled-components';

import { Colors } from '../../theme/colors.types';
import { Typography } from '../../theme/typography.types';
import { Buttons } from '../../theme/buttons.types';
import { Forms } from '../../theme/forms.types';
import { Layout } from '../../theme/layout.types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    typography: Typography;
    buttons: Buttons;
    forms: Forms;
    layout: Layout;
    borderRadius: number;
  }
}
