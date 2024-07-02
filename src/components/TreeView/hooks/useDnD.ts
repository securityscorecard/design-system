import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Announcements,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

import {
  buildTree,
  flattenTree,
  getProjection,
  removeSubRowsOf,
} from '../common/utils';
import { sortableTreeKeyboardCoordinates } from '../common/keyboardCoordinates';
import type {
  FlattenedItem,
  SensorContext,
  TreeItems,
} from '../TreeView.types';

export const useDnD = <D>({
  items,
  setItems,
}: {
  items: TreeItems<D>;
  setItems: Dispatch<SetStateAction<TreeItems<D>>>;
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [currentPosition, setCurrentPosition] = useState<{
    parentId: string | null;
    overId: string;
  } | null>(null);

  const flattenedItems = useMemo(() => {
    const flattenedTree = flattenTree(items);
    const collapsedItems = flattenedTree.reduce<string[]>(
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
    const {
      active: { id: movedId },
    } = e;
    setActiveId(movedId as string);
    setOverId(movedId as string);

    const movedItem = flattenedItems.find(({ id }) => id === movedId);

    if (movedItem) {
      setCurrentPosition({
        parentId: movedItem.parentId,
        overId: movedId as string,
      });
    }

    document.body.style.setProperty('cursor', 'grabbing');
  };

  const handleDragMove = (e: DragMoveEvent) => {
    const { delta } = e;
    setOffsetLeft(delta.x);
  };

  const handleDragOver = (e: DragOverEvent) => {
    const { over } = e;
    setOverId((over?.id as string) ?? null);
  };

  const handleDragEnd = (e: DragEndEvent) => {
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

  const handleDragCancel = () => {
    resetState();
  };

  const getMovementAnnouncement = (
    eventName: string,
    movedId: string,
    hoveredId?: string,
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
      return getMovementAnnouncement(
        'onDragMove',
        active.id as string,
        over?.id as string,
      );
    },
    onDragOver({ active, over }) {
      return getMovementAnnouncement(
        'onDragOver',
        active.id as string,
        over?.id as string,
      );
    },
    onDragEnd({ active, over }) {
      return getMovementAnnouncement(
        'onDragEnd',
        active.id as string,
        over?.id as string,
      );
    },
    onDragCancel({ active }) {
      return `Moving was cancelled. ${active.id} was dropped in its original position.`;
    },
  };

  return {
    activeId,
    activeItem,
    announcements,
    flattenedItems,
    projected,
    sensors,
    sortedIds,
    handleDragCancel,
    handleDragEnd,
    handleDragMove,
    handleDragOver,
    handleDragStart,
  };
};
