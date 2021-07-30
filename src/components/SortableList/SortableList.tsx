import React from 'react';
import PropTypes from 'prop-types';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { isNotUndefined } from 'ramda-adjunct';

import { Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import SortableItem from './SortableItem';
import { SortableListProps } from './SortableList.types';

const SortableList: React.FC<SortableListProps> = ({
  items,
  labels,
  onOrderChange,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDragCancel,
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event) => {
    if (isNotUndefined(onDragEnd)) {
      onDragEnd(event);
    }

    const { active, over } = event;

    if (isNotUndefined(onOrderChange) && active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      onOrderChange(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      sensors={sensors}
      onDragCancel={onDragCancel}
      onDragEnd={handleDragEnd}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <Stack
          as="ul"
          gap={SpaceSizes.xs}
          style={{
            paddingInlineStart: 0, // reset ul user agent styles, :facepalm: core-ui
          }}
        >
          {items.map((item) => (
            <SortableItem key={item} id={item} label={labels?.[item] || item} />
          ))}
        </Stack>
      </SortableContext>
    </DndContext>
  );
};

SortableList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  labels: PropTypes.shape({}),
  onOrderChange: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragCancel: PropTypes.func,
};

export default SortableList;
