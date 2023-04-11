import type { DefaultTheme } from 'styled-components';
import type { PaddingType } from '../../../utils/space';
import type { ResponsiveSpaceSize } from '../../../types/responsive.types';

import styled from 'styled-components';
import cls from 'classnames';

import { SpaceSizes } from '../../../theme/space.enums';
import { parseResponsiveStyles } from '../../../utils';
import { PaddingTypes } from './Padbox.enums';
import { CLX_LAYOUT } from '../../../theme/constants';
import { paddingParser } from '../../../utils/parsers';

export interface PadboxProps {
  /**
   * One of padding types.
   * For more information see [Inseting section](/design-system/alpha/?path=/docs/theme-space--page#inseting)
   */
  paddingType?: PaddingType;
  /**
   * One of available space sizes.
   * For more information see [Inseting section](/design-system/alpha/?path=/docs/theme-space--page#inseting)
   */
  paddingSize?: ResponsiveSpaceSize;
  theme: DefaultTheme;
  className?: string;
  [key: string]: unknown;
}

const Padbox = styled.div.attrs((props) => ({
  ...props,
  className: cls(CLX_LAYOUT, props?.className),
}))<PadboxProps>`
  box-sizing: border-box;
  ${parseResponsiveStyles('padding', 'paddingSize', paddingParser)};
`;

Padbox.defaultProps = {
  paddingType: PaddingTypes.square,
  paddingSize: SpaceSizes.none,
};

export default Padbox;
