import type { FC } from 'react';
import type { ColProps, Cols } from './Col.types';

import { Box } from 'reflexbox';
import styled from 'styled-components';
import { path, pipe } from 'ramda';

import { pxToRem } from '../../../utils';
import { CLX_LAYOUT } from '../../../theme/constants';

const getColWidth = (cols: Cols): { flex: string } | { width: number } => {
  if (cols === 'auto') return { flex: '1 1 auto' };

  return { width: cols / 12 };
};

const getColPadding: string = pipe(
  path(['theme', 'layout', 'columnGutter']),
  (gutter) => gutter / 2,
  pxToRem,
);

const StyledCol = styled(Box)`
  padding-left: ${getColPadding};
  padding-right: ${getColPadding};
`;

const Col: FC<ColProps> = ({ children, cols, offset }) => (
  <StyledCol
    ml={`${(100 / 12) * offset}%`}
    {...getColWidth(cols)}
    className={CLX_LAYOUT}
  >
    {children}
  </StyledCol>
);

Col.defaultProps = {
  cols: 'auto',
  offset: 0,
};

export default Col;
