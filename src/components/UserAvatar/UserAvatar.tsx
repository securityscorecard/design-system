import type { UserAvatarProps, UserAvatarRootProps } from './UserAvatar.types';
import type { Ref } from 'react';

import styled, { css } from 'styled-components';
import { any, pipe, take, toUpper, trim } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import { forwardRef } from 'react';
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

const UserAvatar = forwardRef<
  HTMLButtonElement | HTMLDivElement,
  UserAvatarProps
>(
  (
    {
      label,
      size = UserAvatarSizes.md,
      className,
      href,
      to,
      onClick,
      isInverted = false,
      ...props
    },
    ref,
  ) =>
    any(isNotUndefined, [href, to, onClick]) ? (
      <RootUserAvatar
        ref={ref as Ref<HTMLButtonElement>}
        $isInverted={isInverted}
        $size={size}
        aria-label="User avatar"
        as={BaseButton}
        className={cls(CLX_COMPONENT, className)}
        color={ButtonColors.primary}
        href={href}
        to={to}
        variant={ButtonVariants.solid}
        onClick={onClick}
        {...props}
      >
        {normalizeString(label)}
      </RootUserAvatar>
    ) : (
      <RootUserAvatar
        ref={ref as Ref<HTMLDivElement>}
        $isInverted={isInverted}
        $size={size}
        className={cls(CLX_COMPONENT, className)}
        {...props}
      >
        {normalizeString(label)}
      </RootUserAvatar>
    ),
);

export default UserAvatar;
