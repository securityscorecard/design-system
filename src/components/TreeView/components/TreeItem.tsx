import React from 'react';
import styled from 'styled-components';

import { Badge } from '../../Badge';
import { pxToRem } from '../../../utils';
import { INDENTATION_WIDTH } from '../common/constants';
import { Inline, Padbox } from '../../layout';
import { Text } from '../../Text';
import BaseHandle from '../../_internal/BaseHandle/BaseHandle';
import CollapsibleHandle from './CollapsibleHandle';
import { TreeItemProps } from '../TreeView.types';
import RowActions from './RowActions';

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
    background-color: var(--sscds-color-background-surface-dynamic-default);
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
      background-color: var(--sscds-color-background-surface-dynamic-default);
    }

    &:hover {
      background-color: var(--sscds-color-primary-050);
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
  top: -0.75rem;
  right: -0.75rem;
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
  onCollapse,
  renderPrimaryContent,
  renderSecondaryContent,
  row,
  rowHeight,
  rowActions = [],
  style,
  value,
  wrapperRef,
  innerRef,
  activeRowId,
  onActiveRowIdChange,
  onRowClick,
  ...props
}: TreeItemProps<D>) {
  return (
    <TreeItemRoot
      // @ts-expect-error Typing styled-components refs is almost impossible :facepalm:
      ref={wrapperRef}
      data-active={activeRowId === value}
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
      onClick={() => {
        onRowClick?.(row);
        onActiveRowIdChange(value);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onRowClick?.(row);
          onActiveRowIdChange(value);
        }
      }}
      {...props}
    >
      <TreeItemContent ref={innerRef} style={style}>
        <Inline align="center" stretch={2} style={{ width: '100%' }}>
          <Padbox paddingSize="sm">
            <Inline align="center">
              {isSortable && (
                <BaseHandle
                  {...handleAttributes}
                  {...handleListeners}
                  iconProps={{ name: 'grip-dots-vertical' }}
                  style={{ cursor: 'grab' }}
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
                {renderPrimaryContent?.(row) ?? <Text isBold>{value}</Text>}
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
          <CountBox>
            <Badge count={childCount} variant="info" />
          </CountBox>
        )}
      </TreeItemContent>
    </TreeItemRoot>
  );
}

TreeItem.displayName = 'TreeItem';

export default TreeItem;
