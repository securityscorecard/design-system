import type { Property } from 'csstype';
import type { ResponsiveSpaceSize } from '../../../types/responsive.types';

import styled from 'styled-components';
import { prop } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { SpaceSizes } from '../../../theme/space.enums';
import { parseResponsiveStyles } from '../../../utils';
import { CLX_LAYOUT } from '../../../theme/constants';
import { gapParser } from '../../../utils/parsers';

export interface StackProps {
  /**
   * Whitespace between each child of the Stack
   */
  gap?: ResponsiveSpaceSize;
  /**
   * Horizontal alignment of elements inside Stack
   */
  justify?: Property.AlignItems;
  /**
   * Vertical alignment of elements inside Stack
   */
  align?: Property.JustifyContent;
  /**
   * Index of element after which the Stack is splitted. Leave 'undefined' for no splitting.
   */
  splitAt?: number;
  className?: string;
}

const Stack = styled.div.attrs((props) => ({
  ...props,
  className: cls(CLX_LAYOUT, props?.className),
}))<StackProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: ${prop('justify')};
  justify-content: ${prop('align')};
  ${parseResponsiveStyles('gap', 'gap', gapParser)};

  && > * {
    margin-top: 0;
    margin-bottom: 0;
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

Stack.defaultProps = {
  gap: SpaceSizes.none,
  justify: 'stretch',
};

export default Stack;
