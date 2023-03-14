import type { Instance, InstanceId, ManagerContext } from '../common/types';
import { ACTIONS } from './enums';
declare type BannerBody = {
    component: JSX.Element;
};
export declare type Banner = Instance<BannerBody>;
export declare type Action = {
    type: typeof ACTIONS.addBanner;
    payload: Banner;
} | {
    type: typeof ACTIONS.removeBanner;
    payload: InstanceId;
};
export declare type BannersContextProps = ManagerContext<Banner, {
    addBanner: (banner: Banner) => void;
    removeBanner: (id: InstanceId) => void;
}>;
export declare type BannersStackProps = {
    /**
     * Initial list of banners that will be created during mount of the component
     */
    initialState?: Banner[];
};
export {};
