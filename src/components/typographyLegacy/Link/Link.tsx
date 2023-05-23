import type { ComponentPropsWithRef } from 'react';
import type { LinkProps } from './Link.types';

import styled from 'styled-components';
import { isNotNull, isNull } from 'ramda-adjunct';
import cls from 'classnames';

import { requireRouterLink } from '../../../utils/require-router-link';
import { LinkColors } from '../../_internal/BaseLink/BaseLink.enums';
import {
  LinkActiveStyles,
  LinkBaseStyles,
  LinkFocusStyles,
  LinkHoverStyles,
} from '../../_internal/BaseLink';
import { CLX_TYPOGRAPHY } from '../../../theme/constants';

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

const Link = ({
  children,
  color = LinkColors.primary,
  as = null,
  href = null,
  to = null,
  onClick,
  className,
  ...props
}: LinkProps & ComponentPropsWithRef<typeof LinkRoot>) => {
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
      className={cls(CLX_TYPOGRAPHY, className)}
      href={href}
      to={to}
      onClick={onClick}
      {...props}
    >
      {children}
    </LinkRoot>
  );
};

export default Link;
