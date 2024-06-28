import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Announcements,
  DndContext,
  DragCancelEvent,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  KeyboardSensor,
  MeasuringStrategy,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  defaultDropAnimation,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import {
  buildTree,
  flattenTree,
  getProjection,
  getSubRowCount,
  removeSubRowsOf,
  setProperty,
} from './common/utils';
import type {
  FlattenedItem,
  SensorContext,
  TreeViewProps,
  TreeViewRow,
} from './TreeView.types';
import { sortableTreeKeyboardCoordinates } from './common/keyboardCoordinates';
import SortableTreeItem from './components/SortableTreeItem';
import { Surface } from '../layout';

const measuring = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

const dropAnimationConfig: DropAnimation = {
  keyframes({ transform }) {
    return [
      { opacity: 1, transform: CSS.Transform.toString(transform.initial) },
      {
        opacity: 0,
        transform: CSS.Transform.toString({
          ...transform.final,
          x: transform.final.x + 5,
          y: transform.final.y + 5,
        }),
      },
    ];
  },
  easing: 'ease-out',
  sideEffects({ active }) {
    active.node.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: defaultDropAnimation.duration,
      easing: defaultDropAnimation.easing,
    });
  },
};

function TreeView<D>({
  data,
  rowHeight = 56,
  isCollapsible = true,
  isSortable = true,
  onDragCancel,
  onDragEnd,
  onDragMove,
  onDragOver,
  onDragStart,
  renderPrimaryContent,
  renderSecondaryContent,
}: TreeViewProps<D>) {
  const [items, setItems] = useState(() => data);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [overId, setOverId] = useState<UniqueIdentifier | null>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [currentPosition, setCurrentPosition] = useState<{
    parentId: UniqueIdentifier | null;
    overId: UniqueIdentifier;
  } | null>(null);

  const flattenedItems = useMemo(() => {
    const flattenedTree = flattenTree(items);
    const collapsedItems = flattenedTree.reduce<UniqueIdentifier[]>(
      (acc, { subRows, collapsed, id }) => {
        return collapsed && subRows.length ? [...acc, id] : acc;
      },
      [],
    );

    return removeSubRowsOf(
      flattenedTree,
      activeId ? [activeId, ...collapsedItems] : collapsedItems,
    );
  }, [activeId, items]);
  const projected =
    activeId && overId
      ? getProjection(flattenedItems, activeId, overId, offsetLeft)
      : null;
  const sensorContext: SensorContext<D> = useRef({
    items: flattenedItems,
    offset: offsetLeft,
  });
  const [coordinateGetter] = useState(() =>
    sortableTreeKeyboardCoordinates(sensorContext),
  );
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter,
    }),
  );

  const sortedIds = useMemo(
    () => flattenedItems.map(({ id }) => id),
    [flattenedItems],
  );
  const activeItem = activeId
    ? flattenedItems.find(({ id }) => id === activeId)
    : null;

  useEffect(() => {
    sensorContext.current = {
      items: flattenedItems,
      offset: offsetLeft,
    };
  }, [flattenedItems, offsetLeft]);

  const resetState = () => {
    setOverId(null);
    setActiveId(null);
    setOffsetLeft(0);
    setCurrentPosition(null);

    document.body.style.setProperty('cursor', '');
  };

  const handleDragStart = (e: DragStartEvent) => {
    onDragStart?.(e);
    const {
      active: { id: movedId },
    } = e;
    setActiveId(movedId);
    setOverId(movedId);

    const movedItem = flattenedItems.find(({ id }) => id === movedId);

    if (movedItem) {
      setCurrentPosition({
        parentId: movedItem.parentId,
        overId: movedId,
      });
    }

    document.body.style.setProperty('cursor', 'grabbing');
  };

  const handleDragMove = (e: DragMoveEvent) => {
    onDragMove?.(e);
    const { delta } = e;
    setOffsetLeft(delta.x);
  };

  const handleDragOver = (e: DragOverEvent) => {
    onDragOver?.(e);
    const { over } = e;
    setOverId(over?.id ?? null);
  };

  const handleDragEnd = (e: DragEndEvent) => {
    onDragEnd?.(e);
    const { active, over } = e;
    resetState();

    if (projected && over) {
      const { depth, parentId } = projected;
      const clonedItems: FlattenedItem<D>[] = [...flattenTree(items)];
      const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
      const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
      const activeTreeItem = clonedItems[activeIndex];

      clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
      const newItems = buildTree(sortedItems);

      setItems(newItems);
    }
  };

  const handleDragCancel = (e: DragCancelEvent) => {
    onDragCancel?.(e);
    resetState();
  };

  const handleCollapse = (id: UniqueIdentifier) => {
    setItems((prevItems) =>
      setProperty(
        prevItems,
        id,
        'collapsed',
        (value) => !value as TreeViewRow<D>['collapsed'],
      ),
    );
  };

  const getMovementAnnouncement = (
    eventName: string,
    movedId: UniqueIdentifier,
    hoveredId?: UniqueIdentifier,
  ) => {
    if (
      !hoveredId ||
      !projected ||
      (eventName !== 'onDragEnd' &&
        currentPosition &&
        projected.parentId === currentPosition.parentId &&
        hoveredId === currentPosition.overId)
    ) {
      return undefined;
    }

    if (eventName !== 'onDragEnd') {
      setCurrentPosition({
        parentId: projected.parentId,
        overId,
      });
    }

    const clonedItems: FlattenedItem<D>[] = JSON.parse(
      JSON.stringify(flattenTree(items)),
    );
    const overIndex = clonedItems.findIndex(({ id }) => id === hoveredId);
    const movedIndex = clonedItems.findIndex(({ id }) => id === movedId);
    const sortedItems = arrayMove(clonedItems, movedIndex, overIndex);
    const previousItem = sortedItems[overIndex - 1];
    const movedVerb = eventName === 'onDragEnd' ? 'dropped' : 'moved';
    const nestedVerb = eventName === 'onDragEnd' ? 'dropped' : 'nested';

    if (!previousItem) {
      const nextItem = sortedItems[overIndex + 1];
      return `${movedId} was ${movedVerb} before ${nextItem.id}.`;
    }
    if (projected.depth > previousItem.depth) {
      return `${movedId} was ${nestedVerb} under ${previousItem.id}.`;
    }
    let previousSibling: FlattenedItem<D> = previousItem;
    while (projected.depth < previousSibling.depth) {
      const { parentId } = previousSibling;
      previousSibling = sortedItems.find(({ id }) => id === parentId);
    }

    return `${movedId} was ${movedVerb} after ${previousSibling.id}.`;
  };

  const announcements: Announcements = {
    onDragStart({ active }) {
      return `Picked up ${active.id}.`;
    },
    onDragMove({ active, over }) {
      return getMovementAnnouncement('onDragMove', active.id, over?.id);
    },
    onDragOver({ active, over }) {
      return getMovementAnnouncement('onDragOver', active.id, over?.id);
    },
    onDragEnd({ active, over }) {
      return getMovementAnnouncement('onDragEnd', active.id, over?.id);
    },
    onDragCancel({ active }) {
      return `Moving was cancelled. ${active.id} was dropped in its original position.`;
    },
  };

  return (
    <Surface background="white" elevation={2} radius="md" hasBorder>
      <DndContext
        accessibility={{ announcements }}
        collisionDetection={closestCenter}
        measuring={measuring}
        sensors={sensors}
        onDragCancel={handleDragCancel}
        onDragEnd={handleDragEnd}
        onDragMove={handleDragMove}
        onDragOver={handleDragOver}
        onDragStart={handleDragStart}
      >
        <SortableContext
          items={sortedIds}
          strategy={verticalListSortingStrategy}
        >
          <ul>
            {flattenedItems.map((row) => {
              const { id, subRows, collapsed, depth } = row;
              return (
                <SortableTreeItem
                  key={id}
                  collapsed={Boolean(collapsed && subRows?.length)}
                  depth={id === activeId && projected ? projected.depth : depth}
                  id={id}
                  isCollapsible={isCollapsible}
                  isSortable={isSortable}
                  renderPrimaryContent={renderPrimaryContent}
                  renderSecondaryContent={renderSecondaryContent}
                  row={row}
                  rowHeight={rowHeight}
                  value={id.toString()}
                  onCollapse={
                    isCollapsible && subRows?.length
                      ? () => handleCollapse(id)
                      : undefined
                  }
                />
              );
            })}
          </ul>
          <DragOverlay dropAnimation={dropAnimationConfig}>
            {activeId && activeItem ? (
              <SortableTreeItem
                childCount={getSubRowCount(items, activeId) + 1}
                depth={activeItem.depth}
                id={activeId}
                isSortable={isSortable}
                renderPrimaryContent={renderPrimaryContent}
                row={activeItem}
                rowHeight={rowHeight}
                value={activeItem.id.toString()}
                isClone
              />
            ) : null}
          </DragOverlay>
        </SortableContext>
      </DndContext>
    </Surface>
  );
}

TreeView.displayName = 'TreeView';

export default TreeView;
