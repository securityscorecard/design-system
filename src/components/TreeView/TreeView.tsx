import { useEffect, useState } from 'react';
import {
  DndContext,
  DragOverlay,
  DropAnimation,
  MeasuringStrategy,
  closestCenter,
  defaultDropAnimation,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { getSubRowCount, setProperty } from './common/utils';
import type { TreeViewProps, TreeViewRow } from './TreeView.types';
import SortableTreeItem from './components/SortableTreeItem';
import { Surface } from '../layout';
import { useDnD } from './hooks/useDnD';
import { useSelection } from './hooks/useSelection';

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
  isSelectable = false,
  selectedIds,
  defaultSelectedIds,
  onSelectionChange,
  renderPrimaryContent,
  renderSecondaryContent,
  onDragCancel,
  onDragEnd,
  onDragMove,
  onDragOver,
  onDragStart,
  onRowClick,
  activeRowId,
  onActiveRowIdChange,
  rowActions,
}: TreeViewProps<D>) {
  const [items, setItems] = useState(() => data);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const {
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
  } = useDnD({ items, setItems, onDragEnd });

  const { selectedItems, indeterminateItems, handleSelectionChange } =
    useSelection({
      items: flattenedItems,
      selectedIds,
      defaultSelectedIds,
      onSelectionChange,
    });

  const handleCollapse = (id: string) => {
    setItems((prevItems) =>
      setProperty(
        prevItems,
        id,
        'collapsed',
        (value) => !value as TreeViewRow<D>['collapsed'],
      ),
    );
  };

  return (
    <Surface elevation={2} radius="md" hasBorder>
      <DndContext
        accessibility={{ announcements }}
        collisionDetection={closestCenter}
        measuring={measuring}
        sensors={sensors}
        onDragCancel={(e) => {
          onDragCancel?.(e);
          handleDragCancel();
        }}
        onDragEnd={(e) => {
          handleDragEnd(e);
        }}
        onDragMove={(e) => {
          onDragMove?.(e);
          handleDragMove(e);
        }}
        onDragOver={(e) => {
          onDragOver?.(e);
          handleDragOver(e);
        }}
        onDragStart={(e) => {
          onDragStart?.(e);
          handleDragStart(e);
        }}
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
                  activeRowId={activeRowId}
                  collapsed={Boolean(collapsed && subRows?.length)}
                  depth={id === activeId && projected ? projected.depth : depth}
                  id={id}
                  isCollapsible={isCollapsible}
                  isIndeterminate={
                    isSelectable ? indeterminateItems.has(id) : undefined
                  }
                  isSelectable={isSelectable}
                  isSelected={isSelectable ? selectedItems.has(id) : undefined}
                  isSortable={isSortable}
                  renderPrimaryContent={renderPrimaryContent}
                  renderSecondaryContent={renderSecondaryContent}
                  row={row}
                  rowActions={rowActions}
                  rowHeight={rowHeight}
                  onActiveRowIdChange={onActiveRowIdChange}
                  onCollapse={
                    isCollapsible && subRows?.length
                      ? () => handleCollapse(id)
                      : undefined
                  }
                  onRowClick={onRowClick}
                  onSelectionChange={
                    isSelectable ? handleSelectionChange : undefined
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
                isIndeterminate={indeterminateItems.has(activeId)}
                isSelected={selectedItems.has(activeId)}
                isSortable={isSortable}
                renderPrimaryContent={renderPrimaryContent}
                row={activeItem}
                rowHeight={rowHeight}
                value={activeItem.id.toString()}
                isClone
                onSelectionChange={handleSelectionChange}
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
