import type { ReactNode, Ref, RefAttributes } from 'react';
import { forwardRef } from 'react';
/**
 * Taken from https://www.totaltypescript.com/forwardref-with-generic-components
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export function forwardRefGenericComp<T, P = {}>(
  render: (props: P, ref: Ref<T>) => ReactNode,
): (props: P & RefAttributes<T>) => ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return forwardRef(render) as any;
}
