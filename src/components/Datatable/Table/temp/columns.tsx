/* eslint-disable react/prop-types */
// TODO: move to appropriate place
import React from 'react';
import { CellProps, HeaderProps } from 'react-table';
import { map } from 'ramda';

import { IconButton } from '../../../IconButton';
import { Dropdown } from '../../Dropdown';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import { Data, RowAction } from './config';

export const selectionColumn = {
  id: 'selection',
  sticky: 'left',
  width: 48,
  disableSortBy: true,
  Header: ({
    getToggleAllRowsSelectedProps,
  }: HeaderProps<Data>): JSX.Element => (
    <div>
      <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
    </div>
  ),
  Cell: ({ row }: CellProps<Data>): JSX.Element => (
    <div>
      <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
    </div>
  ),
};

// TODO: Fix z-index and positioning issue
export const actionsColumn = (
  primaryKey: string,
  rowActions: RowAction[],
): {
  id: string;
  sticky: string;
  width: number;
  disableSortBy: boolean;
  Cell: ({ row }: CellProps<Data>) => JSX.Element;
} => ({
  id: 'actions',
  sticky: 'right',
  width: 48,
  disableSortBy: true,
  Cell: ({ row }: CellProps<Data>): JSX.Element => {
    const actions = map((action) => ({
      ...action,
      onClick: () => {
        if (primaryKey === undefined) {
          return action.onClick(row.id);
        }

        return action.onClick(row.original[primaryKey]);
      },
      // eslint-disable-next-line react/destructuring-assignment
    }))(rowActions);

    return (
      <Dropdown actions={actions}>
        <IconButton iconName="wrench" label="Actions" />
      </Dropdown>
    );
  },
});
