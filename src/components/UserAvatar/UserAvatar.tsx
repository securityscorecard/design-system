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
  &:focus {
    background-color: ${getColor('neutral.0')};
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

UserAvatar.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  className: PropTypes.string,
  href: PropTypes.string,
  /**
   * Used to inverse the colors of the avatar
   */
  isInverted: PropTypes.bool,
  /**
   * Used to render text elements inside the Avatar.
   * It Will render the first two characters of the string always.
   */
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  /**
   * The size of the avatar
   */
  size: PropTypes.oneOf(['md', 'sm']),
  to: PropTypes.oneOfType([
    PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    PropTypes.string,
  ]),
} as any;

export default UserAvatar;
