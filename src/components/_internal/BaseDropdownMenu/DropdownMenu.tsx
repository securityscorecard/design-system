import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isFunction, isNotUndefined, isNull, noop } from 'ramda-adjunct';
import cls from 'classnames';

import {
  AbsoluteLinkActionKind,
  ActionKindsPropType,
  RelativeLinkActionKind,
} from '../../../types/action.types';
import { DropdownLinkProps, DropdownMenuProps } from './DropdownMenu.types';
import { getColor, getSpace, pxToRem } from '../../../utils';
import { requireRouterLink } from '../../../utils/require-router-link';
import { Dropdown } from '../../Dropdown';
import { SpaceSizes } from '../../../theme/space.enums';
import { Text, TextEnums } from '../../Text';
import { Padbox, PadboxEnums } from '../../layout';
import { CLX_COMPONENT } from '../../../theme/constants';
import { InteractiveElement } from '../../Dropdown/Dropdown.types';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: ${getSpace(SpaceSizes.sm)};
  padding-bottom: ${getSpace(SpaceSizes.sm)};
`;

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
    background: ${getColor('primary.50')};
  }
`;

const getOptions = () => {
  return Array.from(
    document.querySelectorAll<InteractiveElement>('[data-dropdown-item]'),
  );
};

const DropdownMenu = ({
  actions,
  defaultIsOpen = false,
  paneWidth = 'auto',
  children,
  className,
  placement = 'bottom',
}: DropdownMenuProps) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef({
    togglePane: noop,
    hidePane: noop,
    showPane: noop,
  });
  const containerRef = useRef(null);
  const trigger: React.ReactElement = (
    <span className={cls(CLX_COMPONENT, className)}>
      {isFunction(children) ? children(isActive) : children}
    </span>
  );

  const handleKeyDown = (event) => {
    const selectOption = (direction = 'DOWN') => {
      const options = getOptions();
      const index = options.indexOf(
        document.activeElement as InteractiveElement,
      );
      const target = options[index + (direction === 'DOWN' ? 1 : -1)];
      target?.focus();
    };
    const fn = {
      // Focus the next sub-item or item.
      ArrowDown: () => selectOption('DOWN'),
      // Focus the previous sub-item or item.
      ArrowUp: () => selectOption('UP'),
    }[event.key];
    fn?.();
  };

  const handleBlur = () => {
    setTimeout(() => {
      const containsActiveElement = containerRef.current?.contains(
        document.activeElement,
      );
      if (!containsActiveElement) {
        dropdownRef.current?.hidePane();
      }
    });
  };

  return (
    <Dropdown
      ref={dropdownRef}
      defaultIsOpen={defaultIsOpen}
      innerPaddingSize={SpaceSizes.none}
      maxPaneWidth={paneWidth}
      placement={placement}
      trigger={trigger}
      onClose={() => setIsActive(false)}
      onOpen={() => setIsActive(true)}
    >
      <List ref={containerRef} onBlur={handleBlur} onKeyDown={handleKeyDown}>
        {actions.map((action) => {
          let RouterLink = null;
          if (
            isNotUndefined(
              (action as RelativeLinkActionKind<React.MouseEvent[], boolean>)
                .to,
            )
          ) {
            RouterLink = requireRouterLink();
          }

          const domTag = isNotUndefined(
            (action as AbsoluteLinkActionKind<React.MouseEvent[], boolean>)
              .href,
          )
            ? 'a' // render 'a' tag if 'href' is present
            : isNotUndefined(
                (action as RelativeLinkActionKind<React.MouseEvent[], boolean>)
                  .to,
              )
            ? RouterLink // render 'Link' if 'to' is present
            : 'button'; // use default

          if (
            isNull(RouterLink) &&
            isNotUndefined(
              (action as RelativeLinkActionKind<React.MouseEvent[], boolean>)
                .to,
            )
          ) {
            return null;
          }

          return (
            <li
              key={action.name}
              data-interactive="true"
              style={{ overflow: 'hidden' }}
            >
              <DropdownLink
                as={domTag}
                data-dropdown-item="true"
                data-interactive="true"
                href={
                  (
                    action as AbsoluteLinkActionKind<
                      React.MouseEvent[],
                      boolean
                    >
                  ).href
                }
                name={action.name}
                paddingSize={SpaceSizes.md}
                paddingType={PadboxEnums.PaddingTypes.squish}
                to={
                  (
                    action as RelativeLinkActionKind<
                      React.MouseEvent[],
                      boolean
                    >
                  ).to
                }
                onClick={(event) => {
                  action.onClick(event);
                  dropdownRef.current?.hidePane();
                }}
              >
                <Text data-interactive="true" size={TextEnums.TextSizes.md}>
                  {action.label}
                </Text>
              </DropdownLink>
            </li>
          );
        })}
      </List>
    </Dropdown>
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
