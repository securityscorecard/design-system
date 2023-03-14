import type { ValueOf } from './types';
export declare const useManagerEvents: <A extends Record<string, string>>(listeners: { [key in ValueOf<A>]: (e: CustomEvent) => void; }) => void;
