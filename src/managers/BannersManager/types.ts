import type { Instance, InstanceId, ManagerContext } from '../common/types';
import { ACTIONS } from './enums';

type BannerBody = {
  component: JSX.Element;
};

export type BannerInstance = Instance<BannerBody>;

export type Action =
  | { type: typeof ACTIONS.addBanner; payload: BannerInstance }
  | { type: typeof ACTIONS.removeBanner; payload: InstanceId };

export type BannersContextProps = ManagerContext<
  BannerInstance,
  {
    addBanner: (banner: BannerInstance) => void;
    removeBanner: (id: InstanceId) => void;
  }
>;

export type BannersStackProps = {
  /**
   * Initial list of banners that will be created during mount of the component
   */
  initialState?: BannerInstance[];
};
