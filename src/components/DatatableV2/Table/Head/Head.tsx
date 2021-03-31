import { isNotUndefined } from 'ramda-adjunct';
import React from 'react';
import styled, { css } from 'styled-components';

import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../../../utils/helpers';
import TooltipWrapper from '../components/TooltipWrapper';
import { makeStickyColumn, shrinkIfSticky } from '../utils';
import SortingIcon from './SortingIcon';
import { HeadProps } from './Head.types';

const StyledTh = styled.th`
  display: flex;
  align-items: center;
  min-height: ${pxToRem(48)};
  font-weight: ${getFontWeight('bold')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  text-align: left;
  padding: ${pxToRem(12, 8)};
  background-color: ${getColor('graphite3H')};
  border-color: ${getColor('graphiteH')};
  border-style: solid;
  border-top-width: 1px;
  border-bottom-width: 2px;
  border-left-width: 1px;

  ${makeStickyColumn};

  ${({ sticky }) =>
    sticky === 'left' &&
    css`
      border-right: 1px solid ${getColor('graphiteH')};

      &:first-of-type + & {
        border-left: 0;
      }
    `};

  &:first-of-type {
    border-left: 0;
  }
`;

const Head = <D extends Record<string, unknown>>({
  headerGroups,
}: HeadProps<D>): React.ReactElement => (
  <thead>
    {headerGroups.map((headerGroup) => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <StyledTh
            {...column.getHeaderProps({
              ...column.getSortByToggleProps({
                ...column.getSortByToggleProps(),
                title: column.canSort ? `Sort ${column.Header}` : undefined,
              }),
              ...shrinkIfSticky(column.sticky),
            })}
            sticky={column.sticky}
          >
            <TooltipWrapper
              popupRenderer={() => column.headerTooltip}
              shouldRender={isNotUndefined(column.headerTooltip)}
            >
              {column.render('Header')}
            </TooltipWrapper>
            {column.canSort && (
              <SortingIcon
                isSorted={column.isSorted}
                isSortedDesc={column.isSortedDesc}
              />
            )}
          </StyledTh>
        ))}
      </tr>
    ))}
  </thead>
);

export default Head;
