import React from 'react';
import { map } from 'ramda';
import styled, { css } from 'styled-components';
import { CellProps } from 'react-table';

import { Inline } from '../../../layout';
import { DropdownMenu } from '../../BaseDropdownMenu';
import { getColor, getFontSize, getRadii, pxToRem } from '../../../../utils';
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
  font-size: ${getFontSize('lg')};
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

export const actionsColumn = {
  id: ACTIONS_COLUMN_ID,
  sticky: 'right',
  width: 48,
  disableSortBy: true,
  cellType: CellTypes.actions,
  Cell: (props: CellProps<Record<string, unknown>>): React.ReactElement => {
    const { row, rowActions } = props;
    const actions = map((action) => ({
      ...action,
      onClick: () => action.onClick(row.id, row.original),
    }))(rowActions);

    return (
      <Inline justify="center" stretch="start">
        <DropdownMenu actions={actions} paneWidth={140} placement="bottom-end">
          {(isActive) => (
            <RowActionsButton aria-label="Row Actions" isActive={isActive}>
              <SVGIcon
                role="img"
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
