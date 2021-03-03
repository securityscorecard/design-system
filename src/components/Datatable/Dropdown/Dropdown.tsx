import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isFunction, isNotUndefined, isNull } from 'ramda-adjunct';

import {
  AbsoluteLinkActionKind,
  ActionKindsPropType,
  RelativeLinkActionKind,
} from '../types/Action.types';
import { useDropdown } from './hooks/useDropdown';
import { DropdownLinkProps, DropdownProps } from './Dropdown.types';
import { getColor, getFontSize, pxToRem } from '../../../utils/helpers';
import { requireRouterLink } from '../../../utils/require-router-link';

const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DropdownLink = styled.button<DropdownLinkProps>`
  width: 100%;
  display: block;
  padding: ${pxToRem(4, 16)};
  height: ${pxToRem(24)};
  font-size: ${getFontSize('md')};
  line-height: ${pxToRem('md')};
  color: ${getColor('graphite4B')};
  cursor: pointer;
  background: transparent;
  border: 0 none;
  text-align: left;

  &:hover {
    background: ${getColor('graphite3H')};
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  actions,
  defaultIsOpen = false,
  paneWidth = 140,
  children,
  className,
}) => {
  const parentRef = useRef(null);
  const { Pane, handleToggleTooltip, isPaneDisplayed } = useDropdown(
    parentRef,
    {
      defaultIsPaneDisplayed: defaultIsOpen,
      paneWidth,
    },
  );

  return (
    <DropdownWrapper
      ref={parentRef}
      className={className}
      onClick={handleToggleTooltip}
    >
      {isFunction(children) ? children(isPaneDisplayed) : children}

      <Pane>
        <List>
          {actions.map((action) => {
            let RouterLink = null;
            if (isNotUndefined((action as RelativeLinkActionKind).to)) {
              RouterLink = requireRouterLink();
            }

            const domTag = isNotUndefined(
              (action as AbsoluteLinkActionKind).href,
            )
              ? 'a' // render 'a' tag if 'href' is present
              : isNotUndefined((action as RelativeLinkActionKind).to)
              ? RouterLink // render 'Link' if 'to' is present
              : undefined; // use default

            if (
              isNull(RouterLink) &&
              isNotUndefined((action as RelativeLinkActionKind).to)
            ) {
              return null;
            }

            return (
              <li key={action.name}>
                <DropdownLink
                  as={domTag}
                  href={(action as AbsoluteLinkActionKind).href}
                  name={action.name}
                  to={(action as RelativeLinkActionKind).to}
                  onClick={action.onClick}
                >
                  {action.label}
                </DropdownLink>
              </li>
            );
          })}
        </List>
      </Pane>
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  actions: PropTypes.arrayOf(ActionKindsPropType).isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  defaultIsOpen: PropTypes.bool,
  paneWidth: PropTypes.number,
  className: PropTypes.string,
};

export default Dropdown;
