import type { BannerInstance } from './types';
import type { InstanceId } from '../common/types';

import { ACTIONS } from './enums';
import { createCustomEvent } from '../common/events';

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
