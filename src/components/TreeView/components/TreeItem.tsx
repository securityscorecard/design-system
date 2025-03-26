import styled from 'styled-components';

import { pxToRem } from '../../../utils';
import { Inline, Padbox } from '../../layout';
import { Text } from '../../Text';
import CollapsibleHandle from './CollapsibleHandle';
import { TreeItemProps } from '../TreeView.types';
import RowActions from './RowActions';
import IconButton from '../../ButtonV2/IconButton';
import { Checkbox } from '../../forms/Checkbox';

const TreeItemRoot = styled.li`
  list-style: none;
  box-sizing: border-box;
  padding-left: var(--sscds-treeitem-indent);

  &:first-child {
    border-radius: var(--sscds-radius) var(--sscds-radius) 0 0;
  }
  &:last-child {
    border-radius: 0 0 var(--sscds-radius) var(--sscds-radius);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--sscds-border-color);
  }

  &[data-active='true'] {
    background-color: var(--sscds-color-background-selectable-active);
  }

  &[data-clone] {
    display: inline-block;
    pointer-events: none;
    padding: 0;
    padding-left: 10px;
    padding-top: 5px;
    border-bottom: none;
  }

  &[data-interaction='false'] {
    pointer-events: none;
  }

  &[data-selection='false'] {
    user-select: none;
    -webkit-user-select: none;
  }

  &[data-active='true'] {
    background-color: var(--sscds-color-background-selectable-active);
  }
`;
TreeItemRoot.displayName = 'TreeItemRoot';

const TreeItemInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: var(--sscds-treeitem-height);

  [data-ghost='true'] & {
    opacity: 0.5;

    & > * {
      box-shadow: none;
      background-color: transparent;
    }
  }

  [data-clone] & {
    border-radius: var(--sscds-radii-default);
    box-shadow: var(--sscds-elevation);
    background: var(--sscds-color-background-surface-default);
    border: 1px solid var(--sscds-border-color);

    &[data-content] {
      user-select: none;
      -webkit-user-select: none;
    }
  }
`;
TreeItemInner.displayName = 'TreeItemInner';
const TreeItemControls = styled(Padbox)`
  position: absolute;
  left: calc(var(--sscds-treeitem-depth) * var(--sscds-space-6x));
`;

const TreeItemContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: var(--sscds-space-2x);
  padding-inline-start: calc(
    var(--sscds-space-2x) + var(--sscds-treeitem-content-spacing-start) +
      (var(--sscds-treeitem-depth) * var(--sscds-space-6x))
  );
  padding-inline-end: calc(
    var(--sscds-space-2x) + var(--sscds-treeitem-content-spacing-end)
  );
  &[data-interactive='true'] {
    cursor: pointer;

    &:hover {
      background-color: var(--sscds-color-background-selectable-hover);
    }
  }
`;

TreeItemContent.displayName = 'TreeItemContent';

const StartContainer = styled.span`
  flex-grow: 1;
  overflow: hidden;

  [data-ghost='true'] & {
    user-select: none;
    -webkit-user-select: none;
  }
`;
StartContainer.displayName = 'StartContainer';

const CountBox = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  height: 1.5rem;
  min-width: 1.5rem;
  padding: 0 var(--sscds-space-2x);
  border-radius: var(--sscds-radii-rounded);
  font-size: var(--sscds-font-size-elementlabel-sm);
  font-weight: var(--sscds-font-weight-elementlabel-default);
  text-align: center;
  line-height: var(--sscds-font-lineheight-elementlabel);
  background-color: var(--sscds-color-info-500);
  color: var(--sscds-color-text-white);
`;
CountBox.displayName = 'CountBox';

const getStartPadding = (
  bools: [isSortable: boolean, isSelectable: boolean, isCollapsible: boolean],
) => {
  const featureCount = bools.filter(Boolean).length;

  return ['1rem', '3rem', '5rem', '6.25rem'][featureCount];
};
function TreeItem<D>({
  childCount,
  collapsed,
  depth,
  disableInteraction,
  disableSelection,
  handleAttributes,
  handleListeners,
  isClone,
  isGhost,
  isSortable,
  isCollapsible,
  isSelected,
  isIndeterminate,
  onCollapse,
  onSelectionChange,
  renderPrimaryContent,
  renderSecondaryContent,
  row,
  rowHeight,
  rowActions = [],
  style,
  id,
  wrapperRef,
  innerRef,
  activeRowId,
  onActiveRowIdChange,
  onRowClick,
  isSelectable,
  ...props
}: TreeItemProps<D>) {
  const isClickable = typeof onRowClick === 'function';

  return (
    <TreeItemRoot
      // @ts-expect-error Typing styled-components refs is almost impossible :facepalm:
      ref={wrapperRef}
      data-active={activeRowId === id}
      data-clone={isClone}
      data-ghost={isGhost}
      data-interaction={!disableInteraction}
      data-selection={!disableSelection}
      style={{
        '--sscds-treeitem-height': pxToRem(rowHeight),
        '--sscds-treeitem-depth': depth,
      }}
      data-dnd-item
      {...props}
    >
      <TreeItemInner ref={innerRef} style={style}>
        <TreeItemControls paddingSize="sm" style={{ position: 'absolute' }}>
          <Inline align="center">
            {isSortable && (
              <IconButton
                {...handleAttributes}
                {...handleListeners}
                iconName="grip-dots-vertical"
                label="Move row"
                size="sm"
                style={{ cursor: 'grab' }}
                variant="ghost"
              />
            )}
            {isSelectable && (
              <Checkbox
                aria-label="Select row"
                checkboxId={`checkbox-${id}`}
                checked={isSelected}
                isIndeterminate={isIndeterminate}
                name={`checkbox-${id}`}
                onChange={(e) => {
                  e.stopPropagation();
                  onSelectionChange?.(id, !isSelected);
                }}
                onClick={(e) => e.stopPropagation()}
              />
            )}
            {isCollapsible && (
              <CollapsibleHandle
                collapsed={collapsed}
                onCollapse={onCollapse}
              />
            )}
          </Inline>
        </TreeItemControls>
        {/* @ts-expect-error Typescript is not able to infer correct element types based on the `as` prop */}
        <TreeItemContent
          data-interactive={isClickable}
          style={{
            '--sscds-treeitem-content-spacing-end':
              rowActions.length !== 0 ? '3rem' : '0rem',
            '--sscds-treeitem-content-spacing-start': getStartPadding([
              isSortable,
              isSelectable,
              isCollapsible,
            ]),
          }}
          data-content
          {...(isClickable
            ? {
                as: 'button',
                type: 'button',
                onClick: () => {
                  onRowClick?.(row);
                  onActiveRowIdChange?.(id);
                },
                onKeyDown: (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onRowClick?.(row);
                    onActiveRowIdChange?.(id);
                  }
                },
              }
            : {})}
        >
          <Inline align="center" gap="md">
            <StartContainer>
              {renderPrimaryContent?.(row) ?? <Text isBold>{id}</Text>}
            </StartContainer>
            {renderSecondaryContent?.(row) ?? null}
          </Inline>
        </TreeItemContent>
        {rowActions.length !== 0 && (
          <Padbox paddingSize="sm" style={{ position: 'absolute', right: 0 }}>
            <RowActions row={row} rowActions={rowActions} />
          </Padbox>
        )}
        {isClone && childCount && childCount > 1 && (
          <CountBox>{childCount}</CountBox>
        )}
      </TreeItemInner>
    </TreeItemRoot>
  );
}

TreeItem.displayName = 'TreeItem';

export default TreeItem;
