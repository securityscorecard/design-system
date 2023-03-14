import { ACTIONS, Notification } from './types';
declare type NotificationAction = {
    type: ACTIONS.ADD_NOTIFICATION;
    notification: Notification;
} | {
    type: ACTIONS.REMOVE_NOTIFICATION;
    id: string;
};
export declare const NotificationsProviderReducer: (state: Notification[], action: NotificationAction) => Notification[];
export {};
