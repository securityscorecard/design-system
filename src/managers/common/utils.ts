import { find, findIndex, propEq, remove, update } from 'ramda';

import type { InstanceId } from './types';

export const randomId = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

export const findInstance = <I extends Record<string, unknown>>(
  id: InstanceId,
  state: I[],
) => findIndex(propEq('id', id), state);

export const addInstance = <Instance extends { id?: InstanceId }>(
  state: Required<Instance>[],
  instance: Instance,
): Instance[] => {
  const isIdDuplicate = find<Required<Instance>>(propEq('id', instance.id))(
    state,
  );

  return isIdDuplicate ? state : [instance, ...state];
};

export const removeInstance = <Instance extends { id?: InstanceId }>(
  state: Required<Instance>[],
  id: InstanceId,
): Instance[] => {
  const index = findInstance<Required<Instance>>(id, state);
  return index === -1 ? state : remove<Required<Instance>>(index, 1, state);
};

export const updateInstance = <Instance extends { id: InstanceId }>(
  state: Required<Instance>[],
  instance: Instance,
): Instance[] => {
  const { id, ...rest } = instance;
  const index = findInstance<Required<Instance>>(id, state);
  return index === -1
    ? state
    : update<Required<Instance>>(index, { ...state[index], ...rest }, state);
};
