import type { ComponentProps, MutableRefObject, ReactNode } from 'react';
import type {
  DragCancelEvent,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  DraggableAttributes,
} from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

import { IconNames, RegularIconTypes } from '../Icon';

export interface TreeItemProps<D> extends Omit<ComponentProps<'li'>, 'id'> {
  depth: number;
  value: string;
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
  onRowClick?: (row: TreeViewRow<D>) => void;
  renderPrimaryContent?: (row: TreeViewRow<D>) => ReactNode;
  renderSecondaryContent?: (row: TreeViewRow<D>) => ReactNode;
  handleAttributes: DraggableAttributes;
  handleListeners: SyntheticListenerMap;
  activeRowId?: string;
  onActiveRowIdChange?: (id: string) => void;
  rowActions?: RowAction<D>[];
}

export interface SortableTreeItemProps<D>
  extends Omit<TreeItemProps<D>, 'handleAttributes' | 'handleListeners'> {
  id: string;
  depth: number;
}

type RowActionCallbackUnion<D, Type> =
  | Type
  | ((props: { row: TreeViewRow<D> }) => Type);

export type RowAction<D> = null | {
  label: RowActionCallbackUnion<D, string>;
  iconName: RowActionCallbackUnion<D, IconNames>;
  iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
  onClick(props: { row: TreeViewRow<D> }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<D, boolean>;
  isDestructive?: boolean;
};

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
  onRowClick?: (row: TreeViewRow<D>) => void;
  renderPrimaryContent?: (row: TreeViewRow<D>) => ReactNode;
  renderSecondaryContent?: (row: TreeViewRow<D>) => ReactNode;
  activeRowId?: string;
  onActiveRowIdChange?: (id: string) => void;
  rowActions?: RowAction<D>[];
}

export interface BaseTreeItem<D> {
  id: string;
  collapsed?: boolean;
  subRows?: TreeViewRow<D>[];
}
export type TreeViewRow<D> = BaseTreeItem<D> & D;

export type TreeItems<D> = TreeViewRow<D>[];

export type FlattenedItem<D> = {
  parentId: string | null;
  depth: number;
  index: number;
} & TreeViewRow<D>;

export type SensorContext<D> = MutableRefObject<{
  items: FlattenedItem<D>[];
  offset: number;
}>;
