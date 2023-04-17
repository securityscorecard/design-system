import { ACTIONS } from './enums';
import type { BannerInstance } from './types';
import { createCustomEvent } from '../common/events';
import { InstanceId } from '../common/types';

export const addBanner = (banner: Required<BannerInstance>) => {
  window.dispatchEvent(
    createCustomEvent<typeof ACTIONS, BannerInstance>(
      ACTIONS.addBanner,
      banner,
    ),
  );
};
export const removeBanner = (id: InstanceId) => {
  window.dispatchEvent(
    createCustomEvent<typeof ACTIONS, InstanceId>(ACTIONS.removeBanner, id),
  );
};
