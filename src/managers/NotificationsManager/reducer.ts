import type { Notification } from './types';

import { ACTIONS } from './types';

type NotificationAction =
  | {
      type: ACTIONS.ADD_NOTIFICATION;
      notification: Notification;
    }
  | { type: ACTIONS.REMOVE_NOTIFICATION; id: string }
  | { type: ACTIONS.UPDATE_NOTIFICATION; notification: Notification };

export const NotificationsProviderReducer = (
  // eslint-disable-next-line
  state: Notification[] = [],
  action: NotificationAction,
) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTIFICATION: {
      return [...state, action.notification];
    }
    case ACTIONS.UPDATE_NOTIFICATION: {
      return state.map((item) =>
        item.id === action.notification.id ? action.notification : item,
      );
    }
    case ACTIONS.REMOVE_NOTIFICATION: {
      return state.filter((item) => item.id !== action.id);
    }
    default:
      return state;
  }
};
