import type { MutableRefObject, Ref } from 'react';

import { forEach } from 'ramda';

const isMutableRefObject = <T>(thing: unknown): thing is MutableRefObject<T> =>
  (thing as MutableRefObject<T>) !== undefined;

export const mergeRefs = <T>(
  ...refs: Ref<T>[]
): null | Ref<T> | ((inst: T) => void) => {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 1) return filteredRefs[0];

  return (inst: T) => {
    forEach((ref: Ref<T>) => {
      if (typeof ref === 'function') {
        ref(inst);
      } else if (isMutableRefObject<T>(ref)) {
        // eslint-disable-next-line no-param-reassign
        ref.current = inst;
      }
    })(filteredRefs);
  };
};
