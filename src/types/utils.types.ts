import { ElementType } from 'react';

export type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object
    ? Subset<K[attr]>
    : K[attr] extends object | null
    ? Subset<K[attr]> | null
    : K[attr] extends object | null | undefined
    ? Subset<K[attr]> | null | undefined
    : K[attr];
};

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export type WithAsProp<Props> = Props & {
  as?: ElementType;
};

export type ReactComponentLike =
  | string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((props: any, context?: any) => any)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | (new (props: any, context?: any) => any);
