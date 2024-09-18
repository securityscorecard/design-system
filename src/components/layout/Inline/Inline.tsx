import styled from 'styled-components';
import { prop } from 'ramda';
import { isNotUndefined, isNumber } from 'ramda-adjunct';
import { Property } from 'csstype';
import cls from 'classnames';

import { SpaceSize } from '../../../theme/space.types';
import { getSpace } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { StretchEnum } from './Inline.enums';
import { CLX_LAYOUT } from '../../../theme/constants';

type Stretch = (typeof StretchEnum)[keyof typeof StretchEnum];

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

const Inline = styled.div.attrs((props) => ({
  ...props,
  className: cls(CLX_LAYOUT, props?.className),
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

Inline.defaultProps = {
  gap: SpaceSizes.none,
};

export default Inline;
