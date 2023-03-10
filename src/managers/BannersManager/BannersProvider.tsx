import type { ReactNode } from 'react';
import type { Banner, BannersContextProps } from './types';
import type { InstanceId } from '../common/types';

import { useMemo } from 'react';

import { useBannersState } from './useBannersState';
import { createCtx } from '../common/createCtx';
import { ACTIONS } from './enums';
import { useManagerEvents } from '../common/useManagerEvents';

const BannersContext = createCtx<BannersContextProps>(
  'banner-manager',
  '"useBanners" must be inside a "BannersProvider" with a value',
);

export const useBanners = BannersContext.useContext;
export const BannersProvider = ({ children }: { children: ReactNode }) => {
  const { state, addBanner, removeBanner } = useBannersState();

  const context = useMemo(
    () => ({
      instances: state,
      addBanner,
      removeBanner,
    }),
    [state, addBanner, removeBanner],
  );

  const listeners = {
    [ACTIONS.addBanner]: (e: { detail: Banner }) => {
      context.addBanner(e.detail);
    },
    [ACTIONS.removeBanner]: (e: { detail: InstanceId }) => {
      context.removeBanner(e.detail);
    },
  };

  useManagerEvents<typeof ACTIONS>(listeners);

  return (
    <BannersContext.Provider value={context}>
      {children}
    </BannersContext.Provider>
  );
};
BannersProvider.displayName = 'BannersProvider';
