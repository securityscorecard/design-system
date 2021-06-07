import styled from 'styled-components';
import PropTypes from 'prop-types';
import { prop } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import { Property } from 'csstype';

import { SpaceSizes } from '../../../theme/space.enums';
import { SpaceSize } from '../../../theme/space.types';
import { getSpace } from '../../../utils';
import { AlignItemsPropType } from '../../../types/flex.types';

export interface StackProps {
  /**
   * Whitespace between each child of the Stack
   */
  gap?: SpaceSize;
  /**
   * Horizontal alignment of elements inside Inline
   */
  justify?: Property.AlignItems;
  /**
   * Index of element after which the Stack is splitted. Leave 'undefined' for no splitting.
   */
  splitAt?: number;
  /**
   * Should apply gap recursively (on nested levels)
   */
  isRecursive?: boolean;
}

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: ${prop('justify')};
  justify-content: flex-start;

  ${({ isRecursive }) => (isRecursive ? '' : '>')} * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${({ isRecursive }) => (isRecursive ? '' : '>')} * + * {
    margin-top: ${({ gap, theme }) => getSpace(gap, { theme })};
  }

  ${({ splitAt }) =>
    isNotUndefined(splitAt) &&
    `
    :only-child {
      height: 100%;
    }

    > :nth-child(${splitAt}) {
      margin-bottom: auto;
    }
  `}
`;

Stack.propTypes = {
  gap: PropTypes.oneOf(Object.values(SpaceSizes)),
  justify: AlignItemsPropType,
  splitAt: PropTypes.number,
  isRecursive: PropTypes.bool,
};

Stack.defaultProps = {
  gap: SpaceSizes.none,
  justify: 'flex-start',
  isRecursive: false,
};

export default Stack;
