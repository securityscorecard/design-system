import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

import { getRadii, getToken } from '../../../utils';
import { Icon, Types as SSCIconTypes, SSCIcons } from '../../Icon';
import { Inline, Padbox } from '../../layout';
import { Text } from '../../typographyLegacy';

export const MenuContent = styled(DropdownMenu.Content)`
  border: 1px solid rgba(0 0 0/15%);
  border-radius: ${getRadii('default')};
  background: white;
  padding: 0.5rem 0;
`;

const MenuItemRoot = styled(DropdownMenu.Item)`
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    background: ${({ disabled, theme }) =>
      disabled
        ? 'transparent'
        : getToken('color-action-background-primary-focus', { theme })};
    outline: none;
  }
`;

export const MenuItem = ({
  children,
  onClick,
  isDisabled = false,
  iconName,
  iconType,
  className,
}: {
  children: string;
  /* eslint-disable @typescript-eslint/ban-types */
  iconName: SSCIcons | (string & {});
  iconType?: SSCIconTypes | (string & {});
  /* eslint-enable @typescript-eslint/ban-types */
  onClick: (event: Event) => void;
  isDisabled?: boolean;
  className?: string;
}) => (
  <MenuItemRoot className={className} disabled={isDisabled} onSelect={onClick}>
    <Padbox paddingSize="md" paddingType="squish">
      <Inline align="center" gap="md">
        <Icon
          color="neutral.700"
          name={iconName}
          type={iconType}
          hasFixedWidth
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
