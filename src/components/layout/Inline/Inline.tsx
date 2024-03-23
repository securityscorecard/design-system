import React, {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  forwardRef,
} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { prop } from 'ramda';
import { isNotUndefined, isNumber } from 'ramda-adjunct';
import { Property } from 'csstype';
import clx from 'classnames';

import {
  AlignItemsPropType,
  JustifyContentPropType,
} from '../../../types/flex.types';
import { SpaceSize } from '../../../theme/space.types';
import { getSpace } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { StretchEnum } from './Inline.enums';
import { CLX_LAYOUT } from '../../../theme/constants';
import styles from './Inline.module.css';

type Stretch = typeof StretchEnum[keyof typeof StretchEnum];

export interface InlineProps {
  /**
   * Whitespace between each child of the Inline
   */
  gap?: SpaceSize;
  /**
   * Horizontal alignment of elements inside Inline
   *
   */
  justify?: Property.JustifyContent;
  /**
   * Vertical alignment of elements inside Inline
   */
  align?: Property.AlignItems;
  /**
   * Child or children to fill available space
   */
  stretch?: number | Stretch;
  className?: string;
  component?: ElementType;
}

const getStretchStyle = (
  stretch: Required<InlineProps['stretch']>,
): string | null => {
  if (isNumber(stretch)) {
    return `
      > :nth-child(${stretch}) { flex: 1 1 0%; }
    `;
  }

  switch (stretch) {
    case 'start':
      return `
        > :first-child { flex: 1 1 0%; }
      `;
    case 'end':
      return `
        > :last-child { flex: 1 1 0%; }
      `;
    case 'all':
      return `
        > * { flex: 1 1 0%; }
      `;
    default:
      return null;
  }
};

const InlineSC = styled.div.attrs((props) => ({
  ...props,
  className: clx(CLX_LAYOUT, props?.className),
}))<InlineProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: ${prop('justify')};
  align-items: ${prop('align')};

  ${({ stretch }) => isNotUndefined(stretch) && getStretchStyle(stretch)}

  /* FIXME: Until we remove 'margin' property from other components we need to
    increase specificity of those nesting , since it can be overriden by inner
    elements with the same specificity. This can lead to inconsistent output
    of visual test if styled-components puts CSS in different order into Head. */
  && > * {
    margin-left: 0;
    margin-right: 0;
  }

  && > * + * {
    margin-left: ${({ gap, theme }) => getSpace(gap, { theme })};
  }
`;

const Inline = forwardRef<
  HTMLDivElement,
  PropsWithChildren<InlineProps & ComponentPropsWithoutRef<'div'>>
>(
  (
    {
      children,
      className,
      stretch,
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
        className={clx(styles['sscds-inline'], className, CLX_LAYOUT)}
        data-sscds-inline-stretch={
          typeof stretch !== 'undefined' ? stretch : undefined
        }
        style={{
          '--sscds-inline-gap': `var(--sscds-space-${gap}, --sscds-space-none)`,
          '--sscds-inline-justify': justify,
          '--sscds-inline-align': align,
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

Inline.propTypes = {
  align: AlignItemsPropType,
  justify: JustifyContentPropType,
  gap: PropTypes.oneOf(Object.values(SpaceSizes)),
  stretch: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<Stretch>(Object.values(StretchEnum)),
  ]),
  className: PropTypes.string,
};

Inline.defaultProps = {
  gap: SpaceSizes.none,
};

export { InlineSC };
export default Inline;
