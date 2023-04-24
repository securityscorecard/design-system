import type { Property } from 'csstype';
import type { ResponsiveSpaceSize } from '../../../types/responsive.types';
import type { StretchEnum } from './Inline.enums';

import styled from 'styled-components';
import { prop } from 'ramda';
import { isNotUndefined, isNumber } from 'ramda-adjunct';
import cls from 'classnames';

import { parseResponsiveStyles } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { CLX_LAYOUT } from '../../../theme/constants';
import { gapParser } from '../../../utils/parsers';

type Stretch = typeof StretchEnum[keyof typeof StretchEnum];

export interface InlineProps {
  /**
   * Whitespace between each child of the Inline
   */
  gap?: ResponsiveSpaceSize;
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
  flex-flow: row nowrap;
  justify-content: ${prop('justify')};
  align-items: ${prop('align')};
  ${parseResponsiveStyles('gap', 'gap', gapParser)};

  && > * {
    margin-left: 0;
    margin-right: 0;
  }

  ${({ stretch }) => isNotUndefined(stretch) && getStretchStyle(stretch)}
`;

Inline.defaultProps = {
  gap: SpaceSizes.none,
};

export default Inline;
