import type { ReactComponentLike } from 'prop-types';
import type { Property } from 'csstype';
import type { FC, HTMLAttributes } from 'react';
import type { SpaceSize } from '../../../theme/space.types';

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { prop } from 'ramda';
import cls from 'classnames';

import { getSpace } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { AlignItemsPropType } from '../../../types/flex.types';
import { CLX_LAYOUT } from '../../../theme/constants';
import { useLogger } from '../../../hooks/useLogger';

interface GridWrapperProps {
  $overflow: 'hidden' | 'visible';
}
interface GridParentProps {
  $gap?: SpaceSize;
  $align?: Property.AlignItems;
  $cols?: number;
}

export interface GridProps extends HTMLAttributes<HTMLElement> {
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
   * Overflow type of the wrapper element
   */
  wrapperOverflow?: GridWrapperProps['$overflow'];
  /**
   * Tag or component reference for parent element
   */
  parentEl?: ReactComponentLike;
  className?: string;
}

const GridWrapper = styled.div<GridWrapperProps>`
  overflow: ${prop('$overflow')};
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

const Grid: FC<GridProps> = ({
  children,
  gap,
  align,
  cols,
  parentEl,
  wrapperEl,
  wrapperOverflow = 'hidden',
  ...props
}) => {
  const { error } = useLogger('Grid');
  if (cols === 1) {
    error('Minimal number of columns is 2. Use Stack instead of Grid[cols=1]');
    return null;
  }
  return (
    <GridWrapper
      $overflow={wrapperOverflow}
      as={wrapperEl}
      className={cls(CLX_LAYOUT, props?.className)}
    >
      <GridParent
        $align={align}
        $cols={cols}
        $gap={gap}
        as={parentEl}
        {...props}
      >
        {children}
      </GridParent>
    </GridWrapper>
  );
};

Grid.propTypes = {
  gap: PropTypes.oneOf(Object.values(SpaceSizes)),
  cols: PropTypes.number,
  align: AlignItemsPropType,
  wrapperEl: PropTypes.elementType,
  parentEl: PropTypes.elementType,
  wrapperOverflow: PropTypes.oneOf(['hidden', 'visible']),
  className: PropTypes.string,
};

Grid.defaultProps = {
  gap: SpaceSizes.none,
  cols: 6,
};

export default Grid;
