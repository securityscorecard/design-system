import { ACTIONS } from './enums';
import type { Banner } from './types';
import { createCustomEvent } from '../common/events';
import { InstanceId } from '../common/types';

export const addBanner = (banner: Required<Banner>) => {
  window.dispatchEvent(
    createCustomEvent<typeof ACTIONS, Banner>(ACTIONS.addBanner, banner),
  );
};
export const removeBanner = (id: InstanceId) => {
  window.dispatchEvent(
    createCustomEvent<typeof ACTIONS, InstanceId>(ACTIONS.removeBanner, id),
  );
};
