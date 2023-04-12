import type { To } from 'history';

import { UserAvatarSizes } from './UserAvatar.enums';

export type UserAvatarSizes =
  typeof UserAvatarSizes[keyof typeof UserAvatarSizes];

export type UserAvatarRootProps = {
  $isInverted?: boolean;
  $size?: UserAvatarSizes;
};

export interface UserAvatarProps {
  /**
   * Used to render text elements inside the Avatar.
   * It Will render the first two characters of the string always.
   */
  label: string;
  /**
   * The size of the avatar
   */
  size?: UserAvatarRootProps['$size'];
  className?: string;
  /**
   * Used to inverse the colors of the avatar
   */
  isInverted?: UserAvatarRootProps['$isInverted'];
  href?: string;
  to?: To;
  onClick?: React.MouseEventHandler;
}
