import styled from 'styled-components';
import PropTypes from 'prop-types';

import { SpaceSizes } from '../../../theme/space.enums';
import { SpaceSize } from '../../../theme/space.types';
import { createPadding } from '../../../utils';
import { PaddingTypes } from './Padbox.enums';

export type PaddingType = typeof PaddingTypes[keyof typeof PaddingTypes];

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
}

const Padbox = styled.div<PadboxProps>`
  box-sizing: border-box;
  ${createPadding};
`;

Padbox.propTypes = {
  paddingType: PropTypes.oneOf(Object.values(PaddingTypes)),
  paddingSize: PropTypes.oneOf(Object.values(SpaceSizes)),
};

Padbox.defaultProps = {
  paddingType: PaddingTypes.square,
  paddingSize: SpaceSizes.none,
};

export default Padbox;
