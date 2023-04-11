import type { Property } from 'csstype';
import type { FC, HTMLAttributes } from 'react';
import type { ResponsiveSpaceSize } from '../../../types/responsive.types';

import styled, { css } from 'styled-components';
import cls from 'classnames';

import { parseResponsiveStyles } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { CLX_LAYOUT } from '../../../theme/constants';
import { useLogger } from '../../../hooks/useLogger';
import { gapParser } from '../../../utils/parsers';

interface GridRootProps {
  $gap?: ResponsiveSpaceSize;
  $align?: Property.AlignItems;
  $overflow?: Property.Overflow;
  $justify?: Property.JustifyItems;
  $cols?: number;
}

export interface GridProps extends HTMLAttributes<HTMLElement> {
  /**
   * Whitespace around each child of the Inline
   */
  gap?: GridRootProps['$gap'];
  /**
   * Number of columns in the grid
   */
  cols?: GridRootProps['$cols'];
  /**
   * Vertical alignment of elements inside Inline
   */
  align?: GridRootProps['$align'];
  className?: string;
}

const GridRoot = styled.div<GridRootProps>(
  ({ $cols, $align, $justify, $overflow }) => {
    return css`
      display: grid;
      align-items: ${$align};
      overflow: ${$overflow};
      justify-items: ${$justify};
      ${parseResponsiveStyles('grid-gap', '$gap', gapParser)};
      grid-template-columns: repeat(${$cols}, 1fr);
    `;
  },
);

const Grid: FC<GridProps> = ({ children, gap, align, cols, ...props }) => {
  const { error } = useLogger('Grid');
  if (cols === 1) {
    error('Minimal number of columns is 2. Use Stack instead of Grid[cols=1]');
    return null;
  }
  return (
    <GridRoot
      $align={align}
      $cols={cols}
      $gap={gap}
      className={cls(CLX_LAYOUT, props?.className)}
      {...props}
    >
      {children}
    </GridRoot>
  );
};

Grid.defaultProps = {
  gap: SpaceSizes.none,
  cols: 6,
};

export default Grid;
