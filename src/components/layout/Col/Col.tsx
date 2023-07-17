import type { ColProps, Cols } from './Col.types';

import { forwardRef } from 'react';
import styled from 'styled-components';
import { path, pipe } from 'ramda';

import { pxToRem } from '../../../utils';
import { CLX_LAYOUT } from '../../../theme/constants';

const getColWidth = (cols: Cols): { flex: string } | { width: string } => {
  if (cols === 'auto') return { flex: '1 1 auto' };

  return { width: `${(cols / 12) * 100}%` };
};

const getColPadding: string = pipe(
  path(['theme', 'layout', 'columnGutter']),
  (gutter) => gutter / 2,
  pxToRem,
);

const StyledCol = styled.div<{
  $offset: ColProps['offset'];
  $cols: ColProps['cols'];
}>`
  box-sizing: border-box;
  min-width: 0;
  padding-left: ${getColPadding};
  padding-right: ${getColPadding};
  margin-left: ${({ $offset }) => `${(100 / 12) * $offset}%`};
  ${({ $cols }) => getColWidth($cols)};
`;

const Col = forwardRef<HTMLDivElement, ColProps>(
  ({ children, cols, offset }, ref) => (
    <StyledCol ref={ref} $cols={cols} $offset={offset} className={CLX_LAYOUT}>
      {children}
    </StyledCol>
  ),
);

Col.defaultProps = {
  cols: 'auto',
  offset: 0,
};

export default Col;
