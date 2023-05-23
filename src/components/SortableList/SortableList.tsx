import type { SortableListProps } from './SortableList.types';

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { forwardRef } from 'react';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { isNotUndefined } from 'ramda-adjunct';
import styled from 'styled-components';

import { Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import SortableItem from './SortableItem';
import { pxToRem } from '../../utils';
import { CLX_COMPONENT } from '../../theme/constants';

const SortableListRoot = styled.div<{
  $maxHeight: SortableListProps['maxHeight'];
}>`
  overflow: auto;
  max-height: ${({ $maxHeight }) =>
    isNotUndefined($maxHeight) && pxToRem($maxHeight)};
`;

const SortableList = forwardRef<HTMLDivElement, SortableListProps>(
  (
    {
      items,
      labels,
      renderItem,
      maxHeight,
      onOrderChange,
      onDragStart,
      onDragOver,
      onDragEnd,
      onDragCancel,
    },
    ref,
  ) => {
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(TouchSensor),
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
      <SortableListRoot
        ref={ref}
        $maxHeight={maxHeight}
        className={CLX_COMPONENT}
      >
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
                <SortableItem
                  key={item}
                  id={item}
                  label={labels?.[item] || item}
                  renderItem={renderItem}
                />
              ))}
            </Stack>
          </SortableContext>
        </DndContext>
      </SortableListRoot>
    );
  },
);

export default SortableList;
