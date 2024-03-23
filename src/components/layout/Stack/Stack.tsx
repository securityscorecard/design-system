import React, {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  forwardRef,
} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { prop } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import { Property } from 'csstype';
import clx from 'classnames';

import { SpaceSizes } from '../../../theme/space.enums';
import { SpaceSize } from '../../../theme/space.types';
import { getSpace } from '../../../utils';
import { AlignItemsPropType } from '../../../types/flex.types';
import { CLX_LAYOUT } from '../../../theme/constants';
import styles from './Stack.module.css';

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
   * Index of element after which the Stack is splitted. Leave 'undefined' for no splitting.
   */
  splitAt?: number;
  /**
   * Should apply gap recursively (on nested levels)
   */
  isRecursive?: boolean;
  className?: string;
  component?: ElementType;
}

const StackSC = styled.div.attrs((props) => ({
  ...props,
  className: clx(CLX_LAYOUT, props?.className),
}))<StackProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: ${prop('justify')};
  justify-content: ${prop('align')};

  /* FIXME: Until we remove 'margin' property from other components we need to
    increase specificity of those nesting , since it can be overriden by inner
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
const Stack = forwardRef<
  HTMLDivElement,
  PropsWithChildren<
    Omit<StackProps, 'isRecursive'> & ComponentPropsWithoutRef<'div'>
  >
>(
  (
    {
      children,
      className,
      splitAt,
      justify,
      align,
      gap,
      style,
      component: Element = 'div',
      ...props
    },
    ref,
  ) => {
    return (
      <Element
        ref={ref}
        className={clx(styles['sscds-stack'], className, CLX_LAYOUT)}
        data-sscds-stack-split={
          typeof splitAt !== 'undefined' ? splitAt : undefined
        }
        style={{
          '--sscds-stack-gap': `var(--sscds-space-${gap}, --sscds-space-none)`,
          '--sscds-stack-justify': justify,
          '--sscds-stack-align': align,
          ...style,
        }}
        data-sscds-layout
        {...props}
      >
        {children}
      </Element>
    );
  },
);

Stack.propTypes = {
  gap: PropTypes.oneOf(Object.values(SpaceSizes)),
  justify: AlignItemsPropType,
  splitAt: PropTypes.number,
  className: PropTypes.string,
};

Stack.defaultProps = {
  gap: SpaceSizes.none,
  justify: 'stretch',
};

export { StackSC };
export default Stack;
