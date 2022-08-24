import React from 'react';
import styled, { css } from 'styled-components';
import { pipe, take, toUpper, trim } from 'ramda';
import PropTypes from 'prop-types';

import { ButtonColors, ButtonVariants } from '../Button/Button.enums';
import { UserAvatarProps } from './UserAvatar.types';
import { getRadii, getToken, pxToRem } from '../../utils/helpers';
import { UserAvatarSizes } from './UserAvatar.enums';
import { BaseButton } from '../_internal/BaseButton';
import { SpaceSizes } from '../../theme';

const smallAvatar = css`
  width: ${pipe(getToken('size-action-size-sm'), pxToRem)};
  height: ${pipe(getToken('size-action-size-sm'), pxToRem)};
`;
const mediumAvatar = css`
  width: ${pipe(getToken('size-action-size'), pxToRem)};
  height: ${pipe(getToken('size-action-size'), pxToRem)};
`;

const avatarSizes = {
  [UserAvatarSizes.sm]: smallAvatar,
  [UserAvatarSizes.md]: mediumAvatar,
};

const StyledButton = styled(BaseButton)`
  border-radius: ${getRadii('round')};
  ${({ size }) => avatarSizes[size]};
`;
const normalizeString = pipe(trim, take(2), toUpper);

const UserAvatar: React.FC<UserAvatarProps> = ({
  label,
  size = UserAvatarSizes.md,
  ...props
}) => (
  <StyledButton
    color={ButtonColors.primary}
    paddingSize={SpaceSizes.none}
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
