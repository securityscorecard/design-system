import { isNotUndefined } from 'ramda-adjunct';
import styled, { css } from 'styled-components';

import { pxToRem } from '../../../../utils';
import TooltipWrapper from '../components/TooltipWrapper';
import { makeStickyColumn, shrinkIfSticky } from '../utils';
import SortingIcon from './SortingIcon';
import { HeadProps } from './Head.types';
import ElementLabel from '../../../ElementLabel/ElementLabel';

const StyledTh = styled.th<{ sticky?: string }>`
  display: flex;
  align-items: center;
  min-height: ${pxToRem(48)};
  text-align: left;
  padding: ${pxToRem(8)};
  background-color: var(--sscds-color-background-surface-default);
  border-color: var(--sscds-color-border-default);
  border-style: solid;
  border-width: 1px 0 1px 1px;

  ${makeStickyColumn};

  &[data-focus-visible='true']:focus-visible {
    outline: 3px solid var(--sscds-focus-indicator-color);
    outline-offset: -3px;
    box-shadow: none;
  }

  ${({ sticky }) =>
    sticky === 'left' &&
    css`
      border-right: 1px solid var(--sscds-color-border-default);

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
}: HeadProps<D>) {
  return (
    <thead>
      {headerGroups.map((headerGroup) => {
        const { key: rowKey, ...rowRest } = headerGroup.getHeaderGroupProps();
        return (
          <tr key={rowKey} {...rowRest}>
            {headerGroup.headers.map((column) => {
              const { key: cellKey, ...cellRest } = column.getHeaderProps({
                ...column.getSortByToggleProps({
                  ...column.getSortByToggleProps(),
                  title: column.canSort ? `Sort ${column.Header}` : undefined,
                  ...(column.canSort && {
                    tabIndex: 0,
                    'data-focus-visible': true,
                    onKeyDown: (event: React.KeyboardEvent) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        column.toggleSortBy();
                      }
                    },
                  }),
                }),
                ...shrinkIfSticky(column.sticky),
              });
              return (
                <StyledTh key={cellKey} {...cellRest} sticky={column.sticky}>
                  <TooltipWrapper
                    popupRenderer={() => column.headerTooltip}
                    shouldRender={isNotUndefined(column.headerTooltip)}
                  >
                    <ElementLabel size="sm" isStrong>
                      {column.render('Header')}
                    </ElementLabel>
                  </TooltipWrapper>
                  {column.canSort && (
                    <SortingIcon
                      isSorted={column.isSorted}
                      isSortedDesc={column.isSortedDesc}
                    />
                  )}
                </StyledTh>
              );
            })}
          </tr>
        );
      })}
    </thead>
  );
}

Head.displayName = 'Head';
export default Head;
