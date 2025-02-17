import styled from 'styled-components';

import { pxToRem } from '../../../utils';
import { INDENTATION_WIDTH } from '../common/constants';
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

  &[tabIndex='0'] {
    cursor: pointer;

    &[data-active='true'] {
      background-color: var(--sscds-color-background-selectable-active);
    }

    &:hover {
      background-color: var(--sscds-color-background-selectable-hover);
    }
  }
`;
TreeItemRoot.displayName = 'TreeItemRoot';

const TreeItemContent = styled.div`
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
  return (
    <TreeItemRoot
      // @ts-expect-error Typing styled-components refs is almost impossible :facepalm:
      ref={wrapperRef}
      data-active={activeRowId === id}
      data-clone={isClone}
      data-ghost={isGhost}
      data-interaction={!disableInteraction}
      data-selection={!disableSelection}
      role={typeof onRowClick === 'function' ? 'button' : 'listitem'}
      style={{
        '--sscds-treeitem-height': pxToRem(rowHeight),
        '--sscds-treeitem-indent': pxToRem(INDENTATION_WIDTH * depth),
      }}
      tabIndex={typeof onRowClick === 'function' ? 0 : -1}
      data-dnd-item
      onClick={() => {
        onRowClick?.(row);
        onActiveRowIdChange?.(id);
      }}
      onKeyDown={(e) => {
        if (
          (e.target as HTMLElement).dataset['dnd-item'] !== undefined &&
          (e.key === 'Enter' || e.key === ' ')
        ) {
          onRowClick?.(row);
          onActiveRowIdChange?.(id);
        }
      }}
      {...props}
    >
      <TreeItemContent ref={innerRef} style={style}>
        <Inline align="center" stretch={2} style={{ width: '100%' }}>
          <Padbox paddingSize="sm">
            <Inline align="center">
              {isSortable && (
                // @ts-expect-error 'aria-describedby' is used instead of 'label' prop. This comes from dnd-kit
                <IconButton
                  {...handleAttributes}
                  {...handleListeners}
                  iconName="grip-dots-vertical"
                  size="sm"
                  style={{ cursor: 'grab' }}
                  variant="ghost"
                />
              )}
              {isSelectable && (
                <Checkbox
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
          </Padbox>
          <Padbox paddingSize="sm" data-content>
            <Inline align="center" gap="md">
              <StartContainer>
                {renderPrimaryContent?.(row) ?? <Text isBold>{id}</Text>}
              </StartContainer>
              {renderSecondaryContent?.(row) ?? null}
            </Inline>
          </Padbox>
          {rowActions.length !== 0 && (
            <Padbox paddingSize="sm">
              <RowActions row={row} rowActions={rowActions} />
            </Padbox>
          )}
        </Inline>
        {isClone && childCount && childCount > 1 && (
          <CountBox>{childCount}</CountBox>
        )}
      </TreeItemContent>
    </TreeItemRoot>
  );
}

TreeItem.displayName = 'TreeItem';

export default TreeItem;
