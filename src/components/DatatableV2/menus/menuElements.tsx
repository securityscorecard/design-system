import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

import { getRadii, getToken } from '../../../utils';
import { Icon, IconNames, RegularIconTypes } from '../../Icon';
import { Inline, Padbox } from '../../layout';
import { Text } from '../../Text';

export const MenuContent = styled(DropdownMenu.Content)<{
  $isFullscreen: boolean;
}>`
  position: relative;
  border: 1px solid rgba(0 0 0/15%);
  border-radius: ${getRadii('default')};
  background: white;
  padding: 0.5rem 0;
  z-index: ${({ $isFullscreen }) => ($isFullscreen ? 1000 : 2)};
`;

const MenuItemRoot = styled(DropdownMenu.Item)<{ $isDestructive: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: pointer;

  &:hover {
    background: ${({ disabled, $isDestructive, theme }) =>
      disabled
        ? 'transparent'
        : getToken(
            $isDestructive
              ? 'color-action-danger-focus'
              : 'color-action-background-primary-focus',
            { theme },
          )};
    outline: none;
  }
`;

export const MenuItem = ({
  children,
  onClick,
  isDisabled = false,
  isDestructive = false,
  iconName,
  iconType,
  className,
}: {
  children: string;
  iconName: IconNames;
  iconType?: RegularIconTypes;
  onClick: (event: Event) => void;
  isDisabled?: boolean;
  isDestructive?: boolean;
  className?: string;
}) => (
  <MenuItemRoot
    $isDestructive={isDestructive}
    className={className}
    disabled={isDisabled}
    onSelect={onClick}
  >
    <Padbox paddingSize="md" paddingType="squish">
      <Inline align="center" gap="md">
        <Icon
          color={isDestructive ? 'error.500' : 'neutral.700'}
          name={iconName}
          size="sm"
          type={iconType}
          hasFixedSize
        />
        <Text>{children}</Text>
      </Inline>
    </Padbox>
  </MenuItemRoot>
);

export const MenuSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: rgba(0 0 0/15%);
  margin: 0.5rem 0;
`;
