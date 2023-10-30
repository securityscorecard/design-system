import type { ReactElement } from 'react';
import type { HeadProps } from './Head.types';

import { isNotUndefined } from 'ramda-adjunct';
import styled, { css } from 'styled-components';

import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../../../utils';
import TooltipWrapper from '../components/TooltipWrapper';
import { makeStickyColumn, shrinkIfSticky } from '../utils';
import SortingIcon from './SortingIcon';

const StyledTh = styled.th<{ sticky?: string }>`
  display: flex;
  align-items: center;
  min-height: ${pxToRem(48)};
  font-weight: ${getFontWeight('bold')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  text-align: left;
  padding: ${pxToRem(12, 8)};
  background-color: ${getColor('neutral.0')};
  border-color: ${getColor('neutral.400')};
  border-style: solid;
  border-width: 1px 0 1px 1px;

  ${makeStickyColumn};

  ${({ sticky }) =>
    sticky === 'left' &&
    css`
      border-right: 1px solid ${getColor('neutral.400')};

      &:first-of-type + & {
        border-left: 0;
      }
    `};

  &:first-of-type {
    border-left: 0;
  }
`;

function Head<D extends Record<string, unknown>>({
  headerGroups,
}: HeadProps<D>): ReactElement {
  return (
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
}

Head.displayName = 'Head';
export default Head;
