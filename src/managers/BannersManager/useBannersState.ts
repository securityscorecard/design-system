import { useReducer } from 'react';

import type { Action, Banner } from './types';
import { ACTIONS } from './enums';
import { InstanceId } from '../common/types';
import { addInstance, randomId, removeInstance } from '../common/utils';

const reducer = (state: Required<Banner>[], action: Action) => {
  switch (action.type) {
    case ACTIONS.addBanner:
      return addInstance<Banner>(state, action.payload);
    case ACTIONS.removeBanner:
      return removeInstance<Banner>(state, action.payload as string);
    default:
      return state;
  }
};

export const useBannersState = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const addBanner = (banner: Banner) => {
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
