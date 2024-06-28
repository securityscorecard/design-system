/* eslint-disable no-restricted-syntax */
import type { UniqueIdentifier } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

import { INDENTATION_WIDTH } from './constants';
import type {
  BaseTreeItem,
  FlattenedItem,
  TreeItems,
  TreeViewRow,
} from '../TreeView.types';

export const iOS = /iPad|iPhone|iPod/.test(navigator.platform);

function getDragDepth(offset: number, indentationWidth: number) {
  return Math.round(offset / indentationWidth);
}
function getMaxDepth<D>({ previousItem }: { previousItem: FlattenedItem<D> }) {
  if (previousItem) {
    return previousItem.depth + 1;
  }

  return 0;
}

function getMinDepth<D>({ nextItem }: { nextItem: FlattenedItem<D> }) {
  if (nextItem) {
    return nextItem.depth;
  }

  return 0;
}

export function getProjection<D>(
  items: FlattenedItem<D>[],
  activeId: UniqueIdentifier,
  overId: UniqueIdentifier,
  dragOffset: number,
) {
  const overItemIndex = items.findIndex(({ id }) => id === overId);
  const activeItemIndex = items.findIndex(({ id }) => id === activeId);
  const activeItem = items[activeItemIndex];
  const newItems = arrayMove(items, activeItemIndex, overItemIndex);
  const previousItem = newItems[overItemIndex - 1];
  const nextItem = newItems[overItemIndex + 1];
  const dragDepth = getDragDepth(dragOffset, INDENTATION_WIDTH);
  const projectedDepth = activeItem.depth + dragDepth;
  const maxDepth = getMaxDepth({
    previousItem,
  });
  const minDepth = getMinDepth({ nextItem });
  let depth = projectedDepth;

  if (projectedDepth >= maxDepth) {
    depth = maxDepth;
  } else if (projectedDepth < minDepth) {
    depth = minDepth;
  }

  function getParentId() {
    if (depth === 0 || !previousItem) {
      return null;
    }

    if (depth === previousItem.depth) {
      return previousItem.parentId;
    }

    if (depth > previousItem.depth) {
      return previousItem.id;
    }

    const newParent = newItems
      .slice(0, overItemIndex)
      .reverse()
      .find((item) => item.depth === depth)?.parentId;

    return newParent ?? null;
  }

  return { depth, maxDepth, minDepth, parentId: getParentId() };
}

function flatten<D>(
  items: TreeItems<D>,
  parentId: UniqueIdentifier | null = null,
  depth = 0,
): FlattenedItem<D>[] {
  return items.reduce<FlattenedItem<D>[]>((acc, item, index) => {
    return [
      ...acc,
      { ...item, parentId, depth, index },
      ...flatten(item.subRows || [], item.id, depth + 1),
    ];
  }, []);
}

export function flattenTree<D>(items: TreeItems<D>): FlattenedItem<D>[] {
  return flatten(items);
}
export function findItem<D>(
  items: BaseTreeItem<D>[],
  itemId: UniqueIdentifier,
) {
  return items.find(({ id }) => id === itemId);
}
export function buildTree<D>(flattenedItems: FlattenedItem<D>[]): TreeItems<D> {
  const root: BaseTreeItem<D> = { id: 'root', subRows: [] };
  const nodes: Record<string, BaseTreeItem<D>> = { [root.id]: root };
  const items = flattenedItems.map((item) => ({ ...item, subRows: [] }));

  items.forEach((item) => {
    const { id, subRows } = item;
    const parentId = item.parentId ?? root.id;
    const parent = nodes[parentId] ?? findItem(items, parentId);

    nodes[id] = { id, subRows };
    parent.subRows.push(item);
  });

  return root.subRows;
}

export function findItemDeep<D>(
  items: TreeItems<D>,
  itemId: UniqueIdentifier,
): BaseTreeItem<D> | undefined {
  for (const item of items) {
    const { id, subRows } = item;

    if (id === itemId) {
      return item;
    }

    if (subRows?.length) {
      const child = findItemDeep(subRows, itemId);

      if (child) {
        return child;
      }
    }
  }

  return undefined;
}

export function setProperty<D, T extends keyof BaseTreeItem<D>>(
  items: TreeItems<D>,
  id: UniqueIdentifier,
  property: T,
  setter: (value: TreeViewRow<D>[T]) => TreeViewRow<D>[T],
) {
  for (const item of items) {
    if (item.id === id) {
      item[property] = setter(item[property]);
    }

    if (item.subRows?.length) {
      item.subRows = setProperty(item.subRows, id, property, setter);
    }
  }

  return [...items];
}

function countSubRows<D>(items: BaseTreeItem<D>[], count = 0): number {
  return items.reduce((acc, item) => {
    if (item.subRows?.length) {
      return countSubRows(item.subRows, acc + 1);
    }

    return acc + 1;
  }, count);
}

export function getSubRowCount<D>(items: TreeItems<D>, id: UniqueIdentifier) {
  const item = findItemDeep(items, id);

  return item ? countSubRows(item.subRows ?? []) : 0;
}

export function removeSubRowsOf<D>(
  items: FlattenedItem<D>[],
  ids: UniqueIdentifier[],
) {
  const excludeParentIds = [...ids];

  return items.filter((item) => {
    if (item.parentId && excludeParentIds.includes(item.parentId)) {
      if (item.subRows?.length) {
        excludeParentIds.push(item.id);
      }
      return false;
    }

    return true;
  });
}
