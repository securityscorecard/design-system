import { keys, values, zipObj } from 'ramda';

export const generateControl = <
  K extends string | number,
  V extends string | number,
  T,
>(
  type: T,
  options: Record<K, V>,
): {
  options: V[];
  control: { type: T; labels: Record<V, K> };
} => ({
  options: values(options),
  control: {
    type,
    labels: zipObj(values(options), keys(options)),
  },
});
