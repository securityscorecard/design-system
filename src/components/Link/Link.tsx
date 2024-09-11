import styled from 'styled-components';
import { isNotNull, isNull } from 'ramda-adjunct';
import cls from 'classnames';

import { requireRouterLink } from '../../utils/require-router-link';
import { LinkColors } from '../_internal/BaseLink/BaseLink.enums';
import { LinkProps } from './Link.types';
import {
  LinkActiveStyles,
  LinkBaseStyles,
  LinkHoverStyles,
} from '../_internal/BaseLink';
import { CLX_TYPOGRAPHY } from '../../theme/constants';

const LinkRoot = styled.a`
  ${LinkBaseStyles};

  &:hover {
    ${LinkHoverStyles};
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
}: LinkProps) => {
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
      style={{
        '--sscds-link-color':
          color === 'primary'
            ? 'var(--sscds-color-link-default)'
            : 'var(--sscds-color-neutral-13)',
        '--sscds-link-color-hover':
          color === 'primary'
            ? 'var(--sscds-color-link-hover)'
            : 'var(--sscds-color-neutral-12)',
        '--sscds-link-color-active':
          color === 'primary'
            ? 'var(--sscds-color-link-active)'
            : 'var(--sscds-color-neutral-13)',
        ...props.style,
      }}
    >
      {children}
    </LinkRoot>
  );
};

export default Link;
