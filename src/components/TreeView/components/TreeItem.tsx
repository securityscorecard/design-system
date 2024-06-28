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

const TreeItemRoot = styled.li`
  list-style: none;
  box-sizing: border-box;
  padding-left: var(--sscds-treeitem-indent);
  border-bottom: 1px solid var(--sscds-border-color);

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
  style,
  value,
  wrapperRef,
  innerRef,
  ...props
}: TreeItemProps<D>) {
  return (
    <TreeItemRoot
      // @ts-expect-error Typing styled-components refs is almost impossible :facepalm:
      ref={wrapperRef}
      data-clone={isClone}
      data-ghost={isGhost}
      data-interaction={!disableInteraction}
      data-selection={!disableSelection}
      style={{
        '--sscds-treeitem-height': pxToRem(rowHeight),
        '--sscds-treeitem-indent': pxToRem(INDENTATION_WIDTH * depth),
      }}
      {...props}
    >
      <TreeItemContent ref={innerRef} style={style}>
        <Inline align="center" stretch={2} style={{ width: '100%' }}>
          <Padbox paddingSize="sm">
            <Inline align="center" gap="sm">
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
