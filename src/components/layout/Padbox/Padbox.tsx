import styled, { DefaultTheme } from 'styled-components';
import cls from 'classnames';

import { SpaceSizes } from '../../../theme/space.enums';
import { SpaceSize } from '../../../theme/space.types';
import { createPadding } from '../../../utils';
import { PaddingTypes } from './Padbox.enums';
import { PaddingType } from '../../../utils/space';
import { CLX_LAYOUT } from '../../../theme/constants';

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
  paddingSize?: SpaceSize;
  theme: DefaultTheme;
  className?: string;
  [key: string]: unknown;
}

const Padbox = styled.div.attrs((props) => ({
  ...props,
  className: cls(CLX_LAYOUT, props?.className),
}))<PadboxProps>`
  box-sizing: border-box;
  ${createPadding};
`;

Padbox.defaultProps = {
  paddingType: PaddingTypes.square,
  paddingSize: SpaceSizes.none,
};

export default Padbox;
