import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isFunction } from 'ramda-adjunct';
import * as BaseDropdownMenu from '@radix-ui/react-dropdown-menu';

import { ActionKindsPropType } from '../../../types/action.types';
import { DropdownLinkProps, DropdownMenuProps } from './DropdownMenu.types';
import { getColor, pxToRem } from '../../../utils';
import { Padbox, Stack, Surface } from '../../layout';

const FORWARD_PROP_EXCEPTIONS = ['paddingSize', 'paddingType'];

export const DropdownLink = styled(Padbox).withConfig({
  shouldForwardProp: (prop) => !FORWARD_PROP_EXCEPTIONS.includes(String(prop)),
})<DropdownLinkProps>`
  width: 100%;
  min-width: ${pxToRem(140)};
  display: block;
  cursor: pointer;
  background: transparent;
  border: 0 none;
  text-align: left;

  &:hover,
  &:focus-visible {
    border: 0;
    outline: 0 !important;
    background: ${getColor('primary.50')};
  }
`;

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  actions,
  defaultIsOpen = false,
  paneWidth = 'auto',
  children,
  className,
  placement = 'bottom',
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <BaseDropdownMenu.Root
      defaultOpen={defaultIsOpen}
      onOpenChange={setIsActive}
    >
      <BaseDropdownMenu.Trigger className={className} asChild>
        <span>{isFunction(children) ? children(isActive) : children}</span>
      </BaseDropdownMenu.Trigger>
      <BaseDropdownMenu.Portal>
        <BaseDropdownMenu.Content
          className="DropdownMenuContent"
          side={placement}
          sideOffset={5}
        >
          <Surface elevation={2} radius="md" hasBorder>
            <Padbox paddingSize="sm">
              <Stack gap="sm" style={{ width: paneWidth }}>
                {actions.map((item) => (
                  <BaseDropdownMenu.Item
                    className="DropdownMenuItem"
                    onSelect={item.onClick}
                  >
                    <DropdownLink as="a">{item.label}</DropdownLink>
                  </BaseDropdownMenu.Item>
                ))}
              </Stack>
            </Padbox>
          </Surface>
        </BaseDropdownMenu.Content>
      </BaseDropdownMenu.Portal>
    </BaseDropdownMenu.Root>
  );
};

DropdownMenu.propTypes = {
  actions: PropTypes.arrayOf(ActionKindsPropType).isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  defaultIsOpen: PropTypes.bool,
  paneWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<'auto'>(['auto']),
  ]),
  className: PropTypes.string,
  placement: PropTypes.oneOf(['bottom', 'bottom-start', 'bottom-end']),
};

export default React.memo(DropdownMenu);
