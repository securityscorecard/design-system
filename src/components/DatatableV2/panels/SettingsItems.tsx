import {
  Active,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  Over,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import React from 'react';
import { TFunction } from 'i18next';

import { reorderColumn } from '../columns.utils';
import { DatatableColumn, DatatableInstance } from '../Datatable.types';
import SettingsItem from './SettingsItem';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

const getDraggedColumn = <D,>(
  active: Active,
  allColumns: DatatableColumn<D>[],
) => allColumns.find((column) => column.id === active.id);
const getTargetColumn = <D,>(over: Over, allColumns: DatatableColumn<D>[]) =>
  allColumns.find((column) => column.id === over.id);

const screenReaderAnnouncements = <D,>(
  allColumns: DatatableColumn<D>[],
  t: TFunction<['sscds', undefined]>,
) => {
  return {
    onDragStart({ active }) {
      const {
        columnDef: { header },
      } = getDraggedColumn(active, allColumns);
      return t('sscds|datatable.settings.ordering.screenReader.pickedUp', {
        header,
      });
    },
    onDragOver({ active, over }) {
      const {
        columnDef: { header: activeHeader },
      } = getDraggedColumn(active, allColumns);

      if (over) {
        const {
          columnDef: { header: overHeader },
        } = getTargetColumn(over, allColumns);
        return t('sscds|datatable.settings.ordering.screenReader.movedOver', {
          activeHeader,
          overHeader,
        });
      }

      return t(
        'sscds|datatable.settings.ordering.screenReader.notDroppableArea',
        { activeHeader },
      );
    },
    onDragEnd({ active, over }) {
      const {
        columnDef: { header: activeHeader },
      } = getDraggedColumn(active, allColumns);

      if (over) {
        const {
          columnDef: { header: overHeader },
        } = getTargetColumn(over, allColumns);
        return t('sscds|datatable.settings.ordering.screenReader.droppedOver', {
          activeHeader,
          overHeader,
        });
      }

      return t('sscds|datatable.settings.ordering.screenReader.dropped', {
        activeHeader,
      });
    },
    onDragCancel({ active }) {
      const {
        columnDef: { header },
      } = getDraggedColumn(active, allColumns);
      return t('sscds|datatable.settings.ordering.screenReader.dragCancel', {
        header,
      });
    },
  };
};

const SettingsItems = <D,>({
  allColumns,
  table,
  canHideMoreColumns,
}: {
  allColumns: DatatableColumn<D>[];
  table: DatatableInstance<D>;
  canHideMoreColumns: boolean;
}) => {
  const { getState, setColumnOrder } = table;
  const { columnOrder } = getState();
  const { t } = useSafeTranslation();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    const draggedColumn = getDraggedColumn(active, allColumns);
    const targetColumn = getTargetColumn(over, allColumns);
    const newOrder = reorderColumn(draggedColumn, targetColumn, columnOrder);
    setColumnOrder(newOrder);
  };

  return (
    <DndContext
      accessibility={{
        screenReaderInstructions: {
          draggable: t(
            'sscds|datatable.settings.ordering.screenReader.instructions',
          ),
        },
        announcements: screenReaderAnnouncements(allColumns, t),
      }}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={allColumns}
        strategy={verticalListSortingStrategy}
      >
        <div>
          {allColumns.map((column) => (
            <SettingsItem
              key={column.id}
              canColumnHide={canHideMoreColumns}
              column={column}
              table={table}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SettingsItems;
