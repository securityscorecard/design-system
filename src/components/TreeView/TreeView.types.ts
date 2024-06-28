import type { ComponentProps, MutableRefObject, ReactNode } from 'react';
import type {
  DragCancelEvent,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  DraggableAttributes,
  UniqueIdentifier,
} from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

export interface TreeItemProps<D> extends Omit<ComponentProps<'li'>, 'id'> {
  depth: number;
  value: UniqueIdentifier;
  row: TreeViewRow<D>;
  rowHeight?: number;
  childCount?: number;
  isClone?: boolean;
  isGhost?: boolean;
  isSortable?: boolean;
  isCollapsible?: boolean;
  collapsed?: boolean;
  wrapperRef?: (node: HTMLLIElement) => void;
  innerRef?: (node: HTMLDivElement) => void;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  onCollapse?: () => void;
  renderPrimaryContent?: (row: TreeViewRow<D>) => ReactNode;
  renderSecondaryContent?: (row: TreeViewRow<D>) => ReactNode;
  handleAttributes: DraggableAttributes;
  handleListeners: SyntheticListenerMap;
}

export interface SortableTreeItemProps<D>
  extends Omit<TreeItemProps<D>, 'handleAttributes' | 'handleListeners'> {
  id: UniqueIdentifier;
  depth: number;
}

export interface TreeViewProps<D> {
  data?: TreeItems<D>;
  rowHeight?: number;
  isCollapsible?: boolean;
  isSortable?: boolean;
  onDragCancel?: (event: DragCancelEvent) => void;
  onDragEnd?: (event: DragEndEvent) => void;
  onDragMove?: (event: DragMoveEvent) => void;
  onDragOver?: (event: DragOverEvent) => void;
  onDragStart?: (event: DragStartEvent) => void;
  renderPrimaryContent?: (row: TreeViewRow<D>) => ReactNode;
  renderSecondaryContent?: (row: TreeViewRow<D>) => ReactNode;
}

export interface BaseTreeItem<D> {
  id: UniqueIdentifier;
  collapsed?: boolean;
  subRows?: TreeViewRow<D>[];
}
export type TreeViewRow<D> = BaseTreeItem<D> & D;

export type TreeItems<D> = TreeViewRow<D>[];

export type FlattenedItem<D> = {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
} & TreeViewRow<D>;

export type SensorContext<D> = MutableRefObject<{
  items: FlattenedItem<D>[];
  offset: number;
}>;

// type RowActionCallbackUnion<D, Type> =
//   | Type
//   | ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type);

// export type TreeViewRowAction<D> = null | {
//   label: RowActionCallbackUnion<D, string>;
//   iconName: RowActionCallbackUnion<D, IconNames>;
//   iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
//   onClick(props: {
//     row: DatatableRow<D>;
//     table: DatatableInstance<D>;
//   }): (event: Event) => void;
//   isDisabled?: RowActionCallbackUnion<D, boolean>;
//   isDestructive?: boolean;
// };
