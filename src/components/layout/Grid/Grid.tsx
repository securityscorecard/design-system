import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes, { ReactComponentLike } from 'prop-types';
import { Property } from 'csstype';

import { getSpace } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { SpaceSize } from '../../../theme/space.types';
import { AlignItemsPropType } from '../../../types/flex.types';

interface GridParentProps {
  $gap?: SpaceSize;
  $align?: Property.AlignItems;
  $cols?: number;
}

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Whitespace around each child of the Inline
   */
  gap?: GridParentProps['$gap'];
  /**
   * Number of columns in the grid
   */
  cols?: GridParentProps['$cols'];
  /**
   * Vertical alignment of elements inside Inline
   */
  align?: GridParentProps['$align'];
  /**
   * Tag or component reference for wrapper element
   */
  wrapperEl?: ReactComponentLike;
  /**
   * Tag or component reference for parent element
   */
  parentEl?: ReactComponentLike;
}

const GridWrapper = styled.div`
  overflow: hidden;
`;
const GridParent = styled.div<GridParentProps>(
  ({ $cols, $gap, $align, theme }) => {
    const gapSize = getSpace($gap, { theme });

    return css`
      display: flex;
      flex-wrap: wrap;
      align-items: ${$align};
      margin: calc(${gapSize} / -2);

      & > * {
        width: calc(${100 / $cols}% - ${gapSize});
        margin: calc(${gapSize} / 2);
      }
    `;
  },
);

const Grid: React.FC<GridProps> = ({
  children,
  gap,
  align,
  cols,
  parentEl,
  wrapperEl,
  ...props
}) => (
  <GridWrapper as={wrapperEl}>
    <GridParent $align={align} $cols={cols} $gap={gap} as={parentEl} {...props}>
      {children}
    </GridParent>
  </GridWrapper>
);

Grid.propTypes = {
  gap: PropTypes.oneOf(Object.values(SpaceSizes)),
  cols: PropTypes.number,
  align: AlignItemsPropType,
  wrapperEl: PropTypes.elementType,
  parentEl: PropTypes.elementType,
};

Grid.defaultProps = {
  gap: SpaceSizes.none,
  cols: 6,
};

export default Grid;
