import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

import { Icon, IconNames, RegularIconTypes } from '../../Icon';
import { Inline, Padbox } from '../../layout';
import { Text } from '../../Text';

export const MenuContent = styled(DropdownMenu.Content)<{
  $isFullscreen?: boolean;
}>`
  position: relative;
  border: 1px solid var(--sscds-color-border-surface-default);
  border-radius: var(--sscds-radii-surface-md);
  background: var(--sscds-color-background-surface-default);
  padding: 0.5rem;
  z-index: ${({ $isFullscreen }) => ($isFullscreen ? 1000 : 2)};
`;

const MenuItemRoot = styled(DropdownMenu.Item)<{ $isDestructive: boolean }>`
  border-radius: var(--sscds-radii-default);
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: pointer;

  &:hover {
    background: ${({ disabled, $isDestructive }) =>
      disabled
        ? 'transparent'
        : $isDestructive
        ? 'var(--sscds-color-background-action-danger-ghost-hover)'
        : 'var(--sscds-color-background-action-ghost-hover)'};
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
    onClick={(e) => {
      e.stopPropagation();
    }}
    onSelect={onClick}
  >
    <Padbox paddingSize="md" paddingType="squish">
      <Inline align="center" gap="md">
        <Icon
          color={
            isDestructive
              ? 'var(--sscds-color-icon-danger)'
              : 'var(--sscds-color-icon-subtle)'
          }
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
  background-color: var(--sscds-color-border-default);
  margin: 0.5rem 0;
`;
