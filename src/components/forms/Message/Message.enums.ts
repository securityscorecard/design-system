import { TextVariants } from '../../typography/Text/Text.enums';

// eslint-disable-next-line import/prefer-default-export
export const MessageVariants = {
  note: TextVariants.context,
  error: TextVariants.danger,
} as const;
