import React from 'react';
import { Variants } from '../../components/_internal/BaseToastBanner/BaseToastBanner.types';
export declare enum ACTIONS {
    ADD_NOTIFICATION = "ADD_NOTIFICATION",
    REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION"
}
export declare type NotificationActions = typeof ACTIONS[keyof typeof ACTIONS];
export interface Notification {
    id: string;
    variant?: Variants;
    content: React.ReactNode;
    autoDismiss?: boolean;
}
