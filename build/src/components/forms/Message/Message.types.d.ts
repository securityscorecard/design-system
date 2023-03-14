import { MessageVariants } from './Message.enums';
export declare type Variants = typeof MessageVariants[keyof typeof MessageVariants];
export interface MessageProps {
    variant?: Variants;
}
