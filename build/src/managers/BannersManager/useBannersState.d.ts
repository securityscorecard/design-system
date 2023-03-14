import type { Banner } from './types';
import { InstanceId } from '../common/types';
export declare const useBannersState: () => {
    state: Banner[];
    addBanner: (banner: Banner) => void;
    removeBanner: (id: InstanceId) => void;
};
