import type { ComponentPropsWithRef } from 'react';
import type { LinkProps } from './Link.types';

import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { isNotNull, isNull } from 'ramda-adjunct';
import cls from 'classnames';

import { requireRouterLink } from '../../../utils/require-router-link';
import { LinkColors } from '../../_internal/BaseLink/BaseLink.enums';
import {
  LinkActiveStyles,
  LinkBaseStyles,
  LinkHoverStyles,
} from '../../_internal/BaseLink';
import { CLX_TYPOGRAPHY } from '../../../theme/constants';
import { DSContext } from '../../../theme/DSProvider/DSProvider';
import { getColor, getFontWeight, getToken } from '../../../utils';

const experimetalLink = css<Required<{ $color: LinkProps['color'] }>>`
  text-decoration: underline;
  font-weight: ${getFontWeight('regular')};

  &:hover {
    color: ${({ $color, theme }) =>
      $color === LinkColors.secondary
        ? getColor('neutral.700', { theme })
        : getToken(`color-action-link-primary-hover`, { theme })};
  }

  &:focus-visible {
    text-decoration: none;
  }
`;

const LinkRoot = styled.a`
  ${LinkBaseStyles};

  &:hover {
    ${LinkHoverStyles};
  }

  &:active {
    ${LinkActiveStyles};
  }

  ${({ $isExperimental }) => $isExperimental && experimetalLink}
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
  const { experimental } = useContext(DSContext);

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
      $isExperimental={experimental.accessibleLink}
    >
      {children}
    </LinkRoot>
  );
};

export default Link;
