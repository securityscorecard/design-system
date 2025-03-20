import { map } from 'ramda';
import styled, { css } from 'styled-components';
import { CellProps, Column } from 'react-table';

import { Inline } from '../../../layout';
import { DropdownMenu } from '../../BaseDropdownMenu';
import { getColor, getRadii, pxToRem } from '../../../../utils';
import { height, svgPathData, width } from '../../../../theme/icons/ellipsisH';
import { ACTIONS_COLUMN_ID, CellTypes } from '../renderers/renderers.enums';

const SVGIcon = styled.svg`
  display: inline-block;
  width: 1rem;
  height: 1rem;
`;

const RowActionsButton = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  color: ${getColor('neutral.600')};
  font-size: var(--sscds-font-size-elementlabel-md);
  border-radius: ${getRadii('default')};
  border: 0 none;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: ${getColor('neutral.200')};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &,
      &:hover {
        background: ${getColor('primary.400')};
        color: ${getColor('neutral.0')};
      }
    `};
`;

export function getActionsColumn<
  D extends Record<string, unknown>,
>(): Column<D> {
  return {
    id: ACTIONS_COLUMN_ID,
    sticky: 'right',
    width: 48,
    disableSortBy: true,
    cellType: CellTypes.actions,
    Header: <span className="sr-only">Actions</span>,
    Cell: (props: CellProps<D>) => {
      const { row, rowActions } = props;
      const actions = map((action) => ({
        ...action,
        onClick: () => action.onClick(row.id, row.original),
      }))(rowActions);

      return (
        <Inline justify="center" stretch="start">
          <DropdownMenu
            actions={actions}
            paneWidth="auto"
            placement="bottom-end"
          >
            {(isActive) => (
              <RowActionsButton aria-label="Row Actions" isActive={isActive}>
                <SVGIcon
                  role="presentation"
                  viewBox={`0 0 ${width} ${height}`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={svgPathData} fill="currentColor" />
                </SVGIcon>
              </RowActionsButton>
            )}
          </DropdownMenu>
        </Inline>
      );
    },
  };
}
