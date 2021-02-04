import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNonEmptyString } from 'ramda-adjunct';

import { getColor, pxToRem } from '../../../../utils/helpers';
import { Text } from '../../../typography';
import { TextSizes } from '../../../typography/Text/Text.enums';
import { TableHeadCellProps } from './TableHeadCell.types';
import SortingIcon from './SortingIcon';

const StyledTableHeadCell = styled.th`
  font-weight: normal;
  text-align: left;
  padding: ${pxToRem(16, 8)};
  background-color: ${getColor('graphite3H')};
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${getColor('graphiteH')};
  border-right: 1px solid ${getColor('graphiteH')};

  &:last-child,
  &:nth-last-child(2) {
    border-right: 0;
  }

  &[data-sticky-td] {
    position: sticky;
  }

  &[data-sticky-last-left-td] {
    /* box-shadow: 10px 0 10px 0 rgba(0, 0, 0, 0.05); */
  }

  &[data-sticky-first-right-td] {
    box-shadow: -10px 0 10px 0 rgba(0, 0, 0, 0.05);
    border-left: 1px solid #dadada;
  }
`;

const TableHeadCell = <D extends Record<string, unknown>>({
  column,
  ...props
}: TableHeadCellProps<D>): React.ReactElement => {
  const { render, canSort, isSorted, isSortedDesc, Header } = column;

  return (
    <StyledTableHeadCell {...props}>
      {isNonEmptyString(Header) ? (
        <Text size={TextSizes.md} isBold>
          {render('Header')}
        </Text>
      ) : (
        render('Header')
      )}
      {canSort && (
        <SortingIcon isSorted={isSorted} isSortedDesc={isSortedDesc} />
      )}
    </StyledTableHeadCell>
  );
};

TableHeadCell.propTypes = {
  column: PropTypes.shape({
    render: PropTypes.func.isRequired,
    canSort: PropTypes.bool,
    isSorted: PropTypes.bool,
    isSortedDesc: PropTypes.bool,
    Header: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  }),
};

export default TableHeadCell;
