import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isFunction, isNotUndefined, isNull } from 'ramda-adjunct';

import {
  AbsoluteLinkActionKind,
  ActionKindsPropType,
  RelativeLinkActionKind,
} from '../../../types/action.types';
import { DropdownLinkProps, DropdownProps } from './Dropdown.types';
import {
  createPaddingSpacing,
  getColor,
  getFontSize,
  getLineHeight,
  pxToRem,
} from '../../../utils';
import { requireRouterLink } from '../../../utils/require-router-link';
import { Dropdown as BaseDropdown } from '../../Dropdown';
import { SpaceSizes } from '../../../theme/space.enums';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  ${createPaddingSpacing({ vertical: 0.4, horizontal: 0 })};
`;

export const DropdownLink = styled.button<DropdownLinkProps>`
  width: 100%;
  display: block;
  padding: ${pxToRem(4, 16)};
  height: ${pxToRem(24)};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  color: ${getColor('neutral.900')};
  cursor: pointer;
  background: transparent;
  border: 0 none;
  text-align: left;

  &:hover {
    background: ${getColor('neutral.200')};
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  actions,
  defaultIsOpen = false,
  paneWidth = 140,
  children,
  className,
  placement = 'bottom',
}) => {
  const [isActive, setIsActive] = useState(false);
  const trigger: React.ReactElement = (
    <span className={className}>
      {isFunction(children) ? children(isActive) : children}
    </span>
  );
  return (
    <BaseDropdown
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
              (action as RelativeLinkActionKind<string[], boolean>).to,
            )
          ) {
            RouterLink = requireRouterLink();
          }

          const domTag = isNotUndefined(
            (action as AbsoluteLinkActionKind<string[], boolean>).href,
          )
            ? 'a' // render 'a' tag if 'href' is present
            : isNotUndefined(
                (action as RelativeLinkActionKind<string[], boolean>).to,
              )
            ? RouterLink // render 'Link' if 'to' is present
            : undefined; // use default

          if (
            isNull(RouterLink) &&
            isNotUndefined(
              (action as RelativeLinkActionKind<string[], boolean>).to,
            )
          ) {
            return null;
          }

          return (
            <li key={action.name}>
              <DropdownLink
                as={domTag}
                href={
                  (action as AbsoluteLinkActionKind<string[], boolean>).href
                }
                name={action.name}
                to={(action as RelativeLinkActionKind<string[], boolean>).to}
                onClick={action.onClick}
              >
                {action.label}
              </DropdownLink>
            </li>
          );
        })}
      </List>
    </BaseDropdown>
  );
};

Dropdown.propTypes = {
  actions: PropTypes.arrayOf(ActionKindsPropType).isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  defaultIsOpen: PropTypes.bool,
  paneWidth: PropTypes.number,
  className: PropTypes.string,
  placement: PropTypes.oneOf(['bottom', 'bottom-start', 'bottom-end']),
};

export default React.memo(Dropdown);
