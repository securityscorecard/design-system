import React from 'react';
import { OnHide, OnShow, RCPF } from 'react-cool-portal';
declare type UsePortal = (config?: {
    onShow?: OnShow;
    onHide?: OnHide;
    hasInternalShowHide?: boolean;
    defaultIsPortalVisible?: boolean;
}) => {
    togglePortal: RCPF;
    showPortal: RCPF;
    hidePortal: RCPF;
    isPortalVisible: boolean;
    Portal: React.FC;
};
export declare const usePortal: UsePortal;
export {};
