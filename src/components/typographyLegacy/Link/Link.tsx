import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotNull, isNull } from 'ramda-adjunct';

import { requireRouterLink } from '../../../utils/require-router-link';
import { getFontWeight, getLinkStyle, getRadii } from '../../../utils';
import { LinkProps } from './Link.types';
import { LinkColors } from './Link.enums';

const StyledLink = styled.a`
  margin: 0;
  border: none;
  font-family: inherit;
  font-weight: ${getFontWeight('semibold')};
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;
  color: ${getLinkStyle('color')};

  &:hover,
  &:focus-visible {
    color: ${getLinkStyle('hoverColor')};
    text-decoration: ${getLinkStyle('decoration')};
  }

  &:active {
    color: ${getLinkStyle('activeColor')};
  }

  &:focus-visible {
    outline: 0;
    background-color: ${getLinkStyle('focusBgColor')};
    border-radius: ${getRadii('default')};
  }
`;

const Link: React.FC<LinkProps & React.ComponentProps<typeof StyledLink>> = ({
  children,
  color = LinkColors.primary,
  as = null,
  href = null,
  to = null,
  onClick,
  ...props
}) => {
  let RouterLink = null;
  if (isNull(as) && isNotNull(to)) {
    RouterLink = requireRouterLink();
  }

  const domTag =
    as ||
    (isNotNull(to)
      ? RouterLink // render 'Link' if 'to' is present
      : isNull(to) && isNull(href)
      ? 'button' // render 'button' if 'to' and 'href' is not present
      : undefined); // use default

  if (isNull(RouterLink) && isNull(domTag)) {
    return null;
  }

  return (
    <StyledLink
      as={domTag}
      color={color}
      href={href}
      to={to}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
    }),
  ]),
  color: PropTypes.oneOf(Object.values(LinkColors)),
  onClick: PropTypes.func,
};

export default Link;
