import type { Instance, InstanceId, ManagerContext } from '../common/types';
import { ACTIONS } from './enums';

type BannerBody = {
  component: JSX.Element;
};

export type Banner = Instance<BannerBody>;

export type Action =
  | { type: typeof ACTIONS.addBanner; payload: Banner }
  | { type: typeof ACTIONS.removeBanner; payload: InstanceId };

export type BannersContextProps = ManagerContext<
  Banner,
  {
    addBanner: (banner: Banner) => void;
    removeBanner: (id: InstanceId) => void;
  }
>;

export type BannersStackProps = {
  /**
   * Initial list of banners that will be created during mount of the component
   */
  initialState?: Banner[];
};
