import type { ReactNode } from 'react';
import type { MessageVariants } from './Message.enums';

export type Variants = typeof MessageVariants[keyof typeof MessageVariants];

export interface BaseMessageProps {
  children: ReactNode;
}

export interface MessageProps extends BaseMessageProps {
  variant?: Variants;
}
