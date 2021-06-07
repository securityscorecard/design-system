import styled from 'styled-components';
import PropTypes from 'prop-types';
import { prop } from 'ramda';
import { isNotUndefined, isNumber } from 'ramda-adjunct';
import { Property } from 'csstype';

import {
  AlignItemsPropType,
  JustifyContentPropType,
} from '../../../types/flex.types';
import { SpaceSize } from '../../../theme/space.types';
import { getSpace } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { StretchEnum } from './Inline.enums';

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

const Inline = styled.div<InlineProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: ${prop('justify')};
  align-items: ${prop('align')};

  ${({ stretch }) => isNotUndefined(stretch) && getStretchStyle(stretch)}

  > * {
    margin-left: 0;
    margin-right: 0;
  }

  > * + * {
    margin-left: ${({ gap, theme }) => getSpace(gap, { theme })};
  }
`;

Inline.propTypes = {
  align: AlignItemsPropType,
  justify: JustifyContentPropType,
  gap: PropTypes.oneOf(Object.values(SpaceSizes)),
  stretch: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<Stretch>(Object.values(StretchEnum)),
  ]),
};

Inline.defaultProps = {
  gap: SpaceSizes.none,
};

export default Inline;
