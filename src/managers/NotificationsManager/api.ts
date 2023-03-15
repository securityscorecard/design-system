import { createCustomEvent } from '../common/events';
import { ACTIONS, Notification } from './types';

export const removeNotification = (id: string) => {
  window.dispatchEvent(
    createCustomEvent<typeof ACTIONS, { id: string }>(
      ACTIONS.REMOVE_NOTIFICATION,
      {
        id,
      },
    ),
  );
};

export const addNotification = (notification: Notification) => {
  window.dispatchEvent(
    createCustomEvent<typeof ACTIONS, { notification: Notification }>(
      ACTIONS.ADD_NOTIFICATION,
      {
        notification,
      },
    ),
  );
  if (notification.autoDismiss || notification.autoDismiss === undefined) {
    setTimeout(() => removeNotification(notification.id), 6000);
  }
};
