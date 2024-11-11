import { Fragment } from 'react';
import { Row, flexRender } from '@tanstack/react-table';
import styled from 'styled-components';

import { Skeleton } from '../Skeleton';
import { ListViewInstance } from './ListView.types';
import RowActionsButton from '../_internal/buttons/RowActionsButton';

const ListViewRowRoot = styled.li`
  display: flex;
  position: relative;
  border-bottom: 1px solid var(--sscds-color-border-default);
`;
const ListViewRowContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-block: var(--sscds-space-2x);
  padding-inline-start: calc(
    var(--sscds-space-4x) + var(--sscds-listView-size-select)
  );
  padding-inline-end: calc(
    var(--sscds-space-4x) + var(--sscds-listView-size-rowActions)
  );
  min-height: var(--sscds-listView-height-min);

  button& {
    cursor: pointer;
    transition: var(--sscds-action-transition);

    :hover {
      background-color: var(--sscds-color-background-selectable-hover);
    }

    &[data-active='true'] {
      background-color: var(--sscds-color-background-selectable-active);
    }
  }
`;
const ListViewRowSelectionLabel = styled.label`
  position: absolute;
  inset-inline-start: 0;
  inset-block: 0;
  display: grid;
  place-items: center;
  width: var(--sscds-listView-size-select);

  input {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: var(--sscds-color-primary-9);
  }
`;
const ListViewRowActionsRoot = styled.div`
  position: absolute;
  inset-inline-end: 0;
  inset-block: 0;
  display: grid;
  place-items: center;
  width: var(--sscds-listView-size-rowActions);
`;

function ListViewRow<D>({
  row,
  listView,
}: {
  listView: ListViewInstance<D>;
  row: Row<D>;
}) {
  const { options, getState, setActiveRowId } = listView;
  const { activeRowId, isLoading } = getState();
  const areItemsClickable = typeof options?.onRowClick !== 'undefined';

  return (
    <ListViewRowRoot>
      {row.getAllCells().map((cell) => {
        return (
          <Fragment key={cell.id}>
            <ListViewRowContent
              {...(areItemsClickable
                ? {
                    as: 'button',
                    onClick: () => {
                      setActiveRowId(row.id);
                      options.onRowClick({ row: row.original });
                    },
                    'data-active': activeRowId === row.id,
                  }
                : {})}
            >
              {isLoading ? (
                <Skeleton width="100%" />
              ) : (
                flexRender(cell.column.columnDef.cell, cell.getContext())
              )}
            </ListViewRowContent>
            {options.enableRowSelection && (
              <ListViewRowSelectionLabel>
                {isLoading ? (
                  <Skeleton width="1.25rem" />
                ) : (
                  <>
                    <span className="sr-only">Select current row</span>
                    <input
                      checked={row.getIsSelected()}
                      disabled={!row.getCanSelect()}
                      type={
                        options.enableMultiRowSelection ? 'checkbox' : 'radio'
                      }
                      onChange={row.getToggleSelectedHandler()}
                    />
                  </>
                )}
              </ListViewRowSelectionLabel>
            )}
            {options.rowActionsCount > 0 && (
              <ListViewRowActionsRoot>
                {isLoading ? (
                  <Skeleton width="2rem" />
                ) : (
                  <RowActionsButton instance={listView} row={row} />
                )}
              </ListViewRowActionsRoot>
            )}
          </Fragment>
        );
      })}
    </ListViewRowRoot>
  );
}

ListViewRow.displayName = 'ListViewRow';

export default ListViewRow;
