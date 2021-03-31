import React from 'react';
import { map } from 'ramda';
import styled, { css } from 'styled-components';
import { CellProps } from 'react-table';

import { FlexContainer } from '../../../FlexContainer';
import { Dropdown } from '../../../Datatable/Dropdown';
import {
  getBorderRadius,
  getColor,
  getFontSize,
  pxToRem,
} from '../../../../utils/helpers';
import { height, svgPathData, width } from '../../../../theme/icons/ellipsisH';
import {
  ACTIONS_COLUMN_ID,
  CellTypes,
} from '../Body/renderers/renderers.enums';

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
  color: ${getColor('graphiteB')};
  font-size: ${getFontSize('lg')};
  border-radius: ${getBorderRadius};
  border: 0 none;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: ${getColor('graphite3H')};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &,
      &:hover {
        background: ${getColor('radiantBlueberry')};
        color: ${getColor('graphite5H')};
      }
    `};
`;

export const actionsColumn = {
  id: ACTIONS_COLUMN_ID,
  sticky: 'right',
  width: 48,
  disableSortBy: true,
  cellType: CellTypes.actions,
  Cell: ({
    row,
    rowActions,
  }: CellProps<Record<string, unknown>>): React.ReactElement => {
    const actions = map((action) => ({
      ...action,
      onClick: () => action.onClick(row.id, row.original),
    }))(rowActions);

    return (
      <FlexContainer flexGrow={1} justifyContent="center">
        <Dropdown actions={actions}>
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
        </Dropdown>
      </FlexContainer>
    );
  },
};
