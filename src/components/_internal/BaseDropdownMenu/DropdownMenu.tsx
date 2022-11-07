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
import { Text, TextEnums } from '../../typographyLegacy';
import { Padbox, PadboxEnums } from '../../layout';
import { CLX_COMPONENT } from '../../../theme/constants';

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
  &:focus {
    background: ${getColor('primary.50')};
    outline: none;
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
  const dropdownRef = useRef({
    togglePane: noop,
    hidePane: noop,
    showPane: noop,
  });
  const trigger: React.ReactElement = (
    <span className={cls(CLX_COMPONENT, className)}>
      {isFunction(children) ? children(isActive) : children}
    </span>
  );
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
      <List>
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
            <li key={action.name}>
              <DropdownLink
                as={domTag}
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
                <Text size={TextEnums.TextSizes.md}>{action.label}</Text>
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
