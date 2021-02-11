import React from 'react';
import styled from 'styled-components';

import { getColor, pxToRem } from '../../../../utils/helpers';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<{ $isOdd: boolean }>`
  padding: ${pxToRem(12, 8)};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${getColor('graphiteH')};
  border-right: 1px solid transparent;
  background-color: ${({ $isOdd, theme }) =>
    $isOdd ? '#fcfcfc' : getColor('graphite5H', { theme })};

  &:last-child {
    border-right: 0;
  }

  &[data-sticky-td] {
    position: sticky;
  }
`;

const TableCell = <D extends Record<string, unknown>>({
  cell,
  isOdd,
  ...props
}: TableCellProps<D>): React.ReactElement => (
  <StyledTableCell $isOdd={isOdd} {...props}>
    {cell.render('Cell')}
  </StyledTableCell>
);

export default TableCell;
