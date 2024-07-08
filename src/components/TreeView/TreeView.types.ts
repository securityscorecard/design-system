import type { ComponentProps, MutableRefObject, ReactNode } from 'react';
import type {
  DragCancelEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  DraggableAttributes,
} from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

import { IconNames, RegularIconTypes } from '../Icon';

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

export interface BaseTreeItem<D> {
  id: string;
  collapsed?: boolean;
  subRows?: TreeViewRow<D>[];
}
export type TreeViewRow<D> = BaseTreeItem<D> & D;

export type TreeItems<D> = TreeViewRow<D>[];

export interface TreeViewProps<D> {
  data: TreeItems<D>;
  rowHeight?: number;
  isCollapsible?: boolean;
  isSortable?: boolean;
  onDragCancel?: (event: DragCancelEvent) => void;
  onDragEnd?: (
    movedId: string,
    rows: {
      newItems: TreeItems<D>;
      oldItems: TreeItems<D>;
      flattenedNewItems?: TreeItems<D>;
      flattenedOldItems?: TreeItems<D>;
    },
  ) => void;
  onDragMove?: (event: DragMoveEvent) => void;
  onDragOver?: (event: DragOverEvent) => void;
  onDragStart?: (event: DragStartEvent) => void;
  onRowClick?: (row: TreeViewRow<D>) => void;
  renderPrimaryContent: (row: TreeViewRow<D>) => ReactNode;
  renderSecondaryContent?: (row: TreeViewRow<D>) => ReactNode;
  activeRowId?: string;
  onActiveRowIdChange?: (id: string) => void;
  rowActions?: RowAction<D>[];
}

export type SortableTreeItemProps<D> = Omit<
  TreeItemProps<D>,
  'handleAttributes' | 'handleListeners'
>;

export interface TreeItemProps<D> extends Omit<ComponentProps<'li'>, 'id'> {
  depth: number;
  id: string;
  row: TreeViewRow<D>;
  childCount?: number;
  collapsed?: boolean;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  handleAttributes: DraggableAttributes;
  handleListeners: SyntheticListenerMap;
  innerRef?: (node: HTMLDivElement) => void;
  isClone?: boolean;
  isGhost?: boolean;
  onCollapse?: () => void;
  wrapperRef?: (node: HTMLLIElement) => void;
  activeRowId?: TreeViewProps<D>['activeRowId'];
  isCollapsible?: TreeViewProps<D>['isCollapsible'];
  isSortable?: TreeViewProps<D>['isSortable'];
  onActiveRowIdChange?: TreeViewProps<D>['onActiveRowIdChange'];
  onRowClick?: TreeViewProps<D>['onRowClick'];
  renderPrimaryContent?: TreeViewProps<D>['renderPrimaryContent'];
  renderSecondaryContent?: TreeViewProps<D>['renderSecondaryContent'];
  rowActions?: TreeViewProps<D>['rowActions'];
  rowHeight?: TreeViewProps<D>['rowHeight'];
}

export type FlattenedItem<D> = {
  parentId: string | null;
  depth: number;
  index: number;
} & TreeViewRow<D>;

export type SensorContext<D> = MutableRefObject<{
  items: FlattenedItem<D>[];
  offset: number;
}>;
