import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotNull, isNull } from 'ramda-adjunct';
import cls from 'classnames';

import { requireRouterLink } from '../../../utils/require-router-link';
import { LinkColors } from '../../_internal/BaseLink/BaseLink.enums';
import { LinkProps } from './Link.types';
import {
  LinkActiveStyles,
  LinkBaseStyles,
  LinkFocusStyles,
  LinkHoverStyles,
} from '../../_internal/BaseLink';
import { CLX_COMPONENT } from '../../../theme/constants';

const LinkRoot = styled.a`
  ${LinkBaseStyles};

  &:hover {
    ${LinkHoverStyles};
  }

  &:focus-visible {
    ${LinkFocusStyles};
  }

  &:active {
    ${LinkActiveStyles};
  }
`;

const Link: React.FC<LinkProps & React.ComponentProps<typeof LinkRoot>> = ({
  children,
  color = LinkColors.primary,
  as = null,
  href = null,
  to = null,
  onClick,
  className,
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
    <LinkRoot
      $color={color}
      as={domTag}
      className={cls(CLX_COMPONENT, className)}
      href={href}
      to={to}
      onClick={onClick}
      {...props}
    >
      {children}
    </LinkRoot>
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
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Link;
