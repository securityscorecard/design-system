import { SignalKinds } from './Signal.enums';
export declare type Kinds = typeof SignalKinds[keyof typeof SignalKinds];
export interface SignalProps {
    kind: Kinds;
    size?: number;
    title?: string;
    className?: string;
}
