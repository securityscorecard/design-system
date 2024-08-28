import styled, { css } from 'styled-components';
import { any, pipe, take, toUpper, trim } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import PropTypes from 'prop-types';
import cls from 'classnames';

import { ButtonColors, ButtonVariants } from '../Button/Button.enums';
import type { UserAvatarProps, UserAvatarRootProps } from './UserAvatar.types';
import { getRadii, getToken, pxToRem } from '../../utils/helpers';
import { UserAvatarSizes } from './UserAvatar.enums';
import { BaseButton } from '../_internal/BaseButton';
import { SpaceSizes } from '../../theme';
import { CLX_COMPONENT } from '../../theme/constants';
import { Text } from '../Text';

const smallAvatar = css`
  width: ${pipe(getToken('size-action-size-sm'), pxToRem)};
  height: ${pipe(getToken('size-action-size-sm'), pxToRem)};
`;
const mediumAvatar = css`
  width: ${pipe(getToken('size-action-size'), pxToRem)};
  height: ${pipe(getToken('size-action-size'), pxToRem)};
`;

const avatar = css`
  background-color: var(--sscds-color-primary-9);
`;

const invertedAvatar = css`
  background-color: var(--sscds-color-neutral-0);
  &:hover {
    background-color: var(--sscds-color-primary-3);
  }
  &:active {
    background-color: var(--sscds-color-primary-6);
  }
`;

const avatarSizes = {
  [UserAvatarSizes.sm]: smallAvatar,
  [UserAvatarSizes.md]: mediumAvatar,
};
const userAvatarStyle = css<UserAvatarRootProps>`
  border-radius: ${getRadii('round')};
  ${({ $size }) => avatarSizes[$size]};
  ${({ $isInverted }) => ($isInverted ? invertedAvatar : avatar)};
`;

const RootUserAvatar = styled.div<UserAvatarRootProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${userAvatarStyle};
`;
const normalizeString = pipe(trim, take(2), toUpper);

const UserAvatar = ({
  label,
  size = UserAvatarSizes.md,
  className,
  href,
  to,
  onClick,
  isInverted = false,
  ...props
}: UserAvatarProps) =>
  any(isNotUndefined, [href, to, onClick]) ? (
    <RootUserAvatar
      $isInverted={isInverted}
      $size={size}
      aria-label="User avatar"
      as={BaseButton}
      className={cls(CLX_COMPONENT, className)}
      color={ButtonColors.primary}
      href={href}
      paddingSize={SpaceSizes.none}
      to={to}
      variant={ButtonVariants.solid}
      onClick={onClick}
      {...props}
    >
      <Text variant={isInverted ? 'default' : 'white'}>
        {normalizeString(label)}
      </Text>
    </RootUserAvatar>
  ) : (
    <RootUserAvatar
      $isInverted={isInverted}
      $size={size}
      className={cls(CLX_COMPONENT, className)}
      {...props}
    >
      <Text variant={isInverted ? 'default' : 'white'}>
        {normalizeString(label)}
      </Text>
    </RootUserAvatar>
  );

UserAvatar.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(UserAvatarSizes)),
  className: PropTypes.string,
  isInverted: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
    }),
  ]),
  onClick: PropTypes.func,
};

export default UserAvatar;
