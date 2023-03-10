import type { Action, BannerInstance } from './types';
import type { InstanceId } from '../common/types';

import { useReducer } from 'react';

import { ACTIONS } from './enums';
import { addInstance, randomId, removeInstance } from '../common/utils';

const reducer = (state: Required<BannerInstance>[], action: Action) => {
  switch (action.type) {
    case ACTIONS.addBanner:
      return addInstance<BannerInstance>(state, action.payload);
    case ACTIONS.removeBanner:
      return removeInstance<BannerInstance>(state, action.payload as string);
    default:
      return state;
  }
};

export const useBannersState = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const addBanner = (banner: BannerInstance) => {
    dispatch({
      type: ACTIONS.addBanner,
      payload: {
        ...banner,
        id: banner.id || randomId(),
      },
    });
  };

  const removeBanner = (id: InstanceId) => {
    dispatch({
      type: ACTIONS.removeBanner,
      payload: id,
    });
  };

  return {
    state,
    addBanner,
    removeBanner,
  };
};
