import React from 'react';
import styled, { css } from 'styled-components';
import { pipe, take, toUpper, trim } from 'ramda';
import PropTypes from 'prop-types';

import { ButtonColors, ButtonVariants } from '../Button/Button.enums';
import { UserAvatarProps } from './UserAvatar.types';
import {
  getButtonHeight,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getRadii,
  pxToRem,
} from '../../utils/helpers';
import { UserAvatarSizes } from './UserAvatar.enums';
import { BaseButton } from '../_internal/BaseButton';

const smallAvatar = css`
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
`;
const mediumAvatar = css`
  font-size: ${getFontSize('lg')};
  line-height: ${getLineHeight('lg')};
`;

const avatarSizes = {
  [UserAvatarSizes.sm]: smallAvatar,
  [UserAvatarSizes.md]: mediumAvatar,
};

// TODO: migrate purple Brand when we change button colors.
const StyledButton = styled(BaseButton)`
  border-radius: ${getRadii('round')};
  font-weight: ${getFontWeight('regular')};
  ${({ size }) => avatarSizes[size]};
  width: ${({ size, theme }) =>
    pipe(getButtonHeight(size), pxToRem)({ theme })};

  background-color: #6641f3;
  border-color: #6641f3;

  &:focus:not(:disabled),
  &:hover:not(:disabled),
  &:not([href]):not([tabindex]):not(:disabled):hover,
  &.hover,
  &.focus {
    background-color: #5737cf;
    border-color: #5737cf;
  }

  &:not(:disabled):active,
  &:not([href]):not([tabindex]):not(:disabled):active,
  &.active {
    background-color: #482ead;
    border-color: #482ead;
  }
`;
const normalizeString = pipe(trim, take(2), toUpper);

const UserAvatar: React.FC<UserAvatarProps> = ({
  label,
  size = UserAvatarSizes.md,
  ...props
}) => (
  <StyledButton
    color={ButtonColors.primary}
    size={size}
    variant={ButtonVariants.solid}
    {...props}
  >
    {normalizeString(label)}
  </StyledButton>
);

UserAvatar.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(UserAvatarSizes)),
};

export default UserAvatar;
