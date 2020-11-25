import { MessageVariants } from './Message.enums';

export type Variants = typeof MessageVariants[keyof typeof MessageVariants];

export interface MessageProps {
  variant?: Variants;
}
