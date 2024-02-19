import type { Active, DragEndEvent, Over } from '@dnd-kit/core';
import type { DatatableColumn, DatatableInstance } from '../Datatable.types';

import {
  DndContext,
  KeyboardSensor,
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

import { reorderColumn } from '../columns.utils';
import SettingsItem from './SettingsItem';

const getDraggedColumn = <D,>(
  active: Active,
  allColumns: DatatableColumn<D>[],
) => allColumns.find((column) => column.id === active.id);
const getTargetColumn = <D,>(over: Over, allColumns: DatatableColumn<D>[]) =>
  allColumns.find((column) => column.id === over.id);

const screenReaderInstructions = `To pick up a draggable table column, press space or enter.
Use the up and down arrow keys to update the position of the column in the table.
Press space or enter again to drop the item in its new position, or press escape to cancel.`;
const screenReaderAnnouncements = <D,>(allColumns: DatatableColumn<D>[]) => {
  return {
    onDragStart({ active }) {
      const {
        columnDef: { header },
      } = getDraggedColumn(active, allColumns);
      return `Picked up ${header} column.`;
    },
    onDragOver({ active, over }) {
      const {
        columnDef: { header: activeHeader },
      } = getDraggedColumn(active, allColumns);

      if (over) {
        const {
          columnDef: { header: overHeader },
        } = getTargetColumn(over, allColumns);
        return `${activeHeader} column was moved over ${overHeader} column.`;
      }

      return `${activeHeader} column is no longer over a droppable area.`;
    },
    onDragEnd({ active, over }) {
      const {
        columnDef: { header: activeHeader },
      } = getDraggedColumn(active, allColumns);

      if (over) {
        const {
          columnDef: { header: overHeader },
        } = getTargetColumn(over, allColumns);
        return `${activeHeader} column was dropped over ${overHeader} column`;
      }

      return `${activeHeader} column was dropped.`;
    },
    onDragCancel({ active }) {
      const {
        columnDef: { header },
      } = getDraggedColumn(active, allColumns);
      return `Dragging was cancelled. ${header} column was dropped.`;
    },
  };
};

const SettingsItems = <D,>({
  allColumns,
  table,
}: {
  allColumns: DatatableColumn<D>[];
  table: DatatableInstance<D>;
}) => {
  const { getState, setColumnOrder } = table;
  const { columnOrder } = getState();

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
        screenReaderInstructions: { draggable: screenReaderInstructions },
        announcements: screenReaderAnnouncements(allColumns),
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
            <SettingsItem key={column.id} column={column} table={table} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SettingsItems;
