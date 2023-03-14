import type { ValueOf } from './types';
export declare const createCustomEvent: <T extends Record<string, string>, D = unknown>(type: ValueOf<T>, detail: D) => CustomEvent<D>;
