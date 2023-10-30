import type { FC } from 'react';
import type { UserAvatarProps, UserAvatarRootProps } from './UserAvatar.types';

import styled, { css } from 'styled-components';
import { any, pipe, take, toUpper, trim } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import PropTypes from 'prop-types';
import cls from 'classnames';

import { ButtonColors, ButtonVariants } from '../Button/Button.enums';
import {
  getColor,
  getFontFamily,
  getFontWeight,
  getRadii,
  getToken,
  pxToRem,
} from '../../utils/helpers';
import { UserAvatarSizes } from './UserAvatar.enums';
import { BaseButton } from '../_internal/BaseButton';
import { SpaceSizes } from '../../theme';
import { CLX_COMPONENT } from '../../theme/constants';

const smallAvatar = css`
  width: ${pipe(getToken('size-action-size-sm'), pxToRem)};
  height: ${pipe(getToken('size-action-size-sm'), pxToRem)};
`;
const mediumAvatar = css`
  width: ${pipe(getToken('size-action-size'), pxToRem)};
  height: ${pipe(getToken('size-action-size'), pxToRem)};
`;

const avatar = css`
  color: ${getColor('neutral.0')};
  background-color: ${getColor('primary.600')};
`;

const invertedAvatar = css`
  color: ${getColor('neutral.1000')};
  background-color: ${getColor('neutral.0')};
  &:hover {
    background-color: ${getColor('primary.50')};
    color: ${getColor('neutral.900')};
  }
  &:active {
    background-color: ${getColor('primary.200')};
    color: ${getColor('neutral.900')};
  }
`;

const avatarSizes = {
  [UserAvatarSizes.sm]: smallAvatar,
  [UserAvatarSizes.md]: mediumAvatar,
};
const userAvatarStyle = css<UserAvatarRootProps>`
  border-radius: ${getRadii('round')};
  font-family: ${getFontFamily('base')};
  font-weight: ${getFontWeight('regular')};
  line-height: 1;
  font-size: ${getToken('font-action-size')};
  ${({ $size }) => avatarSizes[$size]};
  ${({ $isInverted }) => ($isInverted ? invertedAvatar : avatar)}
`;

const RootUserAvatar = styled.div<UserAvatarRootProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${userAvatarStyle};
`;
const normalizeString = pipe(trim, take(2), toUpper);

const UserAvatar: FC<UserAvatarProps> = ({
  label,
  size = UserAvatarSizes.md,
  className,
  href,
  to,
  onClick,
  isInverted = false,
  ...props
}) =>
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
      {normalizeString(label)}
    </RootUserAvatar>
  ) : (
    <RootUserAvatar
      $isInverted={isInverted}
      $size={size}
      className={cls(CLX_COMPONENT, className)}
      {...props}
    >
      {normalizeString(label)}
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
