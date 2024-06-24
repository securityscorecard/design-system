import { ACTIONS, Notification } from './types';

type NotificationAction =
  | {
      type: ACTIONS.ADD_NOTIFICATION;
      notification: Notification;
    }
  | { type: ACTIONS.REMOVE_NOTIFICATION; id: string }
  | { type: ACTIONS.UPDATE_NOTIFICATION; notification: Notification };

export const NotificationsProviderReducer = (
  state: Notification[],
  action: NotificationAction,
) => {
  const reducerState = state ?? [];
  switch (action.type) {
    case ACTIONS.ADD_NOTIFICATION: {
      return [...reducerState, action.notification];
    }
    case ACTIONS.UPDATE_NOTIFICATION: {
      return reducerState.map((item) =>
        item.id === action.notification.id ? action.notification : item,
      );
    }
    case ACTIONS.REMOVE_NOTIFICATION: {
      return reducerState.filter((item) => item.id !== action.id);
    }
    default:
      return reducerState;
  }
};
