import React from 'react';
import type { BannersContextProps } from './types';
export declare const useBanners: () => BannersContextProps;
export declare const BannersProvider: {
    ({ children, }: {
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
};
