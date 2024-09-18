import { type ReactNode } from 'react';
import styled from 'styled-components';
import { prop } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import { Property } from 'csstype';
import cls from 'classnames';

import { SpaceSize } from '../../../theme/space.types';
import { getSpace } from '../../../utils';
import { CLX_LAYOUT } from '../../../theme/constants';

export interface StackProps {
  /**
   * Whitespace between each child of the Stack
   */
  gap?: SpaceSize;
  /**
   * Horizontal alignment of elements inside Stack
   */
  justify?: Property.AlignItems;
  /**
   * Vertical alignment of elements inside Stack
   */
  align?: Property.JustifyContent;
  /**
   * Index of element after which the Stack is splitted. Leave 'undefined' for no splitting
   */
  splitAt?: number;
  /**
   * Should apply gap recursively (on nested levels)
   */
  isRecursive?: boolean;
  children: ReactNode;
}

const Stack = styled.div
  .withConfig<StackProps>({
    shouldForwardProp: (propName) =>
      !['gap', 'justify', 'align', 'splitAt', 'isRecursive', 'theme'].includes(
        propName,
      ),
  })
  .attrs<StackProps, StackProps>(
    ({ gap, justify, isRecursive, className, ...rest }) => ({
      gap: gap ?? 'none',
      justify: justify ?? 'stretch',
      isRecursive: isRecursive ?? false,
      className: cls(CLX_LAYOUT, className),
      ...rest,
    }),
  )`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: ${prop('justify')};
  justify-content: ${prop('align')};

  /* FIXME: Until we remove 'margin' property from other components we need to
    increase specificity of those nesting , since it can be overridden by inner
    elements with the same specificity. This can lead to inconsistent output
    of visual test if styled-components puts CSS in different order into Head. */
  ${({ isRecursive }) => (isRecursive ? '&&' : '&& >')} * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${({ isRecursive }) => (isRecursive ? '&&' : '&& >')} * + * {
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

Stack.displayName = 'Stack';

export default Stack;
