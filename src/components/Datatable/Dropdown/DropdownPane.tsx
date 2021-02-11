import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined, isNull } from 'ramda-adjunct';

import {
  getBorderRadius,
  getColor,
  getDepth,
  getFontSize,
  pxToRem,
} from '../../../utils/helpers';
import { useOuterClick } from '../hooks/useOuterCallback';
import { DropdownLinkProps, DropdownPaneProps } from './DropdownPane.types';
import {
  AbsoluteLinkActionKind,
  ActionKindsPropType,
  RelativeLinkActionKind,
} from '../types/Action.types';
import { requireRouterLink } from '../../../utils/require-router-link';

export const StyledDropdownPane = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  min-width: ${pxToRem(140)};
  border: 1px solid ${getColor('graphiteB')};
  border-radius: ${getBorderRadius};
  background-color: ${getColor('graphite5H')};
  padding: ${pxToRem(8, 0)};
  z-index: ${getDepth('dropdown')};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DropdownLink = styled.button<DropdownLinkProps>`
  width: 100%;
  display: block;
  padding: ${pxToRem(0, 16)};
  height: ${pxToRem(24)};
  font-size: ${getFontSize('md')};
  line-height: ${pxToRem(24)};
  color: ${getColor('graphite4B')};
  cursor: pointer;

  &:hover {
    background: ${getColor('graphite3H')};
  }
`;

const DropdownPane: React.FC<DropdownPaneProps> = ({ actions, onClickOut }) => {
  const dropdownPaneRef = useOuterClick(onClickOut);

  return (
    <StyledDropdownPane ref={dropdownPaneRef}>
      <List>
        {actions.map((action) => {
          let RouterLink = null;
          if (isNotUndefined((action as RelativeLinkActionKind).to)) {
            RouterLink = requireRouterLink();
          }

          const domTag = isNotUndefined((action as AbsoluteLinkActionKind).href)
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
    </StyledDropdownPane>
  );
};

DropdownPane.propTypes = {
  actions: PropTypes.arrayOf(ActionKindsPropType).isRequired,
  onClickOut: PropTypes.func.isRequired,
};

export default DropdownPane;
