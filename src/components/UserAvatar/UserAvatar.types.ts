import { UserAvatarSizes } from './UserAvatar.enums';

export type Sizes = typeof UserAvatarSizes[keyof typeof UserAvatarSizes];

export interface UserAvatarProps {
  /**
   * Used to render text elements inside the Avatar.
   * It Will render the first two characters of the string always.
   */
  label: string;
  /**
   * The size of the avatar
   */
  size?: Sizes;
  className?: string;
}
