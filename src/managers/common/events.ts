import type { ValueOf } from './types';

export const createCustomEvent = <
  T extends Record<string, string>,
  D = unknown,
>(
  type: ValueOf<T>,
  detail: D,
) => new CustomEvent(type, { detail });
