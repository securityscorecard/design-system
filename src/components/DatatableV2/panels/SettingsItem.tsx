import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

import { Inline, Padbox } from '../../layout';
import BaseHandle from '../../_internal/BaseHandle/BaseHandle';
import { DatatableColumn, DatatableInstance } from '../Datatable.types';

const SettingsItem = <D,>({
  column,
  table,
  canColumnHide,
}: {
  column: DatatableColumn<D>;
  table: DatatableInstance<D>;
  canColumnHide: boolean;
}) => {
  const {
    options: { enableColumnPinning, enableHiding, enableColumnOrdering },
  } = table;
  const {
    attributes,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: column.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Padbox
      ref={setNodeRef}
      className="ds-table-settings-panel-item"
      paddingSize="md"
      paddingType="squish"
      style={style}
    >
      <Inline
        align="center"
        gap="md"
        stretch={enableColumnOrdering ? 2 : 'start'}
      >
        {enableColumnOrdering && (
          <BaseHandle
            ref={setActivatorNodeRef}
            iconProps={{ name: 'grip-dots-vertical' }}
            label={`Reorder ${column.columnDef.header} column`}
            type="button"
            {...attributes}
            {...listeners}
            style={{ cursor: 'grab' }}
          />
        )}
        <span>{column.columnDef.header}</span>
        {enableHiding && (
          <div className="ds-table-checkbox-wrapper">
            <input
              aria-label={`${column.getIsVisible() ? 'Hide' : 'Show'} ${
                column.columnDef.header
              } column`}
              checked={column.getIsVisible()}
              disabled={
                (!canColumnHide && column.getIsVisible()) ||
                !column.getCanHide()
              }
              type="checkbox"
              onChange={(e) => column.toggleVisibility(e.target.checked)}
            />
          </div>
        )}
        {enableColumnPinning && (
          <div className="ds-table-checkbox-wrapper">
            <input
              aria-label={`${
                column.getIsPinned() !== false ? 'Unpin' : 'Pin'
              } ${column.columnDef.header} column`}
              checked={column.getIsPinned() !== false}
              disabled={!column.getCanPin()}
              type="checkbox"
              onChange={(e) => column.pin(e.target.checked ? 'left' : false)}
            />
          </div>
        )}
      </Inline>
    </Padbox>
  );
};

export default SettingsItem;
